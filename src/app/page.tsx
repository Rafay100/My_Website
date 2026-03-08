import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AIHeroSection } from "@/components/sections/ai-hero";
import { AIServicesSection } from "@/components/sections/ai-services";
import { AISolutionsSection } from "@/components/sections/ai-solutions";
import { AIPortfolioSection } from "@/components/sections/ai-portfolio";
import { AITestimonialsSection } from "@/components/sections/ai-testimonials";
import { AIPricingSection } from "@/components/sections/ai-pricing";
import { AICTASection } from "@/components/sections/ai-cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AI Automation Developer | AI Chatbots & Websites - Seeking First Clients",
  description:
    "Transform your business with AI automation. Expert AI chatbot development, AI agent automation, AI website builder, and AI landing page services. Currently accepting first clients with special introductory rates.",
  keywords: [
    "AI chatbot development",
    "AI agent automation",
    "AI website builder",
    "AI landing page builder",
    "business automation",
    "ChatGPT integration",
    "custom AI solutions",
    "AI automation developer",
    "freelance AI developer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} - AI Automation Developer`,
    description: "Transform your business with AI automation solutions. AI chatbots, agents, and websites. Currently accepting first clients.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - AI Automation Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - AI Automation Developer`,
    description: "Transform your business with AI automation solutions.",
    images: ["/og-image.png"],
    creator: "@syedrafay",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <AIHeroSection />
        <AIServicesSection />
        <AISolutionsSection />
        <AIPortfolioSection />
        <AITestimonialsSection />
        <AIPricingSection />
        <AICTASection />
      </main>
      <Footer />
    </>
  );
}
