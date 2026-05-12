import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from './components/StructuredData'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PortfolioChatbot from './components/PortfolioChatbot'

const inter = Inter({ subsets: ['latin'] })

// ✅ FIX 1: metadataBase add karo — OG images fix hogi
export const metadata: Metadata = {
  metadataBase: new URL('https://buildwithismail.xyz'),

  title: {
    default: 'Ismail | AI Chatbot Developer & AI-Powered Website Developer in Karachi, Pakistan',
    template: '%s | Ismail — AI Developer Karachi',
  },

  // ✅ FIX 2: Grammar fix — "in worldwide" → "worldwide"
  description:
    'I build AI-powered websites and chatbots that help businesses worldwide automate and grow. Specializing in WhatsApp chatbots, intelligent automation, and AI-driven web solutions from Karachi, Pakistan. Get a free consultation today.',

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
    'freelance AI developer Pakistan',
  ],

  authors: [{ name: 'Ismail Abdul Kareem', url: 'https://buildwithismail.xyz' }],
  creator: 'Ismail Abdul Kareem',
  publisher: 'Ismail Abdul Kareem',

  // ✅ FIX 3: Canonical URL — duplicate content prevent karega
  alternates: {
    canonical: 'https://buildwithismail.xyz',
  },

  // ✅ FIX 4: Robots — Google ko explicitly bolo index karo
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: 'Ismail | AI Chatbot & AI-Powered Website Developer from Karachi',
    description:
      'Build AI-powered websites and chatbots that automate your business. WhatsApp chatbots, intelligent automation, and AI-driven solutions from Karachi, Pakistan.',
    type: 'website',
    locale: 'en_US',
    url: 'https://buildwithismail.xyz',
    siteName: 'Ismail — AI Developer Portfolio',
    images: [
      {
        // ✅ metadataBase se yeh automatically absolute URL ban jayegi
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ismail Abdul Kareem — AI Chatbot Developer Karachi Pakistan',
      },
    ],
  },

  // ✅ FIX 5: Twitter — image fields add kiye
  twitter: {
    card: 'summary_large_image',
    title: 'Ismail | AI Chatbot Developer Karachi',
    description:
      'AI-powered websites and chatbots that help businesses automate and grow. Free consultation available.',
    images: ['/images/og-image.jpg'],
    creator: '@IsmailKare63834',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // ✅ FIX 6: dir="ltr" add kiya
    <html lang="en" dir="ltr" className="scroll-smooth">
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