'use client'

import { Image as ImageIcon, TriangleAlert } from 'lucide-react'
import Image from 'next/image'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { useLanguageContext } from '@/contexts/language-context'

import introductionImg from '../assets/introduction.jpg'
import introductionEnImg from '../assets/introduction_en.jpg'

export default function Home() {
  const { getTranslation, language } = useLanguageContext()

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-12 md:px-8 md:py-16">
        {/* Hero Section */}
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Elmidae
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {getTranslation('homeDescription')}
            </p>
          </div>

          {/* Diagram Image */}
          <div className="mb-12">
            <Image
              src={language === 'pt-BR' ? introductionImg : introductionEnImg}
              alt="Elmidae Workflow"
              width={1000}
              height={600}
              className="mx-auto rounded-lg border shadow-lg"
              priority
            />
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="gap-2 px-8 py-6 text-base font-semibold shadow-lg transition-all hover:scale-105"
            >
              {getTranslation('uploadImage')}
              <ImageIcon className="h-5 w-5" />
            </Button>
          </div>

          {/* Warning Alert */}
          <Alert
            variant="destructive"
            className="mx-auto mt-12 max-w-3xl border-red-200 bg-red-50"
          >
            <TriangleAlert className="h-5 w-5" />
            <AlertTitle className="text-base font-semibold">
              {getTranslation('warning')}!
            </AlertTitle>
            <AlertDescription className="text-sm">
              {getTranslation('homeWarning')}
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </main>
  )
}
