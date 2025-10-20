'use client'

import { Minus, Plus, X } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'

import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'

interface ImageModalProps {
  src: StaticImageData | string
  alt: string
  trigger?: React.ReactNode
}

export function ImageModal({ src, alt, trigger }: ImageModalProps) {
  const [open, setOpen] = useState(false)
  const [zoom, setZoom] = useState(1)

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5))
  }

  const handleClose = () => {
    setOpen(false)
    // Reset zoom when closing
    setTimeout(() => setZoom(1), 200)
  }

  // Keyboard shortcuts
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '+' || e.key === '=') {
        e.preventDefault()
        handleZoomIn()
      } else if (e.key === '-' || e.key === '_') {
        e.preventDefault()
        handleZoomOut()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, zoom])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger}
      </div>

      <DialogContent
        className="max-w-[95vw] max-h-[95vh] p-0 [&>button]:hidden"
        onInteractOutside={handleClose}
      >
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogDescription className="sr-only">
          Image preview with zoom controls
        </DialogDescription>

        {/* Control buttons */}
        <div className="absolute right-4 top-4 z-50 flex gap-2">
          <Button
            size="icon"
            variant="secondary"
            onClick={handleZoomOut}
            disabled={zoom <= 0.5}
            className="h-10 w-10 rounded-full shadow-lg"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            onClick={handleZoomIn}
            disabled={zoom >= 3}
            className="h-10 w-10 rounded-full shadow-lg"
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            onClick={handleClose}
            className="h-10 w-10 rounded-full shadow-lg"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Scrollable image container */}
        <div className="relative h-[85vh] overflow-auto p-8">
          <div
            className="transition-transform duration-200 ease-in-out"
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: 'center center',
            }}
          >
            <Image
              src={src}
              alt={alt}
              className="h-auto w-full object-contain"
              width={2000}
              height={2000}
            />
          </div>
        </div>

        {/* Zoom indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-2 text-sm font-medium shadow-lg">
          {Math.round(zoom * 100)}%
        </div>
      </DialogContent>
    </Dialog>
  )
}

