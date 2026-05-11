import type { Metadata } from 'next'
import Contact3D from '../components/3d/Contact3D'

export const metadata: Metadata = {
  title: 'Contact Me | AI Chatbot Developer in Karachi, Pakistan',
  description: 'Get in touch for AI chatbot development, AI-powered websites, and WhatsApp automation services. Free consultation available. Based in Karachi, Pakistan.',
  keywords: [
    'contact AI developer Pakistan',
    'hire chatbot developer Karachi',
    'AI development consultation',
    'freelance AI developer Pakistan'
  ]
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-16">
      <Contact3D />
    </main>
  )
}
