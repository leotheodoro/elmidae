import { Language } from '@/hooks/useLanguage'

import { en } from './en'
import { ptBR } from './pt-BR'

// Infer the type from the actual translation objects
export type TranslationKeys = typeof en

type Translations = {
  [lang in Language]: TranslationKeys
}

export const translations: Translations = {
  'pt-BR': ptBR,
  en,
}
