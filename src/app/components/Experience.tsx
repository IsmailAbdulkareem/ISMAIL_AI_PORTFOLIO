'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      title: 'Graduated bootcamp',
      company: 'Miami, FL',
      period: '2019',
      description: 'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
      icon: '🎓',
      type: 'education'
    },
    {
      title: 'Front-End Developer',
      company: 'Orlando, FL',
      period: '2019 - 2021',
      description: 'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
      icon: '💻',
      type: 'work'
    },
    {
      title: 'Full-Stack Developer',
      company: 'Houston, TX',
      period: '2021 - present',
      description: "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
      icon: '🚀',
      type: 'work'
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50">
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
            My experience
          </motion.h2>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="relative mb-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content Card */}
                  <div className="ml-16 bg-white rounded-lg shadow-md p-6 card-hover">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{experience.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            {experience.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              {experience.company}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {experience.period}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        experience.type === 'education' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {experience.type === 'education' ? 'Education' : 'Work'}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    {/* Skills for work experience */}
                    {experience.type === 'work' && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.title === 'Front-End Developer' && 
                            ['React', 'JavaScript', 'HTML', 'CSS', 'Git'].map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                {tech}
                              </span>
                            ))
                          }
                          {experience.title === 'Full-Stack Developer' && 
                            ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'MongoDB', 'Node.js'].map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                {tech}
                              </span>
                            ))
                          }
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Download Full Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 