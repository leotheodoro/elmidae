import { useEffect, useState } from 'react'

const LOCAL_STORAGE_LANGUAGE_KEY = '@elmidae/language'

type Language = 'pt-BR' | 'en'

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

  return { language, changeLanguage }
}
