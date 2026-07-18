<script setup>
const props = defineProps({
  narrow: { type: Boolean, default: false },
  wide: { type: Boolean, default: false },
})
</script>

<template>
  <div
    :class="['container', {
      'container--narrow': narrow,
      'container--wide': wide,
    }]"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  @include container;

  &--narrow {
    @include container(800px);
  }

  &--wide {
    @include container(1400px);
  }
}
</style>
