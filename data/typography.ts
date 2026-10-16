type Locale = 'ru' | 'en'

const NO_BREAK_WORDS: Record<Locale, ReadonlySet<string>> = {
  ru: new Set([
    // Предлоги
    'без', 'в', 'во', 'для', 'до', 'за', 'из', 'к', 'ко', 'на', 'над', 'о', 'об', 'обо',
    'от', 'по', 'под', 'при', 'про', 'с', 'со', 'у',
    // Союзы
    'а', 'да', 'если', 'и', 'или', 'как', 'когда', 'либо', 'но', 'пока', 'чем', 'что',
    'чтобы', 'хотя',
    // Частицы, которые также не должны оставаться в конце строки
    'бы', 'же', 'ли', 'не', 'ни',
  ]),
  en: new Set([
    // Prepositions
    'as', 'at', 'by', 'for', 'from', 'in', 'into', 'of', 'on', 'onto', 'per', 'to', 'up',
    'via', 'with',
    // Conjunctions
    'and', 'but', 'if', 'nor', 'or', 'so', 'than', 'that', 'when', 'while', 'yet',
    // Articles
    'a', 'an', 'the',
  ]),
}

const NON_TEXT_KEYS = new Set([
  'autocomplete',
  'href',
  'id',
  'inputmode',
  'link',
  'name',
  'src',
  'type',
  'url',
  'variant',
])

const SPACES_BEFORE_TEXT = /[ \t]+(?=\S)/g
const WORD_AT_END = /\p{L}+$/u
const NON_BREAKING_SPACE = '\u00A0'

export function preventHangingWords(text: string, locale: Locale) {
  const words = NO_BREAK_WORDS[locale]

  return text.replace(SPACES_BEFORE_TEXT, (spaces, offset: number) => {
    const word = text.slice(0, offset).match(WORD_AT_END)?.[0]

    return word && words.has(word.toLocaleLowerCase(locale))
      ? NON_BREAKING_SPACE
      : spaces
  })
}

export function applyTypography<T>(value: T, locale: Locale, key = ''): T {
  if (typeof value === 'string') {
    return (NON_TEXT_KEYS.has(key) ? value : preventHangingWords(value, locale)) as T
  }

  if (Array.isArray(value)) {
    return value.map(item => applyTypography(item, locale, key)) as T
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([nestedKey, nestedValue]) => [
        nestedKey,
        applyTypography(nestedValue, locale, nestedKey),
      ]),
    ) as T
  }

  return value
}
