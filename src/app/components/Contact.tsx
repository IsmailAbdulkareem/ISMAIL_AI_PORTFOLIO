'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {
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
        toast.success('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        const data = await res.json()
        toast.error(data.error || 'Message not sent!')
      }
    } catch (err) {
      toast.error('Message not sent!')
    }
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <Toaster position="top-right" />
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
          >
            Contact me
          </motion.h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Please contact me directly at{' '}
                  <a 
                    href="mailto:ismail233290@gmail.com" 
                    className="text-primary-600 hover:text-primary-700 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ismail233290@gmail.com
                  </a>{' '}
                  or through this form.
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Mail className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">ismail233290@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Phone className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+92 3303911285</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <MapPin className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Location</h4>
                      <p className="text-gray-600">Mehran Town, Sector 6H A42, Karachi, Pakistan</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.9 }}
                  className="mt-8"
                >
                  <h4 className="font-semibold text-gray-800 mb-4">Follow me</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: Github, href: 'https://github.com/IsmailAbdulkareem', label: 'GitHub' },
                      { icon: Linkedin, href: 'https://www.linkedin.com/in/ismail-abdul-kareem-233b302b3', label: 'LinkedIn' },
                      { icon: Twitter, href: 'https://x.com/IsmailKare63834', label: 'Twitter' }
                    ].map((social, index) => (
                      <motion.a
                        key={social.label}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={social.href}
                        className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors duration-200"
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="text-gray-600 hover:text-primary-600 transition-colors duration-200" size={20} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: 0.4 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Submit
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact