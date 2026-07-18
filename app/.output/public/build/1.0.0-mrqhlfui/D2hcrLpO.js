const type = "features";
const heading = "Наши преимущества";
const subtitle = "Почему стоит выбрать нас";
const items = [{ "icon": "zap", "title": "Молниеносная скорость", "text": "Статическая генерация страниц для максимальной производительности." }, { "icon": "shield", "title": "Надёжность", "text": "Отказоустойчивая архитектура с гарантированной доступностью." }, { "icon": "code", "title": "Чистый код", "text": "Vue 3 компоненты с SCSS — поддерживаемость на высоте." }, { "icon": "smartphone", "title": "Адаптивность", "text": "Идеально выглядит на всех устройствах — от телефона до 4K." }, { "icon": "search", "title": "SEO-оптимизация", "text": "Встроенные мета-теги и семантическая вёрстка." }, { "icon": "tool", "title": "Простая кастомизация", "text": "Меняйте данные в JSON — сайт обновляется автоматически." }];
const features = {
  type,
  heading,
  subtitle,
  items
};
export {
  features as default,
  heading,
  items,
  subtitle,
  type
};
