<script setup>
const props = defineProps({
  heading: { type: String, required: true },
  text: { type: String, default: '' },
  stats: { type: Array, default: () => [] },
})
</script>

<template>
  <section id="about" class="section about">
    <Container narrow>
      <div class="about__content">
        <h2 class="about__heading">{{ heading }}</h2>
        <div v-if="text" class="about__text">
          <p v-for="(paragraph, index) in text.split('\n')" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>

      <div v-if="stats.length" class="about__stats">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="about__stat"
        >
          <span class="about__stat-value">{{ stat.value }}</span>
          <span class="about__stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
.about {
  background-color: $color-bg-alt;
  text-align: center;

  &__heading {
    margin-bottom: $spacing-lg;
  }

  &__text {
    color: $color-text-muted;
    font-size: $font-size-lg;
    line-height: $line-height-relaxed;
    max-width: 640px;
    margin: 0 auto;

    p {
      margin-bottom: $spacing-md;
    }
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-lg;
    margin-top: $spacing-2xl;

    @include up('md') {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__stat {
    display: flex;
    flex-direction: column;
    gap: $spacing-xs;
  }

  &__stat-value {
    font-size: $font-size-3xl;
    font-weight: $font-weight-bold;
    color: $color-primary;

    @include up('md') {
      font-size: $font-size-4xl;
    }
  }

  &__stat-label {
    font-size: $font-size-sm;
    color: $color-text-muted;
  }
}
</style>
