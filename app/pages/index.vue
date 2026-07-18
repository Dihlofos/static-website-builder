<script setup>
import heroData from '~/../data/sections/hero.json'
import faqData from '~/../data/sections/faq.json'

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
    <Faq :title="faqData.title" :items="faqData.items" />
  </main>
</template>
