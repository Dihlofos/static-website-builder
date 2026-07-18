# Миграция: перенос визуальной стилистики из cheerfest → новый шаблон

## Контекст

В проекте `../cheerfest/` находится статичный сайт (Gulp + SCSS, desktop-first), на основе которого требуется перенести визуальную стилистику в новый шаблон (Nuxt 3 + SCSS). Новый шаблон переводится на **desktop-first** (как и старый).

**Не переносим:** изображения, JS-файлы, swiper-стили, анимации, блоковые компоненты (header, nav, footer, faq, slider и т.д.).

---

## 1. EditorConfig

В новом шаблоне `.editorconfig` отсутствует. Скопировать из `../cheerfest/.editorconfig` (см. приложение А).

**Файл:** `.editorconfig`

---

## 2. Шрифты и их подключение

### Что меняется

Текущий шаблон использует **Google Fonts @import** для шрифта Inter. Старый шаблон использует **4 self-hosted семейства** с `@font-face`.

### 2.1. Заменить @import на @font-face

**Файл:** `app/assets/scss/_typography.scss`

**Удалить:**
```scss
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

**Добавить вместо него** `@font-face`-правила из `source/sass/utils/fonts.scss` старого шаблона. Скорректировать пути: `url("../fonts/..."` → `url("/fonts/..."`. Пути относительно `public/fonts/`.

Всего 9 правил (см. приложение Б):
- **Montserrat** — 6 начертаний: 400 normal, 400 italic, 500 normal, 600 normal, 700 normal, 700 italic
- **Bounded** — 1 начертание: 400 normal
- **Unbounded** — 1 начертание: 500 normal
- **Mossport** — 1 начертание: 700 normal

Все используют `font-display: swap` и `local()` fallback.

### 2.2. Скопировать файлы шрифтов

Все woff/woff2 файлы из `../cheerfest/source/fonts/` в `public/fonts/`. Файл `Montserrat-BlackItalic.woff2` **НЕ копировать** — он не используется ни в одном `@font-face`.

---

## 3. Переменные (SCSS) — только то, что было в cheerfest

**Файл:** `app/assets/scss/_variables.scss`

**Удалить всё содержимое и заменить** на переменные из старого шаблона. Никаких `$font-size-*`, `$spacing-*`, `$radius-*`, `$shadow-*`, `$z-*`, `$line-height-*`, `$font-weight-*` — их не было в старом шаблоне.

### 3.1. Цвета (из colors.scss)

```scss
// ══════════════════════════════════════════════════════════
// Colors — из cheerfest
// ══════════════════════════════════════════════════════════

$black:   #000000;
$white:   #FFFFFF;
$orange:  #F4D60F;
$cyan:    #0098FF;
$magenta: #EB1380;
$pink:    #FF00C3;
$darkBlue:#0C1359;
```

### 3.2. Font families (из vars.scss)

```scss
// ══════════════════════════════════════════════════════════
// Font families — из cheerfest
// ══════════════════════════════════════════════════════════

$monserrat:  "Montserrat", "Arial", sans-serif;
$mossport:   "Mossport", "Arial", sans-serif;
$bounded:    "Bounded", "Arial", sans-serif;
$unbounded:  "Unbounded", "Arial", sans-serif;
```

### 3.3. Breakpoints (из vars.scss)

```scss
// ══════════════════════════════════════════════════════════
// Breakpoints — desktop-first, из cheerfest
// ══════════════════════════════════════════════════════════

$xs:      320px;
$mobile:  743px;
$tablet:  1024px;
$laptop:  1279px;
$desktop: 1439px;
$extra:   2dppx;
```

---

## 4. html font-size — rem-базис

**Откуда:** `source/sass/utils/global.scss` (cheerfest)
**Файл:** `app/assets/scss/_reset.scss`

Перенести оригинальный код как есть (desktop-first):

```scss
html {
  @include font(10px, 10px, 400);

  @media (max-width: $desktop) {
    @include font(10px, 10px, 400);
  }

  @media (max-width: $laptop) {
    @include font(8px, 8px, 400);
  }

  @media (max-width: $tablet) {
    @include font(10px, 10px, 400);
  }

  @media (max-width: $mobile) {
    @include font(10px, 10px, 400);
  }
}
```

**Результат:**

| Диапазон | font-size | 1rem = |
|---|---|---|
| ≥1440px | 10px | 10px |
| 1280–1439px | 10px | 10px |
| 1025–1279px | **8px** | **8px** |
| 744–1024px | 10px | 10px |
| 320–743px | 10px | 10px |

---

## 5. Сбросы стилей (reset)

**Файл:** `app/assets/scss/_reset.scss`

Текущий reset — «современный минимальный». Удалить всё и заменить на стили из `global.scss` старого шаблона:

```scss
// ══════════════════════════════════════════════════════════
// CSS Reset — из cheerfest
// ══════════════════════════════════════════════════════════

@use 'variables' as *;

html {
  @include font(10px, 10px, 400);

  @media (max-width: $desktop) {
    @include font(10px, 10px, 400);
  }

  @media (max-width: $laptop) {
    @include font(8px, 8px, 400);
  }

  @media (max-width: $tablet) {
    @include font(10px, 10px, 400);
  }

  @media (max-width: $mobile) {
    @include font(10px, 10px, 400);
  }
}

body {
  margin: 0;
  padding: 0;
  position: relative;
  min-width: 320px;
  margin: 0 auto;
  font-family: $monserrat;
  background-color: $darkBlue;
  color: $white;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

body,
*,
*::before,
*::after {
  box-sizing: border-box;
}

button {
  font-family: $monserrat;
}

main {
  position: relative;
  flex-grow: 1;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

**Из текущего reset-файла удалить всё, чего не было в старом шаблоне:**
- `html { -webkit-text-size-adjust, scroll-behavior }`
- `img, picture, video, canvas, svg { display: block }` — заменено на `img { display: block }`
- `input, button, textarea, select { font: inherit }` — заменено на `button { font-family }`
- `button { border: none; background: none }` — **НЕ использовать**, ломает старые стили
- `a { color: inherit; text-decoration: none }` — не было
- `ul, ol { list-style: none }` — не было глобально
- `h1-h6, p, table` — не было

---

## 6. Миксины

**Файл:** `app/assets/scss/_mixins.scss`

### 6.1. @mixin font()

Добавить миксин из `mixins.scss` старого шаблона (используется в html для rem-базиса):

```scss
@mixin font($size: 1.6rem, $height: 2.1rem, $weight: 400) {
  font-size: $size;
  line-height: $height;
  font-weight: $weight;
}
```

### 6.2. @mixin container()

Обновить миксин под desktop-first логику из `container.scss` старого шаблона:

```scss
@mixin container($max-width: 120rem) {
  max-width: $max-width;
  margin: 0 auto;
  padding: 0 3rem;
  box-sizing: content-box;

  @media (max-width: $laptop) {
    min-width: 67.8rem;
    padding: 0 4.5rem;
  }

  @media (max-width: $tablet) {
    min-width: initial;
    max-width: initial;
    padding: 0 24px;
  }

  @media (max-width: $mobile) {
    padding: 0 20px;
  }
}
```

### 6.3. Остальные миксины

Все остальные миксины из текущего шаблона (`focus-ring`, `flex-center`, `flex-between`, `truncate`, `visually-hidden`) — **удалить**. В старом шаблоне их не было.

---

## 7. Типографика

**Файл:** `app/assets/scss/_typography.scss`

Удалить всё содержимое. В старом шаблоне не было отдельного файла типографики — все стили текста задавались в `global.scss` и в блоках.

### 7.1. Глобальные заголовки

В старом шаблоне глобальных h1-h6 стилей не было — всё через BEM-классы. **Удалить** из `_typography.scss` все h1-h6 правила. Если потребуются, задавать через классы (`.title`, `.contest__title` и т.д.).

### 7.2. Стили для p

В старом шаблоне отдельного `<p>` стиля не было. **Удалить.**

---

## 8. Брейкпоинты

**Файл:** `app/assets/scss/_breakpoints.scss`

Заменить всё содержимое на простые SCSS-переменные из старого шаблона (без мапы, без миксинов up/down):

```scss
// ══════════════════════════════════════════════════════════
// Breakpoints — desktop-first
// ══════════════════════════════════════════════════════════

$xs:      320px;
$mobile:  743px;
$tablet:  1024px;
$laptop:  1279px;
$desktop: 1439px;
$extra:   2dppx;
```

Все медиа-запросы в проекте писать в формате `@media (max-width: $tablet) { ... }`.

---

## 9. main.scss

**Файл:** `app/assets/scss/main.scss`

Использовать `@use` для импорта partials (порядок как в старом шаблоне):

```scss
@use 'variables';
@use 'mixins';
// переменные/миксины через additionalData — см. nuxt.config.js
@use 'reset';
@use 'typography';
```

Утилитарный класс `.title` — добавить, если нужен:

```scss
.title {
  font-family: $mossport;
  font-size: 10.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.86;
  text-transform: uppercase;

  &--white { color: $white; }
}
```

Классы `.container` и `.section` из текущего main.scss — **удалить** (контейнер теперь через миксин, секции через BEM).

---

## 10. Кнопка (Button.vue)

**Файл:** `app/components/ui/Button.vue`

Скопировать стили из `button.scss` старого шаблона в variant `--primary`:

```scss
&--primary {
  display: inline-flex;
  color: $white;
  font-family: $monserrat;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 20px;
  border: 2px solid $magenta;
  background: $magenta;
  text-decoration: none;
  padding: 2.3rem;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background-color: $darkBlue;
    border-color: $darkBlue;
  }

  &--active {
    border: 2px solid $magenta;
    background: $magenta;
  }

  @media (max-width: $tablet) {
    border-width: 1px;
    border-radius: 6px;
    font-size: 2.2rem;
    padding: 0.5rem 0.8rem;
  }
}
```

---

## Резюме изменений (по файлам)

| Файл | Действие |
|---|---|
| `.editorconfig` | **Создать** — скопировать из cheerfest |
| `public/fonts/*` | **Добавить** woff/woff2 файлы (18 шт.) |
| `app/assets/scss/_variables.scss` | **Заменить** — только цвета, font-family, брейкпоинты (как в cheerfest) |
| `app/assets/scss/_breakpoints.scss` | **Заменить** — простые переменные $xs/$mobile/$tablet/$laptop/$desktop |
| `app/assets/scss/_mixins.scss` | **Добавить** @mixin font(); **обновить** @mixin container(); **удалить** focus-ring, flex-center, flex-between, truncate, visually-hidden |
| `app/assets/scss/_reset.scss` | **Заменить** — reset из global.scss с html font-size, body, box-sizing, img |
| `app/assets/scss/_typography.scss` | **Очистить** — @font-face только; никаких глобальных h1-h6, p, small |
| `app/assets/scss/main.scss` | **Обновить** — импорты, убрать .container/.section, опционально .title |
| `app/components/ui/Button.vue` | **Обновить** variant `--primary` — стили из button.scss |

---

## Приложение А: .editorconfig

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

---

## Приложение Б: @font-face правила (для _typography.scss)

```scss
@font-face {
  font-family: "Montserrat";
  font-display: swap;
  font-weight: 500;
  font-style: normal;
  src: local("Montserrat"), local("Montserrat Medium"),
    url("/fonts/Montserrat-Medium.woff2") format("woff2"),
    url("/fonts/Montserrat-Medium.woff") format("woff");
}

@font-face {
  font-family: "Montserrat";
  font-display: swap;
  font-weight: 400;
  font-style: normal;
  src: local("Montserrat"), local("Montserrat Regular"),
    url("/fonts/Montserrat-Regular.woff2") format("woff2"),
    url("/fonts/Montserrat-Regular.woff") format("woff");
}

@font-face {
  font-family: "Montserrat";
  font-display: swap;
  font-weight: 400;
  font-style: italic;
  src: local("Montserrat Italic"),
    url("/fonts/Montserrat-Italic.woff2") format("woff2"),
    url("/fonts/Montserrat-Italic.woff") format("woff");
}

@font-face {
  font-family: "Montserrat";
  font-display: swap;
  font-weight: 700;
  font-style: normal;
  src: local("Montserrat"), local("Montserrat Bold"),
    url("/fonts/Montserrat-Bold.woff2") format("woff2"),
    url("/fonts/Montserrat-Bold.woff") format("woff");
}

@font-face {
  font-family: "Montserrat";
  font-display: swap;
  font-weight: 700;
  font-style: italic;
  src: local("Montserrat"), local("Montserrat Bold"),
    url("/fonts/Montserrat-BoldItalic.woff2") format("woff2"),
    url("/fonts/Montserrat-BoldItalic.woff") format("woff");
}

@font-face {
  font-family: "Montserrat";
  font-display: swap;
  font-weight: 600;
  font-style: normal;
  src: local("Montserrat"), local("Montserrat SemiBold"),
    url("/fonts/Montserrat-SemiBold.woff2") format("woff2"),
    url("/fonts/Montserrat-SemiBold.woff") format("woff");
}

@font-face {
  font-family: "Bounded";
  font-display: swap;
  font-weight: 400;
  font-style: normal;
  src: local("Bounded"), local("Bounded Regular"),
    url("/fonts/Bounded-Regular.woff2") format("woff2"),
    url("/fonts/Bounded-Regular.woff") format("woff");
}

@font-face {
  font-family: "Unbounded";
  font-display: swap;
  font-weight: 500;
  font-style: normal;
  src: local("Unbounded"), local("Unbounded Medium"),
    url("/fonts/Unbounded-Medium.woff2") format("woff2"),
    url("/fonts/Unbounded-Medium.woff") format("woff");
}

@font-face {
  font-family: "Mossport";
  font-display: swap;
  font-weight: 700;
  font-style: normal;
  src: local("Mossport"),
    url("/fonts/Mossport.woff2") format("woff2"),
    url("/fonts/Mossport.woff") format("woff");
}
```
