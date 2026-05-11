import { getAllProjects } from '@/sanity/client'
import Projects3D from './Projects3D'

export default async function Projects3DWrapper() {
  const projects = await getAllProjects()
  return <Projects3D projects={projects} />
}
