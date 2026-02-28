import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import { SITE_CONFIG } from '@/lib/constants'
import { generateOrganizationSchema } from '@/lib/seo'
import { CookieConsent } from '@/components/layout'
import { YandexMetrika } from '@/components/analytics/YandexMetrika'
import { ShopProviders } from '@/components/features/shop/ShopProviders'

import { Suspense } from 'react'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'cyrillic-ext'],
  variable: '--font-jakarta',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s — ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: SITE_CONFIG.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '48x48' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: '1sH9V8ri7Ijj3Apa9y2S00oMLzFySHk4b5683Nogwa4',
    yandex: '1ff515b3f3c19f93',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${jakarta.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Load Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,400,0&display=swap"
          rel="stylesheet"
        />
        {/* Preload LCP hero image */}
        <link
          rel="preload"
          as="image"
          href="/images/Hero_1.webp"
          type="image/webp"
        />
        <link rel="preconnect" href="https://mc.yandex.ru" />
      </head>
      <body className="font-sans antialiased bg-background-light text-text-main" suppressHydrationWarning>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
        />
        <Suspense fallback={null}>
          <YandexMetrika />
        </Suspense>
        <ShopProviders>
          {children}
        </ShopProviders>
        <CookieConsent />
      </body>
    </html>
  )
}
