import commonRu from './common/ru'
import indexRu from './pages/index/ru'
import { applyTypography } from './typography'

export const SUPPORTED_LOCALES = ['ru'] as const
export const DEFAULT_LOCALE = 'ru'

export const localeData = {
  ru: applyTypography({
    common: commonRu,
    pages: { index: indexRu },
  }, 'ru'),
}
