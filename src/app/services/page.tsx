import type { Metadata } from 'next'
import Link from 'next/link'
import { Bot, Globe, MessageCircle, ArrowRight, CheckCircle, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Development Services | AI Chatbots & Websites in Karachi, Pakistan',
  description: 'Professional AI development services in Karachi. AI chatbot development, AI-powered websites, and WhatsApp automation. Transform your business with intelligent solutions.',
  keywords: [
    'AI development services Pakistan',
    'AI chatbot services Karachi',
    'AI website development',
    'WhatsApp chatbot services',
    'business automation Pakistan'
  ]
}

export default function ServicesPage() {
  const services = [
    {
      icon: Bot,
      title: 'AI Chatbot Development',
      slug: 'ai-chatbot-development',
      description: 'Build intelligent chatbots that automate customer support, capture leads 24/7, and increase sales by 30-50%.',
      features: [
        '24/7 automated customer support',
        'Lead capture and qualification',
        'Natural language understanding',
        'Multi-language support',
        'CRM integration',
        'Analytics dashboard'
      ],
      pricing: 'Starting from PKR 75,000',
      color: 'blue',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Globe,
      title: 'AI-Powered Websites',
      slug: 'ai-powered-website',
      description: 'Modern, fast, SEO-optimized websites with built-in AI features that convert visitors into customers.',
      features: [
        'Built-in AI chatbot',
        'Lightning-fast performance',
        'SEO optimized for AI Overviews',
        'Mobile-responsive design',
        'Admin dashboard',
        'Free SSL & hosting setup'
      ],
      pricing: 'Starting from PKR 100,000',
      color: 'purple',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chatbot',
      slug: 'whatsapp-chatbot',
      description: 'Automate WhatsApp business communication with intelligent chatbots. 98% open rate guaranteed.',
      features: [
        'WhatsApp Business API setup',
        'Automated order confirmations',
        'Appointment booking',
        'Bulk messaging',
        'Payment integration',
        'Multi-agent support'
      ],
      pricing: 'Starting from PKR 75,000',
      color: 'green',
      gradient: 'from-green-600 to-emerald-600'
    }
  ]

  const benefits = [
    'Save 20+ hours per week on repetitive tasks',
    'Increase lead conversion by 3x',
    'Reduce operational costs by 60%',
    '24/7 availability without hiring',
    'Scale without increasing headcount',
    'Improve customer satisfaction'
  ]

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-max relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              <Sparkles size={16} />
              AI Development Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Your Business with AI-Powered Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Professional AI chatbot development, AI-powered websites, and WhatsApp automation services in Karachi, Pakistan. Automate your business and grow faster.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container-max px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect solution for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <div className="text-2xl font-bold text-blue-400 mb-4">
                    {service.pricing}
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container-max px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Why Choose AI Solutions?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 text-gray-300 bg-gray-800/50 rounded-lg p-4 border border-gray-700"
                >
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
        <div className="container-max px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free consultation and custom quote. No commitment required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                Get Free Consultation
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
