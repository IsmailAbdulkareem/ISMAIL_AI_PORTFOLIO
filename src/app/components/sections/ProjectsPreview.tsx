'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, ExternalLink, Github, Tag, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

type Project = {
  _id: string
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  mainImage?: string
  slug: { current: string }
  category?: string
  results?: string[]
}

type ProjectsPreviewProps = {
  projects: Project[]
}

const ProjectsPreview = ({ projects }: ProjectsPreviewProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isNavigating, setIsNavigating] = useState(false)

  const handleNavigation = () => {
    setIsNavigating(true)
  }

  return (
    <section id="projects" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-900" />

      {/* Content */}
      <div className="container-max relative z-20 px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-4 text-white"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-xl"
          >
            AI-powered websites and intelligent automation solutions
          </motion.p>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-7xl mx-auto">
            {projects.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 text-lg mb-4">
                  No featured projects yet. Visit <Link href="/studio" className="text-blue-400 hover:text-blue-300 underline">/studio</Link> to add projects!
                </p>
              </div>
            ) : (
              projects.map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  {/* Project Image */}
                  {project.mainImage && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={project.mainImage}
                        alt={project.title}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    {/* Category Badge */}
                    {project.category && (
                      <div className="flex items-center gap-2 mb-3">
                        <Tag size={14} className="text-purple-400" />
                        <span className="text-xs text-purple-400 font-medium uppercase tracking-wide">
                          {project.category}
                        </span>
                      </div>
                    )}

                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Results/Impact */}
                    {project.results && project.results.length > 0 && (
                      <div className="mb-4 p-3 bg-green-600/10 border border-green-500/30 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp size={14} className="text-green-400" />
                          <span className="text-xs text-green-400 font-semibold uppercase">Impact</span>
                        </div>
                        <ul className="space-y-1">
                          {project.results.slice(0, 2).map((result, idx) => (
                            <li key={idx} className="text-xs text-gray-300 line-clamp-1">
                              • {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs font-medium border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies && project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-gray-400 text-xs">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </motion.a>
                      )}

                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
                        >
                          <Github size={16} />
                          Code
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link href="/projects" onClick={handleNavigation}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                disabled={isNavigating}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-wait"
              >
                {isNavigating ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    View All Projects
                    <ArrowRight size={20} />
                  </>
                )}
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsPreview
