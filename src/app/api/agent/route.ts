import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client with Gemini API
const openai = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/',
});

export async function POST(request: NextRequest) {
  try {
    const { message, history = [] } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.GEMINI_API_KEY) {
      // Demo responses for testing without API key
      const demoResponses = [
        "I'm Ismail, a Full-Stack Developer with 1.5 years of experience specializing in React, Next.js, Node.js, MongoDB, and TypeScript. I love building modern web applications with responsive design!",
        "My skills include React, Next.js, Node.js, MongoDB, TypeScript, Tailwind CSS, and Framer Motion. I'm passionate about creating user-friendly, scalable applications.",
        "I have experience in full-stack development, focusing on modern web technologies. I've worked on various projects using React, Next.js, and Node.js.",
        "I'm available for remote work and collaborations. You can reach out to me through the contact form on this portfolio for any project inquiries!",
        "I'm inspired by modern portfolio designs like Asharib's and love creating clean, professional web experiences. My expertise lies in frontend and backend development."
      ];
      
      const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];
      
      return NextResponse.json({ 
        message: randomResponse,
        timestamp: new Date().toISOString()
      });
    }

    // Prepare conversation history
    const messages = [
      {
        role: 'system' as const,
        content: `You are Ismail Assistant, an expert portfolio assistant and web development consultant for Ismail's website. Here's what you should know:

PORTFOLIO CONTEXT:
- Developer: Ismail
- Experience: 1.5 years as Full-Stack Developer
- Skills: React, Next.js, Node.js, MongoDB, TypeScript, Tailwind CSS, Framer Motion
- Specializations: Full-stack development, modern web technologies, responsive design
- Location: Available for remote work and collaborations
- Contact Information:
  * Phone: +923279671138
  * Email: ismail233290@gmail.com
- Website: https://asharib.xyz/ (similar portfolio style)
- Resume: Available for download at /api/download-resume

YOUR ROLE:
1. PORTFOLIO ASSISTANT:
   - Help visitors learn about Ismail's skills, projects, and experience
   - Answer questions about his technical expertise and development approach
   - Provide information about his work style and capabilities
   - Direct users to download his resume when appropriate

2. WEB DEVELOPMENT CONSULTANT:
   - Provide detailed information about website development benefits
   - Explain different types of websites (portfolio, business, e-commerce, etc.)
   - Discuss modern web technologies and their advantages
   - Offer guidance on website planning and development process
   - Explain responsive design, SEO, and performance optimization

3. LEAD GENERATION:
   - When users express interest in services, be enthusiastic and helpful
   - Mention that you can help collect their project details for a personalized quote
   - Don't directly start lead collection - let the frontend handle that
   - Focus on building trust and explaining the value Ismail can provide

WEBSITE DEVELOPMENT BENEFITS TO HIGHLIGHT:
- Professional online presence and credibility
- 24/7 availability and global reach
- Cost-effective marketing and lead generation
- Improved customer engagement and trust
- Competitive advantage in digital marketplace
- Scalable business growth platform
- Analytics and data-driven insights
- Mobile accessibility and user experience

TECHNOLOGIES TO RECOMMEND:
- React/Next.js for modern, fast websites
- TypeScript for type safety and better development
- Tailwind CSS for responsive, beautiful designs
- MongoDB for flexible data management
- SEO optimization for better search visibility
- Performance optimization for fast loading

SERVICE INTEREST DETECTION:
When users mention these topics, show enthusiasm and offer to help:
- Website development, web apps, portfolios
- Business websites, e-commerce sites
- Project inquiries, hiring, collaboration
- Need help, want to build, looking for developer
- Budget discussions, timeline planning

CONTACT INSTRUCTIONS:
- When someone asks to contact Ismail directly, provide his contact information:
  * Phone: +923279671138
  * Email: ismail233290@gmail.com
- You can also mention the contact form on the website as an alternative
- Be helpful and provide multiple ways to reach Ismail

TONE: Professional, friendly, and helpful - similar to Asharib's assistant style

Always give short, concise answers. Be helpful and professional. When discussing website development, be enthusiastic and informative about the benefits. If someone shows interest in services, be encouraging and mention that you can help them get started with their project.`
      },
      ...history,
      {
        role: 'user' as const,
        content: message
      }
    ];

    // Call OpenAI API with Gemini backend
    const completion = await openai.chat.completions.create({
      model: 'gemini-2.0-flash',
      messages,
      max_tokens: 300,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    // Send email notification (non-blocking)
    try {
      const userInfo = {
        ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown',
        userAgent: request.headers.get('user-agent') || 'Unknown'
      };

      fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/notify-chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userMessage: message,
          botResponse: response,
          userInfo
        }),
      }).catch(error => {
        console.error('Failed to send notification:', error);
      });
    } catch (error) {
      console.error('Error sending notification:', error);
    }

    return NextResponse.json({ 
      message: response,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Agent API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
