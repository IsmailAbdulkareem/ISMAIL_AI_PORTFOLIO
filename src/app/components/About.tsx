'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
          >
            About me
          </motion.h2>

          {/* Content */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ delay: 0.4 }}
  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
>
  <h2 className="text-2xl font-bold text-gray-900 mb-4">Background</h2>
  <p className="text-lg mb-6">
    After graduating with a degree in Accounting, I decided to pursue my passion for programming. 
    I enrolled in a coding bootcamp at Saylani Mass IT Training (SMIT), where I learned full-stack 
    web development. My favorite part of programming is the problem-solving aspect—I love the thrill 
    of finally figuring out a solution to a challenging problem.
  </p>

  <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Skills</h2>
  <p className="text-lg mb-6">
    My core stack is <span className="font-semibold text-primary-600">React</span>,{' '}
    <span className="font-semibold text-primary-600">Next.js</span>,{' '}
    <span className="font-semibold text-primary-600">Node.js</span>, and{' '}
    <span className="font-semibold text-primary-600">MongoDB</span>. I am also familiar with{' '}
    <span className="font-semibold text-primary-600">TypeScript</span> and{' '}
    <span className="font-semibold text-primary-600">Prisma</span>. I am always eager to learn new 
    technologies and am currently studying{' '}
    <span className="font-semibold text-primary-600">Data Analytics, Cloud, and AI (DACA)</span> and{' '}
    <a 
      href="https://www.linkedin.com/company/governor-sindh-initiative/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="font-semibold text-primary-600 hover:underline"
    >
      AI agents through the Governor’s Initiative for GenAI
    </a>.
  </p>

  <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Goals</h2>
  <p className="text-lg mb-6">
    I am actively seeking a full-time position as a software developer, where I can apply my skills 
    and continue to grow in a dynamic, innovative environment.
  </p>

  <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Interests</h2>
  <p className="text-lg">
    When I’m not coding, I enjoy playing video games, watching movies, and working as a rider for a 
    company. I also love learning new things and exploring diverse interests.
  </p>
</motion.div>
          {/* Skills Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
            className="mt-12 p-6 bg-gray-50 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Prisma'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 