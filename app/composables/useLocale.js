import { computed, inject, provide, ref } from 'vue'
import { DEFAULT_LOCALE, localeData, SUPPORTED_LOCALES } from '~/../data/locales'

const localeKey = Symbol('app-locale')

export function provideLocale() {
  const locale = ref(DEFAULT_LOCALE)

  function setLocale(nextLocale) {
    if (SUPPORTED_LOCALES.includes(nextLocale)) {
      locale.value = nextLocale
    }
  }

  const context = { locale, setLocale }
  provide(localeKey, context)

  return context
}

export function useLocale() {
  const context = inject(localeKey)

  if (!context) {
    throw new Error('useLocale must be called under the application locale provider')
  }

  return context
}

export function useLocaleData() {
  const { locale } = useLocale()
  return computed(() => localeData[locale.value])
}
