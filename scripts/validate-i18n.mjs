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
  const files = new Set(entries.filter((entry) => entry.isFile()).map((entry) => entry.name))
  const hasLocaleFile = files.has('ru.ts') || files.has('en.ts')
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

function compareNodes(ruNode, enNode, keyPath, ruPath, enPath) {
  const ruShape = describeNode(ruNode)
  const enShape = describeNode(enNode)

  if (ruShape.kind !== enShape.kind) {
    errors.push(`${relative(projectRoot, ruPath)} ↔ ${relative(projectRoot, enPath)}: ${keyPath || '<root>'} has incompatible structure (ru: ${ruShape.kind}, en: ${enShape.kind})`)
    return
  }

  if (ruShape.kind === 'object') {
    const ruProperties = new Map()
    const enProperties = new Map()

    for (const property of ruShape.node.properties) {
      if (!ts.isPropertyAssignment(property)) {
        errors.push(`${relative(projectRoot, ruPath)}: unsupported object member at ${keyPath || '<root>'}`)
        continue
      }
      const name = propertyName(property.name)
      if (name === undefined) {
        errors.push(`${relative(projectRoot, ruPath)}: unsupported computed key at ${keyPath || '<root>'}`)
        continue
      }
      ruProperties.set(name, property.initializer)
    }

    for (const property of enShape.node.properties) {
      if (!ts.isPropertyAssignment(property)) {
        errors.push(`${relative(projectRoot, enPath)}: unsupported object member at ${keyPath || '<root>'}`)
        continue
      }
      const name = propertyName(property.name)
      if (name === undefined) {
        errors.push(`${relative(projectRoot, enPath)}: unsupported computed key at ${keyPath || '<root>'}`)
        continue
      }
      enProperties.set(name, property.initializer)
    }

    const keys = [...new Set([...ruProperties.keys(), ...enProperties.keys()])].sort()
    for (const key of keys) {
      const nestedPath = keyPath ? `${keyPath}.${key}` : key
      if (!ruProperties.has(key)) {
        errors.push(`${relative(projectRoot, ruPath)} ↔ ${relative(projectRoot, enPath)}: ${nestedPath} is missing in ru`)
      } else if (!enProperties.has(key)) {
        errors.push(`${relative(projectRoot, ruPath)} ↔ ${relative(projectRoot, enPath)}: ${nestedPath} is missing in en`)
      } else {
        compareNodes(ruProperties.get(key), enProperties.get(key), nestedPath, ruPath, enPath)
      }
    }
    return
  }

  if (ruShape.kind === 'array') {
    const ruElements = ruShape.node.elements
    const enElements = enShape.node.elements
    if (ruElements.length !== enElements.length) {
      errors.push(`${relative(projectRoot, ruPath)} ↔ ${relative(projectRoot, enPath)}: ${keyPath || '<root>'} has different array lengths (ru: ${ruElements.length}, en: ${enElements.length})`)
    }
    for (let index = 0; index < Math.min(ruElements.length, enElements.length); index++) {
      compareNodes(ruElements[index], enElements[index], `${keyPath}[${index}]`, ruPath, enPath)
    }
  }
}

for (const localeDirectory of localeDirectories) {
  const root = join(dataRoot, localeDirectory)
  const directories = await findLocaleDirectories(root)

  for (const directory of directories) {
    const ruPath = join(directory, 'ru.ts')
    const enPath = join(directory, 'en.ts')
    const entries = await readdir(directory)
    const hasRu = entries.includes('ru.ts')
    const hasEn = entries.includes('en.ts')

    if (!hasRu) errors.push(`${relative(projectRoot, ruPath)} is missing`)
    if (!hasEn) errors.push(`${relative(projectRoot, enPath)} is missing`)
    if (!hasRu || !hasEn) continue

    const [ruObject, enObject] = await Promise.all([readLocaleFile(ruPath), readLocaleFile(enPath)])
    if (ruObject && enObject) compareNodes(ruObject, enObject, '', ruPath, enPath)
  }
}

if (errors.length > 0) {
  console.error(`i18n validation failed with ${errors.length} error(s):`)
  for (const error of errors) console.error(`- ${error}`)
  process.exitCode = 1
} else {
  console.log('i18n validation passed')
}
