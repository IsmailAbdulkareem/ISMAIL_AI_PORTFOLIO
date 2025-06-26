'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Animation variants
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: 'easeOut' } },
})

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.h2
            variants={fadeInUp(0.1)}
            className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900"
          >
            About Me
          </motion.h2>

          {/* Introduction */}
          <motion.p
            variants={fadeInUp(0.3)}
            className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center"
          >
            I&apos;m Ismail, a passionate full-stack developer who thrives on building impactful web
            solutions. My journey began in Accounting, but I quickly discovered my love for coding at
            SMIT. Since then, I&apos;ve honed my skills by delivering real-world projects for clients,
            tackling challenges head-on and continuously expanding my tech toolkit.
          </motion.p>

          {/* Details Grid */}
          <motion.div
            variants={fadeInUp(0.5)}
            className="grid gap-8 md:grid-cols-2"
          >
            {/* Background & Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Background</h3>
              <p className="text-gray-700 leading-relaxed">
                With an Accounting degree under my belt, I pivoted to full-stack development at SMIT.
                I love solving complex problems and transforming ideas into sleek, performant web
                applications.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900">Technical Skills</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                {[
                  'React, Next.js',
                  'Node.js, Express',
                  'MongoDB, Prisma',
                  'TypeScript, JavaScript',
                  'Tailwind CSS, CSS Modules',
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Goals & Interests */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Career Goals</h3>
              <p className="text-gray-700 leading-relaxed">
                I&apos;m seeking a dynamic role where I can craft user-centric solutions, collaborate
                with passionate teams, and stay at the forefront of web technologies—especially in AI and
                cloud-based architectures.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900">Personal Interests</h3>
              <p className="text-gray-700 leading-relaxed">
                Outside of coding, I enjoy gaming, filmmaking, and working as a rider. I&apos;m a lifelong
                learner—currently exploring Data Analytics, Cloud computing, and AI agents through the
                Governor’s GenAI Initiative.
              </p>
            </div>
          </motion.div>

          {/* Quick Tech Stack */}
          <motion.div
            variants={fadeInUp(0.7)}
            className="mt-8 p-6 bg-primary-50 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-primary-800 mb-4">Quick Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'React',
                'Next.js',
                'Node.js',
                'Express',
                'MongoDB',
                'Prisma',
                'TypeScript',
                'Tailwind CSS',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
