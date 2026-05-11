'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

const ContactPreview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isNavigating, setIsNavigating] = useState(false)

  const handleNavigation = () => {
    setIsNavigating(true)
  }

  return (
    <section id="contact-preview" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />

      {/* Content */}
      <div className="container-max relative z-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Ready to transform your business with AI-powered solutions? Get a free consultation and custom quote.
          </motion.p>

          {/* Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="text-blue-400" size={20} />
              <span>ismail233290@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="text-green-400" size={20} />
              <span>+92 330 3911285</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="text-purple-400" size={20} />
              <span>Karachi, Pakistan</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/contact" onClick={handleNavigation}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                disabled={isNavigating}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-wait"
              >
                {isNavigating ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    Get Free Consultation
                    <ArrowRight size={20} />
                  </>
                )}
              </motion.button>
            </Link>
            <a href="https://wa.me/923303911285" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Phone size={20} />
                WhatsApp Me
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactPreview
