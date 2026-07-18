<script setup>
const props = defineProps({
  heading: { type: String, required: true },
  text: { type: String, default: '' },
  button: { type: Object, default: () => ({}) },
})
</script>

<template>
  <section class="section cta">
    <Container narrow>
      <div class="cta__content">
        <h2 class="cta__heading">{{ heading }}</h2>
        <p v-if="text" class="cta__text">{{ text }}</p>
        <Button
          v-if="button?.text"
          :to="button.link"
          variant="primary"
          size="lg"
        >
          {{ button.text }}
        </Button>
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
.cta {
  background: linear-gradient(135deg, $color-primary, $color-secondary);
  text-align: center;
  color: #fff;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-lg;
  }

  &__heading {
    color: #fff;
  }

  &__text {
    color: rgba(255, 255, 255, 0.9);
    font-size: $font-size-lg;
    max-width: 540px;
  }
}
</style>
