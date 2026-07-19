<script setup>
import heroData from '~/../data/sections/hero.json'
import faqData from '~/../data/sections/faq.json'

// Здесь можно переписать title и description для каждой страницы, если нужно
useHead({
  title: ''
})
</script>

<template>
  <main>
    <HeroSection v-bind="heroData" />
    <Faq :title="faqData.title" :items="faqData.items" :images="faqData.images" />
  </main>
</template>
