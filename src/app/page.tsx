'use client'

import { Image as ImageIcon, TriangleAlert } from 'lucide-react'
import Image from 'next/image'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { useLanguageContext } from '@/contexts/language-context'

import introductionImg from '../assets/introduction.png'
import introductionEnImg from '../assets/introduction_en.jpg'

export default function Home() {
  const { getTranslation, language } = useLanguageContext()

  return (
    <main className="py-10">
      {getTranslation('homeDescription')}
      <Image
        src={language === 'pt-BR' ? introductionImg : introductionEnImg}
        alt=""
        width={1000}
        className="mx-auto"
      />
      <Button size={'lg'} variant={'default'} className="mx-auto flex gap-2">
        {getTranslation('uploadImage')} <ImageIcon className="h-5 w-5" />
      </Button>
      <Alert
        variant="destructive"
        className="mx-auto mt-5 max-w-4xl bg-red-100"
      >
        <TriangleAlert className="h-4 w-4" />
        <AlertTitle>{getTranslation('warning')}!</AlertTitle>
        <AlertDescription>{getTranslation('homeWarning')}</AlertDescription>
      </Alert>
    </main>
  )
}
