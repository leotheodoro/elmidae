import './globals.css'

import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'

import { Providers } from './providers'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: 'Elmidae',
    template: `%s | Elmidae`,
  },
  description: '',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: `Elmidae`,
    description: '',
    url: 'http://localhost:3000',
    siteName: `Elmidae`,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: `Elmidae`,
    card: 'summary_large_image',
  },
  verification: {
    google: '',
    yandex: '',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn(
          fontSans.variable,
          'min-h-screen bg-background font-sans antialiased',
        )}
      >
        <div className="flex min-h-screen flex-col">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
