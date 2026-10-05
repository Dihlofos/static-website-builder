import { computed, inject, provide, ref, unref } from 'vue'

const localeKey = Symbol('app-locale')
const supportedLocales = ['ru', 'en']

export function provideLocale() {
  const locale = ref('ru')

  function setLocale(nextLocale) {
    if (supportedLocales.includes(nextLocale)) {
      locale.value = nextLocale
    }
  }

  const context = { locale, setLocale }
  provide(localeKey, context)

  return context
}

export function useLocale(localeOverride) {
  const context = inject(localeKey)

  if (!context) {
    throw new Error('useLocale must be called under the application locale provider')
  }

  const locale = computed(() => {
    const override = unref(localeOverride)
    return supportedLocales.includes(override) ? override : context.locale.value
  })

  return { locale, setLocale: context.setLocale }
}
