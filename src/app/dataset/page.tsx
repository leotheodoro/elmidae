'use client'

import { Download, FileSpreadsheet, Github, Images } from 'lucide-react'
import Image from 'next/image'

import { ImageModal } from '@/components/image-modal'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguageContext } from '@/contexts/language-context'

import generosPHV1Img from '../../assets/generosPHV1.jpg'

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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="h-5 w-5 text-primary" />
                  {getTranslation('githubRepository')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  {getTranslation('githubRepositoryDescription')}
                </p>
                <Button className="w-full gap-2" variant="default" asChild>
                  <a
                    href="https://github.com/leotheodoro/elmidae-ml"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    {getTranslation('viewOnGithub')}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Images className="h-5 w-5 text-primary" />
                  {getTranslation('imageDataset')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  {getTranslation('imageDatasetDescription')}
                </p>
                <Button className="w-full gap-2" variant="default" asChild>
                  <a
                    href="https://drive.google.com/drive/folders/1u7DyQ0XsUjhyoXtX-JIvEY17nxpAG0n8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4" />
                    {getTranslation('viewDataset')}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="h-5 w-5 text-primary" />
                  {getTranslation('molecularData')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-sm text-muted-foreground">
                  {getTranslation('molecularDataDescription1')}
                </p>
                <p className="mb-4 text-sm text-muted-foreground">
                  {getTranslation('molecularDataDescription2')}
                </p>
                <Button className="w-full gap-2" variant="default" asChild>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1gRPC_O346cblkff2fky_6gKUhJ9Tt7jY/edit?usp=sharing&ouid=106082570214290973064&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileSpreadsheet className="h-4 w-4" />
                    {getTranslation('viewSpreadsheet')}
                  </a>
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

          {/* Genera Classification Visual */}
          <div className="mt-8 overflow-hidden rounded-xl border bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-xl dark:from-slate-900 dark:to-indigo-950">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                {getTranslation('trainingGeneraTitle')}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {getTranslation('trainingGeneraDescription')}
              </p>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-2xl dark:bg-slate-950">
              <ImageModal
                src={generosPHV1Img}
                alt="Elmidae Genera Classification"
                trigger={
                  <div className="group relative">
                    <Image
                      src={generosPHV1Img}
                      alt="Elmidae Genera Classification"
                      width={1400}
                      height={1000}
                      className="w-full transition-all duration-500 group-hover:scale-105"
                      priority
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
          </div>
        </div>
      </div>
    </main>
  )
}
