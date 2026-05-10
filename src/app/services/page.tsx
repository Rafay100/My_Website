import { Metadata } from "next";
import { ServicesSection } from "@/components/sections/services-detailed";

export const metadata: Metadata = {
  title: "AI Services | AI Chatbot & Agent Development",
  description:
    "Professional AI services including RAG chatbot development, AI agent automation, AI website builder, and AI landing page services. Custom AI solutions for your business.",
  keywords: [
    "RAG chatbot development",
    "AI agent automation",
    "AI website builder",
    "AI landing page builder",
    "custom AI solutions",
    "AI automation agency",
    "ChatGPT integration",
    "AI development services",
    "business automation AI",
  ],
  openGraph: {
    title: "Our AI Services | AI Automation Agency",
    description:
      "End-to-end AI services that drive real business results. From chatbots to complete automation, we have the expertise to help you succeed.",
    url: "/services",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Automation Agency Services - AI Chatbot & Agent Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our AI Services | AI Automation Agency",
    description:
      "Professional AI services including RAG chatbot, AI agents, AI websites, and more.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/services",
  },
};

// Structured data for services page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Automation Services",
  provider: {
    "@type": "Organization",
    name: "Syed Rafay",
    url: "https://my-new-portfolio-gamma-two.vercel.app",
  },
  areaServed: {
    "@type": "Country",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "RAG Chatbot Development",
          description: "Custom AI chatbots powered by your business data with accurate, cited responses",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Agent Development",
          description: "Autonomous AI agents that execute complex workflows independently",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Website Builder",
          description: "Modern websites with built-in AI chatbots and capabilities",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Landing Page Builder",
          description: "High-converting landing pages optimized by AI for maximum conversions",
        },
      },
    ],
  },
};

export default function ServicesPage() {
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
                Our Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Solutions That{" "}
                <span className="gradient-text">Scale With You</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you&apos;re building your first AI chatbot or deploying
                enterprise AI agents, we have the expertise to help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <ServicesSection />

        {/* Process Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How We Work
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that delivers AI solutions in weeks, not months.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description:
                    "We learn about your business, goals, and challenges to create a tailored solution.",
                },
                {
                  step: "02",
                  title: "Strategy",
                  description:
                    "We design a custom roadmap aligned with your objectives and timeline.",
                },
                {
                  step: "03",
                  title: "Implementation",
                  description:
                    "Our experts configure, integrate, and migrate your data with precision.",
                },
                {
                  step: "04",
                  title: "Support",
                  description:
                    "We provide ongoing training, optimization, and support for long-term success.",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started with AI?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your AI automation needs and discover
              how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors shadow-lg">
                Book Free Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
