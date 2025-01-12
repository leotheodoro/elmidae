'use client'

import { Link, LinkedinIcon, Mail } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useLanguageContext } from '@/contexts/language-context'

export default function Contact() {
  const { getTranslation } = useLanguageContext()

  return (
    <main className="py-10">
      <div className="grid grid-cols-4">
        <div className="flex flex-col items-center justify-center">
          <Avatar className="h-24 w-24">
            <AvatarFallback>EM</AvatarFallback>
            <AvatarImage src="/assets/contact/eduardo.jpg" />
          </Avatar>
          <h3 className="font-semibold text-foreground">Eduardo Mallet</h3>
          <span className="text-sm text-muted-foreground">
            {getTranslation('environmentalEngineer')}
          </span>
          <div>
            <Button size={'icon'} variant={'ghost'}>
              <a
                href="https://www.linkedin.com/in/eduardo-mallet-114567212"
                target="_blank"
              >
                <LinkedinIcon />
              </a>
            </Button>
            <Button size={'icon'} variant={'ghost'}>
              <a href="mailto:eng_mallet@outlook.com">
                <Mail />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Avatar className="h-24 w-24">
            <AvatarFallback>EA</AvatarFallback>
            <AvatarImage src="/assets/contact/elyton.jpeg" />
          </Avatar>
          <h3 className="font-semibold text-foreground">
            Elynton Alves do Nascimento
          </h3>
          <span className="text-center text-sm text-muted-foreground">
            {getTranslation('elytonDescription')}
          </span>
          <div>
            <Button size={'icon'} variant={'ghost'}>
              <a href="mailto:elynton@gmail.com">
                <Mail />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Avatar className="h-24 w-24">
            <AvatarFallback>VF</AvatarFallback>
            <AvatarImage src="/assets/contact/vinicius_ferreira.png" />
          </Avatar>
          <h3 className="font-semibold text-foreground">
            Vinicius Ferreira de Souza
          </h3>
          <span className="text-center text-sm text-muted-foreground">
            {getTranslation('viniciusDescription')}
          </span>
          <div>
            <Button size={'icon'} variant={'ghost'}>
              <a href="https://cantharoid.com/" target="_blank">
                <Link />
              </a>
            </Button>
            <Button size={'icon'} variant={'ghost'}>
              <a href="mailto:vinicius.ferreira@senckenberg.de">
                <Mail />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Avatar className="h-24 w-24">
            <AvatarFallback>LT</AvatarFallback>
            <AvatarImage src="/assets/contact/leonardo.jpg" />
          </Avatar>
          <h3 className="font-semibold text-foreground">Leonardo Theodoro</h3>
          <span className="text-sm text-muted-foreground">
            {getTranslation('developer')}
          </span>
          <div>
            <Button size={'icon'} variant={'ghost'}>
              <a
                href="https://www.linkedin.com/in/leonardo-theodoro/"
                target="_blank"
              >
                <LinkedinIcon />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Alert className="mx-auto mt-10 max-w-[680px]">
        <AlertTitle>{getTranslation('warning')}!</AlertTitle>
        <AlertDescription className="flex flex-col items-center justify-center">
          {getTranslation('contactWarning')}
          <div className="flex gap-2">
            <Button size={'icon'}>
              <Link />
            </Button>
            <Button size={'icon'}>
              <Mail />
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    </main>
  )
}
