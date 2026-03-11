import { Metadata } from "next";
import { CaseStudiesSection } from '@/components/sections/case-studies-detailed';

export const metadata: Metadata = {
  title: "AI Case Studies | AI Automation Success Stories",
  description:
    "Real results for real businesses. See how we've helped companies transform their operations with AI chatbots, AI agents, and AI-powered websites.",
  keywords: [
    "AI case studies",
    "AI success stories",
    "AI chatbot results",
    "AI agent automation case study",
    "AI website results",
    "AI automation results",
    "AI development results",
    "business transformation AI",
    "AI ROI",
    "AI efficiency improvement",
  ],
  openGraph: {
    title: "AI Case Studies | AI Automation Agency",
    description:
      "Real results for real businesses. See our client success stories and the measurable impact of our AI solutions.",
    url: "/case-studies",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Automation Agency Case Studies - Client Success Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Case Studies | AI Automation Agency",
    description:
      "Real results for real businesses. See our client success stories.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/case-studies",
  },
};

// Structured data for case studies page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AI Automation Agency Case Studies",
  description: "Real results for real businesses",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "AI Customer Support Chatbot - ShopFlow",
      description: "80% auto-resolution rate, 10K+ monthly conversations",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Lead Generation Chatbot - CloudMetrics",
      description: "3x more qualified leads, 45% meeting booking rate",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "AI Startup Website - PayFlow AI",
      description: "95+ PageSpeed score, 2.5x conversion increase",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "AI Research Agent - Strategy Corp",
      description: "80% time saved on research, $2M annual cost savings",
    },
  ],
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

          <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Case Studies
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success Stories That{" "}
                <span className="gradient-text">Speak for Themselves</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore how we&apos;ve helped businesses from startups to enterprises
                transform their operations with AI solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "50+", label: "Clients Served" },
                { value: "100+", label: "Projects Completed" },
                { value: "40%", label: "Avg Efficiency Gain" },
                { value: "99%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Case Studies Section */}
        <CaseStudiesSection />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join the 50+ companies that have transformed their sales operations
              with our help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors shadow-lg">
                Get Started Today
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
