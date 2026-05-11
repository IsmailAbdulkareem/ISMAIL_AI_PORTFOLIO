import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle, Smartphone, Users, Clock, TrendingUp, CheckCircle, ArrowRight, Zap, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'WhatsApp Chatbot Development in Pakistan | Automated WhatsApp Business Solutions',
  description: 'Build WhatsApp chatbots in Pakistan that automate customer support, send bulk messages, and capture leads 24/7. Integrate with WhatsApp Business API. Free consultation available.',
  keywords: [
    'WhatsApp chatbot developer Pakistan',
    'WhatsApp Business API Pakistan',
    'WhatsApp automation Pakistan',
    'WhatsApp chatbot Karachi',
    'automated WhatsApp messages',
    'WhatsApp bot development'
  ]
}

export default function WhatsAppChatbot() {
  const benefits = [
    {
      icon: Users,
      title: 'Reach 2 Billion Users',
      description: 'WhatsApp has 2+ billion active users. Meet your customers where they already are.'
    },
    {
      icon: Clock,
      title: 'Instant Responses',
      description: 'Reply to customer messages instantly, even outside business hours. Never miss a lead.'
    },
    {
      icon: TrendingUp,
      title: 'Higher Engagement',
      description: 'WhatsApp messages have 98% open rate vs 20% for emails. 10x better engagement.'
    },
    {
      icon: Zap,
      title: 'Automate Everything',
      description: 'Order confirmations, appointment reminders, support tickets - all automated on WhatsApp.'
    }
  ]

  const features = [
    'WhatsApp Business API integration',
    'Automated customer support',
    'Lead capture and qualification',
    'Order status updates',
    'Appointment booking and reminders',
    'Product catalog integration',
    'Payment link sharing',
    'Bulk message broadcasting',
    'Multi-agent support',
    'Chat history and analytics',
    'CRM integration',
    'Custom workflows and automation',
    'Multi-language support (English, Urdu)',
    'Rich media support (images, videos, PDFs)',
    'Quick reply buttons and menus'
  ]

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Order confirmations, shipping updates, product recommendations, abandoned cart recovery',
      icon: '🛒'
    },
    {
      title: 'Restaurants',
      description: 'Menu sharing, order taking, delivery updates, table reservations',
      icon: '🍕'
    },
    {
      title: 'Healthcare',
      description: 'Appointment booking, prescription reminders, test results, patient FAQs',
      icon: '🏥'
    },
    {
      title: 'Real Estate',
      description: 'Property inquiries, viewing schedules, document sharing, lead follow-ups',
      icon: '🏠'
    },
    {
      title: 'Education',
      description: 'Course information, enrollment, fee reminders, assignment notifications',
      icon: '📚'
    },
    {
      title: 'Services',
      description: 'Quote requests, booking confirmations, service reminders, customer feedback',
      icon: '⚙️'
    }
  ]

  const pricing = [
    {
      name: 'Basic',
      price: 'PKR 75,000',
      setup: 'One-time',
      monthly: 'PKR 5,000/month',
      features: [
        'Up to 1,000 conversations/month',
        'Basic automation flows',
        'Lead capture',
        'Analytics dashboard',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: 'PKR 150,000',
      setup: 'One-time',
      monthly: 'PKR 10,000/month',
      features: [
        'Up to 5,000 conversations/month',
        'Advanced AI responses',
        'CRM integration',
        'Multi-agent support',
        'Priority support',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      setup: 'Custom',
      monthly: 'Custom pricing',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        'API access',
        'Dedicated account manager',
        '24/7 support',
        'White-label solution'
      ]
    }
  ]

  const howItWorks = [
    {
      step: '1',
      title: 'Free Consultation',
      description: 'We discuss your business needs and design the perfect WhatsApp automation strategy.'
    },
    {
      step: '2',
      title: 'WhatsApp API Setup',
      description: 'We handle the entire WhatsApp Business API verification and setup process.'
    },
    {
      step: '3',
      title: 'Chatbot Development',
      description: 'We build and train your custom chatbot with your business data and workflows.'
    },
    {
      step: '4',
      title: 'Testing & Launch',
      description: 'Thorough testing followed by smooth launch. We train your team on using the system.'
    },
    {
      step: '5',
      title: 'Ongoing Support',
      description: 'Continuous monitoring, updates, and optimization to improve performance.'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20" />
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-500/30">
              <MessageCircle size={16} />
              WhatsApp Chatbot Development
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Automate Your WhatsApp Business Communication
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              WhatsApp chatbot development in Pakistan. Automate customer support, send order updates, and capture leads on WhatsApp 24/7. 98% open rate guaranteed.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 inline-flex items-center gap-2"
              >
                Get Free Demo
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/#projects"
                className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold border border-gray-700 hover:border-green-500 transition-all duration-300"
              >
                See Examples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-max">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Why WhatsApp Chatbots?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-green-400" size={24} />
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
              Powerful Features
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
            Perfect For Every Business
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container-max">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            How It Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {howItWorks.map((item, index) => (
                <div
                  key={item.step}
                  className="flex gap-6 items-start"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
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
            {pricing.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-lg p-8 border transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500 scale-105'
                    : 'bg-gray-800/50 border-gray-700'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-green-400">{pkg.price}</div>
                  <div className="text-sm text-gray-400">{pkg.setup}</div>
                  <div className="text-lg text-gray-300 mt-2">{pkg.monthly}</div>
                </div>
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
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/50'
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600/20 to-emerald-600/20">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Automate Your WhatsApp?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free demo and see how WhatsApp chatbots can transform your business communication.
            </p>
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 inline-flex items-center gap-2"
            >
              Request Free Demo
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
