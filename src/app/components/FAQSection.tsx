'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How much does an AI chatbot cost in Pakistan?",
      answer: "AI chatbot costs in Pakistan vary by complexity. A basic FAQ chatbot starts from PKR 30,000–60,000. A custom OpenAI-powered chatbot ranges from PKR 80,000–150,000. A full WhatsApp Business API chatbot with integrations costs PKR 100,000–180,000. I offer a free consultation to give you an exact quote for your business."
    },
    {
      question: "How long does it take to build an AI chatbot?",
      answer: "A basic chatbot takes 3–5 days. A custom AI-powered chatbot with OpenAI integration takes 1–2 weeks. A full WhatsApp chatbot with CRM integration takes 2–3 weeks. Rush delivery is available for urgent projects."
    },
    {
      question: "Do you provide WhatsApp chatbot development in Karachi?",
      answer: "Yes. I specialize in WhatsApp Business API chatbot development for businesses in Karachi and across Pakistan. The chatbot works 24/7, answers customer questions, captures leads, sends automated follow-ups, and integrates with your existing business systems."
    },
    {
      question: "What is the difference between an AI chatbot and a regular chatbot?",
      answer: "A regular chatbot only answers questions it was pre-programmed for — anything outside its script fails. An AI chatbot powered by OpenAI GPT understands natural language, handles unexpected questions, works in Urdu and English, and learns from your business data to give accurate, human-like responses 24/7."
    },
    {
      question: "Do you work with international clients outside Pakistan?",
      answer: "Yes. While I am based in Karachi, Pakistan, I work with clients worldwide including USA, UK, UAE, Canada, and Australia. All projects are delivered remotely with regular communication via WhatsApp, email, or video call."
    },
    {
      question: "What happens after my chatbot or website is launched?",
      answer: "I provide full post-launch support including bug fixes, performance monitoring, content updates, and feature enhancements. Monthly and yearly support packages are available so your website and chatbot always stay up to date."
    }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-950">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about AI chatbot and web development services
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-400 transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  aria-hidden={openIndex !== index}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="https://wa.me/923303911285"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={20} />
              Still have questions? Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection