import {
  Header3D,
  Hero3D,
  About3D,
  Projects3D,
  Skills3D,
  Experience3D,
  Contact3D,
  Footer3D
} from '@/app/components/3d'
import PortfolioChatbot from '@/app/components/PortfolioChatbot'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header3D />
      <Hero3D />
      <About3D />
      <Projects3D />
      <Skills3D />
      <Experience3D />
      <Contact3D />
      <Footer3D />
      <PortfolioChatbot />
    </main>
  )
} 