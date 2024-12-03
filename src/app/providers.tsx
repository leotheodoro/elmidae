'use client'

import { ReactNode } from 'react'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { LanguageProvider } from '@/contexts/language-context'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      {children}
      <Footer />
    </LanguageProvider>
  )
}
