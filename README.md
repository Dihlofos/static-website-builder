# Nuxt 3 Static Site Template

A static site generator on Nuxt 3 with JSON-driven data, SCSS, and zero TypeScript.

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
│   │       ├── _variables.scss
│   │       ├── _mixins.scss
│   │       ├── _breakpoints.scss
│   │       ├── _reset.scss
│   │       ├── _typography.scss
│   │       └── main.scss
│   ├── components/
│   │   ├── sections/    # Page sections (HeroSection, …)
│   │   ├── shared/      # Shared components (Header, Navigation, Faq, Footer)
│   │   └── ui/          # UI primitives (Container, Button)
│   ├── layouts/         # Nuxt layouts
│   │   └── default.vue
│   ├── pages/           # Route pages
│   │   └── index.vue
│   ├── public/          # Static files served at root (/)
│   │   ├── docs/        # Documents (PDFs, etc.)
│   │   └── images/      # Images organised by section / component
│   │       ├── favicons/ # Favicon set + manifest
│   │       └── Faq/      # Example: images used by the Faq component
│   ├── utils/           # Utility functions
│   │   ├── sanitize.ts  # HTML sanitizer
│   │   └── getYM.ts     # Yandex.Metrica script builder
│   ├── app.vue          # Entry point (global meta, fonts, Yandex.Metrica)
│   └── nuxt.config.js   # Nuxt configuration
├── data/                # JSON data files
│   ├── sections/        # Section data (hero.json, faq.json, footer.json)
│   ├── pages/           # Page composition (index.json → list of section keys)
│   ├── navigation.json  # Navigation links
│   └── site.json        # Site metadata (title, description, OG, keywords)
├── scripts/             # Build scripts
│   └── format-html.js   # HTML beautifier run after `npm run generate`
├── .claude/             # Claude Code configuration
├── package.json
└── README.md
```

### SCSS Auto-imports

`_variables.scss`, `_mixins.scss`, and `_breakpoints.scss` are automatically injected into every component via the Nuxt config. You do **not** need to `@use` them manually.

## How It Works

1. **Data** lives in `data/sections/*.json`.
2. **Section components** in `app/components/sections/` receive the data as props.
3. **Pages** in `app/pages/` import the JSON and pass it to the section components.
4. **Page composition** (`data/pages/index.json`) lists which section keys belong to a page.
5. **Build** (`npm run generate`) produces a fully static site, then `scripts/format-html.js` beautifies the output HTML.

## Adding a New Section

1. **Create section data** — `data/sections/gallery.json`
2. **Create a section component** — `app/components/sections/GallerySection.vue`
3. **Add images** — place them in `app/public/images/gallery/`, then reference the paths in your JSON data or component via `/images/gallery/...`
4. **Import on a page** — add the component to `app/pages/index.vue` and pass the data as props
5. **Register in page composition** — add `"gallery"` to `data/pages/index.json`

### Image Handling (Example: Faq)

The `Faq` component demonstrates the image workflow:

- Images are placed in `app/public/images/Faq/` (the folder name matches the component name)
- Paths are stored in the component's data JSON (`data/sections/faq.json`) under an `images` field:

```json
{
  "images": {
    "decorLeft": "/images/faq/decor-left.svg",
    "decorRight": "/images/faq/decor-right.svg",
    "arrowDown": "/images/faq/arrow-down.svg",
    "arrowUp": "/images/faq/arrow-up.svg"
  }
}
```

- The component receives an `images` prop and uses them in the template as `:src="images.decorLeft"`
- A default prop value provides fallback paths so the component works without passing the prop

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

> **Совет:** Для SVG-иконок и декоративных элементов `<picture>` не нужен — используйте обычный `<img>`. Компонент `<Image>` нужен для фотографий и растровых картинок, где WebP даёт существенное сжатие (обычно −60…−80%).

## Dependencies

| Package | Purpose |
|---------|---------|
| Nuxt 3 | Framework (SSG mode) |
| sass | SCSS compilation |
| js-beautify | HTML formatting after build |
| serve | Local preview of the built site |
| sharp | WebP image conversion during build |
