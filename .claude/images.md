# Image Optimization Spec — WebP-генерация и компонент `<Image>`

## 1. Цель

Автоматически конвертировать растровые изображения (`.png`, `.jpg`, `.jpeg`) в формат WebP на этапе сборки, и предоставить компонент `<Image>`, который на основе пути к исходному `.png`/`.jpg` рендерит `<picture>` с WebP-вариантом и оригинальным фоллбеком.

---

## 2. Архитектура

Система состоит из двух частей:

| Часть | Назначение | Где живёт |
|-------|-----------|-----------|
| **WebP Converter** (Nuxt module) | Сканирует `app/public/images/` на этапе `build:before`, конвертирует `.png`/`.jpg` в `.webp` с помощью `sharp` | `app/modules/webp-converter/` |
| **Компонент `<Image>`** | Принимает путь к `.png`/`.jpg`, рендерит `<picture>` с webp-источником и оригинальным фоллбеком | `app/components/ui/Image.vue` |

---

## 3. Конвертация в WebP (Nuxt module)

### 3.1. Зависимости

```bash
npm install -D sharp
```

`sharp` — нативная библиотека для быстрой конвертации изображений (Node.js). Добавляется в `devDependencies`.

### 3.2. Структура модуля

```
app/modules/webp-converter/
  index.js         # точка входа — регистрирует хук
  convert.js       # функция обхода директории и конвертации
```

### 3.3. Логика работы

1. Хук `build:before` — срабатывает перед началом сборки.
2. В dev-режиме конвертация тоже работает (отключается через опцию `skipInDev: true`).
3. Модуль получает `srcDir` из `nuxt.options` (это `app/`).
4. Рекурсивно обходит `{srcDir}/public/images/` через `fsp.readdir` / `fsp.stat`.
5. **Clean orphans**: удаляет `.webp`-файлы, для которых не осталось исходного PNG/JPG.
6. Для каждого файла с расширением `.png`, `.jpg`, `.jpeg`:
   - Строит путь к `.webp` рядом с оригиналом: `photo.png` → `photo.webp`.
   - Если `.webp` уже существует и его `mtime` новее, чем у оригинала — **пропускает** (инкрементальная сборка).
   - Иначе — конвертирует через `sharp(input).webp({ quality })`.
   - Сохраняет `.webp` рядом с оригиналом.
7. Конвертация выполняется с **конкурентностью 5** — пять изображений обрабатываются параллельно.
8. После конвертации — в `public/` рядом с каждым `photo.png` лежит `photo.webp`. Оба файла копируются в `.output/public/images/` стандартным механизмом Nuxt.

### 3.4. API модуля

**`index.mjs`**:
```js
export default defineNuxtModule({
  meta: { name: 'webp-converter', version: '1.0.0' },
  setup(options, nuxt) {
    nuxt.hook('build:before', async () => {
      const { convertImages } = await import('./convert.mjs')
      await convertImages(nuxt.options.srcDir)
    })
  }
})
```

**`convert.mjs`** — экспортирует асинхронную функцию `convertImages(srcDir)`.

### 3.5. Регистрация в `nuxt.config.js`

```js
modules: [
  './modules/webp-converter',
],
```

### 3.6. Параметры (опционально)

| Параметр | Тип | По умолчанию | Описание |
|----------|-----|-------------|----------|
| `quality` | `number` | `85` | Качество WebP (0–100) |
| `cleanOrphans` | `boolean` | `true` | Удалять `.webp` без соответствующего оригинала |
| `skipInDev` | `boolean` | `false` | Пропускать конвертацию в dev-режиме |
| `concurrency` | `number` | `5` | Количество параллельно конвертируемых изображений |

---

## 4. Компонент `<Image>`

### 4.1. Пропсы

| Проп | Тип | Обязателен | По умолчанию | Описание |
|------|-----|-----------|-------------|----------|
| `src` | `string` | ✅ | — | Путь к оригиналу (`.png`, `.jpg`, `.jpeg`) |
| `alt` | `string` | ✅ | — | `alt`-текст для `<img>` |
| `width` | `number` | нет | — | Ширина изображения (атрибут на `<img>`) |
| `height` | `number` | нет | — | Высота изображения (атрибут на `<img>`) |
| `loading` | `string` | нет | `'lazy'` | `loading` на `<img>` (`'lazy'` / `'eager'`) |
| `class` | `string` | нет | — | CSS-класс на `<img>` |
| `decoding` | `string` | нет | `'async'` | `decoding` на `<img>` (`'async'` / `'sync'` / `'auto'`) |
| `fetchpriority` | `string` | нет | — | Для LCP-изображений (`'high'`) |
| `imgAttrs` | `object` | нет | `{}` | Дополнительные атрибуты на `<img>` |

### 4.2. Рендер (поведение)

Компонент получает `src`, определяет формат по расширению:

| Входной `src` | Расширение | WebP-источник |
|---------------|-----------|---------------|
| `/images/photo.png` | `.png` | `/images/photo.webp` |
| `/images/photo.jpg` | `.jpg` | `/images/photo.webp` |
| `/images/photo.jpeg` | `.jpeg` | `/images/photo.webp` |
| `/images/icon.svg` | — | **Не оборачивает** — SVG не требует webp |

**Логика:**
- Если расширение `.png`, `.jpg` или `.jpeg`:
  ```html
  <picture>
    <source :srcset="webpSrc" type="image/webp" />
    <img :src="originalSrc" v-bind="restAttrs" />
  </picture>
  ```
- Если расширение не растровое (`.svg`, `.gif`, `.ico`) — рендерит просто `<img>` без `<picture>` (фоллбек для форматов, не поддерживающих WebP).

### 4.3. Пример вывода

```vue
<AppImage src="/images/team/photo.jpg" alt="Team photo" width="800" height="600" loading="lazy" />
```

→
```html
<picture>
  <source srcset="/images/team/photo.webp" type="image/webp" />
  <img src="/images/team/photo.jpg" alt="Team photo" width="800" height="600" loading="lazy" decoding="async" />
</picture>
```

### 4.4. Edge Cases и обработка ошибок

| Ситуация | Поведение |
|----------|-----------|
| WebP-файл не сгенерировался (ошибка конвертации) | Браузер падает на фоллбек `<img src="original">` |
| SVG / GIF на входе | Рендерится просто `<img>`, без `<picture>` |
| `src` без расширения | Просто `<img>` (не можем определить формат) |
| `src` с query-параметрами (`/images/photo.png?v=2`) | Расширение определяется до `?`, WebP-путь строится корректно |
| `src` с hash-фрагментом (`/images/photo.png#section`) | Hash отбрасывается при определении расширения |
| Внешний URL (`https://cdn.example.com/photo.png`) | Рендерится просто `<img>` — WebP подсовывать не можем |
| Data URL (`data:image/png;base64,...`) | Рендерится просто `<img>` |
| Пустой `alt` | Оставляем пустым — валидно для декоративных изображений |

---

## 5. Текущий статус реализации

### Этап 1 — Базовая конвертация ✅
1. `npm install -D sharp` — выполнено
2. Создан `app/modules/webp-converter/index.js` + `convert.js` с рекурсивным обходом и конвертацией
3. Модуль прописан в `nuxt.config.js` через `modules`
4. Проверено: `npm run generate` создаёт `.webp`-копии в `.output/public/images/`

### Этап 2 — Компонент ✅
1. Создан `app/components/ui/Image.vue` с Composition API + `<script setup>`
2. Пропсы: `src`, `alt`, `width`, `height`, `loading`, `decoding`, `fetchpriority`, `class`, `imgAttrs`
3. Реализована логика определения расширения и формирования `<picture>`
4. Проверена сборка без ошибок

### Этап 3 — Инкрементальность и краевые случаи ✅
1. **mtime-проверка** — `.webp` не пересоздаётся, если свежее оригинала
2. **Clean orphans** — удаляет `.webp` без соответствующего оригинала
3. **Dev-режим** — конвертация пропускается в `nuxt dev` (опция `skipInDev`)
4. **Конкурентность** — до 5 изображений обрабатываются параллельно
5. **Внешние URL** — `<picture>` не оборачивает `https://`, `//`, `data:` URL
6. **Hash-фрагменты** — `#section` отбрасывается при определении расширения
7. **SVG/GIF** — рендерятся как просто `<img>`
8. **Query-параметры** — сохраняются в WebP-пути
9. **`fetchpriority` и `imgAttrs`** — пробрасываются на `<img>`

---

## 6. Совместимость

| Браузер | WebP | Поведение |
|---------|------|-----------|
| Chrome 32+ | ✅ | Загружает `.webp` |
| Firefox 65+ | ✅ | Загружает `.webp` |
| Safari 14+ | ✅ | Загружает `.webp` |
| Safari 13.x | ❌ | Падает на `.png`/`.jpg` фоллбек |
| IE 11 | ❌ | Падает на `.png`/`.jpg` фоллбек |

---

## 7. Заметки по реализации

- В модуле **не использовать TypeScript**, только ESM `.mjs` — Nuxt модули загружаются до TypeScript-компиляции.
- В компоненте `AppImage.vue` — Composition API + `<script setup>`.
- Функция конвертации должна быть **идемпотентной**: повторный запуск не перезаписывает актуальные `.webp`.
- Для production-сборки (`nuxt generate`) все `.webp` генерируются однократно.
- В dev-режиме конвертация тоже работает, но если изображений много, можно добавить проверку `nuxt.options.dev` для пропуска.
