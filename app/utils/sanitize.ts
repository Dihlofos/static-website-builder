/**
 * Безопасно очищает текст от HTML-тегов, сохраняя HTML-сущности (&nbsp;, &mdash; и т.д.).
 *
 * На сервере (prerender) и до загрузки DOMPurify — удаляет теги через regex.
 * На клиенте после загрузки DOMPurify — использует библиотеку для строгой
 * проверки: пропускает только сущности, все теги и атрибуты удаляются.
 */

let purify = null

// На клиенте асинхронно подгружаем DOMPurify (на сервере эта ветка tree-shake'ится)
if (import.meta.client) {
  import('dompurify').then((m) => {
    purify = m.default
  }).catch(() => {})
}

/**
 * @param {string} text — сырой текст из JSON (может содержать &nbsp; и т.д.)
 * @returns {string} — текст без HTML-тегов, сущности сохранены
 *
 * Настройка строгая: ALLOWED_TAGS: [], ALLOWED_ATTR: [] — не пропускает
 * вообще ничего, кроме текста и HTML-сущностей.
 */
export function sanitizeText(text) {
  if (!text || typeof text !== 'string') return ''

  if (purify) {
    return purify.sanitize(text, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] })
  }

  // Сервер / до загрузки DOMPurify — удаляем все теги, сущности остаются
  return text.replace(/<[^>]+>/g, '')
}
