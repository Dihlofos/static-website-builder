import { readFile } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const errors = []
const localePairs = [
  { name: 'common', ru: join(projectRoot, 'data/common/ru.ts'), en: join(projectRoot, 'data/common/en.ts') },
  { name: 'pages.index', ru: join(projectRoot, 'data/pages/index/ru.ts'), en: join(projectRoot, 'data/pages/index/en.ts') },
]

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

async function readLocaleFile(filePath, setName, locale) {
  let sourceText
  try {
    sourceText = await readFile(filePath, 'utf8')
  } catch (error) {
    if (error.code === 'ENOENT') {
      errors.push(`${setName}.${locale}: required file ${relative(projectRoot, filePath)} is missing`)
    } else {
      errors.push(`${setName}.${locale}: unable to read ${relative(projectRoot, filePath)}: ${error.message}`)
    }
    return undefined
  }

  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  if (sourceFile.parseDiagnostics.length > 0) {
    for (const diagnostic of sourceFile.parseDiagnostics) {
      const position = sourceFile.getLineAndCharacterOfPosition(diagnostic.start ?? 0)
      errors.push(`${setName}.${locale} ${relative(projectRoot, filePath)}:${position.line + 1}:${position.character + 1}: ${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`)
    }
    return undefined
  }

  const defaultExport = sourceFile.statements.find((statement) =>
    ts.isExportAssignment(statement) && !statement.isExportEquals,
  )

  if (!defaultExport || !ts.isObjectLiteralExpression(defaultExport.expression)) {
    errors.push(`${setName}.${locale} ${relative(projectRoot, filePath)}: expected a default-exported object literal`)
    return undefined
  }

  return defaultExport.expression
}

function collectProperties(node, setName, locale, keyPath) {
  const properties = new Map()
  for (const property of node.properties) {
    if (!ts.isPropertyAssignment(property)) {
      errors.push(`${setName}.${locale}.${keyPath || '<root>'}: unsupported object member`)
      continue
    }

    const name = propertyName(property.name)
    if (name === undefined) {
      errors.push(`${setName}.${locale}.${keyPath || '<root>'}: unsupported computed key`)
      continue
    }
    properties.set(name, property.initializer)
  }
  return properties
}

function compareNodes(referenceNode, localeNode, setName, keyPath) {
  const referenceShape = describeNode(referenceNode)
  const localeShape = describeNode(localeNode)

  if (referenceShape.kind !== localeShape.kind) {
    errors.push(`${setName}.${keyPath || '<root>'}: incompatible structure (ru: ${referenceShape.kind}, en: ${localeShape.kind})`)
    return
  }

  if (referenceShape.kind === 'object') {
    const referenceProperties = collectProperties(referenceShape.node, setName, 'ru', keyPath)
    const localeProperties = collectProperties(localeShape.node, setName, 'en', keyPath)
    const keys = [...new Set([...referenceProperties.keys(), ...localeProperties.keys()])].sort()

    for (const key of keys) {
      const nestedPath = keyPath ? `${keyPath}.${key}` : key
      if (!referenceProperties.has(key)) {
        errors.push(`${setName}.${nestedPath}: missing in en`)
      } else if (!localeProperties.has(key)) {
        errors.push(`${setName}.${nestedPath}: missing in ru`)
      } else {
        compareNodes(referenceProperties.get(key), localeProperties.get(key), setName, nestedPath)
      }
    }
    return
  }

  if (referenceShape.kind === 'array') {
    const referenceElements = referenceShape.node.elements
    const localeElements = localeShape.node.elements
    if (referenceElements.length !== localeElements.length) {
      errors.push(`${setName}.${keyPath || '<root>'}: different array lengths (ru: ${referenceElements.length}, en: ${localeElements.length})`)
    }
    for (let index = 0; index < Math.min(referenceElements.length, localeElements.length); index++) {
      compareNodes(referenceElements[index], localeElements[index], setName, `${keyPath}[${index}]`)
    }
  }
}

for (const { name, ru: ruPath, en: enPath } of localePairs) {
  const [ruObject, enObject] = await Promise.all([
    readLocaleFile(ruPath, name, 'ru'),
    readLocaleFile(enPath, name, 'en'),
  ])
  if (ruObject && enObject) compareNodes(ruObject, enObject, name, '')
}

if (errors.length > 0) {
  console.error(`i18n validation failed with ${errors.length} error(s):`)
  for (const error of errors) console.error(`- ${error}`)
  process.exitCode = 1
} else {
  console.log('i18n validation passed')
}
