import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkg = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), 'utf-8'))
const buildVersion = pkg.version + '-' + Date.now().toString(36)

export default defineNuxtConfig({
  srcDir: __dirname,

  css: ['~/assets/scss/main.scss'],

  ssr: true,

  app: {
    buildAssetsDir: `/build/${buildVersion}/`,
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  nitro: {
    static: true,
    minify: false,
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
