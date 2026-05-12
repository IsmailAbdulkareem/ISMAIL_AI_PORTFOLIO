'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Zap, Brain, Rocket, Code, Bot } from 'lucide-react'
import Scene from './Scene'
import Lights from './Lights'
import ParticleField from './ParticleField'

const About3D = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const highlights = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Integrating cutting-edge AI technologies into modern web applications',
      color: '#3b82f6'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with Next.js 14 and modern best practices',
      color: '#8b5cf6'
    },
    {
      icon: Rocket,
      title: 'SEO Optimized',
      description: 'Built for visibility with advanced SEO techniques and AI Overview ranking',
      color: '#06b6d4'
    },
    {
      icon: Bot,
      title: 'Smart Automation',
      description: 'Intelligent chatbots and automation to boost your business 24/7',
      color: '#ec4899'
    }
  ]

  return (
    <section id="about" className="relative min-h-screen py-16 sm:py-20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene>
          <Lights />
          <ParticleField count={800} color="#3b82f6" />
        </Scene>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/95 z-10" />

      {/* Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-10 sm:space-y-12"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              Full-Stack Developer specializing in AI-powered web solutions for modern businesses
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto w-full min-w-0">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6 w-full min-w-0"
            >
              {/* My Journey */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-5 sm:p-8 border border-gray-700">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center justify-center lg:justify-start gap-2">
                  <Sparkles className="text-blue-400 flex-shrink-0" size={22} />
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base text-center lg:text-left">
                  <p>
                    I've built{' '}
                    <span className="text-blue-400 font-semibold">AI chatbots and automation tools</span>{' '}
                    for businesses across Pakistan — saving them{' '}
                    <span className="text-blue-400 font-semibold">15+ hours every week</span>{' '}
                    and increasing leads through intelligent automation.
                  </p>
                  <p>
                    What drives me is{' '}
                    <span className="text-purple-400 font-semibold">solving real business problems</span>{' '}
                    with AI. I specialize in{' '}
                    <span className="text-purple-400 font-semibold">WhatsApp chatbots</span>,
                    AI-powered websites, and automation that works 24/7 — so you don't have to.
                  </p>
                  <p>
                    Currently deepening expertise in{' '}
                    <span className="text-cyan-400 font-semibold">Generative AI & Cloud</span>{' '}
                    through the Governor's Initiative for GenAI — staying ahead of what's next.
                  </p>
                </div>
              </div>

              {/* What I Offer */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-5 sm:p-8 border border-gray-700">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center justify-center lg:justify-start gap-2">
                  <Code className="text-green-400 flex-shrink-0" size={22} />
                  What I Offer
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                  {[
                    ['AI-Powered Websites', 'with intelligent chatbots and automation'],
                    ['WhatsApp Chatbot Development', 'automate customer communication 24/7'],
                    ['Full-Stack Development', 'using React, Next.js, Node.js, MongoDB'],
                    ['SEO-Optimized Solutions', 'that rank on Google and AI Overviews'],
                    ['Fast Delivery', 'with ongoing support and maintenance'],
                  ].map(([title, desc]) => (
                    <li key={title} className="flex items-start gap-3">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      <span>
                        <span className="font-semibold text-white">{title}</span>{' '}
                        <span className="text-gray-400">{desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-4 w-full min-w-0"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-5 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${highlight.color}20` }}
                    >
                      <highlight.icon style={{ color: highlight.color }} size={22} />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-xl font-semibold text-white mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 text-sm sm:text-base">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg p-5 sm:p-6 border border-blue-500/30"
              >
                <h4 className="text-base sm:text-xl font-semibold text-white mb-4 text-center lg:text-left">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {[
                    'React', 'Next.js 14', 'TypeScript', 'Node.js', 'MongoDB',
                    'Prisma', 'Tailwind CSS', 'OpenAI', 'Docker', 'Git'
                  ].map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1.1 + i * 0.05 }}
                      className="px-3 py-1.5 bg-blue-600/30 text-blue-200 rounded-full text-xs sm:text-sm font-medium border border-blue-500/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="text-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Let's Build Something Amazing Together
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default About3D