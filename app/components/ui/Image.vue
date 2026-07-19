<script setup>
import { computed } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  width: { type: [Number, String], default: null },
  height: { type: [Number, String], default: null },
  loading: { type: String, default: 'lazy' },
  decoding: { type: String, default: 'async' },
  fetchpriority: { type: String, default: null },
  class: { type: [String, Array, Object], default: null },
  imgAttrs: { type: Object, default: () => ({}) },
})

const RASTER_EXTS = new Set(['.png', '.jpg', '.jpeg'])

/**
 * Получает «чистую» часть src: без query-параметров и hash-фрагментов.
 */
function cleanPath(src) {
  return src.split('?')[0].split('#')[0]
}

/**
 * Извлекает расширение файла из src.
 * - Отбрасывает query-параметры (?v=2)
 * - Отбрасывает hash-фрагменты (#section)
 * - Возвращает null, если расширения нет
 */
function getExtension(src) {
  const path = cleanPath(src)
  const match = path.match(/\.(\w+)$/)
  return match ? match[1].toLowerCase() : null
}

/**
 * Определяет, что src — внешний URL, а не локальный путь.
 */
function isExternalUrl(src) {
  return /^https?:\/\//.test(src) || /^\/\//.test(src) || /^data:/.test(src)
}

/**
 * Заменяет расширение в src на .webp, сохраняя query-параметры.
 */
function getWebpSrc(src) {
  const [path, rest] = src.split('?')
  const [pathOnly] = path.split('#')
  const webpPath = pathOnly.replace(/\.\w+$/, '.webp')
  return rest ? `${webpPath}?${rest}` : webpPath
}

const ext = computed(() => {
  if (isExternalUrl(props.src)) return null
  return getExtension(props.src)
})

const isRaster = computed(() => ext.value && RASTER_EXTS.has(`.${ext.value}`))
const webpSrc = computed(() => (isRaster.value ? getWebpSrc(props.src) : null))

/**
 * Атрибуты, которые идут на <img>.
 */
const imgBindings = computed(() => {
  const bindings = {
    src: props.src,
    alt: props.alt,
    loading: props.loading,
    decoding: props.decoding,
  }
  if (props.width != null) bindings.width = props.width
  if (props.height != null) bindings.height = props.height
  if (props.fetchpriority) bindings.fetchpriority = props.fetchpriority
  if (props.class) bindings.class = props.class
  return { ...bindings, ...props.imgAttrs }
})
</script>

<template>
  <picture v-if="isRaster && webpSrc">
    <source :srcset="webpSrc" type="image/webp" />
    <img v-bind="imgBindings" />
  </picture>
  <img v-else v-bind="imgBindings" />
</template>

<style lang="scss" scoped>
picture,
img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
