import type { Metadata } from 'next'
import Projects3DWrapper from '../components/3d/Projects3DWrapper'

export const metadata: Metadata = {
  title: 'Projects Portfolio | AI-Powered Websites & Chatbots',
  description: 'Explore my portfolio of AI-powered websites, intelligent chatbots, and automation projects. Real case studies from businesses in Pakistan.',
  keywords: [
    'AI project portfolio',
    'chatbot projects Pakistan',
    'AI website examples',
    'web development portfolio Karachi'
  ]
}

export const revalidate = 60

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-16">
      <Projects3DWrapper />
    </main>
  )
}
