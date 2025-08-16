'use client'

import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

// Utility to DRY motion props
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay },
})

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    window.open('/api/download-resume', '_blank')
  }

  // Determine if we should prioritize LCP image
  const isLargeScreen = typeof window !== 'undefined' && window.innerWidth > 640

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6 text-center md:text-left">
            {/* Greeting */}
            <motion.div {...fadeIn(0.2)}>
              <span className="text-2xl sm:text-3xl" role="img" aria-label="Waving hand emoji">👋</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              {...fadeIn(0.3)}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900"
            >
              Hello, I'm{' '}
              <TypeAnimation
                sequence={[
                  'Ismail', 3000,
                  'a Web Developer', 2500,
                  'a Python Developer', 2500,
                  'an AI Developer', 2500,
                ]}
                wrapper="span"
                speed={60}
                className="heading-gradient"
                repeat={Infinity}
              />
            </motion.h1>

            {/* Subtitle */}
            <motion.p {...fadeIn(0.4)} className="text-xl sm:text-2xl text-gray-600 max-w-xl mx-auto md:mx-0">
              I help small businesses go live with pixel-perfect, SEO-friendly Next.js sites. I'm a Full-Stack Developer with 1.5 years of experience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeIn(0.5)} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <motion.button
                aria-label="Scroll to contact section"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="btn-primary flex items-center gap-2 focus:outline focus:outline-2 focus:outline-primary"
              >
                <Mail size={20} />
                Contact me here
              </motion.button>

              <motion.button
                aria-label="Download my CV"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="btn-secondary flex items-center gap-2 focus:outline focus:outline-2 focus:outline-secondary"
              >
                <Download size={20} />
                Download CV
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <motion.div
            {...fadeIn(0.6)}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            className="order-first md:order-last"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 30px rgba(50, 50, 50, 0.2)' }}
              className="w-full max-w-sm mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/profile.jpg"
                alt="Portrait of Ismail Kareem, full-stack developer"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority={isLargeScreen}
                loading={isLargeScreen ? undefined : 'lazy'}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator (Decorative) */}
        <motion.div aria-hidden="true" {...fadeIn(1)} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
