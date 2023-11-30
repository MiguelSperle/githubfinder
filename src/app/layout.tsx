import type { Metadata } from 'next'
import StyledComponentsProvider from '@/providers/StyledComponentsProvider'
import { Inter } from 'next/font/google'
import React from 'react'
import { Providers } from '@/providers/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Github Finder',
  description: 'Generated by create next app',

  icons: {
    icon: '/next.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <StyledComponentsProvider>{children}</StyledComponentsProvider>
        </Providers>
      </body>
    </html>
  )
}
