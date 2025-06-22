'use client'

import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6 text-center md:text-left">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-2xl sm:text-3xl">👋</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900"
            >
              Hello, I'm{' '}
              <TypeAnimation
                sequence={[
                  'Ismail',
                  2000,
                  'a Web Developer',
                  2000,
                  'a Python Developer',
                  2000,
                  'an AI Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="heading-gradient"
                repeat={Infinity}
              />
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-600 max-w-xl mx-auto md:mx-0"
            >
              I'm a Full-Stack Developer with 1.5 years of experience. I enjoy building sites & apps. My focus is Next.js (React).
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="btn-primary flex items-center gap-2"
              >
                <Mail size={20} />
                Contact me here
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="order-first md:order-last"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 30px rgba(50, 50, 50, 0.2)' }}
              className="w-full max-w-sm mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/profile.jpg"
                alt="Ismail"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
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