import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AgentChatbot from './components/AgentChatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ismail | Full-Stack Web Developer (Next.js, React, Node.js, MongoDB, TypeScript)',
  description: 'Professional Full-Stack Web Developer with 1.5+ years of experience building modern, high-performance web applications using Next.js, React, Node.js, TypeScript, and MongoDB. I create scalable, SEO-friendly, and user-focused solutions.',
  keywords: [
    'Full-Stack Developer',
    'Web Developer Portfolio',
    'Next.js Developer',
    'React Developer',
    'Node.js Developer',
    'MongoDB Developer',
    'TypeScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'MERN Stack Developer',
    'JavaScript Developer',
    'Freelance Web Developer',
    'Modern Web Apps',
    'SEO Optimized Websites',
    'Scalable Applications'
  ],
  authors: [{ name: 'Ismail' }],
  creator: 'Ismail',
  openGraph: {
    title: 'Ismail | Full-Stack Web Developer (Next.js, React, Node.js, MongoDB, TypeScript)',
    description: 'Full-Stack Developer specializing in Next.js, React, Node.js, MongoDB, and TypeScript. Explore my portfolio and projects.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ismail | Full-Stack Web Developer',
    description: 'Building modern, high-performance websites and applications with Next.js, React, Node.js, TypeScript, and MongoDB.',
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
        <AgentChatbot />
      </body>
    </html>
  )
} 
