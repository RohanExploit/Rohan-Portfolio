import React from "react"
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from './components/navigation'
import { Footer } from './components/footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d0d0d',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://rohan-portfolio.vercel.app/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Rohan Gaikwad - Software Developer',
    template: '%s | Rohan Gaikwad'
  },
  description: 'Full-stack developer, AI enthusiast, and open-source contributor. Explore my projects and experience.',
  keywords: ['developer', 'software engineer', 'AI', 'machine learning', 'open source'],
  creator: 'Rohan Gaikwad',
};

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} bg-obsidian text-text-primary tracking-tight antialiased`}
      >
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
          forcedTheme="dark"
        >
          <div className="flex min-h-screen w-full flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
