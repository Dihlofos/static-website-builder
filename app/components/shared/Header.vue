<script setup>
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
        <Navigation />
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
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: $tablet) {
      min-height: 0;
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
