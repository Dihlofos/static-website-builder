# Task Spec: Frontend Static Site Template (Nuxt 3)

## 1. Выбор стека

### Основной вариант: **Nuxt 3** (Static Generation)

| Критерий | Nuxt 3 | Astro | Next.js |
|---|---|---|---|
| Язык | Vue (нравится пользователю) | Any (Vue islands) | React |
| SSG | `nuxt generate` ✓ | `astro build` ✓ | `next export` (ограничения) |
| Hot-reload | Мгновенный HMR (Vite) | HMR | Fast Refresh |
| SEO | `useHead`, `definePageMeta` | Built-in | `next/head` |
| Экосистема | Nuxt модули | Astro интеграции | Vercel-centric |
| Bundle size | Vue runtime (tree-shaken) | Zero JS по умолчанию | React (тяжелее) |
| Сложность | Средняя | Низкая | Средняя |

**Решение: Nuxt 3** — лучший баланс SSG, удобства разработки и экосистемы под Vue.

---

## 2. Структура проекта

```
C:\Work\2026\template\
├── app/                              # Nuxt 3 application directory
│   ├── components/
│   │   ├── ui/                       # Базовые UI элементы (Button, Container, Icon, Image)
│   │   │   ├── Button.vue
│   │   │   ├── Container.vue
│   │   │   ├── Icon.vue
│   │   │   └── Typography.vue
│   │   ├── shared/                   # Переиспользуемые составные компоненты (Header, Footer, Card, Navigation, Logo)
│   │   │   ├── Card.vue
│   │   │   ├── Header.vue
│   │   │   ├── Footer.vue
│   │   │   ├── Logo.vue
│   │   │   └── Navigation.vue
│   │   └── sections/                 # Компоненты для секций страницы (HeroSection, FeaturesSection, CtaSection)
│   │       ├── HeroSection.vue
│   │       ├── FeaturesSection.vue
│   │       ├── AboutSection.vue
│   │       ├── ContactSection.vue
│   │       └── CtaSection.vue
│   ├── layouts/
│   │   └── default.vue
│   ├── pages/
│   │   └── index.vue                 # Страница собирается из секций (JSON)
│   ├── app.vue                       # Точка входа
│   ├── nuxt.config.js                # Конфигурация Nuxt (JS, не TS!)
│   ├── tsconfig.json                 # Минимальная конфигурация
├── assets/
│   └── scss/
│       ├── _variables.scss           # Цвета, шрифты, отступы
│       ├── _mixins.scss              # Media query миксины
│       ├── _reset.scss               # CSS reset
│       ├── _typography.scss          # Типографика, font-face
│       ├── _breakpoints.scss         # Брейкпоинты
│       └── main.scss                 # Точка входа
├── data/                             # Статические данные (JSON)
│   ├── site.json                     # Метаданные сайта
│   ├── navigation.json               # Навигация
│   ├── sections/                     # Данные для каждой секции — отдельный JSON
│   │   ├── hero.json
│   │   ├── features.json
│   │   ├── about.json
│   │   ├── contact.json
│   │   └── cta.json
│   └── pages/                        # Сборка страницы — какие секции включить и в каком порядке
│       └── index.json                # ["hero", "features", "about", "cta", "contact"]
├── public/                           # Статика (копируется как есть)
│   ├── components/                   # Картинки для компонентов
│   │   └── HeroSection/
│   │       └── bg-hero.jpg
│   ├── fonts/                        # Локальные шрифты (woff2)
│   └── images/                       # Общие изображения
├── .gitignore
├── package.json
└── README.md
```

---

## 3. Нейминг и организация компонентов

### Правила:
- **Без префиксов.** Компонент называется просто по смыслу: `Button.vue`, `Header.vue`, `HeroSection.vue`
- Vue корректно различает `<button>` (HTML) и `<Button>` (компонент) по регистру
- **PascalCase** для имён файлов и в шаблонах: `<HeroSection />`, `<Navigation />`
- **Папка** кодирует уровень:
  | Папка | Аналог | Что содержит |
  |---|---|---|
  | `ui/` | atoms | Базовые элементы: Button, Container, Icon, Typography |
  | `shared/` | organisms | Сложные переиспользуемые блоки: Header, Footer, Card, Navigation, Logo |
  | `sections/` | — | Компоненты секций страницы: HeroSection, FeaturesSection, CtaSection |

### Props (без TypeScript):
```vue
<script setup>
const props = defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  disabled: { type: Boolean, default: false },
  to: { type: String, default: '' },
})
</script>
```

### Image reference convention:
Картинки для компонентов — `public/components/{ComponentName}/`:
```vue
<img :src="`/components/HeroSection/${imageName}`" :alt="alt" />
```

---

## 4. Система данных (JSON → страницы)

### Архитектура:
```
data/site.json ──────────► app.vue (useHead, метаданные)
data/navigation.json ───► Navigation.vue (через импорт)

data/pages/index.json ───► pages/index.vue
       │                      │
       │   ["hero", "features", "about", "cta"]
       │                      │
       ▼                      ▼
data/sections/hero.json ──► HeroSection.vue
data/sections/features.json ──► FeaturesSection.vue
data/sections/about.json ──► AboutSection.vue
data/sections/cta.json ──► CtaSection.vue
```

### Принцип:
- Каждая секция одностраничника = отдельный JSON в `data/sections/`
- Файл страницы (`data/pages/index.json`) — простой массив с названиями секций
- Страница читает список секций, подгружает каждую и рендерит соответствующий компонент

### Пример `data/pages/index.json`:
```json
["hero", "features", "about", "cta", "contact"]
```

### Пример `data/sections/hero.json`:
```json
{
  "type": "hero",
  "title": "Добро пожаловать",
  "subtitle": "Строим лучшие сайты",
  "button": { "text": "Узнать больше", "link": "#about" },
  "backgroundImage": "components/HeroSection/bg-hero.jpg"
}
```

### Пример `data/sections/features.json`:
```json
{
  "type": "features",
  "heading": "Наши преимущества",
  "items": [
    { "icon": "star", "title": "Быстро", "text": "Мгновенная загрузка" },
    { "icon": "shield", "title": "Надёжно", "text": "Отказоустойчивость" }
  ]
}
```

### Пример `pages/index.vue` (сборка страницы):
```vue
<script setup>
import sectionsList from '~/../data/pages/index.json' with { type: 'json' }

// Функция загрузки данных секции по имени
async function loadSection(name) {
  return import(`~/../data/sections/${name}.json`).then(m => m.default || m)
}

// Загружаем все секции
const { data: sections } = await useAsyncData('sections', () => {
  return Promise.all(sectionsList.map(name => loadSection(name)))
})
</script>

<template>
  <Header />
  <main>
    <HeroSection     v-if="sections?.[0]?.type === 'hero'"     v-bind="sections[0]" />
    <FeaturesSection  v-if="sections?.[1]?.type === 'features'" v-bind="sections[1]" />
    <AboutSection     v-if="sections?.[2]?.type === 'about'"    v-bind="sections[2]" />
    <CtaSection       v-if="sections?.[3]?.type === 'cta'"      v-bind="sections[3]" />
    <ContactSection   v-if="sections?.[4]?.type === 'contact'"  v-bind="sections[4]" />
  </main>
  <Footer />
</template>
```

---

## 5. SCSS Система

### Глобальные переменные и миксины (без ручного импорта)

**Решение:** `vite.css.preprocessorOptions.scss.additionalData` в `nuxt.config.js`:

```js
// app/nuxt.config.js
export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/variables" as *;
            @use "~/assets/scss/mixins" as *;
            @use "~/assets/scss/breakpoints" as *;
          `,
          sassOptions: {
            quietDeps: true,
            silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
          },
        },
      },
    },
  },
})
```

**Почему `@use ... as *`:** Dart Sass deprecated `@import`. `@use` с `as *` даёт такое же удобство, но forward-compatible.

### Файлы SCSS:

| Файл | Содержимое |
|---|---|
| `_variables.scss` | Цвета, шрифты, spacing, z-index: `$color-primary: #0055ff;` |
| `_mixins.scss` | Паттерны: `@mixin focus-ring`, `flex-center`, `container` |
| `_breakpoints.scss` | Миксины для медиа: `@include up('md')`, `@include down('sm')` |
| `_reset.scss` | CSS reset |
| `_typography.scss` | `@font-face`, типографическая шкала |
| `main.scss` | Глобальные стили, импорт всех partials |

### Использование в компонентах:
```scss
<style lang="scss" scoped>
// variables, mixins, breakpoints уже доступны через additionalData
.button {
  padding: $spacing-sm $spacing-md;    // из _variables.scss
  @include focus-ring;                  // из _mixins.scss
  @include up('md') {
    padding: $spacing-md $spacing-lg;
  }
}
</style>
```

---

## 6. Cache Busting (версионирование статики)

### Два уровня защиты:

**Уровень 1: Vite content hash (автоматический)**
Vite сам добавляет хеш к именам JS/CSS файлов при продакшн-сборке:
```
_nuxt/Button.[hash].js
_nuxt/main.[hash].css
```
Никакой конфигурации не нужно.

**Уровень 2: Версия сборки**
```js
// app/nuxt.config.js
import { readFileSync } from 'node:fs'
const pkg = JSON.parse(readFileSync('../package.json', 'utf-8'))
const buildVersion = pkg.version + '-' + Date.now().toString(36)

export default defineNuxtConfig({
  app: {
    buildAssetsDir: `/build/${buildVersion}/`, // уникальная папка для каждого билда
  },
})
```

**Уровень 3: Cache-Control заголовки (на уровне хостинга)**
```nginx
/_nuxt/*    Cache-Control: public, max-age=31536000, immutable
/images/*   Cache-Control: public, max-age=86400
/fonts/*    Cache-Control: public, max-age=31536000, immutable
```

---

## 7. Команды сборки

```json
{
  "scripts": {
    "dev":      "nuxt dev",         // Режим разработки с hot-reload
    "generate": "nuxt generate",    // Сборка статического сайта
    "preview":  "npx serve ./dist", // Просмотр готового сайта
    "clean":    "nuxt cleanup"      // Очистка кеша
  }
}
```

| Команда | Режим | Что делает |
|---|---|---|
| `npm run dev` | Development | Vite dev server с HMR. Сайт работает как SPA |
| `npm run generate` | Production | Создаёт статические HTML + CSS + JS в `./dist/` |
| `npm run preview` | Preview | Локальный сервер для просмотра статики |

### Dev mode: Nuxt не перезагружает страницу при изменении JSON в `data/`.
Решение:
```js
// app/nuxt.config.js
watch: ['../data/**/*.json'] // триггерит перезагрузку сервера при изменении данных
```

---

## 8. Рабочий процесс

### Разработка:
1. `npm run dev` — открывается браузер с hot-reload
2. Редактируем компоненты — изменения на лету
3. Меняем данные в `data/sections/*.json` — Nuxt перезагружается
4. Работаем в scoped `<style lang="scss">` — стили изолированы

### Добавление новой секции:
1. Создать `data/sections/gallery.json` с данными
2. Создать `app/components/sections/GallerySection.vue`
3. Подключить в `app/pages/index.vue`
4. Добавить `"gallery"` в `data/pages/index.json`

### Сборка и публикация:
1. `npm run generate` — Nuxt собирает статику в `./dist/`
2. Содержимое `./dist/` — готово для деплоя (Netlify, Vercel, GitHub Pages, S3, nginx)

---

## 9. SEO

Глобальные defaults — в `nuxt.config.js`:
```js
app: {
  head: {
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
  }
}
```

Per-page мета-теги через `useHead`:
```vue
<script setup>
useHead({
  title: 'Главная — Мой сайт',
  meta: [
    { name: 'description', content: 'Описание страницы' },
    { property: 'og:image', content: '/images/og-image.png' },
  ],
})
</script>
```

---

## 10. TypeScript

Nuxt 3 поставляется с TypeScript «из коробки» (внутренности Nuxt на TS). Полностью отключить не получится, но **максимально ослабляем**:

```js
// app/nuxt.config.js
export default defineNuxtConfig({
  typescript: {
    strict: false,          // Отключаем строгий режим
    typeCheck: false,       // Не проверять типы при сборке
    shim: false,            // Не генерировать .d.ts файлы
    tsConfig: {
      compilerOptions: {
        strict: false,
        noImplicitAny: false,
        noUnusedLocals: false,
        noUnusedParameters: false,
        allowJs: true,
        checkJs: false,
      },
    },
  },
})
```

**Что это даёт:**
- `nuxt.config.js` — в JS, не TS (файл с расширением `.js`)
- Компоненты пишутся на чистом JS: `<script setup>`, без `lang="ts"`
- Никаких типов, интерфейсов, дженериков
- Никакой папки `shared/types/`, `shared/utils/` — только то, что реально нужно
- Разработчик пишет plain Vue + SCSS — и всё

---

## 11. Последовательность реализации

| Фаза | Задачи | Результат |
|---|---|---|
| 1. Scaffold | `npx nuxi init`, настройка `srcDir`, `nuxt.config.js` в JS, установка `sass` | Скелет с dev сервером |
| 2. SCSS | `_variables`, `_mixins`, `_reset`, `_breakpoints`, `main.scss` + `additionalData` | Глобальные стили работают |
| 3. Data layer | `data/` структура: `site.json`, `navigation.json`, `sections/*.json`, `pages/index.json` | Данные готовы |
| 4. UI | Button, Container, Icon, Typography | Базовые компоненты |
| 5. Shared | Header, Footer, Navigation, Logo, Card | Переиспользуемые блоки |
| 6. Sections | HeroSection, FeaturesSection, AboutSection, ContactSection, CtaSection | Компоненты секций |
| 7. Layout | `default.vue` layout | Структура страниц |
| 8. Pages | `index.vue` — сборка страницы из секций | SSG работает |
| 9. Config | Cache busting, SEO, TypeScript off, route generation | Продакшн-сборка |
| 10. Verify | `npm run generate`, проверка `dist/`, `npm run preview` | Шаблон готов |

---

## Ключевые решения (резюме)

| Пункт | Решение |
|---|---|
| Фреймворк | Nuxt 3 (SSG, `nuxt generate`) |
| Стили | SCSS + `additionalData` для глобальных переменных и миксинов |
| Данные | `data/sections/*.json` — каждая секция отдельно, `data/pages/index.json` — сборка |
| Компоненты | `ui/` (база), `shared/` (блоки), `sections/` (секции страницы) |
| Нейминг | Без префиксов: Button, Header, HeroSection — PascalCase |
| Cache busting | Vite content hash (авто) + версия сборки в `buildAssetsDir` |
| Изображения | `public/components/{ComponentName}/` |
| TypeScript | Отключён/ослаблен (`strict: false`, `typeCheck: false`, `nuxt.config.js`) |
| Конфиг | `nuxt.config.js` (не `.ts`) |
