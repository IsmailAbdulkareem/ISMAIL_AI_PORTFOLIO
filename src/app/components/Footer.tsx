'use client'

import { motion } from 'framer-motion'
import { Heart, Mail, Linkedin, Github, Twitter, Phone } from 'lucide-react'

const Footer = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/IsmailAbdulkareem' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/ismail-abdul-kareem-233b302b3' },
    { name: 'X', icon: Twitter, href: 'https://x.com/IsmailKare63834' },
    { name: 'Email', icon: Mail, href: 'mailto:ismail233290@gmail.com' },
    { name: 'WhatsApp', icon: Phone, href: 'https://wa.me/+923303911285' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-max px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">About Ismail</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm a dedicated Full-Stack Developer with a background in Accounting, having transitioned to tech through a coding bootcamp at Saylani Mass IT Training (SMIT). 
              I specialize in building modern, responsive web applications using <span className="font-semibold text-primary-300">React</span>,
               <span className="font-semibold text-primary-300">Next.js</span>, <span className="font-semibold text-primary-300">Node.js</span>,
                and <span className="font-semibold text-primary-300">MongoDB</span>, with proficiency in <span className="font-semibold text-primary-300">TypeScript</span> 
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2 mb-2">
            Made by Ismail with <Heart className="text-red-500" size={18} />
          </p>
          <p>© {new Date().getFullYear()} Ismail. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer