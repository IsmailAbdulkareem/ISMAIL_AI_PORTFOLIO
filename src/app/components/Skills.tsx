'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    { name: 'HTML', level: 90, category: 'Frontend' },
    { name: 'CSS', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 88, category: 'Frontend' },
    { name: 'TypeScript', level: 80, category: 'Frontend' },
    { name: 'React', level: 92, category: 'Frontend' },
    { name: 'Next.js', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Git', level: 88, category: 'Tools' },
    { name: 'Tailwind', level: 92, category: 'Styling' },
    { name: 'Prisma', level: 75, category: 'Database' },
    { name: 'MongoDB', level: 82, category: 'Database' },
    { name: 'Redux', level: 78, category: 'State Management' },
    { name: 'GraphQL', level: 70, category: 'API' },
    { name: 'Apollo', level: 72, category: 'API' },
    { name: 'Express', level: 80, category: 'Backend' },
    { name: 'PostgreSQL', level: 75, category: 'Database' },
    { name: 'Python', level: 70, category: 'Backend' },
    { name: 'Django', level: 65, category: 'Backend' },
    { name: 'Framer Motion', level: 85, category: 'Animation' },
  ]

  const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'Styling', 'State Management', 'API', 'Animation']

  return (
    <section id="skills" className="section-padding bg-white">
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
            My skills
          </motion.h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-gray-50 rounded-lg p-4 text-center card-hover"
              >
                <div className="text-2xl mb-2">
                  {skill.name === 'HTML' && '🌐'}
                  {skill.name === 'CSS' && '🎨'}
                  {skill.name === 'JavaScript' && '📜'}
                  {skill.name === 'TypeScript' && '📘'}
                  {skill.name === 'React' && '⚛️'}
                  {skill.name === 'Next.js' && '▲'}
                  {skill.name === 'Node.js' && '🟢'}
                  {skill.name === 'Git' && '📝'}
                  {skill.name === 'Tailwind' && '🎯'}
                  {skill.name === 'Prisma' && '🗄️'}
                  {skill.name === 'MongoDB' && '🍃'}
                  {skill.name === 'Redux' && '🔄'}
                  {skill.name === 'GraphQL' && '🔷'}
                  {skill.name === 'Apollo' && '🚀'}
                  {skill.name === 'Express' && '⚡'}
                  {skill.name === 'PostgreSQL' && '🐘'}
                  {skill.name === 'Python' && '🐍'}
                  {skill.name === 'Django' && '🎭'}
                  {skill.name === 'Framer Motion' && '✨'}
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                  {skill.name}
                </h3>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 1 }}
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                  />
                </div>
                
                <p className="text-xs text-gray-500 mt-1">{skill.level}%</p>
              </motion.div>
            ))}
          </div>

          {/* Skills by Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Skills by Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-gray-800 mb-3">{category}</h4>
                  <div className="space-y-2">
                    {skills
                      .filter(skill => skill.category === category)
                      .map(skill => (
                        <div key={skill.name} className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">{skill.name}</span>
                          <span className="text-xs text-primary-600 font-medium">{skill.level}%</span>
                        </div>
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 