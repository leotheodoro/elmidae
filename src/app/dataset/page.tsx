'use client'

import { Folder } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useLanguageContext } from '@/contexts/language-context'

export default function Dataset() {
  const { getTranslation } = useLanguageContext()

  return (
    <main className="py-10">
      <p>{getTranslation('datasetDescription')}</p>

      <div className="mt-5 flex justify-center gap-2">
        <Button className="flex gap-2">
          {getTranslation('dataset')} <Folder className="h-5 w-5" />{' '}
        </Button>
      </div>
    </main>
  )
}
