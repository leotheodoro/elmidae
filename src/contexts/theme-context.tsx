'use client'

import React, { createContext, ReactNode, useContext } from 'react'

import { Theme, useTheme } from '@/hooks/useTheme'

type ThemeContextType = {
  theme: Theme
  changeTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeHook = useTheme()

  return (
    <ThemeContext.Provider value={themeHook}>{children}</ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }

  return context
}

