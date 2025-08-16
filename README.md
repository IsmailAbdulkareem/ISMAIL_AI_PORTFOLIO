# 🚀 Ismail's Portfolio - Full-Stack Developer

A modern, responsive portfolio website built with Next.js 14, featuring an AI-powered chatbot with intelligent lead generation capabilities.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)

## ✨ Features

### 🎨 **Modern Design**
- **Responsive Layout** - Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Theme** - Beautiful color scheme with smooth transitions
- **Smooth Animations** - Framer Motion powered animations
- **Professional UI** - Clean, modern design inspired by top portfolios

### 🤖 **AI-Powered Chatbot**
- **Intelligent Assistant** - Powered by Google Gemini AI
- **Lead Generation** - Automatically detects service interest and collects leads
- **Step-by-Step Collection** - Gathers name, email, phone, project details, budget, timeline
- **Professional Email Notifications** - Beautiful HTML emails sent to you
- **Contact Information** - Provides direct contact details when requested

### 📧 **Contact System**
- **Contact Form** - Professional contact form with validation
- **Email Integration** - Gmail SMTP with App Password authentication
- **Lead Management** - Automated lead collection and notification
- **Error Handling** - Comprehensive error handling and user feedback

### 📄 **Portfolio Sections**
- **Hero Section** - Eye-catching introduction with call-to-action
- **About** - Professional background and skills overview
- **Skills** - Technical skills with visual indicators
- **Projects** - Showcase of completed projects with descriptions
- **Experience** - Work history and achievements
- **Contact** - Multiple ways to get in touch

## 🛠️ Technologies Used

### **Frontend**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### **Backend & APIs**
- **Next.js API Routes** - Server-side API endpoints
- **Google Gemini AI** - AI chatbot functionality
- **Nodemailer** - Email sending capabilities
- **Gmail SMTP** - Email service integration

### **Development Tools**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Gmail account with App Password

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your credentials:
   ```env
   # Gemini API Configuration
   GEMINI_API_KEY=your_gemini_api_key_here
   
   # Email Configuration
   EMAIL_USER=your_gmail@gmail.com
   EMAIL_PASS=your_app_password_here
   CONTACT_TO=your_gmail@gmail.com
   
   # NextAuth URL (for production)
   NEXTAUTH_URL=https://your-domain.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── agent/          # AI chatbot API
│   │   │   ├── contact/        # Contact form API
│   │   │   ├── submit-lead/    # Lead generation API
│   │   │   ├── notify-chat/    # Chat notification API
│   │   │   └── download-resume/ # Resume download API
│   │   ├── components/
│   │   │   ├── AgentChatbot.tsx    # AI chatbot component
│   │   │   ├── Contact.tsx         # Contact form
│   │   │   ├── Hero.tsx            # Hero section
│   │   │   ├── About.tsx           # About section
│   │   │   ├── Skills.tsx          # Skills section
│   │   │   ├── Projects.tsx        # Projects showcase
│   │   │   ├── Experience.tsx      # Experience section
│   │   │   ├── Header.tsx          # Navigation header
│   │   │   └── Footer.tsx          # Footer component
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   └── ...
├── public/
│   ├── images/                 # Portfolio images
│   └── resume.pdf             # Resume file
├── tailwind.config.ts         # Tailwind configuration
├── next.config.mjs            # Next.js configuration
└── package.json               # Dependencies
```

## 🤖 AI Chatbot Features

### **Intelligent Lead Generation**
- **Service Detection** - Automatically detects when users express interest in services
- **Step-by-Step Collection** - Collects comprehensive project information
- **Professional Emails** - Beautiful HTML email notifications
- **Contact Integration** - Provides direct contact information when requested

### **Lead Collection Process**
1. **Name** - Full name collection
2. **Email** - Contact email with validation
3. **Phone** - Phone number for direct contact
4. **Project Type** - What they want to build
5. **Project Details** - Detailed requirements and goals
6. **Budget** (optional) - Budget range for project
7. **Timeline** (optional) - Project timeline preferences

### **Email Notifications**
- **Professional Design** - Beautiful HTML email templates
- **Complete Information** - All collected data organized clearly
- **Contact Links** - Clickable email and phone links
- **Timestamps** - When the lead was generated
- **Source Tracking** - Identifies lead source as chatbot

## 📧 Email Configuration

### **Gmail Setup**
1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account Settings → Security
   - Click "App passwords"
   - Select "Mail" and "Other"
   - Generate and copy the 16-character password
3. **Update Environment Variables**:
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

### **Email Templates**
- **Contact Form Emails** - Professional contact notifications
- **Lead Generation Emails** - Comprehensive project lead details
- **Chat Notifications** - Conversation summaries

## 🎨 Customization

### **Personal Information**
- Update personal details in components
- Replace images in `public/images/`
- Update resume in `public/resume.pdf`
- Modify contact information in API routes

### **Styling**
- Customize colors in `tailwind.config.ts`
- Modify animations in components
- Update email templates in API routes

### **Chatbot Configuration**
- Update system prompt in `src/app/api/agent/route.ts`
- Modify lead collection steps in `AgentChatbot.tsx`
- Customize email templates in `submit-lead/route.ts`

## 🚀 Deployment

### **Vercel (Recommended)**
1. **Push to GitHub**
2. **Connect to Vercel**
3. **Add environment variables**
4. **Deploy automatically**

### **Other Platforms**
- **Netlify** - Static site hosting
- **Railway** - Full-stack deployment
- **DigitalOcean** - VPS deployment

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Mobile** (320px - 768px)
- **Tablet** (768px - 1024px)
- **Desktop** (1024px+)

## 🔧 API Endpoints

### **Chatbot API**
- `POST /api/agent` - AI chatbot responses
- `POST /api/submit-lead` - Lead submission
- `POST /api/notify-chat` - Chat notifications

### **Contact API**
- `POST /api/contact` - Contact form submission
- `GET /api/download-resume` - Resume download

## 🎯 Key Features Implemented

### ✅ **Completed Features**
- [x] Modern responsive design
- [x] AI-powered chatbot with Gemini
- [x] Intelligent lead generation
- [x] Professional email notifications
- [x] Contact form with validation
- [x] Resume download functionality
- [x] Smooth animations and transitions
- [x] SEO optimization
- [x] Error handling and validation
- [x] Gmail SMTP integration
- [x] TypeScript implementation
- [x] Professional documentation

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for speed
- **SEO**: Fully optimized for search engines
- **Accessibility**: WCAG 2.1 compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Ismail** - Full-Stack Developer
- **Phone**: +923279671138
- **Email**: ismail233290@gmail.com
- **Portfolio**: [Your Portfolio URL]

## 🙏 Acknowledgments

- **Asharib** - Design inspiration from [asharib.xyz](https://asharib.xyz/)
- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Google Gemini** - AI capabilities
- **Framer Motion** - Smooth animations

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by Ismail 