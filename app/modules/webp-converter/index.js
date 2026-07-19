import { defineNuxtModule } from '@nuxt/kit'
import { resolve } from 'node:path'

export default defineNuxtModule({
  meta: {
    name: 'webp-converter',
    version: '1.0.0',
    configKey: 'webp',
  },

  defaults: {
    quality: 85,
    cleanOrphans: true,
    skipInDev: false,
  },

  setup(options, nuxt) {
    if (nuxt.options.dev && options.skipInDev) {
      return
    }

    nuxt.hook('build:before', async () => {
      console.log('[webp-converter] Конвертация изображений в WebP...')
      const { convertImages } = await import('./convert.js')
      await convertImages(nuxt.options.srcDir, {
        quality: options.quality,
        cleanOrphans: options.cleanOrphans,
      })
    })
  },
})
