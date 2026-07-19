import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  srcDir: __dirname,

  modules: [
    './modules/webp-converter',
  ],

  css: ['~/assets/scss/main.scss'],

  ssr: true,

  app: {
    buildAssetsDir: '_assets/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  components: {
    dirs: [
      { path: '~/components/ui', pathPrefix: false },
      { path: '~/components/shared', pathPrefix: false },
      { path: '~/components/sections', pathPrefix: false },
    ],
  },

  nitro: {
    static: true,
    compressHTML: false,
    minify: false,
  },

  experimental: {
    inlineSSRStyles: false,
  },

  routeRules: {
    '/**': { prerender: true },
  },

  typescript: {
    strict: false,
    typeCheck: false,
    shim: false,
    tsConfig: {
      compilerOptions: {
        strict: false,
        noImplicitAny: false,
        noUnusedLocals: false,
        noUnusedParameters: false,
        allowJs: true,
        checkJs: false,
      },
    },
  },

  vite: {
    build: {
      minify: false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/variables" as *;
            @use "~/assets/scss/mixins" as *;
            @use "~/assets/scss/breakpoints" as *;
          `,
          sassOptions: {
            quietDeps: true,
            silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
          },
        },
      },
    },
  },

  watch: ['../data/**/*.json'],
})
