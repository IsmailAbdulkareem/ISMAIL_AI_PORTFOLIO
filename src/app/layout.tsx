import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from './components/StructuredData'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PortfolioChatbot from './components/PortfolioChatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ismail | AI Chatbot Developer & AI-Powered Website Developer in Karachi, Pakistan',
  description: 'I build AI-powered websites and chatbots that help businesses in worldwide automate and grow. Specializing in WhatsApp chatbots, intelligent automation, and AI-driven web solutions. Get a free consultation today.',
  keywords: [
    'AI chatbot developer Pakistan',
    'AI-powered website developer Karachi',
    'WhatsApp chatbot developer Pakistan',
    'AI chatbot development Karachi',
    'intelligent chatbot developer',
    'AI automation Pakistan',
    'AI website developer Karachi',
    'chatbot developer Pakistan',
    'AI integration specialist',
    'OpenAI developer Pakistan',
    'Next.js AI developer',
    'business automation chatbot',
    'custom AI chatbot',
    'AI web development Karachi',
    'freelance AI developer Pakistan'
  ],
  authors: [{ name: 'Ismail Abdul Kareem' }],
  creator: 'Ismail Abdul Kareem',
  openGraph: {
    title: 'Ismail | AI Chatbot & AI-Powered Website Developer from Karachi',
    description: 'Build AI-powered websites and chatbots that automate your business. WhatsApp chatbots, intelligent automation, and AI-driven solutions from Karachi, Pakistan.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ismail | AI Chatbot Developer Karachi',
    description: 'AI-powered websites and chatbots that help businesses automate and grow. Free consultation available.',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <PortfolioChatbot />
      </body>
    </html>
  )
} 
