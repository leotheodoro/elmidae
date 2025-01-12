import { Language } from '@/hooks/useLanguage'

import { en } from './en'
import { ptBR } from './pt-BR'

export type TranslationKeys = {
  contact: string
  dataset: string
  introduction: string
  home: string
  homeDescription: string
  studyRegions: string
  studyRegionsDescription: string
  unicentroDescription: string
  uploadImage: string
  warning: string
  homeWarning: string
  introductionDescription: string
  datasetDescription: string
  taxa: string
  contactWarning: string
  developer: string
  environmentalEngineer: string
  viniciusDescription: string
  elytonDescription: string
}

type Translations = {
  [lang in Language]: TranslationKeys
}

export const translations: Translations = {
  'pt-BR': ptBR,
  en,
}
