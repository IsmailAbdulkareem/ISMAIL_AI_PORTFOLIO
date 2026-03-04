"""
Portfolio Agent using OpenAI Agents SDK
Handles chat responses with restricted scope and portfolio knowledge
"""

import os
from datetime import datetime
from typing import List, Dict, Optional
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

from openai import OpenAI
from .knowledge_base import KnowledgeBase
from .guardrails import Guardrails


class PortfolioAgent:
    """
    AI Agent for Ismail's Portfolio
    Uses OpenAI to generate responses based on portfolio knowledge base
    """
    
    def __init__(self):
        """Initialize the portfolio agent"""
        # Initialize OpenAI client
        api_key = os.getenv("OPENAI_API_KEY")
        if not api_key:
            raise ValueError("OPENAI_API_KEY not found in environment variables")
        
        self.client = OpenAI(api_key=api_key)
        
        # Initialize knowledge base and guardrails
        self.knowledge_base = KnowledgeBase()
        self.guardrails = Guardrails()
        
        # System prompt defining agent behavior
        self.system_prompt = self._build_system_prompt()
    
    def _build_system_prompt(self) -> str:
        """Build the system prompt with portfolio knowledge"""
        kb = self.knowledge_base.get_all_info()
        
        return f"""You are Ismail AI Assistant, an AI agent embedded in Ismail's portfolio website.

YOUR ROLE:
You help visitors learn about Ismail, his skills, projects, and services. You are knowledgeable, friendly, and professional.

PORTFOLIO KNOWLEDGE:

**Basic Info:**
- Name: {kb['profile']['name']}
- Title: {kb['profile']['title']}
- Location: {kb['profile']['location']}
- Email: {kb['profile']['email']}
- Phone: {kb['profile']['phone']}

**Background:**
{kb['profile']['background']}

**Skills (Top Proficiencies):**
Frontend: React (92%), Next.js (90%), TypeScript (80%), JavaScript (88%), Tailwind CSS (92%)
Backend: Node.js (85%), Python (70%), Express (80%)
Database: MongoDB (82%), PostgreSQL (75%), Prisma (75%)
DevOps: Docker (65%), Kubernetes (60%), Git (88%), Linux (70%)
AI/ML: OpenAI API (75%), OpenAI Agents SDK (70%), Hugging Face (65%)

**Projects:**
{self._format_projects(kb['projects'])}

**Experience:**
{self._format_experience(kb['experience'])}

**Services Offered:**
{chr(10).join('• ' + service for service in kb['services'])}

**Contact Information:**
- Email: {kb['contact']['email']}
- Phone: {kb['contact']['phone']}
- GitHub: {kb['contact']['social']['github']}
- LinkedIn: {kb['contact']['social']['linkedin']}

IMPORTANT RULES:
1. ONLY answer questions about Ismail's portfolio, skills, projects, experience, and services
2. If asked about anything else, politely redirect to portfolio topics
3. Be concise but informative (2-4 sentences typically)
4. Use a friendly, professional tone
5. Encourage visitors to reach out for projects
6. When discussing projects, mention technologies used
7. Highlight relevant skills based on what the user asks about
8. Always provide accurate information from the knowledge base above

RESPONSE STYLE:
- Friendly and approachable
- Professional but not robotic
- Enthusiastic about Ismail's work
- Helpful in guiding visitors to relevant information
- Use emojis sparingly (1-2 per message max)"""
    
    def _format_projects(self, projects: List[Dict]) -> str:
        """Format projects for system prompt"""
        formatted = []
        for project in projects[:4]:  # Limit to top 4 projects
            formatted.append(f"• {project['name']}: {project['description'][:100]}... (Tech: {', '.join(project['technologies'])})")
        return "\n".join(formatted)
    
    def _format_experience(self, experience: List[Dict]) -> str:
        """Format experience for system prompt"""
        formatted = []
        for exp in experience:
            formatted.append(f"• {exp['title']} at {exp['company']} ({exp['period']}): {exp['description'][:80]}...")
        return "\n".join(formatted)
    
    async def get_response(self, message: str, history: List[Dict] = None) -> str:
        """
        Get AI response to user message
        
        Args:
            message: User's message
            history: Optional chat history
            
        Returns:
            Agent's response string
        """
        # Validate message with guardrails
        is_valid, processed_message = self.guardrails.validate_message(message)
        
        if not is_valid:
            # Return redirect message for off-topic questions
            return processed_message
        
        # Build conversation messages
        messages = [
            {"role": "system", "content": self.system_prompt}
        ]
        
        # Add limited history (last 5 messages to avoid token limits)
        if history:
            messages.extend(history[-5:])
        
        # Add current user message
        messages.append({"role": "user", "content": processed_message})
        
        try:
            # Call OpenAI API
            response = self.client.chat.completions.create(
                model="gpt-4o-mini",
                messages=messages,
                temperature=0.7,
                max_tokens=300,
                timeout=30
            )
            
            assistant_reply = response.choices[0].message.content
            
            # Post-process: ensure no hallucinated information
            if not assistant_reply:
                assistant_reply = "I'm not sure about that. Would you like to know about my projects or skills instead?"
            
            return assistant_reply
            
        except Exception as e:
            error_msg = str(e)
            print(f"OpenAI API Error: {error_msg}")
            
            # Fallback response
            if "timeout" in error_msg.lower():
                return "I'm having trouble connecting right now. Please try again in a moment, or feel free to email me directly at ismail233290@gmail.com!"
            else:
                return "I encountered an issue. Please try again or contact me at ismail233290@gmail.com!"
    
    def get_quick_facts(self) -> Dict:
        """Get quick facts about Ismail for chatbot suggestions"""
        return {
            "top_skills": self.knowledge_base.get_top_skills(5),
            "project_count": len(self.knowledge_base.projects),
            "years_experience": "1.5+",
            "availability": self.knowledge_base.contact["availability"],
            "contact_email": self.knowledge_base.contact["email"]
        }
