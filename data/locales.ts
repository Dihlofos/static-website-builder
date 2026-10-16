import commonRu from './common/ru'
import commonEn from './common/en'
import indexRu from './pages/index/ru'
import indexEn from './pages/index/en'
import { applyTypography } from './typography'

export const SUPPORTED_LOCALES = ['ru', 'en'] as const
export const DEFAULT_LOCALE = 'ru'

export const localeData = {
  ru: applyTypography({
    common: commonRu,
    pages: { index: indexRu },
  }, 'ru'),
  en: applyTypography({
    common: commonEn,
    pages: { index: indexEn },
  }, 'en'),
}
