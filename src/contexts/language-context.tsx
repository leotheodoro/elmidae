// contexts/LanguageContext.tsx
import React, { createContext, ReactNode, useContext } from 'react'

import { useLanguage } from '../hooks/useLanguage'

type LanguageContextType = {
  language: 'pt-BR' | 'en'
  changeLanguage: (lang: 'pt-BR' | 'en') => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
)

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const languageState = useLanguage()

  return (
    <LanguageContext.Provider value={languageState}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageProvider')
  }
  return context
}
