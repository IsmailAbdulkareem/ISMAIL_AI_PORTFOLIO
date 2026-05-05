'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Download, Briefcase, GraduationCap, Rocket } from 'lucide-react'
import Scene from './Scene'
import Lights from './Lights'
import ParticleField from './ParticleField'

const Experience3D = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const downloadResume = () => {
    window.open('/api/download-resume', '_blank')
  }

  const experiences = [
    {
      title: 'Graduated from SMIT Bootcamp',
      company: 'Saylani Mass IT Training',
      location: 'Karachi, Pakistan',
      period: '2023',
      description: 'Completed intensive 8-month full-stack development bootcamp covering modern web technologies, algorithms, and best practices. Immediately transitioned into professional development work.',
      icon: GraduationCap,
      type: 'education',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Problem Solving'],
      color: '#3b82f6'
    },
    {
      title: 'Frontend Developer',
      company: 'Freelance',
      location: 'Karachi, Pakistan',
      period: '2023 - 2024',
      description: 'Built responsive, user-friendly websites for local businesses and startups. Specialized in React-based solutions with focus on performance and SEO. Successfully delivered 5+ projects while upskilling to full-stack development.',
      icon: Briefcase,
      type: 'work',
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Responsive Design', 'Git', 'Client Communication'],
      color: '#10b981'
    },
    {
      title: 'Full-Stack AI Developer',
      company: 'Freelance & Open to Opportunities',
      location: 'Karachi, Pakistan',
      period: '2024 - Present',
      description: 'Specializing in AI-powered web applications using Next.js 14, TypeScript, and OpenAI integration. Building intelligent chatbots, automation tools, and modern web solutions for businesses. Currently pursuing advanced training in Data Analytics, Cloud, and AI through Governor\'s Initiative.',
      icon: Rocket,
      type: 'work',
      skills: ['Next.js 14', 'TypeScript', 'Node.js', 'MongoDB', 'Prisma', 'OpenAI', 'Docker', 'AI Integration'],
      color: '#8b5cf6',
      highlight: true
    }
  ]

  return (
    <section id="experience" className="relative min-h-screen py-20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene>
          <Lights />
          <ParticleField count={700} color="#8b5cf6" />
        </Scene>
      </div>

      {/* Dark overlay */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              My Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From accounting to AI-powered web development
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="absolute left-6 top-6 w-4 h-4 rounded-full border-4 border-gray-900 shadow-lg z-10"
                    style={{ backgroundColor: experience.color }}
                  />

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className={`ml-16 rounded-lg p-6 border transition-all duration-300 ${
                      experience.highlight
                        ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/50 shadow-lg shadow-purple-500/20'
                        : 'bg-gray-800/50 border-gray-700'
                    } backdrop-blur-sm`}
                  >
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${experience.color}20` }}
                        >
                          <experience.icon style={{ color: experience.color }} size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {experience.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-400 mt-1 flex-wrap">
                            <div className="flex items-center gap-1">
                              <Briefcase size={14} />
                              {experience.company}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              {experience.location}
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
                          ? 'bg-blue-600/30 text-blue-300 border border-blue-500/30'
                          : 'bg-green-600/30 text-green-300 border border-green-500/30'
                      }`}>
                        {experience.type === 'education' ? 'Education' : 'Work Experience'}
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4">
                      {experience.description}
                    </p>

                    {/* Skills */}
                    <div className="pt-4 border-t border-gray-700/50">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {experience.highlight && (
                      <div className="mt-4 pt-4 border-t border-purple-500/30">
                        <p className="text-sm text-purple-300 font-medium">
                          🚀 Currently available for freelance projects and full-time opportunities
                        </p>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {[
              { label: 'Years Experience', value: '1.5+', color: '#3b82f6' },
              { label: 'Projects Delivered', value: '10+', color: '#10b981' },
              { label: 'Happy Clients', value: '8+', color: '#8b5cf6' },
              { label: 'Technologies', value: '15+', color: '#ec4899' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700"
              >
                <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.5 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 mx-auto shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              <Download size={20} />
              Download Full Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience3D
