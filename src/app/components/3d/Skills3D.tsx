'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Scene from './Scene'
import SkillSphere from './SkillSphere'
import Lights from './Lights'

const Skills3D = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'MongoDB', 'Prisma'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'Linux', 'Git'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'AI & Machine Learning',
      skills: ['OpenAI', 'LangChain', 'Hugging Face'],
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="skills" className="relative min-h-screen py-20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene>
          <Lights />
          <SkillSphere />
        </Scene>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/85 to-gray-900/95 z-10" />

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
            Skills & Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Drag to rotate • Hover over orbs to see skill names • Zoom with scroll
          </motion.p>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${category.color} w-12 h-1 rounded-full mb-4`} />

                <h3 className="text-lg font-semibold mb-4 text-white">
                  {category.title}
                </h3>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-300 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Experience Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { label: 'Years Experience', value: '1.5+' },
              { label: 'Projects Completed', value: '10+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Happy Clients', value: '8+' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills3D
