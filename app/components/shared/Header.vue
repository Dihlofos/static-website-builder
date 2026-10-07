<script setup>
defineProps({
  navigation: { type: Object, required: true },
  ui: { type: Object, required: true },
})
const { locale, setLocale } = useLocale()
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <Container>
      <div class="header__inner">
        <Navigation :navigation="navigation" :ui="ui" />
        <div class="header__locale" role="group" :aria-label="ui.languageSwitcher">
          <button type="button" :aria-pressed="locale === 'ru'" @click="setLocale('ru')">Русский</button>
          <button type="button" :aria-pressed="locale === 'en'" @click="setLocale('en')">English</button>
        </div>
      </div>
    </Container>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1020;
  background: transparent;
  transition: all 250ms ease;
  padding: 2.6rem 0;
  background-color: $magenta;

  @media (max-width: $tablet) {
    background: transparent;
    padding: 0;
  }

  &--scrolled {
    backdrop-filter: blur(8px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    padding: 0.8rem 0;

    @media (max-width: $tablet) {
      padding: 0;
      backdrop-filter: none;
      box-shadow: none;
    }
  }

  &__inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: $tablet) {
      min-height: 0;
    }
  }

  &__locale {
    position: absolute;
    top: 50%;
    right: 0;
    display: flex;
    gap: 0.4rem;
    transform: translateY(-50%);

    button {
      border: 1px solid $white;
      border-radius: 2rem;
      background: transparent;
      color: $white;
      cursor: pointer;
      font-family: $monserrat;
      font-size: 1.4rem;
      padding: 0.6rem 1rem;

      &[aria-pressed='true'] {
        background: $white;
        color: $magenta;
      }

      &:focus-visible {
        outline: 2px solid $white;
        outline-offset: 2px;
      }
    }

    @media (max-width: $tablet) {
      position: fixed;
      top: 1.2rem;
      right: auto;
      left: 1.6rem;
      z-index: 1031;
      transform: none;
    }
  }

  &__logo {
    text-decoration: none;
    color: #1e293b;
    font-weight: 700;
    font-size: 16px;

    &:hover {
      color: #0055ff;
    }
  }
}
</style>
