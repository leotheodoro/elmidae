import Image from 'next/image'

import logoUnicentro from '../assets/logo_unicentro.png'

export function Footer() {
  return (
    <section className="flex items-center justify-between border-t pb-3 pt-5">
      Laboratório de Biodiversidade e Conservação Departamento de Engenharia
      Ambiental
      <Image src={logoUnicentro} alt="Logo da Unicentro" height={80} />
    </section>
  )
}
