<script setup>
const props = defineProps({
  heading: { type: String, required: true },
  subtitle: { type: String, default: '' },
  items: { type: Array, default: () => [] },
})
</script>

<template>
  <section id="features" class="section features">
    <Container>
      <div class="features__header">
        <h2 class="features__heading">{{ heading }}</h2>
        <p v-if="subtitle" class="features__subtitle">{{ subtitle }}</p>
      </div>

      <div v-if="items.length" class="features__grid">
        <Card
          v-for="(item, index) in items"
          :key="index"
          :title="item.title"
          :text="item.text"
          :icon="item.icon"
          variant="elevated"
        />
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
.features {
  background-color: $color-bg;

  &__header {
    text-align: center;
    max-width: 640px;
    margin: 0 auto $spacing-2xl;
  }

  &__heading {
    margin-bottom: $spacing-md;
  }

  &__subtitle {
    color: $color-text-muted;
    font-size: $font-size-lg;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-lg;

    @include up('sm') {
      grid-template-columns: repeat(2, 1fr);
    }

    @include up('lg') {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
