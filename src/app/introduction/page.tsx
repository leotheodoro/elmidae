import Image from 'next/image'

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import citiesImg from '../../assets/cities.jpg'

const cities = [
  'Campina do Simão',
  'Fernandes Pinheiro',
  'Irati',
  'Rebouças',
  'Rio Azul',
  'Teixeira Soares',
  'Turvo',
  'Distrito de Guamirím',
]

export default function Introduction() {
  return (
    <main className="py-10">
      <Tabs defaultValue="introduction">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="introduction">Introdução</TabsTrigger>
          <TabsTrigger value="cities">Municípios de Estudo</TabsTrigger>
        </TabsList>
        <TabsContent value="introduction">
          <p>
            Este projeto, AutoElmID, faz parte da dissertação de mestrado do
            aluno Eduardo Rodrigo Viana Mallet - Engenheiro Ambiental,
            desenvolvido em parceria com Leonardo Theodoro - Developer, a
            Universidade Estadual do Centro-Oeste e a Senckenberg Entomological
            Institute, sob a supervisão dos professores doutores Elynton Alves
            do Nascimento e Vinícius Ferreira.
          </p>
        </TabsContent>
        <TabsContent value="cities">
          <p>
            Atualmente, o banco de dados concentra-se nas espécies de Elmidae
            encontradas nas regiões Centro-Sul e Sudeste do Paraná, que servem
            como base para este estudo.
          </p>

          <Image src={citiesImg} alt="" width={500} />

          <Table className="mt-4">
            <TableBody>
              {cities.map((city) => {
                return (
                  <TableRow key={city}>
                    <TableCell>{city}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </main>
  )
}
