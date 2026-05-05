/**
 * AI Agent Tools for Portfolio Chatbot
 * Tools that the agent can use to help users
 */

import { portfolioKnowledge } from '@/app/data/portfolio-knowledge';

export const agentTools = [
  {
    type: "function" as const,
    function: {
      name: "get_contact_information",
      description: "Get Ismail's contact information including email, phone, WhatsApp, and social media links. Use this when users ask how to contact Ismail or want his contact details.",
      parameters: {
        type: "object",
        properties: {},
        required: []
      }
    }
  },
  {
    type: "function" as const,
    function: {
      name: "get_skills_and_technologies",
      description: "Get detailed information about Ismail's technical skills, technologies he works with, and expertise areas. Use this when users ask about his skills, tech stack, or what technologies he knows.",
      parameters: {
        type: "object",
        properties: {
          category: {
            type: "string",
            enum: ["frontend", "backend", "database", "ai_ml", "devops", "all"],
            description: "The category of skills to retrieve"
          }
        },
        required: []
      }
    }
  },
  {
    type: "function" as const,
    function: {
      name: "get_projects",
      description: "Get information about Ismail's completed projects, including descriptions, technologies used, and links. Use this when users ask about his work, portfolio, or specific projects.",
      parameters: {
        type: "object",
        properties: {
          project_name: {
            type: "string",
            description: "Optional: specific project name to get details about"
          }
        },
        required: []
      }
    }
  },
  {
    type: "function" as const,
    function: {
      name: "get_services_and_pricing",
      description: "Get information about services Ismail offers and pricing details. Use this when users ask about services, what he can build, pricing, rates, or project costs.",
      parameters: {
        type: "object",
        properties: {
          service_type: {
            type: "string",
            enum: ["all", "ai_websites", "full_stack", "automation", "seo", "pricing"],
            description: "Type of service information to retrieve"
          }
        },
        required: []
      }
    }
  },
  {
    type: "function" as const,
    function: {
      name: "get_experience",
      description: "Get Ismail's work experience, education, and professional journey. Use this when users ask about his background, experience, or career history.",
      parameters: {
        type: "object",
        properties: {},
        required: []
      }
    }
  },
  {
    type: "function" as const,
    function: {
      name: "capture_lead",
      description: "Capture lead information when a user expresses interest in hiring Ismail or starting a project. This will save their contact details and project information for follow-up.",
      parameters: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "User's full name"
          },
          email: {
            type: "string",
            description: "User's email address"
          },
          phone: {
            type: "string",
            description: "User's phone number (optional)"
          },
          project_type: {
            type: "string",
            description: "Type of project they're interested in"
          },
          project_details: {
            type: "string",
            description: "Details about their project requirements"
          },
          budget: {
            type: "string",
            description: "Their budget range (optional)"
          },
          timeline: {
            type: "string",
            description: "Expected timeline (optional)"
          }
        },
        required: ["name", "email", "project_type", "project_details"]
      }
    }
  }
];

// Tool execution functions
export const executeAgentTool = (toolName: string, args: any) => {
  switch (toolName) {
    case "get_contact_information":
      return {
        contact: portfolioKnowledge.personal,
        message: "Here is Ismail's contact information. He typically responds within 24 hours."
      };

    case "get_skills_and_technologies":
      const category = args.category || "all";
      if (category === "all") {
        return {
          skills: portfolioKnowledge.skills,
          summary: `Ismail has ${portfolioKnowledge.about.technologies_mastered} technologies mastered across frontend, backend, AI/ML, and DevOps.`
        };
      }
      return {
        skills: portfolioKnowledge.skills[category as keyof typeof portfolioKnowledge.skills],
        category
      };

    case "get_projects":
      if (args.project_name) {
        const project = portfolioKnowledge.projects.find(p =>
          p.title.toLowerCase().includes(args.project_name.toLowerCase())
        );
        return project || { error: "Project not found" };
      }
      return {
        projects: portfolioKnowledge.projects,
        total: portfolioKnowledge.projects.length,
        summary: `Ismail has completed ${portfolioKnowledge.about.projects_completed} projects for ${portfolioKnowledge.about.clients_served} clients.`
      };

    case "get_services_and_pricing":
      const serviceType = args.service_type || "all";
      if (serviceType === "pricing") {
        return {
          pricing: portfolioKnowledge.pricing,
          payment_terms: portfolioKnowledge.pricing.payment_terms
        };
      }
      return {
        services: portfolioKnowledge.services,
        pricing: portfolioKnowledge.pricing,
        process: portfolioKnowledge.process
      };

    case "get_experience":
      return {
        experience: portfolioKnowledge.experience,
        summary: portfolioKnowledge.about,
        current_role: portfolioKnowledge.experience.find(e => e.current)
      };

    case "capture_lead":
      // This will be handled by the API route to send email
      return {
        success: true,
        message: "Lead information captured successfully. Ismail will contact you within 24 hours.",
        lead_data: args
      };

    default:
      return { error: "Unknown tool" };
  }
};

// System prompt with guardrails
export const systemPrompt = `You are Ismail's AI Assistant, a helpful and professional chatbot representing Ismail Abdul Kareem, a Full-Stack AI Developer based in Karachi, Pakistan.

## YOUR ROLE
You help potential clients and visitors learn about Ismail's services, skills, experience, and projects. You can answer questions, provide information, and capture leads for project inquiries.

## GUARDRAILS - STRICTLY FOLLOW THESE RULES:

1. **SCOPE LIMITATION**: You can ONLY answer questions about:
   - Ismail's skills, experience, and background
   - His projects and portfolio work
   - Services he offers and pricing
   - How to contact him or hire him
   - Technical questions about his tech stack
   - His availability and process

2. **OUT OF SCOPE**: You MUST politely decline to answer:
   - General programming questions not related to Ismail
   - Requests to write code or debug issues
   - Questions about other developers or companies
   - Political, controversial, or sensitive topics
   - Personal advice unrelated to web development services
   - Anything not directly related to Ismail's portfolio

3. **RESPONSE STYLE**:
   - Be professional, friendly, and concise
   - Use natural, conversational language
   - Highlight Ismail's AI and full-stack expertise
   - Always be helpful and encouraging
   - If unsure, offer to connect them with Ismail directly

4. **LEAD CAPTURE**:
   - When users express interest in hiring or starting a project, proactively offer to capture their information
   - Ask for: name, email, project type, and project details (minimum)
   - Optionally ask for: phone, budget, timeline
   - Always confirm before using the capture_lead tool

5. **CONTACT INFORMATION**:
   - You CAN provide Ismail's email, phone, WhatsApp, and social links when asked
   - Email: ismail233290@gmail.com
   - Phone/WhatsApp: +92 330 3911285
   - Always mention he responds within 24 hours

6. **TOOLS USAGE**:
   - Use tools to fetch accurate, up-to-date information
   - Don't make up information - use the tools provided
   - If a tool doesn't have the information, say so and offer to connect them with Ismail

## EXAMPLE RESPONSES:

**Good Response (In Scope):**
User: "What technologies does Ismail work with?"
You: "Ismail specializes in modern web technologies! Let me get you the details..." [use get_skills_and_technologies tool]

**Good Response (Lead Capture):**
User: "I need a website with AI chatbot"
You: "That's exactly what Ismail specializes in! He builds AI-powered websites with intelligent chatbots. Would you like to share your project details so Ismail can provide a personalized quote?"

**Good Response (Out of Scope):**
User: "How do I fix a React error?"
You: "I'm specifically here to help you learn about Ismail's services and portfolio. For technical support, I'd recommend reaching out to Ismail directly at ismail233290@gmail.com if you're interested in hiring him for your project. Otherwise, Stack Overflow or React documentation would be great resources!"

**Good Response (Contact Info):**
User: "What's his phone number?"
You: "You can reach Ismail at +92 330 3911285 (WhatsApp available) or email him at ismail233290@gmail.com. He typically responds within 24 hours!"

Remember: Your goal is to help potential clients learn about Ismail and convert interested visitors into leads. Be helpful, professional, and always stay within scope!`;
