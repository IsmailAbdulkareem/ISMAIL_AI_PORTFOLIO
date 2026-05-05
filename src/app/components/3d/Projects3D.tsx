'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import Scene from './Scene'
import ProjectGallery3D from './ProjectGallery3D'
import Lights from './Lights'

const Projects3D = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: 'Mustafa Builder and Developer',
      description: 'As a full-stack developer, I contributed to this construction company website for 2 months. The platform allows users to explore services, view projects, and submit inquiries, featuring a responsive design and user-friendly interface.',
      technologies: ['React', 'Next.js', 'MongoDB', 'Tailwind'],
      link: 'https://www.mustafabuilderanddeveloper.com.pk/',
      github: 'https://github.com/IsmailAbdulkareem/MCB_SENCOND.git'
    },
    {
      title: 'Food Truck',
      description: 'I served as the front-end developer for this food truck website, enabling users to browse menus, filter items, and explore services. The platform includes features like sorting, pagination, and a dynamic content management system.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Sanity'],
      link: 'https://milestone3-sooty-one.vercel.app/',
      github: 'https://github.com/IsmailAbdulkareem/Milestone3.git'
    },
    {
      title: 'Free CV Maker',
      description: 'Developed a public web app for creating and sharing professional CVs with unique, shareable links. The tool provides real-time text analytics, including word and character counts, and a streamlined user experience.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      link: 'https://milestone-5-unique-path-and-shareable-link-swart.vercel.app/',
      github: 'https://github.com/IsmailAbdulkareem/Milestone-5-Unique-Path-and-Shareable-Link.git'
    },
    {
      title: 'Gym Website',
      description: 'Built a responsive web application for a fitness center, showcasing services, class schedules, and membership options. The platform features a modern, user-friendly design with seamless navigation and dynamic content for an engaging user experience.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      link: 'https://responsive-gym-website-iota.vercel.app/',
      github: 'https://github.com/IsmailAbdulkareem/Responsive-Gym-Website.git'
    },
    {
      title: 'Weather Widget',
      description: 'Created a customizable and responsive weather widget that provides real-time weather updates for any location. Easily embeddable in websites, it features a sleek design and user-friendly interface for displaying current conditions and forecasts.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      link: 'https://weather-widget-wheat-ten.vercel.app/',
      github: 'https://github.com/IsmailAbdulkareem/Weather-Widget.git'
    },
    {
      title: 'Pizza Pie',
      description: 'Developed a responsive website for a pizza restaurant, featuring an interactive menu, online ordering capabilities, and location details. The platform offers a visually appealing design and seamless user experience across devices.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      link: 'https://pizza-pie-lime.vercel.app/',
      github: 'https://github.com/IsmailAbdulkareem/Pizza-Pie.git'
    }
  ]

  return (
    <section id="projects" className="relative min-h-screen py-20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene>
          <Lights />
          <ProjectGallery3D />
        </Scene>
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/95 z-10" />

      {/* Content */}
      <div className="container-max relative z-20">
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
            className="text-3xl sm:text-4xl font-bold text-center mb-8 text-white"
          >
            My Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Drag to rotate • Click cards to explore • Scroll for details
          </motion.p>

          {/* Project Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs font-medium border border-blue-500/30"
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects3D
