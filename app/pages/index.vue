<script setup>
import heroData from '~/../data/sections/hero.json'

useHead({
  title: 'Главная',
  meta: [
    { name: 'description', content: 'Современный статический сайт на Nuxt 3' },
  ],
})
</script>

<template>
  <main>
    <HeroSection v-bind="heroData" />
  </main>
</template>
