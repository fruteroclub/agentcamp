import type { Metadata } from 'next'
import { cn } from '@/lib/utils'

import { Inter } from 'next/font/google'

import '@/styles/globals.css'
import { Toaster } from '@/components/ui/sonner'
import OnchainProvider from '@/providers/onchainProvider'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'agentcamp',
  description: 'De cero a Agente en 3 semanas',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased overflow-x-hidden',
          fontSans.variable,
        )}
      >
        <OnchainProvider>
          {children}
          <Toaster richColors />
        </OnchainProvider>
      </body>
    </html>
  )
}
