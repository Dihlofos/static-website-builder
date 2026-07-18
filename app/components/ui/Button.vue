<script setup>
const props = defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  disabled: { type: Boolean, default: false },
  to: { type: String, default: '' },
  type: { type: String, default: 'button' },
})
</script>

<template>
  <a
    v-if="to"
    :href="to"
    :class="['button', `button--${variant}`, `button--${size}`]"
  >
    <slot />
  </a>
  <button
    v-else
    :class="['button', `button--${variant}`, `button--${size}`]"
    :disabled="disabled"
    :type="type"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-sm;
  font-weight: $font-weight-semibold;
  border-radius: $radius-md;
  transition: all $transition-fast;
  @include focus-ring;

  // --- Sizes ---
  &--sm {
    padding: $spacing-xs $spacing-md;
    font-size: $font-size-sm;
  }
  &--md {
    padding: $spacing-sm $spacing-lg;
    font-size: $font-size-base;
  }
  &--lg {
    padding: $spacing-md $spacing-xl;
    font-size: $font-size-lg;
  }

  // --- Variants ---
  &--primary {
    background-color: $color-primary;
    color: #fff;

    &:hover:not(:disabled) {
      background-color: darken($color-primary, 8%);
    }
  }

  &--secondary {
    background-color: transparent;
    color: $color-primary;
    border: 2px solid $color-primary;

    &:hover:not(:disabled) {
      background-color: $color-primary;
      color: #fff;
    }
  }

  &--ghost {
    background-color: transparent;
    color: $color-text;

    &:hover:not(:disabled) {
      background-color: $color-bg-alt;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
