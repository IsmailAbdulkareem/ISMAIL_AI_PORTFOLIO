'use client'

import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Scene from './Scene'
import ParticleField from './ParticleField'
import FloatingShapes from './FloatingShapes'
import Lights from './Lights'
import { get3DSettings } from '@/app/utils/deviceDetection'

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay },
})

const Hero3D = () => {
  const settings = get3DSettings()

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene>
          <Lights />
          <ParticleField count={settings.particleCount} color="#3b82f6" />
          <FloatingShapes />
        </Scene>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/90 z-10" />

      {/* Content */}
      <div className="container-max section-padding relative z-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6 text-center md:text-left">
            {/* Greeting */}
            <motion.div {...fadeIn(0.2)}>
              <span className="text-2xl sm:text-3xl" role="img" aria-label="Waving hand emoji">
                👋
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              {...fadeIn(0.3)}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
            >
              I Build{' '}
              <TypeAnimation
                sequence={[
                  'AI-Powered Websites', 3000,
                  'Smart Chatbots', 2500,
                  'Modern Web Apps', 2500,
                  'Business Solutions', 2500,
                ]}
                wrapper="span"
                speed={60}
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
                repeat={Infinity}
              />
            </motion.h1>

            {/* Subtitle */}
            <motion.p {...fadeIn(0.4)} className="text-xl sm:text-2xl text-gray-300 max-w-xl mx-auto md:mx-0">
              Full-Stack Developer specializing in AI-powered web solutions. I help businesses automate, scale, and succeed with intelligent websites that work 24/7.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeIn(0.5)}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
            >
              <motion.button
                aria-label="Scroll to contact section"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300"
              >
                <Mail size={20} />
                Contact me here
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download="Ismail_Kareem_Resume.pdf"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 cursor-pointer transition-all duration-300"
                aria-label="Download my CV"
              >
                <Download size={20} />
                Download CV
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Profile Image with 3D Effect */}
          <motion.div
            {...fadeIn(0.6)}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            className="order-first md:order-last"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(139, 92, 246, 0.2)'
              }}
              className="w-full max-w-sm mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/30"
            >
              <Image
                src="/images/profile.jpg"
                alt="Portrait of Ismail Kareem, full-stack developer"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          aria-hidden="true"
          {...fadeIn(1)}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero3D
