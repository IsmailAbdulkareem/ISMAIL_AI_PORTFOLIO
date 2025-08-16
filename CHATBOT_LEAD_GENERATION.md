# Enhanced Chatbot with Lead Generation

## 🚀 New Features Added

Your chatbot now has intelligent lead generation capabilities that automatically detect when users are interested in your services and collect their information.

## How It Works

### 1. **Service Interest Detection**
The chatbot automatically detects when users express interest in:
- Website development
- Web applications
- Portfolio creation
- Business websites
- E-commerce sites
- Project inquiries
- Hiring/collaboration requests

### 2. **Intelligent Lead Collection**
When service interest is detected, the chatbot:
- Switches to "Lead Collection" mode
- Collects information step-by-step:
  1. **Name** - Full name
  2. **Email** - Contact email
  3. **Phone** - Phone number
  4. **Project Type** - What they want to build
  5. **Project Details** - Detailed requirements
  6. **Budget** (optional) - Budget range
  7. **Timeline** (optional) - Project timeline

### 3. **Professional Email Notifications**
When a lead is submitted:
- You receive a beautifully formatted email
- Email includes all collected information
- Professional design with clear sections
- Contact links for easy follow-up
- Timestamp and source tracking

## Visual Indicators

### Chat Interface Changes
- **Header**: Changes to "📝 Lead Collection" during lead collection
- **Messages**: 
  - Lead collection messages have blue styling
  - Success messages have green styling
  - Progress indicator shows current step
- **Input**: Dynamic placeholder text based on current step
- **Character limit**: Increased to 200 characters during lead collection

### Email Format
The lead notification emails include:
- **Gradient header** with project type and client name
- **Contact information** section with clickable links
- **Project details** section with formatted requirements
- **Additional information** section for budget/timeline
- **Next steps** reminder for follow-up
- **Professional styling** with colors and icons

## Example User Flow

1. **User**: "I need a website for my business"
2. **Bot**: "I'd be happy to help you with your project! To get started, I'll need to collect some information so Ismail can provide you with a personalized quote and timeline. Shall we begin?"
3. **Bot**: "Great! I'd love to help you with your project. What's your name?"
4. **User**: "John Smith"
5. **Bot**: "Perfect! What's your email address?"
6. **User**: "john@example.com"
7. **Bot**: "And your phone number?"
8. **User**: "+1234567890"
9. **Bot**: "What type of project are you looking for?"
10. **User**: "Business website"
11. **Bot**: "Tell me more about your project requirements and goals:"
12. **User**: "I need a modern website for my restaurant with online ordering"
13. **Bot**: "What's your budget range? (optional)"
14. **User**: "$3000-$5000"
15. **Bot**: "What's your timeline for this project? (optional)"
16. **User**: "2-3 months"
17. **Bot**: "Thank you John! I've received your project details and Ismail will get back to you within 24 hours at john@example.com. Your project sounds exciting and I'm confident we can create something amazing together! 🚀"

## Technical Implementation

### Files Modified/Created:
1. **`src/app/components/AgentChatbot.tsx`** - Enhanced with lead collection logic
2. **`src/app/api/submit-lead/route.ts`** - New API endpoint for lead submission
3. **`src/app/api/agent/route.ts`** - Updated system prompt for better service detection

### Key Features:
- **State management** for lead collection flow
- **Step-by-step validation** of user input
- **Professional email templates** with HTML formatting
- **Error handling** and user feedback
- **Progress indicators** and visual feedback
- **Automatic detection** of service interest keywords

## Configuration

### Environment Variables Required:
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
CONTACT_TO=your-gmail@gmail.com
```

### Service Interest Keywords:
The system detects these keywords in user messages:
- website, web app, project, development, build, create
- hire, work, service, help, need, want, looking for
- portfolio, business, e-commerce, application

## Benefits

### For You:
- **Automated lead generation** - No manual intervention needed
- **Qualified leads** - Only users genuinely interested in services
- **Complete information** - All necessary details collected
- **Professional presentation** - Beautiful email notifications
- **Quick follow-up** - Contact information ready to use

### For Users:
- **Seamless experience** - Natural conversation flow
- **No forms to fill** - Information collected through chat
- **Immediate feedback** - Clear next steps provided
- **Professional interaction** - Builds trust and confidence

## Testing

To test the lead generation:

1. **Start a conversation** with the chatbot
2. **Mention service interest** (e.g., "I need a website")
3. **Follow the lead collection flow**
4. **Check your email** for the lead notification
5. **Verify all information** is correctly captured

## Customization

You can easily customize:
- **Lead collection steps** - Add/remove fields
- **Email templates** - Modify styling and content
- **Service keywords** - Adjust detection criteria
- **Response messages** - Change bot responses
- **Validation rules** - Modify input requirements

## Troubleshooting

### Common Issues:
1. **Lead collection not starting** - Check service interest keywords
2. **Email not sending** - Verify Gmail App Password configuration
3. **Form validation errors** - Check required field validation
4. **UI not updating** - Ensure state management is working correctly

### Debug Steps:
1. Check browser console for errors
2. Verify API endpoints are responding
3. Test email configuration separately
4. Review environment variables

## Future Enhancements

Potential improvements:
- **Lead scoring** - Prioritize high-value leads
- **Integration with CRM** - Connect to customer management systems
- **Follow-up automation** - Automatic reminder emails
- **Analytics dashboard** - Track lead conversion rates
- **Multi-language support** - International lead generation
