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

## Dependencies

| Package | Purpose |
|---------|---------|
| Nuxt 3 | Framework (SSG mode) |
| sass | SCSS compilation |
| js-beautify | HTML formatting after build |
| serve | Local preview of the built site |
