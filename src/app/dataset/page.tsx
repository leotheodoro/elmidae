import { Folder, TableOfContents } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Dataset() {
  return (
    <main className="py-10">
      <p>
        Este foi o conjunto de dados utilizado para o treinamento do modelo de
        aprendizado de máquina, utilizando a biblioteca TensorFlow, envolvendo
        XX gêneros de Elmidae. Abaixo está uma lista completa de todos os táxons
        incluídos no estudo, juntamente com suas respectivas informações.
      </p>

      <div className="mt-5 flex justify-center gap-2">
        <Button className="flex gap-2">
          Dataset <Folder className="h-5 w-5" />{' '}
        </Button>
        <Button className="flex gap-2">
          Táxons <TableOfContents className="h-5 w-5" />{' '}
        </Button>
      </div>
    </main>
  )
}
