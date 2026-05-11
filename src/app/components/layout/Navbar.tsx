'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const serviceItems = [
    { name: 'AI Chatbot Development', href: '/services/ai-chatbot-development' },
    { name: 'AI-Powered Websites', href: '/services/ai-powered-website' },
    { name: 'WhatsApp Chatbot', href: '/services/whatsapp-chatbot' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
            >
              <Sparkles className="text-blue-400" size={24} />
              Ismail
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const active = isActive(item.href)

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                      className={`relative px-4 py-2 rounded-lg transition-all duration-200 font-medium cursor-pointer flex items-center gap-1 ${
                        active ? 'text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {active && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown size={16} className="relative z-10" />
                    </motion.div>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-md rounded-lg border border-gray-700 shadow-xl overflow-hidden"
                        >
                          <Link
                            href="/services"
                            className="block px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors border-b border-gray-700"
                          >
                            <div className="font-semibold">All Services</div>
                            <div className="text-xs text-gray-400">View complete overview</div>
                          </Link>
                          {serviceItems.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                      active ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </motion.div>
                </Link>
              )
            })}
          </nav>

          {/* CTA Button - Desktop */}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition-all duration-300"
            >
              Hire Me
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => {
                  const active = isActive(item.href)
                  return (
                    <Link key={item.name} href={item.href}>
                      <motion.div
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                          active
                            ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-blue-500/30'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                        }`}
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  )
                })}
                <Link href="/contact">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold shadow-lg mt-4"
                  >
                    Hire Me
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Navbar
