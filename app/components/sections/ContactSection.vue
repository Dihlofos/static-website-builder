<script setup>
const props = defineProps({
  heading: { type: String, required: true },
  subtitle: { type: String, default: '' },
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  address: { type: String, default: '' },
})
</script>

<template>
  <section id="contact" class="section contact">
    <Container narrow>
      <div class="contact__header">
        <h2 class="contact__heading">{{ heading }}</h2>
        <p v-if="subtitle" class="contact__subtitle">{{ subtitle }}</p>
      </div>

      <div class="contact__info">
        <a v-if="email" :href="`mailto:${email}`" class="contact__item">
          <Icon name="mail" :size="24" />
          <span>{{ email }}</span>
        </a>

        <a v-if="phone" :href="`tel:${phone.replace(/[\s()-]/g, '')}`" class="contact__item">
          <Icon name="phone" :size="24" />
          <span>{{ phone }}</span>
        </a>

        <div v-if="address" class="contact__item">
          <Icon name="map-pin" :size="24" />
          <span>{{ address }}</span>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  background-color: $color-bg;

  &__header {
    text-align: center;
    margin-bottom: $spacing-2xl;
  }

  &__heading {
    margin-bottom: $spacing-md;
  }

  &__subtitle {
    color: $color-text-muted;
    font-size: $font-size-lg;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: $spacing-lg;
    align-items: center;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    font-size: $font-size-lg;
    color: $color-text;
    transition: color $transition-fast;

    &:hover {
      color: $color-primary;
    }
  }
}
</style>
