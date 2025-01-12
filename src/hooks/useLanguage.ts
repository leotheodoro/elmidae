import { useEffect, useState } from 'react'

import { TranslationKeys, translations } from '@/lib/dictionary/translations'

const LOCAL_STORAGE_LANGUAGE_KEY = '@elmidae/language'

export type Language = 'pt-BR' | 'en'

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('pt-BR')

  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      LOCAL_STORAGE_LANGUAGE_KEY,
    ) as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    console.log({ lang })
    setLanguage(lang)
    localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, lang)
  }

  const getTranslation = (key: keyof TranslationKeys): string => {
    return translations[language][key]
  }

  return { language, changeLanguage, getTranslation }
}
