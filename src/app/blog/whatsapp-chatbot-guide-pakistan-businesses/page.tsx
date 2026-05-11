import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, CheckCircle, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Complete WhatsApp Chatbot Guide for Pakistani Businesses 2026 | Setup & Pricing',
  description: 'Step-by-step guide to WhatsApp Business API and chatbot setup in Pakistan. Includes pricing, features, integration steps, and real case studies. Start automating today.',
  keywords: [
    'WhatsApp Business API Pakistan',
    'WhatsApp chatbot setup',
    'WhatsApp automation guide',
    'WhatsApp Business Pakistan',
    'WhatsApp chatbot pricing',
    'WhatsApp API integration'
  ]
}

export default function WhatsAppChatbotGuide() {
  return (
    <main className="min-h-screen bg-gray-900 py-20">
      <article className="container-max max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full border border-green-500/30">
              WhatsApp Automation
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              May 8, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              12 min read
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Complete Guide to WhatsApp Chatbots for Pakistani Businesses
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Everything you need to know about WhatsApp Business API, chatbot setup, pricing, and automation. Includes real case studies from Pakistani businesses.
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">Why WhatsApp for Business?</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">2B+</div>
              <div className="text-gray-300">Active Users Worldwide</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-300">Message Open Rate</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300">Read Within 3 Minutes</div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-8">
            WhatsApp is the #1 messaging app in Pakistan. Your customers are already there. Instead of forcing them to call you, email you, or fill out forms on your website, meet them where they are: WhatsApp.
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">WhatsApp Business App vs WhatsApp Business API</h2>

          <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">WhatsApp Business App (Free)</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span>Free to use</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span>Good for very small businesses</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-red-400 mt-1">✗</span>
                <span>Limited to 1 device</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-red-400 mt-1">✗</span>
                <span>No automation or chatbots</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-red-400 mt-1">✗</span>
                <span>Can't handle high message volume</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-4">WhatsApp Business API (Paid)</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span>Unlimited devices and agents</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span>AI chatbots and automation</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span>Handle thousands of conversations</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span>CRM integration</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span>Analytics and reporting</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">How to Get WhatsApp Business API in Pakistan</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Choose a Business Solution Provider (BSP)</h3>
                  <p className="text-gray-300">
                    You can't apply directly to WhatsApp. You need to go through an approved BSP. I can help you with this entire process and handle the technical setup.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Verify Your Business</h3>
                  <p className="text-gray-300 mb-3">
                    WhatsApp requires business verification. You'll need:
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Business registration documents</li>
                    <li>• Valid phone number (not currently on WhatsApp)</li>
                    <li>• Business website or Facebook page</li>
                    <li>• Business email address</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Setup & Integration</h3>
                  <p className="text-gray-300">
                    Once approved (usually 1-2 weeks), I'll integrate the API with your chatbot, CRM, and other systems. This takes 2-3 weeks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Launch & Monitor</h3>
                  <p className="text-gray-300">
                    After testing, we launch your WhatsApp chatbot. I provide ongoing monitoring and optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">WhatsApp Chatbot Pricing in Pakistan</h2>

          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-lg p-8 border border-green-500/30 mb-8">
            <h3 className="text-xl font-bold text-white mb-6">Cost Breakdown:</h3>

            <div className="space-y-4">
              <div className="flex justify-between items-start pb-4 border-b border-gray-700">
                <div>
                  <div className="text-white font-semibold mb-1">One-Time Setup</div>
                  <div className="text-sm text-gray-400">BSP registration, API setup, chatbot development</div>
                </div>
                <div className="text-xl font-bold text-white">PKR 75,000 - 150,000</div>
              </div>

              <div className="flex justify-between items-start pb-4 border-b border-gray-700">
                <div>
                  <div className="text-white font-semibold mb-1">Monthly Platform Fee</div>
                  <div className="text-sm text-gray-400">BSP hosting, maintenance, support</div>
                </div>
                <div className="text-xl font-bold text-white">PKR 5,000 - 15,000</div>
              </div>

              <div className="flex justify-between items-start pb-4 border-b border-gray-700">
                <div>
                  <div className="text-white font-semibold mb-1">WhatsApp Conversation Charges</div>
                  <div className="text-sm text-gray-400">Charged by WhatsApp per conversation</div>
                </div>
                <div className="text-xl font-bold text-white">PKR 2-5 per conversation</div>
              </div>

              <div className="pt-4">
                <div className="text-sm text-gray-400 mb-2">Example: 1,000 conversations/month</div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Total Monthly Cost:</span>
                  <span className="text-2xl font-bold text-green-400">~PKR 10,000</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">What Can You Automate?</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              'Order confirmations and tracking',
              'Appointment booking and reminders',
              'Customer support FAQs',
              'Lead capture and qualification',
              'Product catalog sharing',
              'Payment link distribution',
              'Feedback collection',
              'Abandoned cart recovery',
              'Promotional broadcasts',
              'Delivery notifications',
              'Invoice and receipt sharing',
              'Customer onboarding'
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Real Case Study: Restaurant in Karachi</h2>

          <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">The Challenge:</h3>
            <p className="text-gray-300 mb-6">
              A popular restaurant was receiving 100+ WhatsApp messages daily for menu inquiries, orders, and delivery status. Staff spent 4-5 hours daily just replying to messages.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">The Solution:</h3>
            <p className="text-gray-300 mb-6">
              We built a WhatsApp chatbot that:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span>Shares menu with images and prices automatically</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span>Takes orders and sends to kitchen</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span>Sends order status updates automatically</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span>Collects delivery addresses and payment preferences</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-4">Results After 2 Months:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-600/20 rounded-lg p-4 border border-green-500/30">
                <div className="text-3xl font-bold text-green-400 mb-1">80%</div>
                <div className="text-sm text-gray-300">Messages Handled by Bot</div>
              </div>
              <div className="bg-green-600/20 rounded-lg p-4 border border-green-500/30">
                <div className="text-3xl font-bold text-green-400 mb-1">4.5 hrs</div>
                <div className="text-sm text-gray-300">Staff Time Saved Daily</div>
              </div>
              <div className="bg-green-600/20 rounded-lg p-4 border border-green-500/30">
                <div className="text-3xl font-bold text-green-400 mb-1">35%</div>
                <div className="text-sm text-gray-300">Increase in Orders</div>
              </div>
              <div className="bg-green-600/20 rounded-lg p-4 border border-green-500/30">
                <div className="text-3xl font-bold text-green-400 mb-1">24/7</div>
                <div className="text-sm text-gray-300">Order Availability</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Getting Started</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Ready to automate your WhatsApp business communication? Here's what happens next:
          </p>

          <ol className="space-y-3 mb-8 list-decimal list-inside text-gray-300">
            <li className="leading-relaxed">Free consultation to understand your needs</li>
            <li className="leading-relaxed">I handle the entire WhatsApp Business API setup</li>
            <li className="leading-relaxed">Custom chatbot development (2-3 weeks)</li>
            <li className="leading-relaxed">Testing and refinement</li>
            <li className="leading-relaxed">Launch with full training and support</li>
          </ol>

          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-lg p-8 border border-green-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Automate Your WhatsApp?</h3>
            <p className="text-gray-300 mb-6">
              Get a free demo and see how WhatsApp chatbots work for your business.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
            >
              Request Free Demo
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
