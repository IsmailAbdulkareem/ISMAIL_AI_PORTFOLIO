# 🤖 Chatbot Setup Guide

This guide will help you set up the AI chatbot for your portfolio website, inspired by [Asharib's portfolio](https://github.com/AsharibAli/portfolio/tree/main).

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
```

### 3. Restart Development Server
```bash
npm run dev
```

## 🎨 Features Inspired by Asharib's Portfolio

✅ **Auto-open**: Chatbot opens automatically after 5 seconds  
✅ **Tooltip**: Hover tooltip with "Try my Assistant" message  
✅ **Black Theme**: Matches Asharib's minimalist black design  
✅ **Character Limit**: 100 character limit with warning  
✅ **Custom Styling**: Professional chat interface  
✅ **Footer**: "Build with ❤️ by Ismail"  
✅ **Responsive**: Works on all devices  

## 🔧 Customization

### Update Personal Information
Edit `src/app/api/chat/route.ts` to update:
- Your name and experience
- Skills and specializations
- Portfolio context

### Styling Changes
Edit `src/app/components/Chatbot.tsx` to customize:
- Colors and themes
- Button position
- Chat window size
- Auto-open timing

### Welcome Message
Update the welcome message in the Chatbot component:
```typescript
text: 'Hello! I am [Your Name] Assistant, here to help you...'
```

## 🎯 Testing

Once setup is complete, test the chatbot with:
- "What skills do you have?"
- "Tell me about your experience"
- "What projects have you worked on?"
- "How can I contact you?"

## 📱 Mobile Optimization

The chatbot is fully responsive and includes:
- Touch-friendly interface
- Mobile-optimized sizing
- Auto-open disabled on mobile (can be enabled)

## 🔗 References

- [Asharib's Portfolio](https://github.com/AsharibAli/portfolio/tree/main)
- [Google AI Studio](https://makersuite.google.com/app/apikey)
- [Gemini API Documentation](https://ai.google.dev/docs)

---

Built with ❤️ inspired by Asharib's portfolio design
