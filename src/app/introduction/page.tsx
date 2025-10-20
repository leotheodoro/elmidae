'use client'

import Image from 'next/image'

import { ImageModal } from '@/components/image-modal'
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

          <ImageModal
            src={citiesImg}
            alt="Study regions map"
            trigger={
              <div className="group relative">
                <Image
                  src={citiesImg}
                  alt="Study regions map"
                  width={500}
                  className="rounded-lg border shadow-sm transition-all hover:shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/0 transition-all group-hover:bg-black/10">
                  <span className="text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                    Click to enlarge
                  </span>
                </div>
              </div>
            }
          />

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
