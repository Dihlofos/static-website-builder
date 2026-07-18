# Nuxt 3 Static Site Template

Статический сайт на Nuxt 3 с JSON-данными, SCSS и нулём TypeScript.

## Быстрый старт

```bash
npm install
npm run dev      # Режим разработки с hot-reload
npm run generate # Сборка статического сайта в ./app/dist/
npm run preview  # Просмотр готового сайта
```

## Структура

```
├── app/               # Nuxt 3 application
│   ├── components/    # Компоненты (ui/, shared/, sections/)
│   ├── layouts/       # Layouts
│   ├── pages/         # Страницы
│   ├── assets/scss/   # SCSS система
│   ├── app.vue        # Точка входа
│   └── nuxt.config.js # Конфигурация
├── assets/scss/       # SCSS переменные, миксины, reset
├── data/              # JSON данные
│   ├── site.json      # Метаданные сайта
│   ├── navigation.json
│   ├── sections/      # Данные секций
│   └── pages/         # Сборка страниц
├── public/            # Статические файлы
├── package.json
└── README.md
```

## Добавление новой секции

1. Создать `data/sections/gallery.json`
2. Создать `app/components/sections/GallerySection.vue`
3. Подключить в `app/pages/index.vue`
4. Добавить `"gallery"` в `data/pages/index.json`
