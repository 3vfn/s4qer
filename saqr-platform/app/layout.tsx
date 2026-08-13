import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cairo, IBM_Plex_Sans_Arabic, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plex-arabic',
  display: 'swap',
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'منصة صقر | SAQR — منصة الألعاب التفاعلية المباشرة',
  description:
    'منصة صقر هي منصة SaaS متكاملة للألعاب التفاعلية المباشرة لصنّاع محتوى تيك توك — أدر بثك، تفاعل مع جمهورك، وحلّل أداءك بأدوات احترافية.',
  generator: 'v0.app',
  keywords: ['صقر', 'تيك توك', 'ألعاب مباشرة', 'بث مباشر', 'تفاعل', 'SAQR', 'TikTok live games'],
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#171423',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`dark ${plexArabic.variable} ${cairo.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
