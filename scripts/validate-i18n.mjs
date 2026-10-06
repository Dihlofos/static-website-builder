import { readdir, readFile } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const dataRoot = join(projectRoot, 'data')
const localeDirectories = ['sections', 'common']
const errors = []

async function findLocaleDirectories(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const hasLocaleFile = entries.some((entry) => entry.isFile() && entry.name.endsWith('.ts'))
  const directories = hasLocaleFile ? [directory] : []

  for (const entry of entries) {
    if (entry.isDirectory()) {
      directories.push(...await findLocaleDirectories(join(directory, entry.name)))
    }
  }

  return directories
}

function propertyName(property) {
  if (ts.isIdentifier(property) || ts.isStringLiteral(property) || ts.isNumericLiteral(property)) {
    return property.text
  }

  return undefined
}

function describeNode(node) {
  if (ts.isObjectLiteralExpression(node)) return { kind: 'object', node }
  if (ts.isArrayLiteralExpression(node)) return { kind: 'array', node }
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return { kind: 'string' }
  if (ts.isNumericLiteral(node)) return { kind: 'number' }
  if (node.kind === ts.SyntaxKind.TrueKeyword || node.kind === ts.SyntaxKind.FalseKeyword) return { kind: 'boolean' }
  if (node.kind === ts.SyntaxKind.NullKeyword) return { kind: 'null' }
  return { kind: 'other' }
}

async function readLocaleFile(filePath) {
  const sourceText = await readFile(filePath, 'utf8')
  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)

  if (sourceFile.parseDiagnostics.length > 0) {
    for (const diagnostic of sourceFile.parseDiagnostics) {
      const position = sourceFile.getLineAndCharacterOfPosition(diagnostic.start ?? 0)
      errors.push(`${relative(projectRoot, filePath)}:${position.line + 1}:${position.character + 1}: ${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`)
    }
    return undefined
  }

  const defaultExport = sourceFile.statements.find((statement) =>
    ts.isExportAssignment(statement) && !statement.isExportEquals,
  )

  if (!defaultExport || !ts.isObjectLiteralExpression(defaultExport.expression)) {
    errors.push(`${relative(projectRoot, filePath)}: expected a default-exported object literal`)
    return undefined
  }

  return defaultExport.expression
}

function compareNodes(referenceNode, localeNode, keyPath, referencePath, localePath, referenceLocale, locale) {
  const referenceShape = describeNode(referenceNode)
  const localeShape = describeNode(localeNode)

  if (referenceShape.kind !== localeShape.kind) {
    errors.push(`${relative(projectRoot, referencePath)} ↔ ${relative(projectRoot, localePath)}: ${keyPath || '<root>'} has incompatible structure (${referenceLocale}: ${referenceShape.kind}, ${locale}: ${localeShape.kind})`)
    return
  }

  if (referenceShape.kind === 'object') {
    const referenceProperties = new Map()
    const localeProperties = new Map()

    for (const property of referenceShape.node.properties) {
      if (!ts.isPropertyAssignment(property)) {
        errors.push(`${relative(projectRoot, referencePath)}: unsupported object member at ${keyPath || '<root>'}`)
        continue
      }
      const name = propertyName(property.name)
      if (name === undefined) {
        errors.push(`${relative(projectRoot, referencePath)}: unsupported computed key at ${keyPath || '<root>'}`)
        continue
      }
      referenceProperties.set(name, property.initializer)
    }

    for (const property of localeShape.node.properties) {
      if (!ts.isPropertyAssignment(property)) {
        errors.push(`${relative(projectRoot, localePath)}: unsupported object member at ${keyPath || '<root>'}`)
        continue
      }
      const name = propertyName(property.name)
      if (name === undefined) {
        errors.push(`${relative(projectRoot, localePath)}: unsupported computed key at ${keyPath || '<root>'}`)
        continue
      }
      localeProperties.set(name, property.initializer)
    }

    const keys = [...new Set([...referenceProperties.keys(), ...localeProperties.keys()])].sort()
    for (const key of keys) {
      const nestedPath = keyPath ? `${keyPath}.${key}` : key
      if (!referenceProperties.has(key)) {
        errors.push(`${relative(projectRoot, referencePath)} ↔ ${relative(projectRoot, localePath)}: ${nestedPath} is missing in ${referenceLocale}`)
      } else if (!localeProperties.has(key)) {
        errors.push(`${relative(projectRoot, referencePath)} ↔ ${relative(projectRoot, localePath)}: ${nestedPath} is missing in ${locale}`)
      } else {
        compareNodes(referenceProperties.get(key), localeProperties.get(key), nestedPath, referencePath, localePath, referenceLocale, locale)
      }
    }
    return
  }

  if (referenceShape.kind === 'array') {
    const referenceElements = referenceShape.node.elements
    const localeElements = localeShape.node.elements
    if (referenceElements.length !== localeElements.length) {
      errors.push(`${relative(projectRoot, referencePath)} ↔ ${relative(projectRoot, localePath)}: ${keyPath || '<root>'} has different array lengths (${referenceLocale}: ${referenceElements.length}, ${locale}: ${localeElements.length})`)
    }
    for (let index = 0; index < Math.min(referenceElements.length, localeElements.length); index++) {
      compareNodes(referenceElements[index], localeElements[index], `${keyPath}[${index}]`, referencePath, localePath, referenceLocale, locale)
    }
  }
}

for (const localeDirectory of localeDirectories) {
  const root = join(dataRoot, localeDirectory)
  const directories = (await findLocaleDirectories(root)).sort()
  const directoryFiles = await Promise.all(directories.map(async (directory) => ({
    directory,
    locales: (await readdir(directory)).filter((file) => file.endsWith('.ts')).sort(),
  })))
  const referenceLocales = directoryFiles.reduce((reference, current) =>
    current.locales.length > reference.length ? current.locales : reference,
  [],)

  for (const { directory, locales } of directoryFiles) {
    if (locales.length !== referenceLocales.length) {
      for (const localeFile of referenceLocales) {
        if (!locales.includes(localeFile)) {
          errors.push(`${relative(projectRoot, join(directory, localeFile))} is missing`)
        }
      }
      if (locales.length > referenceLocales.length) {
        errors.push(`${relative(projectRoot, directory)} has ${locales.length} locale files; expected ${referenceLocales.length}`)
      }
      continue
    }

    const missingLocales = referenceLocales.filter((localeFile) => !locales.includes(localeFile))
    if (missingLocales.length > 0) {
      for (const localeFile of missingLocales) {
        errors.push(`${relative(projectRoot, join(directory, localeFile))} is missing`)
      }
      continue
    }

    const referenceLocaleFile = locales[0]
    const referenceLocale = referenceLocaleFile.slice(0, -3)
    const referencePath = join(directory, referenceLocaleFile)
    const referenceObject = await readLocaleFile(referencePath)
    if (!referenceObject) continue

    for (const localeFile of locales.slice(1)) {
      const locale = localeFile.slice(0, -3)
      const localePath = join(directory, localeFile)
      const localeObject = await readLocaleFile(localePath)
      if (localeObject) compareNodes(referenceObject, localeObject, '', referencePath, localePath, referenceLocale, locale)
    }
  }
}

if (errors.length > 0) {
  console.error(`i18n validation failed with ${errors.length} error(s):`)
  for (const error of errors) console.error(`- ${error}`)
  process.exitCode = 1
} else {
  console.log('i18n validation passed')
}
