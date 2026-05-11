import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, Sparkles, Zap, Search, Shield, TrendingUp, CheckCircle, ArrowRight, Bot } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI-Powered Website Development in Karachi, Pakistan | Smart Web Solutions',
  description: 'Build AI-powered websites in Karachi that automate tasks, engage visitors with intelligent chatbots, and rank higher on Google. Modern, fast, and SEO-optimized. Free quote available.',
  keywords: [
    'AI-powered website developer Karachi',
    'AI website development Pakistan',
    'intelligent website developer',
    'AI web development Karachi',
    'smart website Pakistan',
    'AI integration website'
  ]
}

export default function AIPoweredWebsite() {
  const benefits = [
    {
      icon: Bot,
      title: 'Built-in AI Chatbot',
      description: 'Every website includes an intelligent chatbot that answers questions and captures leads automatically.'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Rank higher on Google with AI-optimized content, meta tags, and structured data for rich results.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built with Next.js 14 for blazing-fast performance. Load times under 2 seconds guaranteed.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security, automatic backups, and 99.9% uptime guarantee.'
    }
  ]

  const features = [
    'AI-powered chatbot integration',
    'Intelligent content recommendations',
    'Automated lead capture and email notifications',
    'Advanced SEO optimization',
    'Mobile-responsive design',
    'Fast loading speed (under 2 seconds)',
    'Contact forms with spam protection',
    'Google Analytics integration',
    'Social media integration',
    'Admin dashboard for content management',
    'WhatsApp integration',
    'Payment gateway integration (optional)',
    'Multi-language support',
    'Blog/news section',
    'Free SSL certificate and hosting setup'
  ]

  const packages = [
    {
      name: 'Starter',
      price: 'PKR 50,000',
      description: 'Perfect for small businesses and startups',
      features: [
        '5-page website',
        'Basic AI chatbot',
        'Mobile responsive',
        'SEO optimized',
        'Contact form',
        '1 month support'
      ]
    },
    {
      name: 'Professional',
      price: 'PKR 100,000',
      description: 'Most popular for growing businesses',
      features: [
        '10-page website',
        'Advanced AI chatbot',
        'WhatsApp integration',
        'Blog section',
        'Lead capture system',
        'Analytics dashboard',
        '3 months support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large businesses with complex needs',
      features: [
        'Unlimited pages',
        'Custom AI features',
        'CRM integration',
        'Payment gateway',
        'Custom admin panel',
        'Priority support',
        '6 months support'
      ]
    }
  ]

  const industries = [
    'E-commerce & Online Stores',
    'Real Estate & Property',
    'Healthcare & Clinics',
    'Education & Training',
    'Restaurants & Food',
    'Construction & Builders',
    'Legal & Consulting',
    'Fitness & Wellness',
    'Travel & Tourism',
    'Technology & Software'
  ]

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-500/30">
              <Globe size={16} />
              AI-Powered Website Development
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Websites That Think, Learn, and Grow Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              AI-powered website development in Karachi. Modern, fast, SEO-optimized websites with built-in intelligent chatbots that convert visitors into customers. Starting from PKR 50,000.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 inline-flex items-center gap-2"
              >
                Get Free Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/#projects"
                className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-max">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Why Choose AI-Powered Websites?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Everything You Need to Succeed Online
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-max">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-lg p-8 border transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500 scale-105'
                    : 'bg-gray-800/50 border-gray-700'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-purple-400 mb-2">{pkg.price}</div>
                <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/50'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container-max">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Serving All Industries
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 text-center text-gray-300"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600/20 to-pink-600/20">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Launch Your AI-Powered Website?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free consultation and custom quote. See how AI can transform your online presence.
            </p>
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 inline-flex items-center gap-2"
            >
              Request Free Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
