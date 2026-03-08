"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  ShoppingCart,
  Building,
  Brain,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";

// Placeholder icon components
const Database = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21,12c0,1.66-4,3-9,3s-9-1.34-9-3" />
    <path d="M3,5v14c0,1.66 4,3 9,3s9-1.34 9-3V5" />
  </svg>
);

const sampleProjects = [
  {
    title: "AI Customer Support Chatbot",
    slug: "customer-support-chatbot",
    description: "Intelligent chatbot that handles customer inquiries 24/7, reducing support tickets by up to 80%.",
    features: [
      "Instant responses to common questions",
      "Seamless handoff to human agents",
      "Integration with your helpdesk system",
      "Multi-language support",
    ],
    technologies: [
      { name: "ChatGPT API", icon: Brain },
      { name: "Next.js", icon: Globe },
      { name: "Node.js", icon: Zap },
      { name: "MongoDB", icon: Database },
    ],
    category: "Chatbot",
    gradient: "from-emerald-500 to-teal-600",
    icon: MessageSquare,
    deliverables: ["Custom AI chatbot", "Admin dashboard", "Analytics panel", "30 days support"],
  },
  {
    title: "AI Lead Generation Chatbot",
    slug: "lead-generation-chatbot",
    description: "Convert website visitors into qualified leads with an AI chatbot that works 24/7.",
    features: [
      "Engage visitors with smart questions",
      "Auto-schedule meetings to your calendar",
      "Sync leads to your CRM automatically",
      "Qualify leads based on your criteria",
    ],
    technologies: [
      { name: "OpenAI GPT-4", icon: Brain },
      { name: "HubSpot API", icon: Zap },
      { name: "React", icon: Globe },
      { name: "Calendly", icon: Clock },
    ],
    category: "Lead Generation",
    gradient: "from-violet-500 to-purple-600",
    icon: ShoppingCart,
    deliverables: ["Lead qualification bot", "CRM integration", "Calendar booking", "Lead scoring system"],
  },
  {
    title: "AI-Powered Business Website",
    slug: "startup-website-chatbot",
    description: "Modern, fast website with built-in AI assistant to engage visitors and capture leads.",
    features: [
      "Beautiful, responsive design",
      "SEO optimized for Google ranking",
      "Built-in AI chatbot for engagement",
      "Lightning fast performance",
    ],
    technologies: [
      { name: "Next.js 14", icon: Globe },
      { name: "Tailwind CSS", icon: Zap },
      { name: "Vercel AI SDK", icon: Brain },
      { name: "Stripe", icon: Zap },
    ],
    category: "Website + Chatbot",
    gradient: "from-cyan-500 to-blue-600",
    icon: Building,
    deliverables: ["Complete website", "AI chatbot integration", "SEO optimization", "Hosting setup"],
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

export function AIPortfolioSection() {
  return (
    <Section id="portfolio" background="muted">
      <SectionHeader
        title="Sample Projects I Can Build For You"
        subtitle="These are examples of what I can create. Every project is custom-built to match your specific business needs."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {sampleProjects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.div key={index} variants={cardVariants}>
              <Card className="group h-full overflow-hidden border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image Placeholder with Gradient */}
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

                  {/* Ready to Build Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-emerald-500/80 backdrop-blur-sm text-white text-xs font-medium rounded-full flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Ready to Build
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                      What You Get
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

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

                  {/* Deliverables */}
                  <div className="mb-6 pb-6 border-b border-border">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                      Deliverables
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.deliverables.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-lg"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button variant="outline" className="w-full group/btn">
                    Request This Solution
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Custom Project CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full mb-6">
          <Code className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-primary">
            Have a different idea? I build custom AI solutions too!
          </span>
        </div>
        <br />
        <Button variant="gradient" size="lg">
          Discuss Your Custom Project
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </Section>
  );
}
