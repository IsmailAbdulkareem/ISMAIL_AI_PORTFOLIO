# 🤖 AI CHATBOT SETUP GUIDE

## ✨ NEW AI-POWERED CHATBOT

Your portfolio now includes an intelligent AI chatbot with:
- **OpenAI Agents SDK** with OpenRouter API
- **Smart Guardrails** - Only answers questions about you
- **Lead Capture** - Automatically collects client information
- **Email Notifications** - Sends leads to your email via Nodemailer
- **Modern UI** - Beautiful gradient design with animations
- **Tool Usage** - AI can access your portfolio data intelligently

---

## 🚀 SETUP INSTRUCTIONS

### Step 1: Get OpenRouter API Key

1. Go to [OpenRouter.ai](https://openrouter.ai/)
2. Sign up for a free account
3. Go to **Keys** section
4. Create a new API key
5. Copy the key (starts with `sk-or-...`)

**Why OpenRouter?**
- Access to multiple AI models (GPT-4, Claude, etc.)
- Pay-as-you-go pricing (cheaper than direct OpenAI)
- No monthly subscription required
- Free credits for new users

### Step 2: Setup Gmail App Password

For email notifications, you need a Gmail App Password:

1. Go to your Google Account settings
2. Enable **2-Step Verification** (required)
3. Go to **Security** → **App passwords**
4. Select **Mail** and **Windows Computer**
5. Click **Generate**
6. Copy the 16-character password

**Important:** Use App Password, NOT your regular Gmail password!

### Step 3: Configure Environment Variables

Update your `.env.local` file:

```env
# OpenRouter API Key
OPENROUTER_API_KEY=sk-or-v1-your-key-here

# Gmail Configuration
EMAIL_USER=ismail233290@gmail.com
EMAIL_PASSWORD=your-16-char-app-password

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 4: Install Dependencies (if needed)

```bash
npm install openai nodemailer
npm install -D @types/nodemailer
```

### Step 5: Start Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

---

## 🎯 CHATBOT FEATURES

### 1. **Smart Guardrails**
The chatbot ONLY answers questions about:
- Your skills and technologies
- Your projects and portfolio
- Services you offer and pricing
- How to contact or hire you
- Your experience and background

It will **politely decline** to:
- Answer general programming questions
- Write code or debug issues
- Discuss topics unrelated to your portfolio
- Provide personal advice

### 2. **AI Tools**
The chatbot has access to these tools:

- `get_contact_information` - Provides your email, phone, WhatsApp
- `get_skills_and_technologies` - Shows your tech stack
- `get_projects` - Displays your portfolio projects
- `get_services_and_pricing` - Explains services and rates
- `get_experience` - Shares your work history
- `capture_lead` - Saves client information

### 3. **Lead Capture Flow**

When a user shows interest:
1. Chatbot detects project-related keywords
2. Offers to collect their information
3. Shows inline form with fields:
   - Name (required)
   - Email (required)
   - Phone (optional)
   - Project Type (required)
   - Project Details (required)
   - Budget (optional)
   - Timeline (optional)
4. Sends two emails:
   - **To you**: Lead notification with all details
   - **To client**: Confirmation email

### 4. **Email Notifications**

**Lead Notification Email (to you):**
- Beautiful HTML template
- All lead information
- Quick reply button
- Timestamp

**Confirmation Email (to client):**
- Thank you message
- Project summary
- What happens next
- Your contact information

---

## 💬 CHATBOT UI FEATURES

### Modern Design
- Gradient header (blue → purple → pink)
- Smooth animations with Framer Motion
- Message bubbles with avatars
- Typing indicators
- Tool usage badges
- Quick action buttons

### User Experience
- Auto-opens after 5 seconds
- Minimize/maximize functionality
- Keyboard shortcuts (Enter to send)
- Mobile responsive
- Smooth scrolling
- Focus management

### Quick Actions
- "View Projects"
- "Services & Pricing"
- "Contact Info"
- "Start Project" (opens lead form)

---

## 🧪 TESTING THE CHATBOT

### Test Conversations

**Test 1: Skills Query**
```
User: "What technologies do you work with?"
Bot: [Uses get_skills_and_technologies tool]
     "Ismail specializes in modern web technologies including..."
```

**Test 2: Contact Information**
```
User: "How can I contact Ismail?"
Bot: [Uses get_contact_information tool]
     "You can reach Ismail at..."
```

**Test 3: Project Inquiry**
```
User: "I need an AI-powered website"
Bot: "That's exactly what Ismail specializes in! Would you like to share your project details?"
User: "Yes"
Bot: [Shows lead capture form]
```

**Test 4: Out of Scope**
```
User: "How do I fix a React error?"
Bot: "I'm specifically here to help you learn about Ismail's services and portfolio. For technical support, I'd recommend..."
```

### Test Lead Capture

1. Click "Start Project" quick action
2. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Project Type: AI Website
   - Details: Need chatbot integration
3. Submit
4. Check both emails:
   - Your inbox for lead notification
   - Test email for confirmation

---

## 📊 CHATBOT ANALYTICS

Track these metrics:
- Total conversations
- Lead capture rate
- Most asked questions
- Tool usage frequency
- Response time

**Future Enhancement:** Add analytics dashboard

---

## 🔧 CUSTOMIZATION

### Change AI Model

In `src/app/api/chat/route.ts`:

```typescript
model: 'openai/gpt-4o-mini', // Current
// Options:
// 'openai/gpt-4o' - More capable, higher cost
// 'anthropic/claude-3.5-sonnet' - Alternative
// 'google/gemini-pro' - Google's model
```

### Adjust Response Length

```typescript
max_tokens: 500, // Current (concise)
// Increase for longer responses
// Decrease for shorter responses
```

### Modify Guardrails

Edit `src/app/lib/agent-tools.ts`:
- Update `systemPrompt` to change behavior
- Add/remove tools
- Adjust scope limitations

### Customize UI Colors

In `src/app/components/PortfolioChatbot.tsx`:
- Change gradient colors
- Modify button styles
- Adjust animations

---

## 💰 COST ESTIMATION

### OpenRouter Pricing (GPT-4o-mini)
- Input: $0.15 per 1M tokens
- Output: $0.60 per 1M tokens

**Average Conversation:**
- ~500 input tokens
- ~300 output tokens
- Cost: ~$0.0003 per conversation

**Monthly Estimate:**
- 1,000 conversations = ~$0.30
- 10,000 conversations = ~$3.00

**Very affordable!** 🎉

---

## 🐛 TROUBLESHOOTING

### Chatbot Not Responding

**Check:**
1. `.env.local` has correct `OPENROUTER_API_KEY`
2. API key is valid (test at openrouter.ai)
3. Browser console for errors (F12)
4. Network tab shows API calls

**Fix:**
```bash
# Restart dev server
npm run dev
```

### Email Not Sending

**Check:**
1. Gmail App Password is correct (16 characters, no spaces)
2. 2-Step Verification is enabled on Gmail
3. `EMAIL_USER` matches your Gmail address

**Test:**
```bash
# Check email configuration
node -e "console.log(process.env.EMAIL_USER)"
```

### Rate Limiting

If you see "Too many requests":
- Wait 1 minute
- Rate limit: 20 requests per minute per IP
- Adjust in `src/app/api/chat/route.ts`

### Tool Not Working

**Check:**
1. Tool name matches exactly
2. Required parameters provided
3. `executeAgentTool` function handles the tool

**Debug:**
```typescript
console.log('Tool called:', toolName, args);
```

---

## 🚀 DEPLOYMENT

### Environment Variables

Add to Vercel/Netlify:
```
OPENROUTER_API_KEY=sk-or-v1-...
EMAIL_USER=ismail233290@gmail.com
EMAIL_PASSWORD=your-app-password
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Production Checklist

- [ ] Test all chatbot features
- [ ] Verify email notifications work
- [ ] Test lead capture form
- [ ] Check mobile responsiveness
- [ ] Test rate limiting
- [ ] Monitor API costs
- [ ] Set up error tracking

---

## 📈 NEXT STEPS

### Immediate (Today)
1. ✅ Get OpenRouter API key
2. ✅ Setup Gmail App Password
3. ✅ Update `.env.local`
4. ✅ Test chatbot locally
5. ✅ Test lead capture

### Short-term (This Week)
1. 📋 Deploy to production
2. 📋 Monitor first conversations
3. 📋 Collect feedback
4. 📋 Adjust guardrails if needed
5. 📋 Track lead conversion

### Long-term (This Month)
1. 💼 Add analytics dashboard
2. 💼 A/B test different prompts
3. 💼 Add conversation history
4. 💼 Integrate with CRM
5. 💼 Add multilingual support

---

## 🎉 CONGRATULATIONS!

You now have a **professional AI chatbot** that:
- ✅ Answers questions intelligently
- ✅ Captures leads automatically
- ✅ Sends email notifications
- ✅ Has smart guardrails
- ✅ Uses modern AI technology
- ✅ Looks beautiful
- ✅ Works on mobile

**This chatbot will help you:**
- Convert more visitors into leads
- Save time answering common questions
- Look more professional
- Automate client communication
- Stand out from other developers

---

## 📞 SUPPORT

If you need help:
1. Check this guide first
2. Review error messages in console
3. Test with simple queries
4. Verify environment variables

**Common Issues:**
- API key invalid → Get new key from OpenRouter
- Email not sending → Check App Password
- Chatbot not opening → Clear browser cache
- Rate limited → Wait 1 minute

---

**Your AI-powered portfolio is ready to capture leads!** 🚀

Test it now at: http://localhost:3000
