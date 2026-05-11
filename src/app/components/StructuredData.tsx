'use client'

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ismail Abdul Kareem",
    "jobTitle": "AI Chatbot Developer & Full-Stack Web Developer",
    "description": "AI-powered website and chatbot developer specializing in intelligent automation, WhatsApp chatbots, and AI-driven web solutions for businesses in Karachi, Pakistan",
    "url": "https://ismailabdulkareem.vercel.app",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "addressCountry": "Pakistan"
    },
    "knowsAbout": [
      "AI Chatbot Development",
      "WhatsApp Chatbot Integration",
      "AI-Powered Websites",
      "OpenAI Integration",
      "Next.js Development",
      "React Development",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Business Automation"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Saylani Mass IT Training (SMIT)"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Chatbot Development & AI-Powered Website Development",
    "provider": {
      "@type": "Person",
      "name": "Ismail Abdul Kareem"
    },
    "areaServed": {
      "@type": "City",
      "name": "Karachi",
      "containedIn": {
        "@type": "Country",
        "name": "Pakistan"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Chatbot Development",
            "description": "Custom AI-powered chatbots that automate customer support, lead capture, and business processes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WhatsApp Chatbot Integration",
            "description": "Intelligent WhatsApp chatbots for automated customer engagement and business communication"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Powered Website Development",
            "description": "Modern, SEO-optimized websites with integrated AI features for automation and intelligence"
          }
        }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an AI chatbot and how can it help my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An AI chatbot is an intelligent virtual assistant that can handle customer inquiries, capture leads, and automate repetitive tasks 24/7. It helps businesses save time, reduce costs, and improve customer satisfaction by providing instant responses and automating workflows."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to build an AI chatbot in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI chatbot development costs vary based on complexity and features. A basic chatbot starts from PKR 50,000, while advanced AI chatbots with custom integrations range from PKR 100,000-300,000. Contact me for a free consultation and custom quote."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate AI chatbots with WhatsApp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I specialize in WhatsApp chatbot integration using the WhatsApp Business API. Your chatbot can handle customer messages, send automated responses, capture leads, and integrate with your existing business systems."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build an AI-powered website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard AI-powered website takes 2-4 weeks to develop, depending on complexity and features. This includes design, development, AI integration, testing, and deployment. Rush delivery is available for urgent projects."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide support after the website or chatbot is launched?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I provide ongoing support and maintenance for all projects. This includes bug fixes, updates, performance monitoring, and feature enhancements. Support packages are available on monthly or yearly basis."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
