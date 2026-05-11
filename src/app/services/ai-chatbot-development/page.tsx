import type { Metadata } from 'next'
import Link from 'next/link'
import { Bot, MessageSquare, Zap, Clock, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Chatbot Development Services in Karachi, Pakistan | Custom Chatbot Solutions',
  description: 'Professional AI chatbot development in Karachi. Build intelligent chatbots that automate customer support, capture leads 24/7, and boost sales. Free consultation available.',
  keywords: [
    'AI chatbot development Pakistan',
    'chatbot developer Karachi',
    'custom chatbot development',
    'AI chatbot services Pakistan',
    'intelligent chatbot developer',
    'business chatbot Karachi'
  ]
}

export default function AIChatbotDevelopment() {
  const benefits = [
    {
      icon: Clock,
      title: '24/7 Customer Support',
      description: 'Never miss a customer inquiry. Your AI chatbot works round the clock, even when you sleep.'
    },
    {
      icon: TrendingUp,
      title: 'Boost Lead Conversion',
      description: 'Capture and qualify leads instantly. Studies show chatbots increase conversions by 30-50%.'
    },
    {
      icon: Zap,
      title: 'Instant Responses',
      description: 'Customers get answers in seconds, not hours. Reduce response time from hours to milliseconds.'
    },
    {
      icon: MessageSquare,
      title: 'Handle Multiple Conversations',
      description: 'One chatbot can handle hundreds of conversations simultaneously. Scale without hiring.'
    }
  ]

  const features = [
    'Natural language understanding with OpenAI GPT-4',
    'Custom training on your business data',
    'Lead capture and CRM integration',
    'Multi-language support (English, Urdu)',
    'Analytics and conversation insights',
    'Easy-to-use admin dashboard',
    'WhatsApp, website, and social media integration',
    'Automated appointment booking',
    'Product recommendations',
    'Payment processing integration'
  ]

  const useCases = [
    {
      industry: 'E-commerce',
      example: 'Product recommendations, order tracking, customer support'
    },
    {
      industry: 'Real Estate',
      example: 'Property inquiries, viewing appointments, lead qualification'
    },
    {
      industry: 'Healthcare',
      example: 'Appointment booking, symptom checking, patient FAQs'
    },
    {
      industry: 'Education',
      example: 'Course information, enrollment assistance, student support'
    },
    {
      industry: 'Restaurants',
      example: 'Menu inquiries, reservations, delivery orders'
    },
    {
      industry: 'Services',
      example: 'Quote requests, service booking, customer onboarding'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              <Bot size={16} />
              AI Chatbot Development
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Build AI Chatbots That Work While You Sleep
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Custom AI chatbot development in Karachi that automates customer support, captures leads 24/7, and increases sales by 30-50%. Get a free consultation today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 inline-flex items-center gap-2"
              >
                Get Free Consultation
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/#projects"
                className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                View Examples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-max">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Why Your Business Needs an AI Chatbot
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-blue-400" size={24} />
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
              What You Get
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-max">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Perfect For Any Industry
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase) => (
              <div
                key={useCase.industry}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {useCase.industry}
                </h3>
                <p className="text-gray-400 text-sm">
                  {useCase.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free consultation and custom quote. No commitment required.
            </p>
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 inline-flex items-center gap-2"
            >
              Start Your Project Today
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
