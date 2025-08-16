# 🤖 AI Agent Chatbot Setup Guide

This guide will help you set up an advanced AI agent chatbot for your portfolio website using OpenAI Agents SDK with Gemini API, inspired by modern agent implementations.

## 🚀 Quick Setup

### 1. Get Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated key (starts with `AIzaSy...`)

### 2. Create Environment File
Create a file named `.env.local` in your project root:

```env
GEMINI_API_KEY=your_actual_gemini_api_key_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password_here
NEXTAUTH_URL=https://your-domain.com
```

### 3. Add Resume File
Place your resume PDF file in the `public` folder as `resume.pdf`:
```bash
cp your-resume.pdf public/resume.pdf
```

### 4. Set Up Email Notifications (Optional)
1. Create a Gmail app password: [Google Account Settings](https://myaccount.google.com/apppasswords)
2. Add your email credentials to `.env.local`
3. You'll receive email notifications for every chat conversation

### 5. Restart Development Server
```bash
npm run dev
```

## 🎯 Agent Features

✅ **Conversation Memory**: Maintains chat history for context-aware responses  
✅ **OpenAI Compatibility**: Uses OpenAI SDK with Gemini backend  
✅ **Advanced Instructions**: Detailed system prompts for better responses  
✅ **Auto-open**: Chatbot opens automatically after 5 seconds  
✅ **Tooltip**: Hover tooltip with "Try my AI Agent"  
✅ **Black Theme**: Matches modern minimalist design  
✅ **Character Limit**: 100 character limit with warning  
✅ **Professional UI**: Clean, modern interface with Sparkles icon  
✅ **Responsive**: Works on all devices  
✅ **Resume Download**: Direct download button in chat header  
✅ **Email Notifications**: Get notified about new chat conversations  
✅ **Minimize/Close**: Multiple ways to close the chatbot  
✅ **Sitemap**: SEO-optimized sitemap for better search visibility  

## 🔧 Agent Configuration

### System Instructions
The agent is configured with detailed instructions in `src/app/api/agent/route.ts`:

```typescript
content: `You are Ismail Assistant, an expert portfolio assistant for Ismail's website. Here's what you should know:

PORTFOLIO CONTEXT:
- Developer: Ismail
- Experience: 1.5 years as Full-Stack Developer
- Skills: React, Next.js, Node.js, MongoDB, TypeScript, Tailwind CSS, Framer Motion
- Specializations: Full-stack development, modern web technologies, responsive design
- Location: Available for remote work and collaborations
- Website: https://asharib.xyz/ (similar portfolio style)

YOUR ROLE:
- Help visitors learn about Ismail's skills, projects, and experience
- Answer questions about his technical expertise and development approach
- Provide information about his work style and capabilities
- Be friendly, professional, and informative like Asharib's assistant
- Keep responses concise but helpful (max 2-3 sentences)
- If asked about something not in the portfolio, politely redirect to relevant sections
- You can mention that you're inspired by Asharib's portfolio assistant style

TONE: Professional, friendly, and helpful - similar to Asharib's assistant style

Always give short, concise answers. Be helpful and professional.`
```

### Model Configuration
- **Model**: `gemini-2.0-flash` (latest Gemini model)
- **Max Tokens**: 300 (for concise responses)
- **Temperature**: 0.7 (balanced creativity and consistency)
- **Base URL**: Google's OpenAI-compatible endpoint

## 🎨 Customization

### Update Personal Information
Edit `src/app/api/agent/route.ts` to update:
- Your name and experience
- Skills and specializations
- Portfolio context and website URL

### Styling Changes
Edit `src/app/components/AgentChatbot.tsx` to customize:
- Colors and themes
- Button position and icon
- Chat window size
- Auto-open timing

### Agent Instructions
Modify the system prompt in the API route to change:
- Agent personality and tone
- Response style and length
- Knowledge base and capabilities

## 🧠 Agent Capabilities

### Conversation Memory
The agent maintains conversation history for context-aware responses:
```typescript
const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);
```

### Smart Responses
- Context-aware conversations
- Portfolio-specific knowledge
- Professional and friendly tone
- Concise but helpful answers

### Error Handling
- Graceful fallback to demo responses
- Clear error messages
- Loading states and feedback

## 🎯 Testing

Once setup is complete, test the agent with:
- "What skills do you have?"
- "Tell me about your experience"
- "What projects have you worked on?"
- "How can I contact you?"
- "What technologies do you use?"

## 📱 Mobile Optimization

The agent chatbot is fully responsive and includes:
- Touch-friendly interface
- Mobile-optimized sizing
- Auto-open functionality
- Responsive design

## 🔗 API Endpoints

### `/api/agent` (POST)
- **Purpose**: Main agent endpoint
- **Input**: `{ message: string, history: ChatHistory[] }`
- **Output**: `{ message: string, timestamp: string }`
- **Features**: Conversation memory, context awareness, email notifications

### `/api/chat` (POST)
- **Purpose**: Legacy chatbot endpoint (still available)
- **Input**: `{ message: string }`
- **Output**: `{ message: string, timestamp: string }`

### `/api/download-resume` (GET)
- **Purpose**: Download resume PDF
- **Output**: PDF file download
- **Features**: Direct file download with proper headers

### `/api/notify-chat` (POST)
- **Purpose**: Send email notifications about chat conversations
- **Input**: `{ userMessage: string, botResponse: string, userInfo: object }`
- **Output**: `{ success: boolean, message: string }`
- **Features**: Nodemailer integration for instant notifications

## 🚀 Deployment

### Environment Variables
Make sure to set in your deployment platform:
```env
GEMINI_API_KEY=your_actual_gemini_api_key_here
```

### Vercel Deployment
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variable in Vercel dashboard
4. Deploy automatically

## 🔗 References

- [OpenAI SDK Documentation](https://platform.openai.com/docs)
- [Google AI Studio](https://makersuite.google.com/app/apikey)
- [Gemini API Documentation](https://ai.google.dev/docs)
- [Asharib's Portfolio](https://github.com/AsharibAli/portfolio/tree/main)

## 🎨 Design Inspiration

This agent implementation is inspired by:
- **Asharib's Portfolio**: Modern minimalist design
- **OpenAI Agents**: Advanced conversation capabilities
- **Modern Chatbots**: Professional UI/UX patterns

---

Built with ❤️ using OpenAI Agents SDK and Gemini API
