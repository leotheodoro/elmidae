'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { useLanguageContext } from '@/contexts/language-context'

import logoImg from '../assets/elmidae_logo.png'
import { LanguageSwitcher } from './language-switcher'
import { NavLink } from './nav-link'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export function Header() {
  const { getTranslation } = useLanguageContext()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: getTranslation('home') },
    { href: '/introduction', label: getTranslation('introduction') },
    { href: '/dataset', label: getTranslation('dataset') },
    { href: '/contact', label: getTranslation('contact') },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <Image
            src={logoImg}
            alt="Elmidae Logo"
            height={50}
            width={50}
            className="h-12 w-auto"
          />
          <span className="text-xl font-semibold tracking-tight">Elmidae</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground data-[current=true]:text-foreground"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="md:hidden">
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 py-8">
                <div className="mb-4 flex items-center gap-3 border-b pb-4">
                  <Image
                    src={logoImg}
                    alt="Elmidae Logo"
                    height={40}
                    width={40}
                  />
                  Elmidae
                </div>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-md px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground data-[current=true]:bg-accent data-[current=true]:text-foreground"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
