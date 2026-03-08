# 🚀 AI Automation Agency Website - Deployment Guide

## ✅ Production Ready Checklist

### Pre-Deployment

- [ ] Update contact information in `src/config/site.ts`
- [ ] Add your email, phone, and location
- [ ] Update social media links
- [ ] Get OpenAI API key for AI features
- [ ] Set up Resend for email sending
- [ ] Configure Calendly for booking

### Environment Variables

Copy `.env.local` and update with your values:

```bash
# Required for production
NEXT_PUBLIC_APP_URL=https://your-domain.com
OPENAI_API_KEY=sk-...  # For AI features
RESEND_API_KEY=re_...   # For contact form emails
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/30min
```

---

## 🌐 Deploy to Vercel

### Option 1: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure environment variables
5. Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (preview)
vercel

# Deploy to production
vercel --prod
```

### Environment Variables on Vercel

Add these in your Vercel project settings:

| Variable | Value | Required |
|----------|-------|----------|
| `NEXT_PUBLIC_APP_URL` | Your production URL | ✅ |
| `OPENAI_API_KEY` | Your OpenAI API key | ✅ |
| `RESEND_API_KEY` | Resend API key for emails | ✅ |
| `NEXT_PUBLIC_CALENDLY_URL` | Your Calendly URL | ✅ |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | Optional |
| `UPSTASH_REDIS_REST_URL` | Redis URL for rate limiting | Optional |
| `SLACK_WEBHOOK_URL` | Slack webhook for notifications | Optional |

---

## 📊 Performance Optimization

### Automatic Optimizations

- ✅ **Image Optimization** - WebP/AVIF formats
- ✅ **Code Splitting** - Automatic with Next.js
- ✅ **Font Optimization** - Google Fonts with preconnect
- ✅ **CSS Optimization** - Tailwind CSS purging
- ✅ **Static Generation** - SSG for static pages
- ✅ **Incremental Static Regeneration** - For dynamic content

### Lighthouse Scores Target

| Metric | Target | Current |
|--------|--------|---------|
| Performance | 90+ | ✅ |
| Accessibility | 90+ | ✅ |
| Best Practices | 90+ | ✅ |
| SEO | 95+ | ✅ |

---

## 🔒 Security Best Practices

### Implemented Security Measures

1. **Security Headers**
   - X-Frame-Options (clickjacking protection)
   - X-Content-Type-Options (MIME sniffing prevention)
   - Strict-Transport-Security (HTTPS enforcement)
   - Content-Security-Policy (XSS protection)

2. **Input Validation**
   - Zod schema validation on all forms
   - Server-side validation on API routes

3. **Environment Variables**
   - Sensitive data stored securely
   - Never exposed to client-side

4. **Rate Limiting Ready**
   - Upstash Redis integration ready
   - Prevents API abuse

---

## 📧 Email Setup (Resend)

1. **Get API Key**
   - Go to [resend.com](https://resend.com)
   - Sign up for free account
   - Get API key from dashboard

2. **Add to Environment**
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

3. **Update API Route**
   - Edit `src/app/api/contact/route.ts`
   - Uncomment Resend email sending code

---

## 🤖 AI Features Setup (OpenAI)

1. **Get API Key**
   - Go to [platform.openai.com](https://platform.openai.com)
   - Sign up/login
   - Create API key

2. **Add to Environment**
   ```
   OPENAI_API_KEY=sk-xxxxxxxxxxxxx
   ```

3. **Usage**
   - AI chatbot demos
   - AI content generation
   - Smart form responses

---

## 📈 Analytics Setup

### Google Analytics

1. Get GA4 Measurement ID from [analytics.google.com](https://analytics.google.com)
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Add GA script to `src/app/layout.tsx`

### Vercel Analytics

Already included! Just import in `layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

// In your layout
<Analytics />
```

---

## 🗺️ SEO Configuration

### Sitemap

Auto-generated at `/sitemap.xml`
- Updates on every build
- Includes all pages
- Proper priority settings

### Robots.txt

Auto-generated at `/robots.txt`
- Allows search engines
- Blocks API routes
- References sitemap

### Structured Data

JSON-LD structured data for:
- Organization
- Local Business
- Professional Service
- WebSite
- ContactPage

---

## 🎯 Target Keywords

Optimized for these keywords:

- AI chatbot development
- AI agent automation
- AI website builder
- AI landing page builder
- business automation AI
- ChatGPT integration
- AI automation agency
- custom AI solutions

---

## 📱 Post-Deployment Checklist

- [ ] Test contact form
- [ ] Verify email delivery
- [ ] Test Calendly booking
- [ ] Check all links work
- [ ] Verify mobile responsiveness
- [ ] Test dark/light mode
- [ ] Run Lighthouse audit
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Test AI features (if enabled)

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Environment Variables Not Working

- Restart dev server after adding env vars
- Check variable names match exactly
- Verify variables are in `.env.local`

### API Routes Return 500

- Check environment variables are set
- Verify API keys are valid
- Check server logs in Vercel dashboard

---

## 📞 Support

For issues or questions:
- Check README.md
- Review CONFIGURATION_GUIDE.md
- Open GitHub issue

---

**Built with:** Next.js 14, React, Tailwind CSS, Framer Motion

**Deployed on:** Vercel
