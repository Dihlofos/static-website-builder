# План переноса правок из cheerfest в template

Дата: 2026-07-26
Источник: `../cheerfest`
Цель: `C:\Work\2026\template`

---

## 1. Новый компонент: `ui/Title.vue`

**Что сделать:**
- Создать `app/components/ui/Title.vue` — портировать из cheerfest
- Удалить класс `.title` из `app/assets/scss/main.scss`

**Детали компонента:**
- Props: `tag` (String, default `'h2'`), `white` (Boolean, default `false`)
- Рендерит `<component :is="tag">` с классом `title` (и `title--white` по флагу)
- Стили: Montserrat, 6rem, italic, 700, uppercase, text-align: center
- Адаптив: 5rem на tablet, 3rem на mobile
- Стили внутри компонента (не scoped, чтобы класс `.title` был доступен глобально)

**Важно:** Стили использовать через `:where(&)` для низкой специфичности — это позволяет переопределять `margin` в секциях.

---

## 2. Обновление `ui/Image.vue`

**Что сделать:**
- Заменить текущий `app/components/ui/Image.vue` версией из cheerfest

**Что добавляется:**
- Новый prop `sources` (Array) — массив `{ media, srcset, type? }` для `<source>` внутри `<picture>`. Позволяет показывать разные изображения на разных разрешениях (art direction).
- `processedSources` computed — для растровых source без явного `type` автоматически добавляет WebP-вариант
- `usePicture` computed — теперь показывает `<picture>` при наличии sources ИЛИ WebP (раньше только при WebP)

**Ключевые отличия от текущей версии:**
- Текущая: `<picture>` только когда `isRaster && webpSrc`
- Новая: `<picture>` когда `isRaster && webpSrc` ИЛИ `sources.length > 0`
- Добавлен `v-for` по `processedSources` с `<source media srcset type>`

---

## 3. Обновление `shared/Navigation.vue` + smooth-scroll

**Что сделать:**
- Портировать Navigation.vue из cheerfest
- Добавить smooth-scroll (динамический импорт `smooth-scroll`)
- Вырезать cheerfest-специфичную графику
- Оставить текстовые символы для гамбургера (☰/✕) — без зависимости от Image

**Изменения относительно текущего template:**
1. **Smooth-scroll:** динамический импорт в `onMounted`, `smoothScroll.destroy()` в `onUnmounted`
2. **Структура mobile overlay:** вместо слайд-панели справа (280px) → полноэкранный оверлей с центрированным меню (как в cheerfest, но без графики)
3. **Стили:** обновить под template (белый фон оверлея вместо magenta, тёмный цвет ссылок вместо белого)
4. **Данные:** `navigation.json` должен иметь структуру cheerfest (объект с `navItems` и `images`). В template обновить `data/navigation.json`

**Что вырезать из cheerfest-версии:**
- `<Image class="nav__girls">` — полностью удалить
- Стили `.nav__girls` — удалить

**Что остаётся как в cheerfest:**
- `<Image>` для бургера/закрытия (импорт `images` из `navigation.json`)
- Импорт `{ navItems, images }` (navigation.json с полем `images`)
- `$magenta` фон оверлея
- Все остальные стили и логика

---

## 4. Обновление `deploy.yml`

**Что сделать:**
- Портировать `deploy.yml` из cheerfest, но **вынести `BASE_URL` из хардкода**

**Текущие проблемы template deploy.yml:**
- `BASE_URL: /cheerfest/` захардкожен (должен быть настраиваемым)
- Сложный sed с capture-группой `(["'\( ])/images/` — избыточно

**Изменения:**
1. Заменить `BASE_URL: /cheerfest/` на `BASE_URL: /${{ github.event.repository.name }}/` — авто-подстановка имени репозитория
2. Пути в sed заменить с `/cheerfest/` на `/REPO_NAME_PLACEHOLDER/` (или использовать shell-переменную из env)
3. Использовать более простой sed без `-E` и capture-групп (как в cheerfest)

**Примечание:** нужно предусмотреть, что имя репозитория может отличаться от `cheerfest`. Лучше всего использовать переменную окружения `BASE_URL` и в sed-шаге тоже.

---

## 5. Обновление `package.json`

**Добавить зависимости:**
```json
"smooth-scroll": "^16.1.3",
"swiper": "^14.0.6"
```

---

## 6. Обновление `main.scss`

**Удалить:**
- Класс `.title` (строки 10–19) — переносится в компонент `Title.vue`

**Добавить:**
```scss
html {
  scroll-padding-top: 4.5rem; // компенсация fixed header для smooth-scroll
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
}

.tablet {
  display: none;

  @media (max-width: $tablet) {
    display: block;
  }
}
```

---

## 7. Обновление `nuxt.config.js`

**Добавить в `app`:**
```js
app: {
  baseURL: process.env.BASE_URL || '/',
  buildAssetsDir: '_assets/',
  // ... head
}
```

Сейчас `baseURL` отсутствует — без него `BASE_URL` из env не работает.

---

## 8. Новый компонент: `ui/Slider.vue`

**Что сделать:**
- Создать `app/components/ui/Slider.vue` — портировать из cheerfest как есть

**Детали компонента:**
- **Два режима:** Swiper.js на десктопе, нативный CSS-скролл на мобилке
- **Переключение:** через `window.matchMedia` по `desktopBreakpoint` (дефолт 1025px)
- **Props:** `items` (Array), `arrowLeft` (String — путь к SVG стрелки), `arrowRight` (String), `desktopBreakpoint` (Number)
- **Слот:** scoped slot `#slide="{ item, index }"` — контент слайда передаётся снаружи
- **Стрелки:** рендерятся через `<Image>`, получают класс `.swiper-button-disabled` от Swiper когда достигается край
- **Мобильный режим:** горизонтальный скролл со `scroll-snap`, скрытый скроллбар, CSS-переменная `--slider-slide-width` для ширины слайда
- **Адаптив:** `--slider-slide-width` меняется через CSS: 37rem (десктоп) → 30rem (tablet) → 28rem (mobile)
- **Зависит от:** `swiper` (Vue-компоненты `Swiper`, `SwiperSlide` + модуль `Navigation`)

**Импорты Swiper (только на клиенте, внутри `<script setup>`):**
```js
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
```

Nuxt 3 с SSG корректно обрабатывает `swiper/vue` — он будет загружен только на клиенте (как любой браузерный код).

---

## 9. Обновление `ui/Button.vue`

**Добавить модификатор `.white`:**
```scss
&.white {
  background-color: $white;
  border-color: $white;
  color: $magenta;

  &:hover {
    color: $white;
  }
}
```

(Портировать из cheerfest Button.vue — это единственное отличие.)

---

## Файлы, которые НЕ требуют изменений

| Файл | Причина |
|------|---------|
| `Container.vue` | Разница только в `wide` (1715px vs 1400px) — site-specific |
| `Header.vue` | Различия cheerfest-специфичны (magenta фон, отсутствие логотипа, centered) |
| `Footer.vue` | Структура одинакова |
| `Faq.vue` | Структура одинакова |
| `_variables.scss` | Идентичны |
| `_mixins.scss` | Идентичны |
| `_breakpoints.scss` | Идентичны |
| `_reset.scss` | Идентичны |
| `_typography.scss` | Идентичны |
| `app.vue` | Идентичны (кроме YM_ID) |
| `layouts/default.vue` | Различия cheerfest-специфичны (bg-image, top bar) |
| `sanitize.ts` | Идентичны |
| `getYM.ts` | Идентичны |
| `webp-converter/` | Идентичен |
| Секции (sections/) | Все cheerfest-специфичны, не портируются |

---

## Порядок выполнения

1. `package.json` — добавить `smooth-scroll` и `swiper`
2. `npm install`
3. `data/navigation.json` — привести к структуре cheerfest (объект с `navItems` и `images`)
4. `ui/Title.vue` — создать новый компонент
5. `main.scss` — удалить `.title`, добавить утилиты
6. `ui/Image.vue` — заменить
7. `ui/Button.vue` — добавить `.white`
8. `ui/Slider.vue` — создать новый компонент
9. `shared/Navigation.vue` — заменить с адаптацией
10. `nuxt.config.js` — добавить `baseURL`
11. `deploy.yml` — обновить с авто-подстановкой BASE_URL
12. Проверить сборку `npm run generate`
