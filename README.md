# Portfolio Website - Ismail

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases the work and skills of Ismail, a Full-Stack Developer with 2.5 years of experience.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Components**: Hover effects, scroll animations, and interactive elements
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Performance**: Optimized for fast loading and smooth performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
new-portolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd new-portolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📝 Customization

### Personal Information
Update the following files to customize the portfolio with your information:

- **Hero Section**: `components/Hero.tsx` - Update name, title, and description
- **About Section**: `components/About.tsx` - Update personal story and background
- **Projects Section**: `components/Projects.tsx` - Add your own projects
- **Skills Section**: `components/Skills.tsx` - Update skills and proficiency levels
- **Experience Section**: `components/Experience.tsx` - Add your work experience
- **Contact Section**: `components/Contact.tsx` - Update contact information

### Styling
- **Colors**: Update the primary color scheme in `tailwind.config.ts`
- **Fonts**: Change fonts in `app/layout.tsx`
- **Animations**: Modify animation settings in individual components

### Contact Form
To make the contact form functional:

1. Set up an email service (like Resend, SendGrid, or Nodemailer)
2. Create an API route in `app/api/contact/route.ts`
3. Update the form submission logic in `components/Contact.tsx`

## 🎨 Sections

### 1. Header
- Responsive navigation menu
- Smooth scroll to sections
- Transparent to solid background on scroll

### 2. Hero
- Animated introduction
- Call-to-action buttons
- Scroll indicator

### 3. About
- Personal story and background
- Tech stack overview
- Animated content reveal

### 4. Projects
- Project showcase with images
- Technology tags
- Live demo and code links

### 5. Skills
- Interactive skill cards
- Progress indicators
- Categorized skills display

### 6. Experience
- Timeline layout
- Work and education history
- Technology highlights

### 7. Contact
- Contact form with validation
- Contact information
- Social media links

### 8. Footer
- Copyright information
- Tech stack credits

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Performance

- Optimized images and assets
- Lazy loading for better performance
- Smooth animations with hardware acceleration
- SEO optimized with proper meta tags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS 