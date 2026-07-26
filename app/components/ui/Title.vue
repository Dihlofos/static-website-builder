<script setup>
defineProps({
  tag: { type: String, default: 'h2' },
  white: { type: Boolean, default: false },
})
</script>

<template>
  <component :is="tag" :class="['title', { 'title--white': white }]">
    <slot />
  </component>
</template>

<style lang="scss">
.title {
  :where(&) {
    font-family: $monserrat;
    font-size: 6rem;
    font-style: italic;
    font-weight: 700;
    line-height: 1.1;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 6rem;
  }

  &--white { color: $white; }

  @media (max-width: $tablet) {
    font-size: 5rem;
  }

  @media (max-width: $mobile) {
    font-size: 3rem;
  }
}
</style>
