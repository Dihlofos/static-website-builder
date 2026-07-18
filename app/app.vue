<script setup>
import site from '~/../data/site.json'

const YM_ID = '110537821' // ⚠️ ЗДЕСЬ МЕНЯТЬ ID ЯНДЕКС.МЕТРИКИ

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
  script: [
    {
      innerHTML: `
(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YM_ID}', 'ym');

ym(${YM_ID}, 'init', {
    ssr:true,
    webvisor:true,
    clickmap:true,
    ecommerce:"dataLayer",
    referrer: document.referrer,
    url: location.href,
    accurateTrackBounce:true,
    trackLinks:true
});`,
      type: 'text/javascript',
    },
  ],
})
</script>

<template>
  <!-- ⚠️ ЯНДЕКС.МЕТРИКА: noscript — в самом начале body -->
  <noscript>
    <div>
      <img src="https://mc.yandex.ru/watch/110537821"
           style="position:absolute; left:-9999px;"
           alt="" />
    </div>
  </noscript>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
// Глобальные стили — only main.scss
</style>
