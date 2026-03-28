import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Business Advisor, Management Consultant in United States',
  description: 'Expert business advisory and management consulting services. Tax, accounting, and financial consultancy to help your business succeed.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: 'images/finrisers.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'images/finrisers.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'images/finrisers.png',
        type: 'image/svg+xml',
      },
    ],
    apple: 'images/finrisers.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
