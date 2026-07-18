<script setup>
import sectionsList from '~/../data/pages/index.json'

const { data: sections } = await useAsyncData('sections', () => {
  return Promise.all(
    sectionsList.map(async (name) => {
      const mod = await import(`~/../data/sections/${name}.json`)
      return { ...mod.default || mod, type: name }
    })
  )
})

useHead({
  title: 'Главная',
  meta: [
    { name: 'description', content: 'Современный статический сайт на Nuxt 3' },
  ],
})
</script>

<template>
  <main>
    <HeroSection
      v-if="sections?.[0]?.type === 'hero'"
      v-bind="sections[0]"
    />
    <FeaturesSection
      v-if="sections?.[1]?.type === 'features'"
      v-bind="sections[1]"
    />
    <AboutSection
      v-if="sections?.[2]?.type === 'about'"
      v-bind="sections[2]"
    />
    <CtaSection
      v-if="sections?.[3]?.type === 'cta'"
      v-bind="sections[3]"
    />
    <ContactSection
      v-if="sections?.[4]?.type === 'contact'"
      v-bind="sections[4]"
    />
  </main>
</template>
