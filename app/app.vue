<script setup>
import site from '~/../data/site.json'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} — ${site.title}` : site.title
  },
  meta: [
    { name: 'description', content: site.description },
    { name: 'keywords', content: site.keywords?.join(', ') },
    { property: 'og:title', content: site.title },
    { property: 'og:description', content: site.description },
    { property: 'og:image', content: site.ogImage || '/images/og-image.png' },
    { property: 'og:type', content: 'website' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: site.favicon || '/favicon.ico' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
// Глобальные стили — only main.scss
</style>
