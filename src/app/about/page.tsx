import type { Metadata } from 'next'
import About3D from '../components/3d/About3D'
import Experience3D from '../components/3d/Experience3D'
import Skills3D from '../components/3d/Skills3D'

export const metadata: Metadata = {
  title: 'About Me | AI Developer & Full-Stack Web Developer in Karachi',
  description: 'Learn about my journey from accounting to AI-powered web development. Specializing in AI chatbots, intelligent automation, and modern web solutions in Karachi, Pakistan.',
  keywords: [
    'about AI developer Pakistan',
    'full-stack developer Karachi',
    'AI chatbot developer background',
    'web developer journey Pakistan'
  ]
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-16">
      <About3D />
      <Skills3D />
      <Experience3D />
    </main>
  )
}
