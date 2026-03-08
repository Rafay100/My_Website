"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  MessageSquare,
  ShoppingCart,
  Building,
  Sparkles,
  Brain,
  Globe,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";

// Placeholder icon components
const Code = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16,18 22,12 16,6" />
    <polyline points="8,6 2,12 8,18" />
  </svg>
);

const Database = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21,12c0,1.66-4,3-9,3s-9-1.34-9-3" />
    <path d="M3,5v14c0,1.66 4,3 9,3s9-1.34 9-3V5" />
  </svg>
);

const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const Palette = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
    <path d="M12,2C6.5,2 2,6.5 2,12s4.5,10 10,10c0.9,0 1.6-0.7 1.6-1.6c0-0.9-0.7-1.6-1.6-1.6H11c-2.8,0-5-2.2-5-5c0-2.8 2.2-5 5-5h1c2.8,0 5,2.2 5,5V20c0,0.6 0.4,1 1,1h1c4.4,0 8-3.6 8-8S16.4,2 12,2z" />
  </svg>
);

const CreditCard = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const portfolioProjects = [
  {
    title: "AI Customer Support Chatbot",
    slug: "customer-support-chatbot",
    description: "An intelligent chatbot that handles 80% of customer inquiries automatically, reducing support ticket volume and response times.",
    longDescription: "We built a custom AI chatbot for an e-commerce company that handles customer inquiries about orders, returns, product information, and troubleshooting. The chatbot integrates with their existing helpdesk system and provides seamless handoff to human agents when needed.",
    category: "Chatbot",
    image: "/images/portfolio/chatbot-support.png",
    icon: MessageSquare,
    gradient: "from-emerald-500 to-teal-600",
    technologies: [
      { name: "ChatGPT API", icon: Brain },
      { name: "Next.js", icon: Globe },
      { name: "Node.js", icon: Code },
      { name: "MongoDB", icon: Database },
    ],
    features: [
      "Handles 10,000+ conversations monthly",
      "80% resolution rate without human intervention",
      "Average response time under 1 second",
      "Multi-language support (5 languages)",
      "Seamless handoff to human agents",
    ],
    metrics: [
      { value: "80%", label: "Auto-resolution Rate" },
      { value: "<1s", label: "Response Time" },
      { value: "10K+", label: "Monthly Conversations" },
    ],
    demoUrl: "#",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "AI Lead Generation Chatbot",
    slug: "lead-generation-chatbot",
    description: "A conversational AI that qualifies leads, books meetings, and integrates directly with CRM systems for seamless handoff to sales teams.",
    longDescription: "This AI chatbot was designed for a B2B SaaS company to capture and qualify leads from their website. The bot asks qualifying questions, schedules demos, and syncs all data directly to their HubSpot CRM, resulting in a 3x increase in qualified leads.",
    category: "Lead Generation",
    image: "/images/portfolio/chatbot-leads.png",
    icon: ShoppingCart,
    gradient: "from-violet-500 to-purple-600",
    technologies: [
      { name: "OpenAI GPT-4", icon: Brain },
      { name: "HubSpot API", icon: Zap },
      { name: "React", icon: Code },
      { name: "Calendly", icon: Calendar },
    ],
    features: [
      "Qualifies leads with custom criteria",
      "Books meetings directly on calendar",
      "CRM integration (HubSpot, Salesforce)",
      "Lead scoring and prioritization",
      "Email follow-up automation",
    ],
    metrics: [
      { value: "3x", label: "More Qualified Leads" },
      { value: "45%", label: "Meeting Booking Rate" },
      { value: "24/7", label: "Lead Capture" },
    ],
    demoUrl: "#",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "AI Startup Website with Chatbot",
    slug: "startup-website-chatbot",
    description: "A complete AI-powered website for a fintech startup, featuring an integrated chatbot that explains products and captures user interest.",
    longDescription: "We designed and developed a modern, high-converting website for a fintech startup. The site includes an AI chatbot that educates visitors about their financial products, answers questions, and captures leads. Built with Next.js for optimal performance and SEO.",
    category: "Website + Chatbot",
    image: "/images/portfolio/website-chatbot.png",
    icon: Building,
    gradient: "from-cyan-500 to-blue-600",
    technologies: [
      { name: "Next.js 14", icon: Globe },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Vercel AI SDK", icon: Sparkles },
      { name: "Stripe", icon: CreditCard },
    ],
    features: [
      "Modern, responsive design",
      "Built-in AI chatbot assistant",
      "SEO optimized (PageSpeed 95+)",
      "Analytics and conversion tracking",
      "Blog and content management",
    ],
    metrics: [
      { value: "95+", label: "PageSpeed Score" },
      { value: "2.5x", label: "Conversion Increase" },
      { value: "40%", label: "Chatbot Engagement" },
    ],
    demoUrl: "#",
    githubUrl: "#",
    liveUrl: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function PortfolioSection() {
  return (
    <Section id="portfolio" background="default">
      <SectionHeader
        title="Our AI Portfolio"
        subtitle="See how we've helped businesses transform with intelligent AI solutions."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {portfolioProjects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.div key={index} variants={cardVariants}>
              <Card className="group h-full overflow-hidden border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image Placeholder */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-20 h-20 text-white/30" />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button variant="secondary" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent border-white text-white hover:bg-white/20">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => {
                        const TechIcon = tech.icon;
                        return (
                          <span
                            key={i}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-lg text-xs font-medium"
                          >
                            <TechIcon className="w-3.5 h-3.5 text-primary" />
                            {tech.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-border">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-primary">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button variant="outline" className="w-full group/btn">
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* View All Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Button variant="outline" size="lg">
          View All Projects
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </Section>
  );
}
