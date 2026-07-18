<script setup>
</script>

<template>
  <div class="page">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

// Ensure content pushes footer down
main {
  flex: 1;
}
</style>
