import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Business Consultant in Dallas, TX | Finrisers Advisory Services',
  description:
    'Top-rated business consulting in Dallas, Texas. We provide expert tax, accounting, and financial advisory services to help businesses grow, optimize, and succeed.',
  
  keywords: [
    'business consultant Dallas TX',
    'financial advisor Dallas Texas',
    'tax consultant Dallas',
    'accounting services Dallas TX',
    'management consulting Dallas',
  ],

  openGraph: {
    title: 'Business Consultant in Dallas, TX | Finrisers',
    description:
      'Professional business advisory, tax, and financial consulting services in Dallas, Texas.',
    url: 'https://finrisers.com',
    siteName: 'Finrisers',
    locale: 'en_US',
    type: 'website',
  },

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
