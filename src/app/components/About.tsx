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
            <p className="text-lg mb-6">
              After graduating with a degree in Accounting, I decided to pursue my passion for programming. 
              I enrolled in a coding bootcamp and learned full-stack web development. My favorite part of 
              programming is the problem-solving aspect. I love the feeling of finally figuring out a solution 
              to a problem.
            </p>
            
            <p className="text-lg mb-6">
              My core stack is <span className="font-semibold text-primary-600">React</span>,{' '}
              <span className="font-semibold text-primary-600">Next.js</span>,{' '}
              <span className="font-semibold text-primary-600">Node.js</span>, and{' '}
              <span className="font-semibold text-primary-600">MongoDB</span>. I am also familiar with{' '}
              <span className="font-semibold text-primary-600">TypeScript</span> and{' '}
              <span className="font-semibold text-primary-600">Prisma</span>. I am always looking to learn 
              new technologies.
            </p>
            
            <p className="text-lg mb-6">
              I am currently looking for a full-time position as a software developer.
            </p>
            
            <p className="text-lg">
              When I'm not coding, I enjoy playing video games, watching movies, and playing with my dog. 
              I also enjoy learning new things. I am currently learning about history and philosophy. 
              I'm also learning how to play the guitar.
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