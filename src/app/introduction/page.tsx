'use client'

import Image from 'next/image'

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useLanguageContext } from '@/contexts/language-context'

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
  const { getTranslation } = useLanguageContext()

  return (
    <main className="py-10">
      <Tabs defaultValue="introduction">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="introduction">
            {getTranslation('introduction')}
          </TabsTrigger>
          <TabsTrigger value="cities">
            {getTranslation('studyRegions')}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="introduction">
          <p>{getTranslation('introductionDescription')}</p>
        </TabsContent>
        <TabsContent value="cities" className="flex flex-col items-center">
          <p>{getTranslation('studyRegionsDescription')}</p>

          <Image src={citiesImg} alt="" width={500} />

          <Table className="mt-4">
            <TableBody>
              {cities.map((city) => {
                return (
                  <TableRow key={city} className="text-center">
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
