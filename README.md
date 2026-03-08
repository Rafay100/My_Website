# 🤖 AI Automation Agency Website

A modern, high-performance website for an AI automation agency built with Next.js 14, React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging user interactions
- **SEO Optimized**: Meta tags, Open Graph, structured data, sitemap, robots.txt
- **Responsive Design**: Mobile-first, works on all devices
- **Dark/Light Mode**: Toggle theme support
- **Contact Form**: With API endpoint and validation
- **Performance Optimized**: Image optimization, code splitting, lazy loading
- **Security Best Practices**: Security headers, input validation, rate limiting ready

## 🎯 Services Showcased

- **AI Chatbot Development** - ChatGPT-powered customer support chatbots
- **AI Agent Automation** - Autonomous AI agents for business processes
- **AI Website Builder** - AI-powered business websites
- **AI Landing Page Builder** - High-converting landing pages
- **Business Process Automation** - End-to-end workflow automation

## 📁 Project Structure

```
crm-website/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts       # Contact form API
│   │   │   └── newsletter/
│   │   │       └── route.ts       # Newsletter API
│   │   ├── contact/
│   │   │   ├── page.tsx           # Contact page (with SEO)
│   │   │   └── page-content.tsx   # Contact page content
│   │   ├── layout.tsx             # Root layout with SEO
│   │   ├── page.tsx               # Homepage
│   │   ├── sitemap.ts             # Sitemap generation
│   │   └── robots.ts              # Robots.txt generation
│   ├── components/
│   │   ├── layout/
│   │   │   ├── footer.tsx         # Footer component
│   │   │   └── navbar.tsx         # Navigation header
│   │   ├── sections/
│   │   │   ├── ai-hero.tsx        # Hero section
│   │   │   ├── ai-services.tsx    # 5 AI services
│   │   │   ├── ai-solutions.tsx   # AI solutions
│   │   │   ├── ai-portfolio.tsx   # Portfolio projects
│   │   │   ├── ai-testimonials.tsx # Testimonials
│   │   │   ├── ai-pricing.tsx     # Pricing with toggle
│   │   │   └── ai-cta.tsx         # CTA with form
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── accordion.tsx
│   │       └── ...
│   ├── config/
│   │   └── site.ts                # Site configuration
│   ├── lib/
│   │   └── utils.ts               # Utility functions
│   └── types/
│       └── index.ts               # TypeScript types
├── .env.local                     # Environment variables
├── .env.example                   # Environment variables template
├── vercel.json                    # Vercel deployment config
├── next.config.js                 # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── DEPLOYMENT_GUIDE.md            # Deployment instructions
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   cd crm-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your API keys:
   - `OPENAI_API_KEY` - OpenAI API key (get at https://platform.openai.com)
   - `RESEND_API_KEY` - Resend API key for emails (get at https://resend.com)
   - `NEXT_PUBLIC_CALENDLY_URL` - Your Calendly booking URL

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Environment Variables on Vercel

Add these in your Vercel project settings:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_APP_URL` | Your production URL |
| `OPENAI_API_KEY` | OpenAI API key for AI features |
| `RESEND_API_KEY` | Resend API key for emails |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly booking URL |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID (optional) |

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## 🎨 Customization

### Update Contact Information

Edit `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  contact: {
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your Location",
  },
  links: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
};
```

### Update Services

Edit `src/components/sections/ai-services.tsx` to modify service offerings.

### Update Pricing

Edit `src/components/sections/ai-pricing.tsx` to modify pricing plans.

## 🔒 Security Features

- ✅ Security headers (HSTS, X-Frame-Options, CSP, etc.)
- ✅ Input validation with Zod
- ✅ Environment variables for secrets
- ✅ HTTPS enforcement via headers
- ✅ Rate limiting ready (Upstash Redis)

## 📊 Performance

- ✅ Image optimization (WebP/AVIF)
- ✅ Code splitting (automatic)
- ✅ Font optimization
- ✅ CSS optimization
- ✅ Static generation

**Target Lighthouse Scores:**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 95+

## 🎯 SEO Features

- ✅ Meta tags for all pages
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Auto-generated sitemap.xml
- ✅ Auto-generated robots.txt
- ✅ Canonical URLs
- ✅ Target keywords optimized

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | AI automation agency homepage |
| Contact | `/contact` | Contact form with booking |

## 🧩 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Submit contact form |
| `/api/newsletter` | POST | Subscribe to newsletter |

## 🎨 Design System

### Colors

- **Primary**: Indigo (#6366F1)
- **Secondary**: Sky Blue (#0EA5E9)
- **Accent**: Emerald (#10B981)
- **Gradient**: Indigo to Purple

### Typography

- **Font**: Inter
- **Headings**: Bold, tight tracking
- **Body**: Regular weight, relaxed leading

## 📱 Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| Mobile | < 640px |
| Tablet | 640px - 1024px |
| Desktop | > 1024px |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for your needs.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [shadcn/ui](https://ui.shadcn.com/)

---

**Built with ❤️** using Next.js 14, React, Tailwind CSS, and Framer Motion.

**Deployed on** [Vercel](https://vercel.com)
"# My_Website" 
"# My_Website" 
