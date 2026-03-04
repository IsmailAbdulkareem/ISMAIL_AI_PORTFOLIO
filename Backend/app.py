"""
FastAPI Backend for Ismail's Portfolio Chatbot
Powered by OpenAI Agents SDK
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import httpx

from agent.portfolio_agent import PortfolioAgent

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
        "https://your-production-domain.com",  # Update with your actual domain
    ],
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)

# Initialize the portfolio agent
agent = PortfolioAgent()


class ChatRequest(BaseModel):
    message: str
    history: Optional[list] = []


class ChatResponse(BaseModel):
    message: str
    timestamp: str


@app.get("/health")
async def health_check():
    """Health check endpoint for Hugging Face Spaces"""
    return {"status": "healthy", "service": "portfolio-backend"}


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Main chat endpoint for portfolio chatbot
    
    Args:
        request: ChatRequest with message and optional history
        
    Returns:
        ChatResponse with agent's reply
    """
    try:
        response = await agent.get_response(
            message=request.message,
            history=request.history or []
        )
        
        return ChatResponse(
            message=response,
            timestamp=response  # Agent handles timestamp internally
        )
        
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error generating response: {str(e)}"
        )


@app.get("/")
async def root():
    """Root endpoint with API info"""
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
