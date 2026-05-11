import { getFeaturedProjects } from '@/sanity/client'
import ProjectsPreview from './ProjectsPreview'

export default async function ProjectsPreviewWrapper() {
  const projects = await getFeaturedProjects(3)
  return <ProjectsPreview projects={projects} />
}
