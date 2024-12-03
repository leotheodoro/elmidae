import { Image as ImageIcon, TriangleAlert } from 'lucide-react'
import Image from 'next/image'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

import introductionImg from '../assets/introduction.png'

export default function Home() {
  return (
    <main className="py-10">
      Bem-vindo ao AutoElmID! Envie sua imagem para realizar a identificação
      automatizada de besouros do gênero Elmidae da região Centro-Sul e Sudeste
      Paranaense. Utilizando tecnologia avançada, com redes neurais programadas
      em Python, nossa ferramenta analisa e identifica rapidamente a espécie,
      fornecendo informações precisas e detalhadas. Explore o mundo dos Elmidae
      com facilidade e precisão!
      <Image src={introductionImg} alt="" width={1000} className="mx-auto" />
      <Button size={'lg'} variant={'default'} className="mx-auto flex gap-2">
        Carregue sua imagem <ImageIcon className="h-5 w-5" />
      </Button>
      <Alert
        variant="destructive"
        className="mx-auto mt-5 max-w-4xl bg-red-100"
      >
        <TriangleAlert className="h-4 w-4" />
        <AlertTitle>Atenção!</AlertTitle>
        <AlertDescription>
          Este é um projeto piloto. Atualmente, o banco de dados é composto
          somente de Elmidae encontrados nas regiões Centro-Sul e Sudeste do
          Paraná.
        </AlertDescription>
      </Alert>
    </main>
  )
}
