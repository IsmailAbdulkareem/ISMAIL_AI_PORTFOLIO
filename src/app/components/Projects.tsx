'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: 'CorpComment',
      description: 'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
      technologies: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
      image: '/api/placeholder/400/250',
      link: '#',
      github: '#'
    },
    {
      title: 'rmtDev',
      description: 'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
      image: '/api/placeholder/400/250',
      link: '#',
      github: '#'
    },
    {
      title: 'Word Analytics',
      description: 'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
      technologies: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
      image: '/api/placeholder/400/250',
      link: '#',
      github: '#'
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
          >
            My projects
          </motion.h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary-600">
                    {project.title.charAt(0)}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.link}
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                    
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              View More Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 