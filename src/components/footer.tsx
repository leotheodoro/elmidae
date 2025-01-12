import Image from 'next/image'

import { useLanguageContext } from '@/contexts/language-context'

import logoUnicentro from '../assets/logo_unicentro.png'

export function Footer() {
  const { getTranslation } = useLanguageContext()

  return (
    <section className="flex items-center justify-between border-t pb-3 pt-5">
      {getTranslation('unicentroDescription')}
      <Image src={logoUnicentro} alt="Logo da Unicentro" height={80} />
    </section>
  )
}
