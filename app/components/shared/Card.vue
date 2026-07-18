<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  text: { type: String, default: '' },
  icon: { type: String, default: '' },
  variant: { type: String, default: 'default' }, // default, outlined, elevated
})
</script>

<template>
  <article :class="['card', `card--${variant}`]">
    <div v-if="icon" class="card__icon">
      <Icon :name="icon" :size="32" />
    </div>
    <h3 v-if="title" class="card__title">{{ title }}</h3>
    <p v-if="text" class="card__text">{{ text }}</p>
    <slot />
  </article>
</template>

<style lang="scss" scoped>
.card {
  padding: $spacing-lg;
  border-radius: $radius-lg;
  transition: all $transition-base;

  &--default {
    background-color: $color-bg-alt;
  }

  &--outlined {
    background-color: $color-bg;
    border: 1px solid $color-border;
  }

  &--elevated {
    background-color: $color-bg;
    box-shadow: $shadow-md;

    &:hover {
      box-shadow: $shadow-lg;
      transform: translateY(-2px);
    }
  }

  &__icon {
    margin-bottom: $spacing-md;
    color: $color-primary;
  }

  &__title {
    margin-bottom: $spacing-sm;
    font-size: $font-size-lg;
  }

  &__text {
    color: $color-text-muted;
    font-size: $font-size-sm;
    margin-bottom: 0;
  }
}
</style>
