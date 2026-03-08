import { Metadata } from "next";
import ContactPageContent from "./page-content";

export const metadata: Metadata = {
  title: "Contact Us | AI Automation Agency",
  description:
    "Get in touch with our AI experts. Schedule a free consultation to discuss your AI chatbot, AI agent, or AI website project. We respond within 24 hours.",
  keywords: [
    "contact AI agency",
    "AI consultation",
    "AI chatbot development contact",
    "AI agent automation inquiry",
    "AI website builder contact",
    "book AI consultation",
    "AI development agency contact",
  ],
  openGraph: {
    title: "Contact Us | AI Automation Agency",
    description: "Get in touch with our AI experts. Schedule a free consultation.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | AI Automation Agency",
    description: "Get in touch with our AI experts.",
  },
  alternates: {
    canonical: "/contact",
  },
};

// Structured data for contact page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact AI Automation Agency",
  description: "Get in touch with our AI automation experts",
  url: "https://my-portfolio-chi-lovat-69.vercel.app/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Syed Rafay",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "your.email@example.com",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ContactPageContent />
    </>
  );
}
