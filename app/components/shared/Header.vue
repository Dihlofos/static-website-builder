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
        <a href="/" class="header__logo">Template</a>
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
  padding: 16px 0;

  &--scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    padding: 8px 0;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
