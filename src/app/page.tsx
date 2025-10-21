'use client'

import {
  CheckCircle,
  Image as ImageIcon,
  Loader2,
  TriangleAlert,
  X,
} from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useLanguageContext } from '@/contexts/language-context'
import { useThemeContext } from '@/contexts/theme-context'
import {
  extractGenusFromClass,
  formatConfidence,
  type Prediction,
  uploadImage,
} from '@/services/upload'

import introductionImg from '../assets/introduction.png'
import introductionDarkImg from '../assets/introduction_darker.png'
import introductionDarkEnImg from '../assets/introduction_darker_en.png'
import introductionEnImg from '../assets/introduction_en.png'

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

export default function Home() {
  const { getTranslation, language } = useLanguageContext()
  const { theme } = useThemeContext()

  // File upload state
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [validationError, setValidationError] = useState<string | null>(null)
  const [predictionResult, setPredictionResult] = useState<Prediction | null>(
    null,
  )
  const [isLowConfidence, setIsLowConfidence] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const CONFIDENCE_THRESHOLD = 15 // Minimum confidence percentage

  // Select the correct image based on theme and language
  const getIntroductionImage = () => {
    if (theme === 'dark') {
      return language === 'pt-BR' ? introductionDarkImg : introductionDarkEnImg
    }
    return language === 'pt-BR' ? introductionImg : introductionEnImg
  }

  // Cleanup preview URL on unmount
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl)
      }
    }
  }, [previewUrl])

  // Handle file input click
  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  // Validate file
  const validateFile = (file: File): string | null => {
    // Check file type
    if (!file.type.startsWith('image/')) {
      return getTranslation('invalidFileType')
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return getTranslation('fileTooLarge')
    }

    return null
  }

  // Handle file selection
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    // Reset states
    setValidationError(null)
    setUploadError(null)
    setUploadSuccess(false)

    if (!file) return

    // Validate file
    const error = validateFile(file)
    if (error) {
      setValidationError(error)
      return
    }

    // Create preview URL
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
    setSelectedFile(file)
    setIsPreviewOpen(true)

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Handle upload submission
  const handleSubmit = async () => {
    if (!selectedFile) return

    setIsUploading(true)
    setUploadError(null)
    setIsLowConfidence(false)

    try {
      const response = await uploadImage(selectedFile)

      if (response.success && response.top_prediction) {
        setPredictionResult(response.top_prediction)

        // Check if confidence is below threshold
        if (response.top_prediction.confidence < CONFIDENCE_THRESHOLD) {
          setIsLowConfidence(true)
          setUploadSuccess(false)
        } else {
          setUploadSuccess(true)
          setIsLowConfidence(false)
        }
      } else {
        setUploadError(
          response.message || getTranslation('uploadErrorDescription'),
        )
      }
    } catch (error) {
      setUploadError(getTranslation('uploadErrorDescription'))
    } finally {
      setIsUploading(false)
    }
  }

  // Handle cancel/close preview
  const handleClosePreview = () => {
    setIsPreviewOpen(false)
    setSelectedFile(null)
    setUploadSuccess(false)
    setUploadError(null)
    setPredictionResult(null)
    setIsLowConfidence(false)

    // Cleanup preview URL
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
      setPreviewUrl(null)
    }
  }

  // Handle upload another image
  const handleUploadAnother = () => {
    setSelectedFile(null)
    setUploadSuccess(false)
    setUploadError(null)
    setPredictionResult(null)
    setIsLowConfidence(false)

    // Cleanup preview URL
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
      setPreviewUrl(null)
    }

    // Trigger file picker immediately
    setTimeout(() => {
      fileInputRef.current?.click()
    }, 100)
  }

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
              src={getIntroductionImage()}
              alt="Elmidae Workflow"
              width={1000}
              height={600}
              className="mx-auto rounded-lg border shadow-lg"
              priority
            />
          </div>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="gap-2 px-8 py-6 text-base font-semibold shadow-lg transition-all hover:scale-105"
              onClick={handleUploadClick}
            >
              {getTranslation('uploadImage')}
              <ImageIcon className="h-5 w-5" />
            </Button>
          </div>

          {/* Validation Error Alert */}
          {validationError && (
            <Alert
              variant="destructive"
              className="mx-auto mt-6 max-w-3xl border-red-200 bg-red-50"
            >
              <X className="h-5 w-5" />
              <AlertTitle className="text-base font-semibold">
                {getTranslation('fileValidationError')}
              </AlertTitle>
              <AlertDescription className="text-sm">
                {validationError}
              </AlertDescription>
            </Alert>
          )}

          {/* Success Alert */}
          {uploadSuccess && !isPreviewOpen && (
            <Alert className="mx-auto mt-6 max-w-3xl border-green-200 bg-green-50 text-green-900">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <AlertTitle className="text-base font-semibold">
                {getTranslation('uploadSuccess')}
              </AlertTitle>
            </Alert>
          )}

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

      {/* Preview Dialog */}
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-hidden">
          <DialogHeader>
            <DialogTitle>{getTranslation('previewImageTitle')}</DialogTitle>
            <DialogDescription>
              {getTranslation('previewImageDescription')}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 max-h-[calc(90vh-12rem)] overflow-y-auto pr-2">
            {previewUrl && (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                <Image
                  src={previewUrl}
                  alt="Preview"
                  fill
                  className="object-contain"
                />
              </div>
            )}

            {selectedFile && (
              <div className="mt-4 rounded-lg bg-muted p-3">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">
                    {getTranslation('selectFile')}:
                  </span>{' '}
                  {selectedFile.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Size:</span>{' '}
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            )}

            {/* Upload Error Alert */}
            {uploadError && (
              <Alert
                variant="destructive"
                className="mt-4 border-red-200 bg-red-50"
              >
                <X className="h-5 w-5" />
                <AlertTitle className="text-base font-semibold">
                  {getTranslation('uploadError')}
                </AlertTitle>
                <AlertDescription className="text-sm">
                  {uploadError}
                </AlertDescription>
              </Alert>
            )}

            {/* Low Confidence Error */}
            {isLowConfidence && predictionResult && (
              <div className="mt-4 space-y-4">
                <Alert
                  variant="destructive"
                  className="border-red-200 bg-red-50"
                >
                  <TriangleAlert className="h-5 w-5" />
                  <AlertTitle className="text-base font-semibold">
                    {getTranslation('lowConfidenceError')}
                  </AlertTitle>
                  <AlertDescription className="text-sm">
                    {getTranslation('lowConfidenceDescription')}
                  </AlertDescription>
                </Alert>

                <div className="rounded-lg border-2 border-orange-300 bg-orange-50 p-4 dark:border-orange-700 dark:bg-orange-950">
                  <p className="mb-2 text-sm font-medium text-muted-foreground">
                    {getTranslation('confidenceLevel')}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-500"
                          style={{
                            width: `${Math.min(predictionResult.confidence, 100)}%`,
                          }}
                        />
                      </div>
                    </div>
                    <span className="text-xl font-bold text-orange-700 dark:text-orange-400">
                      {formatConfidence(predictionResult.confidence)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Prediction Results */}
            {uploadSuccess && predictionResult && (
              <div className="mt-4 space-y-4">
                <Alert className="border-green-200 bg-green-50 text-green-900">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <AlertTitle className="text-base font-semibold">
                    {getTranslation('uploadSuccess')}
                  </AlertTitle>
                </Alert>

                <div className="rounded-lg border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 p-6 shadow-lg dark:from-green-950 dark:to-emerald-950">
                  <h3 className="mb-4 text-center text-xl font-bold text-green-900 dark:text-green-100">
                    {getTranslation('predictionResults')}
                  </h3>

                  <div className="space-y-4">
                    {/* Identified Genus */}
                    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
                      <p className="mb-2 text-sm font-medium text-muted-foreground">
                        {getTranslation('identifiedGenus')}
                      </p>
                      <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                        {extractGenusFromClass(predictionResult.class)}
                      </p>
                    </div>

                    {/* Confidence Level */}
                    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
                      <p className="mb-2 text-sm font-medium text-muted-foreground">
                        {getTranslation('confidenceLevel')}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                            <div
                              className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-500"
                              style={{
                                width: `${Math.min(predictionResult.confidence, 100)}%`,
                              }}
                            />
                          </div>
                        </div>
                        <span className="text-2xl font-bold text-green-700 dark:text-green-400">
                          {formatConfidence(predictionResult.confidence)}
                        </span>
                      </div>
                    </div>

                    {/* Full Classification */}
                    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
                      <p className="mb-2 text-sm font-medium text-muted-foreground">
                        {getTranslation('fullClassification')}
                      </p>
                      <p className="break-all font-mono text-sm text-gray-700 dark:text-gray-300">
                        {predictionResult.class}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <DialogFooter>
            {uploadSuccess || isLowConfidence ? (
              <div className="flex w-full gap-2">
                <Button
                  variant="outline"
                  onClick={handleUploadAnother}
                  className="flex-1"
                >
                  <ImageIcon className="mr-2 h-4 w-4" />
                  {getTranslation('uploadAnother')}
                </Button>
                <Button onClick={handleClosePreview} className="flex-1">
                  <X className="mr-2 h-4 w-4" />
                  {getTranslation('close')}
                </Button>
              </div>
            ) : (
              <>
                <Button
                  variant="outline"
                  onClick={handleClosePreview}
                  disabled={isUploading}
                >
                  <X className="mr-2 h-4 w-4" />
                  {getTranslation('cancel')}
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={isUploading || uploadSuccess}
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {getTranslation('uploading')}
                    </>
                  ) : (
                    <>
                      {getTranslation('submitUpload')}
                      <ImageIcon className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}
