'use client'

import { motion } from 'framer-motion'
import { Heart, Mail, Linkedin, Github, Twitter, Phone, ArrowUp, Sparkles, Code, Zap } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'AI Chatbot Development', href: '/services/ai-chatbot-development', icon: Sparkles },
    { name: 'AI-Powered Websites', href: '/services/ai-powered-website', icon: Code },
    { name: 'WhatsApp Chatbot', href: '/services/whatsapp-chatbot', icon: Zap },
  ]

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/IsmailAbdulkareem', color: '#ffffff' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/ismail-abdul-kareem-233b302b3', color: '#0077b5' },
    { name: 'X', icon: Twitter, href: 'https://x.com/IsmailKare63834', color: '#1da1f2' },
    { name: 'Email', icon: Mail, href: 'mailto:ismail233290@gmail.com', color: '#ea4335' },
    { name: 'WhatsApp', icon: Phone, href: 'https://wa.me/923303911285', color: '#25d366' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-900 text-white pt-16 pb-8 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black opacity-90" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="md:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <Sparkles className="text-blue-400" size={28} />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ismail Abdul Kareem
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 leading-relaxed max-w-md"
            >
              AI Chatbot Developer & Full-Stack Web Developer specializing in <span className="text-blue-400 font-semibold">AI-powered web solutions</span>.
              I help businesses in Karachi automate and grow with intelligent websites and chatbots.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-sm text-gray-500"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for freelance projects
            </motion.div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold"
            >
              Services
            </motion.h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                  >
                    <service.icon size={16} className="text-blue-400 group-hover:text-blue-300" />
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold"
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <h4 className="text-lg font-semibold mb-4 text-center">Connect With Me</h4>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-gray-600"
                aria-label={link.name}
              >
                <link.icon style={{ color: link.color }} size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-400 text-sm"
          >
            Made with <Heart className="text-red-500" size={16} fill="currentColor" /> by Ismail
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} Ismail Abdul Kareem. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-500 text-xs"
          >
            <span>Built with</span>
            <span className="text-blue-400 font-semibold">Next.js 14</span>
            <span>•</span>
            <span className="text-purple-400 font-semibold">Three.js</span>
            <span>•</span>
            <span className="text-cyan-400 font-semibold">TypeScript</span>
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/50 transition-all duration-300 z-40"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}

export default Footer
