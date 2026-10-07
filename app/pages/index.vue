<script setup>
import { computed } from 'vue'
import { useLocaleData } from '~/composables/useLocale'

const localeData = useLocaleData()
const pageData = computed(() => localeData.value.pages.index)
const heroData = computed(() => pageData.value.hero)
const faqData = computed(() => pageData.value.faq)

useHead({
  title: '',
})
</script>

<template>
  <main>
    <HeroSection v-bind="heroData" />
    <Faq :title="faqData.title" :items="faqData.items" :images="faqData.images" />
  </main>
</template>
