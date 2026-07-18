<script setup>
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  button: { type: Object, default: () => ({}) },
  secondaryButton: { type: Object, default: () => ({}) },
  backgroundImage: { type: String, default: '' },
})

const bgStyle = computed(() => {
  if (!props.backgroundImage) return {}
  const fileName = props.backgroundImage.replace('components/HeroSection/', '')
  return {
    backgroundImage: `url(/components/HeroSection/${fileName})`,
  }
})
</script>

<template>
  <section id="hero" class="hero" :style="bgStyle">
    <Container>
      <div class="hero__content">
        <h1 class="hero__title">{{ title }}</h1>
        <p v-if="subtitle" class="hero__subtitle">{{ subtitle }}</p>
        <div v-if="button || secondaryButton" class="hero__actions">
          <Button v-if="button?.text" :to="button.link" variant="primary" size="lg">
            {{ button.text }}
          </Button>
          <Button v-if="secondaryButton?.text" :to="secondaryButton.link" variant="secondary" size="lg">
            {{ secondaryButton.text }}
          </Button>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-color: #0f172a;
  position: relative;

  // Overlay for readability
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.9) 0%,
      rgba(15, 23, 42, 0.6) 100%
    );
  }

  &__content {
    position: relative;
    z-index: 1;
    max-width: 720px;
  }

  &__title {
    color: #fff;
    font-size: 36px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
      font-size: 48px;
    }

    @media (min-width: 1024px) {
      font-size: 60px;
    }
  }

  &__subtitle {
    color: #94a3b8;
    font-size: 18px;
    margin-bottom: 32px;
    line-height: 1.75;
    max-width: 540px;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  &__actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }
}
</style>
