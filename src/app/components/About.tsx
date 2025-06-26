'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-center text-gray-900"
          >
            About Me
          </motion.h2>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-700 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Background</h3>
              <p className="text-lg leading-relaxed">
                I hold a degree in Accounting, but my true passion led me to software development. I trained at
                <strong> Saylani Mass IT Training (SMIT)</strong>, where I developed my skills in full-stack
                web development. What excites me most about programming is problem-solving—finding solutions
                and turning challenges into opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Technical Skills</h3>
              <p className="text-lg leading-relaxed">
                My core stack includes{' '}
                <span className="font-semibold text-primary-600">React</span>,{' '}
                <span className="font-semibold text-primary-600">Next.js</span>,{' '}
                <span className="font-semibold text-primary-600">Node.js</span>, and{' '}
                <span className="font-semibold text-primary-600">MongoDB</span>. I'm also skilled in{' '}
                <span className="font-semibold text-primary-600">TypeScript</span> and{' '}
                <span className="font-semibold text-primary-600">Prisma</span>.
                <br />
                I'm currently expanding my expertise in{' '}
                <span className="font-semibold text-primary-600">Data Analytics, Cloud, and AI (DACA)</span> through the{' '}
                <a
                  href="https://www.linkedin.com/company/governor-sindh-initiative/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary-600 hover:underline"
                >
                  Governor’s Initiative for GenAI
                </a>.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Career Goals</h3>
              <p className="text-lg leading-relaxed">
                I am seeking a full-time role as a software developer where I can contribute to impactful projects,
                collaborate with innovative teams, and continue growing professionally in a fast-paced environment.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Personal Interests</h3>
              <p className="text-lg leading-relaxed">
                Outside of tech, I enjoy video games, movies, and part-time work as a rider. I love learning
                new skills and exploring different fields of technology and creativity.
              </p>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-8 p-6 bg-gray-50 rounded-xl shadow-sm"
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Quick Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
              {['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Prisma'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium shadow-sm"
                >
                  {tech}
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
