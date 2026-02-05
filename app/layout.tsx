import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { TranslationProvider } from '@/contexts/TranslationContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'FBCOL - C.I. FUELS AND BUNKERS COLOMBIA S.A.S',
  description: 'Premium marine fuel supply and bunker services worldwide',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <TranslationProvider>
          {children}
        </TranslationProvider>
        <Analytics />
      </body>
    </html>
  )
}
