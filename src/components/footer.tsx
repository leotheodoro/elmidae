import Image from 'next/image'

import { useLanguageContext } from '@/contexts/language-context'

import logoUnicentro from '../assets/logo_unicentro.png'

export function Footer() {
  const { getTranslation } = useLanguageContext()

  return (
    <footer className="mt-auto border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-8">
            <Image
              src={logoUnicentro}
              alt="Logo da Unicentro"
              height={80}
              width={120}
              className="h-20 w-auto"
            />
            <div className="max-w-md text-center text-sm text-muted-foreground md:text-left">
              {getTranslation('unicentroDescription')}
            </div>
          </div>
          <div className="text-center text-xs text-muted-foreground md:text-right">
            <p>© {new Date().getFullYear()} Elmidae</p>
            <p className="mt-1">{getTranslation('allRightsReserved')}</p>
            <p className="mt-1">
              {getTranslation('developedBy')}{' '}
              <a
                href="https://www.linkedin.com/in/leonardo-theodoro/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Leonardo Theodoro
              </a>{' '}
              {getTranslation('and')}{' '}
              <a
                href="https://www.linkedin.com/in/nathancamolez/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Nathan Camolez
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
