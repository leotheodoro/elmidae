'use client'

import { Moon, Sun } from 'lucide-react'

import { useThemeContext } from '@/contexts/theme-context'

import { Switch } from './ui/switch'

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext()
  const isDark = theme === 'dark'

  return (
    <div className="flex items-center gap-2">
      <Sun
        className={`h-4 w-4 transition-colors ${
          isDark ? 'text-muted-foreground' : 'text-yellow-500'
        }`}
      />
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <Moon
        className={`h-4 w-4 transition-colors ${
          isDark ? 'text-blue-400' : 'text-muted-foreground'
        }`}
      />
    </div>
  )
}
