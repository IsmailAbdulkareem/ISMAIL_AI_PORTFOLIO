import Hero3D from '@/app/components/3d/Hero3D'
import About3D from '@/app/components/3d/About3D'
import ServicesPreview from '@/app/components/sections/ServicesPreview'
import ProjectsPreviewWrapper from '@/app/components/sections/ProjectsPreviewWrapper'
import Testimonials from '@/app/components/Testimonials'
import BlogPreviewWrapper from '@/app/components/sections/BlogPreviewWrapper'
import ContactPreview from '@/app/components/sections/ContactPreview'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Hero3D />
      <About3D />
      <ServicesPreview />
      <ProjectsPreviewWrapper />
      <Testimonials />
      <BlogPreviewWrapper />
      <ContactPreview />
    </main>
  )
} 