'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare, Clock, CheckCircle } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
import Scene from './Scene'
import Lights from './Lights'
import ParticleField from './ParticleField'

const Contact3D = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        toast.success("Message sent successfully! I'll get back to you within 24 hours.")
        setFormData({ name: '', email: '', message: '' })
      } else {
        const data = await res.json()
        toast.error(data.error || 'Failed to send message. Please try email directly.')
      }
    } catch (err) {
      toast.error('Failed to send message. Please try email directly.')
    }
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ismail233290@gmail.com',
      href: 'mailto:ismail233290@gmail.com',
      color: '#3b82f6'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+92 330 3911285',
      href: 'https://wa.me/923303911285',
      color: '#10b981'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Karachi, Pakistan',
      href: null,
      color: '#8b5cf6'
    }
  ]

  const availability = [
    { icon: CheckCircle, text: 'Available for freelance projects', color: '#10b981' },
    { icon: Clock, text: 'Response time: Within 24 hours', color: '#3b82f6' },
    { icon: MessageSquare, text: 'Free consultation for new projects', color: '#8b5cf6' }
  ]

  return (
    <section id="contact" className="relative min-h-screen py-16 sm:py-20 overflow-hidden">
      <Toaster position="top-right" />

      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene>
          <Lights />
          <ParticleField count={600} color="#3b82f6" />
        </Scene>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/95 z-10" />

      {/* Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
              Ready to transform your business with AI-powered web solutions? Let's discuss your project!
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto w-full min-w-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-w-0">

              {/* Left Column - Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4 }}
                className="space-y-5 sm:space-y-6 w-full min-w-0"
              >
                {/* Get in Touch */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-5 sm:p-8 border border-gray-700">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                    Get in Touch
                  </h3>
                  <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                    I'm currently available for freelance projects. Whether you need an AI-powered website,
                    a custom chatbot, or technical consultation, I'm here to help bring your ideas to life.
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-3 sm:gap-4 group"
                      >
                        <div
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                          style={{ backgroundColor: `${info.color}20` }}
                        >
                          <info.icon style={{ color: info.color }} size={18} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-white text-sm sm:text-base">
                            {info.title}
                          </h4>
                          {info.href ? (
                            <a
                              href={info.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm truncate block"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-400 text-xs sm:text-sm">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.9 }}
                  className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg p-5 sm:p-6 border border-blue-500/30"
                >
                  <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                    Availability
                  </h4>
                  <div className="space-y-2 sm:space-y-3">
                    {availability.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 sm:gap-3">
                        <item.icon
                          style={{ color: item.color }}
                          size={16}
                          className="flex-shrink-0"
                        />
                        <span className="text-gray-300 text-xs sm:text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-5 sm:p-6 border border-gray-700"
                >
                  <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                    Connect on Social
                  </h4>
                  <div className="flex gap-3 sm:gap-4">
                    {[
                      { icon: Github, href: 'https://github.com/IsmailAbdulkareem', label: 'GitHub', color: '#ffffff' },
                      { icon: Linkedin, href: 'https://www.linkedin.com/in/ismail-abdul-kareem-233b302b3', label: 'LinkedIn', color: '#0077b5' },
                      { icon: Twitter, href: 'https://x.com/IsmailKare63834', label: 'Twitter/X', color: '#1da1f2' }
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        href={social.href}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300 border border-gray-600"
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon style={{ color: social.color }} size={18} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.5 }}
                className="w-full min-w-0"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-5 sm:p-8 border border-gray-700">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                    Send a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500 text-sm sm:text-base"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500 text-sm sm:text-base"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-white placeholder-gray-500 text-sm sm:text-base"
                        placeholder="Tell me about your project, timeline, and budget..."
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {formData.message.length} / 500 characters
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to be contacted about your project.
                    </p>
                  </form>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact3D