<script setup>
const props = defineProps({
  tag: { type: String, default: 'p' },
  variant: { type: String, default: '' }, // h1, h2, h3, h4, body, caption
  color: { type: String, default: '' },
  align: { type: String, default: '' }, // left, center, right
})
</script>

<template>
  <component
    :is="tag"
    :class="{
      [`text--${variant}`]: variant,
      [`text--${color}`]: color,
      [`text--${align}`]: align,
    }"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
// Variant classes set via props
.text--h1 { font-size: $font-size-4xl; font-weight: $font-weight-bold; line-height: $line-height-tight; }
.text--h2 { font-size: $font-size-3xl; font-weight: $font-weight-bold; line-height: $line-height-tight; }
.text--h3 { font-size: $font-size-2xl; font-weight: $font-weight-semibold; }
.text--h4 { font-size: $font-size-xl; font-weight: $font-weight-semibold; }
.text--body { font-size: $font-size-base; line-height: $line-height-relaxed; }
.text--caption { font-size: $font-size-sm; color: $color-text-muted; }

// Colors
.text--primary { color: $color-primary; }
.text--muted { color: $color-text-muted; }
.text--light { color: $color-text-light; }
.text--on-dark { color: $color-text-on-dark; }

// Alignment
.text--left { text-align: left; }
.text--center { text-align: center; }
.text--right { text-align: right; }

@include up('lg') {
  .text--h1 { font-size: $font-size-5xl; }
  .text--h2 { font-size: $font-size-4xl; }
}
</style>
