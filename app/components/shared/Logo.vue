<script setup>
const props = defineProps({
  size: { type: String, default: 'md' }, // sm, md, lg
})
</script>

<template>
  <a href="/" class="logo" :class="`logo--${size}`">
    <span class="logo__mark">&lt;/&gt;</span>
    <span class="logo__text">Template</span>
  </a>
</template>

<style lang="scss" scoped>
.logo {
  display: inline-flex;
  align-items: center;
  gap: $spacing-sm;
  text-decoration: none;
  font-weight: $font-weight-bold;
  color: $color-text;

  &__mark {
    color: $color-primary;
    font-family: $font-family-mono;
  }

  &--sm {
    font-size: $font-size-base;
    .logo__mark { font-size: $font-size-lg; }
  }

  &--md {
    font-size: $font-size-xl;
    .logo__mark { font-size: $font-size-2xl; }
  }

  &--lg {
    font-size: $font-size-2xl;
    .logo__mark { font-size: $font-size-3xl; }
  }
}
</style>
