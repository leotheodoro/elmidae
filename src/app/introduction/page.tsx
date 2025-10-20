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
    <main className="flex-1">
      <div className="container mx-auto px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
            {getTranslation('introduction')}
          </h1>

          <Tabs defaultValue="introduction" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
              <TabsTrigger value="introduction" className="text-sm">
                {getTranslation('introduction')}
              </TabsTrigger>
              <TabsTrigger value="cities" className="text-sm">
                {getTranslation('studyRegions')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="introduction" className="mt-8">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <p className="leading-relaxed text-muted-foreground">
                  {getTranslation('introductionDescription')}
                </p>
              </div>
            </TabsContent>

            <TabsContent value="cities" className="mt-8">
              <div className="space-y-8">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <p className="leading-relaxed text-muted-foreground">
                    {getTranslation('studyRegionsDescription')}
                  </p>
                </div>

                <div className="flex justify-center">
                  <ImageModal
                    src={citiesImg}
                    alt="Study regions map"
                    trigger={
                      <div className="group relative">
                        <Image
                          src={citiesImg}
                          alt="Study regions map"
                          width={600}
                          height={400}
                          className="rounded-lg border shadow-md transition-all hover:shadow-xl"
                        />
                        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/0 transition-all group-hover:bg-black/10">
                          <span className="rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                            {getTranslation('clickToEnlarge')}
                          </span>
                        </div>
                      </div>
                    }
                  />
                </div>

                <div className="rounded-lg border bg-card shadow-sm">
                  <div className="border-b p-4">
                    <h3 className="font-semibold">
                      {getTranslation('studyRegions')}
                    </h3>
                  </div>
                  <Table>
                    <TableBody>
                      {cities.map((city) => (
                        <TableRow key={city}>
                          <TableCell className="font-medium">{city}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
