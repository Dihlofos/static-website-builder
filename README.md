# Nuxt 3 Static Site Template

A static site template built with Nuxt 3, Russian TypeScript content modules, and SCSS. Vue components are written in JavaScript. The locale infrastructure is retained for projects that need to add another language.

## Quick Start

```bash
npm install
npm run dev      # Development with hot-reload
npm run generate # Static build → ./app/.output/public + HTML formatting
npm run preview  # Preview the built site
npm run clean    # Clean Nuxt cache
```

## Structure

```
├── app/                 # Nuxt 3 application (configured as srcDir)
│   ├── assets/
│   │   ├── fonts/       # WOFF / WOFF2 font files
│   │   └── scss/        # SCSS system
│   ├── components/
│   │   ├── sections/    # Page sections (HeroSection, …)
│   │   ├── shared/      # Shared components (Header, Navigation, Faq, Footer)
│   │   └── ui/          # UI primitives (Container, Button, Image)
│   ├── composables/
│   │   └── useLocale.js # Reactive language state shared with provide/inject
│   ├── layouts/         # Nuxt layouts
│   ├── pages/           # Route pages
│   ├── public/          # Static files served from the site root (/)
│   │   ├── docs/        # Documents (PDFs, etc.)
│   │   └── images/      # Images organised by section / component
│   │       ├── favicons/
│   │       └── faq/     # Images used by the FAQ section
│   ├── utils/           # Utility functions
│   ├── app.vue          # Entry point (locale provider and global metadata)
│   └── nuxt.config.js   # Nuxt configuration
├── data/
│   ├── common/          # Shared site data (Russian)
│   ├── pages/           # Page content, one module per locale
│   └── pages/           # Shared page composition (index.json; not localized)
├── scripts/             # Build scripts
│   └── format-html.js   # HTML beautifier run after `npm run generate`
├── .claude/             # Claude Code configuration
├── package.json
└── README.md
```

### SCSS Auto-imports

`_variables.scss`, `_mixins.scss`, and `_breakpoints.scss` are automatically injected into every component via the Nuxt config. You do **not** need to `@use` them manually.

## How It Works

1. **Content** lives in Russian modules such as `data/pages/index/ru.ts` and `data/common/ru.ts`.
2. **Locale registry** in `data/locales.ts` imports supported language data and defines `SUPPORTED_LOCALES` and `DEFAULT_LOCALE`. Russian (`ru`) is the only configured language by default.
3. **Locale state** is created in `app/app.vue` with `provide/inject`; `useLocale()` and `useLocaleData()` retain the reactive language selection infrastructure for adding another locale.
4. **Data consumers** are the page and layout boundaries. They pass the selected page/common data to display components as props; display components do not import locale files or select a language. `data/pages/index.json` is shared and does not control the current `HeroSection` → `Faq` render order.
5. **Build** (`npm run generate`) produces a fully static site, then `scripts/format-html.js` beautifies the output HTML.

## Adding a New Section

1. **Add data** — add a `gallery` object to `data/pages/index/ru.ts`.
2. **Create a section component** — `app/components/sections/GallerySection.vue`, with props matching the data object.
3. **Add images** — place files in `app/public/images/gallery/`; store their public-root paths (for example, `/images/gallery/photo.jpg`) in the page data.
4. **Connect the section to the page** — get the active page set with `useLocaleData()` in `app/pages/index.vue` and pass the selected `gallery` object to `<GallerySection />`.
5. Keep the page's section list language-independent. The current home page renders sections directly in `app/pages/index.vue`; `data/pages/index.json` is not currently used to build that page.

### Adding Another Language

Follow [the translation setup guide](docs/adding-translations.md) to add dictionaries, enable the language switcher, and run validation before development or generation.

### Image Handling

- Put static images in `app/public/images/<section>/`. Files in Nuxt's `public` directory are referenced from the site root, so data should contain paths such as `/images/faq/decor-left.svg` — not filesystem paths such as `app/public/images/faq/decor-left.svg`.
- Keep paths in both locale modules when the image is shared between languages. Store a different path per locale only when the design actually uses different images.
- Use the project `<Image />` component for images in Vue templates (including SVGs). For example:

```vue
<Image :src="images.decorLeft" alt="" width="1075" height="1090" />
```

`<Image />` renders a regular image for SVGs and adds a WebP `<source>` with a fallback for supported raster formats. Do not use a raw `<img>` in a template.

## WebP Image Optimization

Изображения `.png` и `.jpg` в `app/public/images/` автоматически конвертируются в `.webp` при каждой сборке. Для подключения оптимизированных изображений используется компонент `<Image>`, который рендерит `<picture>` с WebP-источником и фоллбеком.

### Как это работает

1. **Сборка** (`nuxt dev` / `nuxt generate`) — модуль `webp-converter` проходит по `app/public/images/`, находит `.png`/`.jpg` и создаёт рядом `.webp`-копии через `sharp`
2. **Повторные сборки** — проверяется `mtime`: если `.webp` свежее оригинала, конвертация пропускается
3. **Чистка** — `.webp` без соответствующего оригинала автоматически удаляются

### Компонент `<Image>`

Заменяет стандартный `<img>` там, где нужна WebP-поддержка:

```vue
<template>
  <Image src="/images/team/photo.jpg" alt="Фото команды" width="800" height="600" />
</template>
```

На выходе:

```html
<picture>
  <source srcset="/images/team/photo.webp" type="image/webp" />
  <img src="/images/team/photo.jpg" alt="Фото команды" width="800" height="600" loading="lazy" decoding="async" />
</picture>
```

**Пропсы:**

| Проп | Тип | По умолчанию | Описание |
|------|-----|-------------|----------|
| `src` | `string` | — | Путь к изображению (обязательный) |
| `alt` | `string` | `''` | Alt-текст |
| `width` | `number` | — | Ширина |
| `height` | `number` | — | Высота |
| `loading` | `string` | `'lazy'` | `lazy` или `eager` |
| `fetchpriority` | `string` | — | `high` для LCP-изображений |
| `decoding` | `string` | `'async'` | `async`, `sync` или `auto` |
| `class` | `string` | — | CSS-класс на `<img>` |
| `imgAttrs` | `object` | `{}` | Дополнительные атрибуты на `<img>` |

**Edge cases:**

- **SVG / GIF / ICO** — рендерятся как обычный `<img>` без `<picture>`
- **Внешние URL** (`https://...`, `data:...`) — без `<picture>`
- **Query-параметры** (`photo.png?v=2`) — расширение определяется корректно, параметры сохраняются
- **Hash-фрагменты** (`photo.png#section`) — хэш отбрасывается

### Конфигурация модуля

В `nuxt.config.js` можно переопределить параметры:

```js
export default defineNuxtConfig({
  modules: ['./modules/webp-converter'],
  webp: {
    quality: 90,        // качество WebP (0–100), по умолчанию 85
    cleanOrphans: true, // удалять осиротевшие .webp
    skipInDev: false,   // отключить конвертацию в dev-режиме
  },
  // ...
})
```

### Добавление нового изображения

1. Положи файл в `app/public/images/<раздел>/` (например, `photo.jpg`)
2. При сборке `.webp` появится рядом автоматически
3. Используй в шаблоне: `<Image src="/images/<раздел>/photo.jpg" alt="..." />`

> **Важно:** Используйте `<Image />` для всех изображений, включая SVG-иконки и декоративные элементы. Компонент сам выводит обычный `<img>` для SVG и добавляет WebP-источник для поддерживаемых растровых форматов.

## Dependencies

| Package | Purpose |
|---------|---------|
| Nuxt 3 | Framework (SSG mode) |
| sass | SCSS compilation |
| js-beautify | HTML formatting after build |
| serve | Local preview of the built site |
| sharp | WebP image conversion during build |
