---
title: Portfolio Backend
emoji: 🚀
colorFrom: indigo
colorTo: pink
sdk: docker
pinned: false
short_description: AI Chatbot Backend for Ismail's Portfolio
---

# 🤖 Portfolio Backend API

FastAPI backend powered by OpenAI Agents SDK for Ismail's portfolio chatbot.

## Features

- ✅ **Restricted Scope**: Only answers questions about portfolio, projects, skills, and services
- ✅ **Knowledge Base**: Complete information about Ismail's background, projects, and skills
- ✅ **Guardrails**: Prevents off-topic conversations and redirects appropriately
- ✅ **FastAPI**: High-performance async API
- ✅ **Docker**: Containerized for easy deployment on Hugging Face Spaces

## Setup

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://huggingface.co/spaces/ismail233290/Backend
   cd Backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env and add your OPENAI_API_KEY
   ```

5. **Run the server**
   ```bash
   python app.py
   # Or: uvicorn app:app --reload
   ```

6. **Test the API**
   ```bash
   curl http://localhost:8000/health
   curl -X POST http://localhost:8000/api/chat \
     -H "Content-Type: application/json" \
     -d '{"message": "Tell me about your projects"}'
   ```

### Docker (Hugging Face Spaces)

The space automatically builds and deploys using the Dockerfile.

1. **Environment Variables** (Set in Hugging Face Space Settings → Secrets)
   - `OPENAI_API_KEY`: Your OpenAI API key

2. **Build & Test Locally**
   ```bash
   docker build -t portfolio-backend .
   docker run -p 8000:8000 --env-file .env portfolio-backend
   ```

## API Endpoints

### `GET /health`
Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "service": "portfolio-backend"
}
```

### `POST /api/chat`
Main chat endpoint.

**Request:**
```json
{
  "message": "Tell me about your React projects",
  "history": [
    {"role": "user", "content": "Hi"},
    {"role": "assistant", "content": "Hello! How can I help?"}
  ]
}
```

**Response:**
```json
{
  "message": "Ismail has worked on several React projects including...",
  "timestamp": "2026-03-04T12:00:00Z"
}
```

### `GET /`
Root endpoint with API information.

## Agent Behavior

### ✅ Allowed Topics
- Ismail's background and bio
- Technical skills and technologies
- Portfolio projects
- Work experience
- Contact information
- Services offered
- Availability for work

### ❌ Blocked Topics
- General knowledge questions
- Coding help for unrelated projects
- Weather, news, politics
- Personal advice
- Anything not portfolio-related

**Redirect Message:**
When asked about off-topic subjects, the agent responds:
> "I appreciate your question! However, I'm designed to help with questions specifically about Ismail's portfolio..."

## Project Structure

```
Backend/
├── app.py                      # FastAPI application
├── agent/
│   ├── __init__.py
│   ├── portfolio_agent.py      # Main agent logic
│   ├── knowledge_base.py       # Portfolio data
│   └── guardrails.py           # Topic restrictions
├── requirements.txt            # Python dependencies
├── Dockerfile                  # Container config
├── .env.example               # Environment template
└── README.md                  # This file
```

## Dependencies

- **fastapi** - Web framework
- **uvicorn** - ASGI server
- **openai-agents** - OpenAI Agents SDK
- **openai** - OpenAI API client
- **python-dotenv** - Environment variables
- **pydantic** - Data validation
- **httpx** - Async HTTP client

## Frontend Integration

Update your Next.js API route to proxy requests:

```typescript
// src/app/api/agent/route.ts
export async function POST(request: Request) {
  const body = await request.json();
  
  const response = await fetch('https://your-hf-space.hf.space/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  
  const data = await response.json();
  return Response.json(data);
}
```

## Testing

### Test Allowed Questions
```bash
# About projects
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What projects have you worked on?"}'

# About skills
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What technologies do you know?"}'

# About contact
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "How can I contact Ismail?"}'
```

### Test Blocked Questions
```bash
# Off-topic (should redirect)
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What is the weather today?"}'

# Coding help (should redirect)
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Write me a Python script for web scraping"}'
```

## Updating Portfolio Information

Edit `agent/knowledge_base.py` to update:
- Personal information
- Skills and proficiency levels
- Projects and descriptions
- Work experience
- Contact details

## Deployment

### Hugging Face Spaces
1. Push changes to the space:
   ```bash
   git add .
   git commit -m "Update agent logic"
   git push
   ```
2. Space automatically rebuilds
3. Set `OPENAI_API_KEY` in Settings → Secrets

### Monitoring
- Check space logs in Hugging Face dashboard
- Test health endpoint: `https://your-space.hf.space/health`
- Monitor API response times

## License

MIT

## Contact

**Ismail**
- Email: ismail233290@gmail.com
- Portfolio: https://your-portfolio.com
- GitHub: https://github.com/IsmailAbdulkareem

---

*Built with FastAPI and OpenAI Agents SDK 🚀*
