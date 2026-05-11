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
      description: 'Built for visibility with advanced SEO techniques and analytics',
      color: '#06b6d4'
    },
    {
      icon: Bot,
      title: 'Smart Automation',
      description: 'Intelligent chatbots and automation to boost your business',
      color: '#ec4899'
    }
  ]

  return (
    <section id="about" className="relative min-h-screen py-20 overflow-hidden">
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
      <div className="container-max relative z-20 px-4 sm:px-6 lg:px-8 min-w-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Full-Stack Developer specializing in AI-powered web solutions for modern businesses
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto min-w-0 justify-items-center lg:justify-items-stretch">
            {/* Left Column - Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6 min-w-0 w-full"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="text-blue-400" size={24} />
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I transitioned from <span className="text-blue-400 font-semibold">Accounting</span> to
                    <span className="text-blue-400 font-semibold"> Software Development</span> through intensive
                    training at <span className="text-blue-400 font-semibold">Saylani Mass IT Training (SMIT)</span>.
                  </p>
                  <p>
                    What drives me is <span className="text-purple-400 font-semibold">problem-solving</span> and
                    building solutions that make a real impact. I specialize in creating
                    <span className="text-purple-400 font-semibold"> AI-powered websites</span> that help businesses
                    automate, scale, and succeed online.
                  </p>
                  <p>
                    Currently expanding my expertise in <span className="text-cyan-400 font-semibold">Data Analytics,
                    Cloud, and AI (DACA)</span> through the Governor's Initiative for GenAI, staying at the
                    forefront of emerging technologies.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Code className="text-green-400" size={24} />
                  What I Offer
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><span className="font-semibold text-white">AI-Powered Websites</span> with intelligent chatbots and automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><span className="font-semibold text-white">Full-Stack Development</span> using React, Next.js, Node.js, MongoDB</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><span className="font-semibold text-white">SEO-Optimized Solutions</span> that rank and convert</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><span className="font-semibold text-white">Responsive Design</span> that works perfectly on all devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><span className="font-semibold text-white">Fast Delivery</span> with ongoing support and maintenance</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6 min-w-0 w-full"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${highlight.color}20` }}
                    >
                      <highlight.icon style={{ color: highlight.color }} size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400">
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
                className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30"
              >
                <h4 className="text-xl font-semibold text-white mb-4">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js 14', 'TypeScript', 'Node.js', 'MongoDB', 'Prisma', 'Tailwind CSS', 'OpenAI', 'Docker', 'Git'].map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1.1 + i * 0.05 }}
                      className="px-3 py-1.5 bg-blue-600/30 text-blue-200 rounded-full text-sm font-medium border border-blue-500/30"
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
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
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
