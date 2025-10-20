'use client'

import { Database, Download, Folder } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguageContext } from '@/contexts/language-context'

export default function Dataset() {
  const { getTranslation } = useLanguageContext()

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {getTranslation('dataset')}
            </h1>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <p className="leading-relaxed text-muted-foreground">
                {getTranslation('datasetDescription')}
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  {getTranslation('trainingData')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  {getTranslation('trainingDataDescription')}
                </p>
                <Button className="w-full gap-2" variant="default">
                  <Folder className="h-4 w-4" />
                  {getTranslation('dataset')}
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  {getTranslation('downloadDataset')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  {getTranslation('downloadDatasetDescription')}
                </p>
                <Button className="w-full gap-2" variant="outline">
                  <Download className="h-4 w-4" />
                  {getTranslation('download')}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 rounded-lg border bg-muted/50 p-6">
            <h3 className="mb-2 font-semibold">
              {getTranslation('aboutDataset')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {getTranslation('aboutDatasetDescription')}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
