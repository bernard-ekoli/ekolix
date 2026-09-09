import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EkoliX Limited - Building the Future',
  description: 'EkoliX Limited is an independent certified software research/development company building tools, experiences, and systems for the edge of the web.',
  generator: 'EkoliX Limited',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#08090b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
