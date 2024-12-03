import Image from 'next/image'

import beetleImg from '../assets/beetle.png'
import { LanguageSwitcher } from './language-switcher'
import { NavLink } from './nav-link'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="">
      <section className="flex items-center justify-between border-b py-7">
        <div className="flex items-center">
          <div className="mr-10 flex items-center gap-2">
            <span className="text-xl font-semibold">ElmID</span>{' '}
            <Image src={beetleImg} alt="" height={25} />
          </div>
          <div className="flex gap-3">
            <Button
              variant="ghost"
              className="text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
              asChild
            >
              <NavLink href={`/`}>Home</NavLink>
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
              asChild
            >
              <NavLink href={`/introduction`}>Introdução</NavLink>
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
              asChild
            >
              <NavLink href={`/dataset`}>Dataset</NavLink>
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
              asChild
            >
              <NavLink href={`/contact`}>Contato</NavLink>
            </Button>
          </div>
        </div>

        <LanguageSwitcher />
      </section>
    </header>
  )
}
