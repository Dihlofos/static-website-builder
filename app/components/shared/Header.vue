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
        <Logo size="sm" />
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
  z-index: $z-sticky;
  background: transparent;
  transition: all $transition-base;
  padding: $spacing-md 0;

  &--scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    box-shadow: $shadow-sm;
    padding: $spacing-sm 0;
  }

  &__inner {
    @include flex-between;
  }
}
</style>
