<script setup>
import HeroSection from '~/components/sections/HeroSection.vue'
import FeaturesSection from '~/components/sections/FeaturesSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import CtaSection from '~/components/sections/CtaSection.vue'

import heroData from '~/../data/sections/hero.json'
import featuresData from '~/../data/sections/features.json'
import aboutData from '~/../data/sections/about.json'
import contactData from '~/../data/sections/contact.json'
import ctaData from '~/../data/sections/cta.json'

const sectionMap = {
  hero:     { component: HeroSection,     data: heroData },
  features: { component: FeaturesSection, data: featuresData },
  about:    { component: AboutSection,    data: aboutData },
  contact:  { component: ContactSection,  data: contactData },
  cta:      { component: CtaSection,      data: ctaData },
}

import sectionsList from '~/../data/pages/index.json'

const sections = sectionsList
  .map(name => sectionMap[name])
  .filter(Boolean)

useHead({
  title: 'Главная',
  meta: [
    { name: 'description', content: 'Современный статический сайт на Nuxt 3' },
  ],
})
</script>

<template>
  <main>
    <template v-for="(section, index) in sections" :key="index">
      <component
        :is="section.component"
        v-bind="section.data"
      />
    </template>
  </main>
</template>
