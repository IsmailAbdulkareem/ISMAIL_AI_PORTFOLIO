"""
FastAPI Backend for Ismail's Portfolio Chatbot
Powered by OpenAI Agents SDK
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from datetime import datetime
import os
from dotenv import load_dotenv
from openai import OpenAI

# Load environment variables
load_dotenv()

app = FastAPI(
    title="Ismail Portfolio Backend",
    description="AI Chatbot API for Ismail's Portfolio",
    version="1.0.0"
)

# CORS middleware for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://ismail-portfolio.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)

# Initialize OpenAI client
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("OPENAI_API_KEY not found in environment variables")

client = OpenAI(api_key=api_key)


class ChatRequest(BaseModel):
    message: str
    history: Optional[list] = []


class ChatResponse(BaseModel):
    message: str
    timestamp: str


# Knowledge Base
KNOWLEDGE_BASE = {
    "profile": {
        "name": "Ismail",
        "title": "Full-Stack Web Developer",
        "email": "ismail233290@gmail.com",
        "phone": "+92 3303911285",
        "location": "Karachi, Pakistan",
    },
    "skills": [
        {"name": "React", "level": 92, "category": "Frontend"},
        {"name": "Next.js", "level": 90, "category": "Frontend"},
        {"name": "TypeScript", "level": 80, "category": "Frontend"},
        {"name": "Node.js", "level": 85, "category": "Backend"},
        {"name": "Python", "level": 70, "category": "Backend"},
        {"name": "MongoDB", "level": 82, "category": "Database"},
        {"name": "Docker", "level": 65, "category": "DevOps"},
        {"name": "Kubernetes", "level": 60, "category": "DevOps"},
    ],
    "projects": [
        {
            "name": "Mustafa Builder and Developer",
            "description": "Construction company website with services, projects, and inquiry forms",
            "technologies": ["React", "Next.js", "MongoDB", "Tailwind"]
        },
        {
            "name": "Food Truck",
            "description": "Food truck website with menu browsing, filtering, and CMS",
            "technologies": ["React", "TypeScript", "Next.js", "Tailwind", "Sanity"]
        },
        {
            "name": "Free CV Maker",
            "description": "Web app for creating and sharing professional CVs",
            "technologies": ["React", "Next.js", "TypeScript", "Tailwind"]
        },
        {
            "name": "Gym Website",
            "description": "Fitness center website with services, schedules, and memberships",
            "technologies": ["React", "Next.js", "TypeScript", "Tailwind"]
        },
    ],
    "services": [
        "Custom Website Development",
        "Full-Stack Web Applications",
        "Responsive Frontend Development",
        "API Development & Integration",
        "E-commerce Solutions",
    ]
}

# Guardrails - Allowed topics
ALLOWED_KEYWORDS = [
    "ismail", "project", "skill", "technology", "experience",
    "contact", "email", "phone", "hire", "available", "service",
    "portfolio", "website", "app", "build", "react", "next",
    "developer", "work", "job", "company", "background"
]

BLOCKED_KEYWORDS = [
    "weather", "news", "politics", "code for", "write code",
    "debug", "math", "science", "recipe", "health", "legal"
]


def is_portfolio_related(message: str) -> bool:
    """Check if message is portfolio-related"""
    message_lower = message.lower()
    
    # Check blocked first
    for keyword in BLOCKED_KEYWORDS:
        if keyword in message_lower:
            return False
    
    # Check allowed
    for keyword in ALLOWED_KEYWORDS:
        if keyword in message_lower:
            return True
    
    return False


def get_redirect_message() -> str:
    """Get redirect message for off-topic questions"""
    return """I appreciate your question! However, I'm designed to help with questions specifically about Ismail's portfolio, including:

• **Projects** - Websites and applications I've built
• **Skills** - Technologies I work with (React, Next.js, Python, etc.)
• **Experience** - My work history and background
• **Services** - What I can build for you
• **Contact** - How to reach me for projects

Would you like to know about any of these? 😊"""


def build_system_prompt() -> str:
    """Build system prompt with knowledge base"""
    return f"""You are Ismail AI Assistant, an AI agent for Ismail's portfolio website.

YOUR ROLE:
You help visitors learn about Ismail, his skills, projects, and services. Be friendly, professional, and concise.

KNOWLEDGE BASE:

**Basic Info:**
- Name: {KNOWLEDGE_BASE['profile']['name']}
- Title: {KNOWLEDGE_BASE['profile']['title']}
- Email: {KNOWLEDGE_BASE['profile']['email']}
- Phone: {KNOWLEDGE_BASE['profile']['phone']}
- Location: {KNOWLEDGE_BASE['profile']['location']}

**Top Skills:**
{chr(10).join(f"- {skill['name']} ({skill['level']}%) - {skill['category']}" for skill in KNOWLEDGE_BASE['skills'])}

**Projects:**
{chr(10).join(f"- {p['name']}: {p['description']} (Tech: {', '.join(p['technologies'])})" for p in KNOWLEDGE_BASE['projects'])}

**Services:**
{chr(10).join(f"- {service}" for service in KNOWLEDGE_BASE['services'])}

RULES:
1. ONLY answer questions about Ismail's portfolio, skills, projects, experience, and services
2. If asked about anything else, use the redirect message
3. Be concise (2-4 sentences typically)
4. Use friendly, professional tone
5. Encourage visitors to reach out for projects
6. Always provide accurate information from the knowledge base above"""


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "portfolio-backend"}


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """Main chat endpoint"""
    try:
        # Check if message is portfolio-related
        if not is_portfolio_related(request.message):
            return ChatResponse(
                message=get_redirect_message(),
                timestamp=datetime.now().isoformat()
            )
        
        # Build messages
        messages = [
            {"role": "system", "content": build_system_prompt()}
        ]
        
        # Add limited history
        if request.history:
            messages.extend(request.history[-5:])
        
        # Add current message
        messages.append({"role": "user", "content": request.message})
        
        # Call OpenAI
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            temperature=0.7,
            max_tokens=300,
            timeout=30
        )
        
        assistant_reply = response.choices[0].message.content or "I'm not sure about that. Would you like to know about my projects or skills instead?"
        
        return ChatResponse(
            message=assistant_reply,
            timestamp=datetime.now().isoformat()
        )
        
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error generating response: {str(e)}"
        )


@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "service": "Ismail Portfolio Backend",
        "version": "1.0.0",
        "endpoints": {
            "chat": "POST /api/chat",
            "health": "GET /health"
        }
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
