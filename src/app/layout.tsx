import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ismail - Full-Stack Developer',
  description: 'Full-Stack Developer with 1.5 years of experience. Specialized in React, Next.js, Node.js, and MongoDB.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript'],
  authors: [{ name: 'Ismail' }],
  creator: 'Ismail',
  openGraph: {
    title: 'Ismail - Full-Stack Developer',
    description: 'Full-Stack Developer with 1.5 years of experience. Specialized in React, Next.js, Node.js, and MongoDB.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ismail - Full-Stack Developer',
    description: 'Full-Stack Developer with 1.5 years of experience. Specialized in React, Next.js, Node.js, and MongoDB.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 