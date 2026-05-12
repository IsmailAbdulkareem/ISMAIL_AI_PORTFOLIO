// ✅ 'use client' HATAO — Server Component banana zaroori hai SEO ke liye

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ismail Abdul Kareem",
    "jobTitle": "AI Chatbot Developer & Full-Stack Web Developer",
    "description": "AI-powered website and chatbot developer specializing in intelligent automation, WhatsApp chatbots, and AI-driven web solutions for businesses worldwide.",

    // ✅ FIX: Sahi URL
    "url": "https://buildwithismail.xyz",

    "email": "ismail233290@gmail.com",
    "telephone": "+92-330-3911285",

    // ✅ FIX: sameAs add kiya — Google Knowledge Panel ke liye zaroori
    "sameAs": [
      "https://github.com/IsmailAbdulkareem",
      "https://www.linkedin.com/in/ismail-abdul-kareem-233b302b3",
      "https://x.com/IsmailKare63834",
      "https://buildwithismail.xyz"
    ],

    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "addressCountry": "PK"  // ✅ ISO code use karo "Pakistan" ki jagah
    },

    "knowsAbout": [
      "AI Chatbot Development",
      "WhatsApp Chatbot Integration",
      "AI-Powered Websites",
      "OpenAI API Integration",
      "Next.js Development",
      "React Development",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Business Process Automation",
      "LangChain",
      "Generative AI"
    ],

    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Saylani Mass IT Training (SMIT)"
    },

    "hasOccupation": {
      "@type": "Occupation",
      "name": "AI Web Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Karachi"
      }
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ismail Abdul Kareem — AI Chatbot & Web Development",
    "url": "https://buildwithismail.xyz",
    "telephone": "+92-330-3911285",
    "email": "ismail233290@gmail.com",
    "description": "Custom AI chatbot development, WhatsApp automation, and AI-powered website development for businesses worldwide.",
    "priceRange": "PKR 50,000 - PKR 400,000",
    "currenciesAccepted": "PKR, USD",
    "paymentAccepted": "Bank Transfer, JazzCash, EasyPaisa, PayPal",

    "provider": {
      "@type": "Person",
      "name": "Ismail Abdul Kareem",
      "url": "https://buildwithismail.xyz"
    },

    // ✅ FIX: Worldwide + Karachi dono
    "areaServed": [
      {
        "@type": "City",
        "name": "Karachi"
      },
      {
        "@type": "Country",
        "name": "Pakistan"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Worldwide"
      }
    ],

    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Chatbot Development",
            "description": "Custom AI-powered chatbots that automate customer support, capture leads, and handle business processes 24/7 using OpenAI GPT technology."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WhatsApp Chatbot Development",
            "description": "Intelligent WhatsApp Business API chatbots for automated customer engagement, lead qualification, and business communication in Pakistan."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Powered Website Development",
            "description": "Modern Next.js websites with integrated AI chatbots, automation features, and SEO optimization for businesses in Pakistan and worldwide."
          }
        }
      ]
    }
  }

  // ✅ WebSite schema — Google Sitelinks Search Box ke liye
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ismail — AI Developer Portfolio",
    "url": "https://buildwithismail.xyz",
    "author": {
      "@type": "Person",
      "name": "Ismail Abdul Kareem"
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
          "text": "An AI chatbot is an intelligent virtual assistant that handles customer inquiries, captures leads, and automates repetitive tasks 24/7. Businesses using AI chatbots save 10-20 hours per week and see 2-3x more qualified leads. Ismail Abdul Kareem at buildwithismail.xyz specializes in custom AI chatbot development for businesses in Pakistan."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to build an AI chatbot in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI chatbot development in Pakistan costs PKR 50,000 for a basic chatbot, PKR 80,000-150,000 for a custom OpenAI-powered chatbot, and PKR 100,000-180,000 for WhatsApp Business API integration. Contact Ismail at buildwithismail.xyz for a free consultation and custom quote."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate AI chatbots with WhatsApp for Pakistani businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Ismail specializes in WhatsApp Business API chatbot integration for Pakistani businesses. The chatbot handles customer messages, sends automated responses, qualifies leads, and integrates with your existing systems — all on WhatsApp, which 95% of Pakistani smartphone users already use."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build an AI-powered website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard AI-powered website with chatbot integration takes 2-4 weeks. Simple websites take 1-2 weeks. Complex platforms with custom AI features take 4-6 weeks. Rush delivery is available. Visit buildwithismail.xyz to discuss your project timeline."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide AI chatbot development services outside Karachi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While based in Karachi, Pakistan, Ismail Abdul Kareem provides AI chatbot and web development services to clients across Pakistan and internationally including USA, UK, UAE, Canada, and Australia. All work is delivered remotely with full support."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}