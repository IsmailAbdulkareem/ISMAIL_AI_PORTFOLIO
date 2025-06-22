'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: 'Mustafa Builder and Developer',
      description: 'As a full-stack developer, I contributed to this construction company website for 2 months. The platform allows users to explore services, view projects, and submit inquiries, featuring a responsive design and user-friendly interface.',
      technologies: ['React', 'Next.js', 'MongoDB', 'Tailwind'],
      image: '/images/mustafa.jpg',
      link: 'https://www.mustafabuilderanddeveloper.com.pk/',
      github: 'https://github.com/IsmailAbdulkareem/MCB_SENCOND.git'
    },
    {
      title: 'Food Truck',
      description: 'I served as the front-end developer for this food truck website, enabling users to browse menus, filter items, and explore services. The platform includes features like sorting, pagination, and a dynamic content management system.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Sanity'],
      image: '/images/foodtruck.jpg',
      link: 'https://milestone3-sooty-one.vercel.app/',
      github: 'https://github.com/IsmailAbdulkareem/Milestone3.git'
    },
    {
      title: 'Free CV Maker',
      description: 'Developed a public web app for creating and sharing professional CVs with unique, shareable links. The tool provides real-time text analytics, including word and character counts, and a streamlined user experience.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      image: '/images/cvmaker.jpg',
      link: 'https://milestone-5-unique-path-and-shareable-link-swart.vercel.app/',
      github: 'https://github.com/IsmailAbdulkareem/Milestone-5-Unique-Path-and-Shareable-Link.git'
    },
    {
      title: 'Gym Website',
      description: 'Built a responsive web application for a fitness center, showcasing services, class schedules, and membership options. The platform features a modern, user-friendly design with seamless navigation and dynamic content for an engaging user experience.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      image: '/images/gym.jpg',
      link: 'https://responsive-gym-website-iota.vercel.app/',
      github: 'https://github.com/IsmailAbdulkareem/Responsive-Gym-Website.git'
    },
    {
      title: 'Weather Widget',
      description: 'Created a customizable and responsive weather widget that provides real-time weather updates for any location. Easily embeddable in websites, it features a sleek design and user-friendly interface for displaying current conditions and forecasts.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      image: '/images/weather.jpg',
      link: 'https://weather-widget-wheat-ten.vercel.app/',
      github: 'https://github.com/IsmailAbdulkareem/Weather-Widget.git' // Placeholder, update with actual repo if available
    },
    {
      title: 'Pizza Pie',
      description: 'Developed a responsive website for a pizza restaurant, featuring an interactive menu, online ordering capabilities, and location details. The platform offers a visually appealing design and seamless user experience across devices.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      image: '/images/pizaa.jpg',
      link: 'https://pizza-pie-lime.vercel.app/',
      github: 'https://github.com/IsmailAbdulkareem/Pizza-Pie.git' // Placeholder, update with actual repo if available
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
                <div className="h-48 w-full overflow-hidden flex items-center justify-center bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-full"
                  />
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