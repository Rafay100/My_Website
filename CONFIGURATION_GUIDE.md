# 🎉 Website Configuration Guide

## ✅ Updates Completed

Your portfolio link and name have been added throughout the website:

- ✅ **Portfolio URL**: https://my-portfolio-chi-lovat-69.vercel.app
- ✅ **Name**: Syed Rafay
- ✅ **Logo**: Changed from "C" to "S" for Syed

---

## ⚠️ TODO: Update Your Contact Information

Open `src/config/site.ts` and update these fields with your actual information:

```typescript
export const siteConfig = {
  name: "Syed Rafay",
  description: "Transform Your CRM Into a Revenue Engine | AI Solutions Expert",
  url: "https://my-portfolio-chi-lovat-69.vercel.app",
  portfolioUrl: "https://my-portfolio-chi-lovat-69.vercel.app",
  keywords: ["CRM consulting", "CRM automation", "Startup CRM setup", "AI chatbot development", "AI website development"],
  links: {
    twitter: "https://twitter.com/yourusername",      // TODO: Update
    github: "https://github.com/yourusername",        // TODO: Update
    linkedin: "https://linkedin.com/in/yourusername", // TODO: Update
    portfolio: "https://my-portfolio-chi-lovat-69.vercel.app",
  },
  contact: {
    email: "your.email@example.com",    // TODO: Update with your email
    phone: "+1 (555) 123-4567",         // TODO: Update with your phone
    location: "Your Location",          // TODO: Update with your city/country
  },
};
```

---

## 📍 Where Your Information Appears

### 1. **Navbar (Header)**
- Your name "Syed Rafay" with "S" logo
- Portfolio button linking to your Vercel portfolio
- Mobile menu includes "View Portfolio" button

### 2. **Footer**
- Your name as the brand
- Portfolio link with "View My Portfolio →"
- Email, phone, and location (once updated)

### 3. **Contact Page**
- Contact form with your email, phone, and location
- Social media links (update in siteConfig)

### 4. **SEO & Metadata**
- Site title includes your name
- Description mentions "AI Solutions Expert"
- Portfolio URL used for canonical links

---

## 🚀 Quick Start

1. **Update your contact info** in `src/config/site.ts`
2. **Run development server**:
   ```bash
   npm run dev
   ```
3. **Visit**: http://localhost:3000

---

## 📁 Files Modified

| File | Changes |
|------|---------|
| `src/config/site.ts` | Added your name, portfolio URL, contact info |
| `src/components/layout/navbar.tsx` | Updated logo to "S", added Portfolio button |
| `src/components/layout/footer.tsx` | Updated branding, added portfolio link |
| `src/app/contact/page-content.tsx` | Updated contact info display |
| `.env.local` | Updated portfolio URL |
| `.env.example` | Updated portfolio URL |

---

## 🎨 Customization Tips

### Update Social Media Links
In `src/config/site.ts`:
```typescript
links: {
  twitter: "https://twitter.com/syedrafay",
  github: "https://github.com/syedrafay",
  linkedin: "https://linkedin.com/in/syedrafay",
  portfolio: "https://my-portfolio-chi-lovat-69.vercel.app",
}
```

### Update Contact Information
In `src/config/site.ts`:
```typescript
contact: {
  email: "syedrafay@example.com",
  phone: "+92 300 1234567",
  location: "Karachi, Pakistan", // or your location
}
```

### Change Logo Initial
In `src/components/layout/navbar.tsx` and `footer.tsx`:
```tsx
<span className="text-white font-bold text-xl">S</span> // Change to your initial
```

---

## 📧 Contact Form Setup

The contact form sends submissions to `/api/contact`. To receive emails:

1. **Get a Resend API key**: https://resend.com
2. **Add to `.env.local`**:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```
3. **Update** `src/app/api/contact/route.ts` with email sending code

---

## 🌐 Deploy to Vercel

Your site is already configured for Vercel deployment:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

Make sure to add your environment variables in Vercel dashboard:
- `NEXT_PUBLIC_APP_URL` = Your production URL
- `RESEND_API_KEY` (optional)

---

## ✨ Features Included

- ✅ Portfolio link in navbar, footer, and mobile menu
- ✅ Your name as the brand
- ✅ Contact information throughout the site
- ✅ Social media links (update with your profiles)
- ✅ SEO optimized with your name
- ✅ Responsive design
- ✅ Dark/light mode
- ✅ Contact form ready
- ✅ AI services section
- ✅ Portfolio section

---

## 📞 Need Help?

If you need assistance updating your contact information or setting up email, just ask!
