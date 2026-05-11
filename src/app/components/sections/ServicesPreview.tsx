'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react'
import Link from 'next/link'

const ServicesPreview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      icon: Sparkles,
      title: 'AI Chatbot Development',
      description: 'Automate customer support and capture leads 24/7 with intelligent chatbots',
      color: 'blue',
      href: '/services/ai-chatbot-development'
    },
    {
      icon: Code,
      title: 'AI-Powered Websites',
      description: 'Modern, fast websites with built-in AI features that convert visitors',
      color: 'purple',
      href: '/services/ai-powered-website'
    },
    {
      icon: Zap,
      title: 'WhatsApp Chatbot',
      description: 'Automate WhatsApp business communication with 98% open rate',
      color: 'green',
      href: '/services/whatsapp-chatbot'
    }
  ]

  return (
    <section id="services" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900" />

      {/* Content */}
      <div className="container-max relative z-20 px-4">
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
              Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered solutions that automate and grow your business
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <Link href={service.href}>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full">
                    <div className={`w-14 h-14 bg-${service.color}-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className={`text-${service.color}-400`} size={28} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 inline-flex items-center gap-2"
              >
                View All Services
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
