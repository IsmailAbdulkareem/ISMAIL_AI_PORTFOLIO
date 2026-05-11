'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'
import Scene from './3d/Scene'
import Lights from './3d/Lights'
import ParticleField from './3d/ParticleField'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const testimonials = [
    {
      name: 'Ahmed Khan',
      role: 'CEO, Mustafa Builder and Developer',
      company: 'Construction Company',
      image: '👨‍💼',
      rating: 5,
      text: 'Ismail built our company website with an AI chatbot that captures leads automatically. We now get 3-4 qualified inquiries daily without lifting a finger. The chatbot answers customer questions even at midnight. Best investment we made this year.',
      result: 'Increased leads by 300%'
    },
    {
      name: 'Fatima Siddiqui',
      role: 'Owner, Fitness First Gym',
      company: 'Fitness Center',
      image: '👩‍💼',
      rating: 5,
      text: 'Our gym website was outdated and slow. Ismail rebuilt it with modern design and added WhatsApp integration. Now members can book classes directly through WhatsApp. The automated reminders reduced no-shows by 40%. Highly recommend!',
      result: 'Reduced no-shows by 40%'
    },
    {
      name: 'Hassan Ali',
      role: 'Founder, FoodHub',
      company: 'Food Delivery Startup',
      image: '👨‍💻',
      rating: 5,
      text: 'We needed a fast, mobile-friendly website with smart menu filtering. Ismail delivered exactly what we wanted in just 3 weeks. The site loads in under 2 seconds and our online orders increased by 60%. Professional work, great communication.',
      result: 'Orders increased by 60%'
    },
    {
      name: 'Sarah Malik',
      role: 'HR Manager, TechVision',
      company: 'IT Services',
      image: '👩‍💼',
      rating: 5,
      text: 'Ismail created an AI-powered CV builder for our recruitment process. It saves our team 10+ hours every week. The tool is intuitive, fast, and generates professional resumes instantly. Worth every penny.',
      result: 'Saved 10+ hours/week'
    },
    {
      name: 'Bilal Ahmed',
      role: 'Owner, SpeedTools Hub',
      company: 'SaaS Platform',
      image: '👨‍💼',
      rating: 5,
      text: 'Working with Ismail was a game-changer. He built our entire productivity platform with AI-powered tools. The automation features are incredible and our users love it. Fast delivery, clean code, and excellent support.',
      result: 'Launched in 4 weeks'
    },
    {
      name: 'Zainab Hussain',
      role: 'Marketing Director, PropFinder',
      company: 'Real Estate',
      image: '👩‍💼',
      rating: 5,
      text: 'Our real estate website needed AI chatbot to handle property inquiries 24/7. Ismail integrated an intelligent bot that qualifies leads and schedules viewings automatically. Our conversion rate doubled in the first month!',
      result: 'Conversion rate doubled'
    }
  ]

  return (
    <section id="testimonials" className="relative min-h-screen py-20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene>
          <Lights />
          <ParticleField count={600} color="#ec4899" />
        </Scene>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/95 z-10" />

      {/* Content */}
      <div className="container-max relative z-20">
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
              What Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses across Pakistan
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-pink-500 transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote size={40} className="text-pink-400" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 leading-relaxed mb-4 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Result Badge */}
                <div className="inline-block bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-pink-500/30 rounded-full px-3 py-1 mb-4">
                  <span className="text-pink-300 text-sm font-semibold">
                    ✨ {testimonial.result}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-600/30 to-purple-600/30 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
          >
            {[
              { label: 'Client Satisfaction', value: '100%' },
              { label: 'Projects Delivered', value: '10+' },
              { label: 'Average Rating', value: '5.0' },
              { label: 'Repeat Clients', value: '80%' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700"
              >
                <div className="text-4xl font-bold text-pink-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(236, 72, 153, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
            >
              Join Our Happy Clients
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
