import Image from 'next/image'

import { useLanguageContext } from '@/contexts/language-context'

import logoImg from '../assets/elmidae_logo.png'
import { LanguageSwitcher } from './language-switcher'
import { NavLink } from './nav-link'
import { Button } from './ui/button'

export function Header() {
  const { getTranslation } = useLanguageContext()

  return (
    <header className="">
      <section className="flex items-center justify-between border-b py-7">
        <div className="flex items-center">
          <div className="mr-2 flex items-center justify-center gap-2">
            <Image src={logoImg} alt="" height={70} />
          </div>
          <div className="flex gap-3">
            <Button
              variant="ghost"
              className="text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
              asChild
            >
              <NavLink href={`/`}>{getTranslation('home')}</NavLink>
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
              asChild
            >
              <NavLink href={`/introduction`}>
                {getTranslation('introduction')}
              </NavLink>
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
              asChild
            >
              <NavLink href={`/dataset`}>{getTranslation('dataset')}</NavLink>
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
              asChild
            >
              <NavLink href={`/contact`}>{getTranslation('contact')}</NavLink>
            </Button>
          </div>
        </div>

        <LanguageSwitcher />
      </section>
    </header>
  )
}
