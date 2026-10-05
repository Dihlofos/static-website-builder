<script setup>
import { toRef, computed } from 'vue'
import heroRu from '~/../data/sections/hero/ru'
import heroEn from '~/../data/sections/hero/en'
import faqRu from '~/../data/sections/faq/ru'
import faqEn from '~/../data/sections/faq/en'

const props = defineProps({
  locale: { type: String, default: null },
})
const { locale } = useLocale(toRef(props, 'locale'))
const heroByLocale = { ru: heroRu, en: heroEn }
const faqByLocale = { ru: faqRu, en: faqEn }
const heroData = computed(() => heroByLocale[locale.value])
const faqData = computed(() => faqByLocale[locale.value])

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
