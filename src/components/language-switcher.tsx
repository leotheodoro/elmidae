import { useLanguageContext } from '../contexts/language-context'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguageContext()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{language.toUpperCase()}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => changeLanguage('pt-BR')}>
          PT-BR
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('en')}>
          EN
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
