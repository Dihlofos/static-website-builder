# Nuxt 3 Static Site Template

A static site template built with Nuxt 3, localized TypeScript data modules, and SCSS. Vue components are written in JavaScript.

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
│   ├── common/          # Shared localized data
│   │   ├── navigation/{ru,en}.ts
│   │   ├── site/{ru,en}.ts
│   │   └── ui/{ru,en}.ts
│   ├── sections/        # One folder per section, with a module per locale
│   │   ├── hero/{ru,en}.ts
│   │   ├── faq/{ru,en}.ts
│   │   └── footer/{ru,en}.ts
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

1. **Localized content** lives in one set per page and locale, such as `data/pages/index/{ru,en}.ts`. Shared localized data for site metadata, navigation, footer, and UI strings lives in `data/common/{ru,en}.ts`.
2. **Locale registry** in `data/locales.ts` statically imports every supported language set and is the single source for `SUPPORTED_LOCALES` and `DEFAULT_LOCALE`. Both language bundles are part of the app's static import graph; locale switching does not fetch files at runtime.
3. **Locale state** is created in `app/app.vue` with `provide/inject`; `useLocale()` exposes the reactive current locale and `setLocale()` to descendants. `useLocaleData()` selects the registered data for the active locale. Russian (`ru`) is the default; changing language is not persisted across reloads.
4. **Data consumers** are the page and layout boundaries. They pass the selected page/common data to display components as props; display components do not import locale files or select a language. `data/pages/index.json` is shared and does not control the current `HeroSection` → `Faq` render order.
5. **Build** (`npm run generate`) produces a fully static site, then `scripts/format-html.js` beautifies the output HTML.

## Adding a New Section

1. **Add data for both locales** — add a `gallery` object with the same shape to `data/pages/index/ru.ts` and `data/pages/index/en.ts`. Translate text values and keep IDs, links, and shared asset paths consistent.
2. **Create a section component** — `app/components/sections/GallerySection.vue`, with props matching the data object.
3. **Add images** — place files in `app/public/images/gallery/`; store their public-root paths (for example, `/images/gallery/photo.jpg`) in the page data.
4. **Connect the section to the page** — get the active page set with `useLocaleData()` in `app/pages/index.vue` and pass the selected `gallery` object to `<GallerySection />`.
5. Keep the page's section list language-independent. The current home page renders sections directly in `app/pages/index.vue`; `data/pages/index.json` is not currently used to build that page.

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
