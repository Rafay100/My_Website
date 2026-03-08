"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Bot,
  Globe,
  Layout,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";

const aiServices = [
  {
    title: "RAG Chatbot Development",
    slug: "rag-chatbot",
    description: "Intelligent chatbots powered by your data. RAG-based AI that answers accurately with citations.",
    icon: MessageSquare,
    gradient: "from-violet-500 to-purple-600",
    features: [
      "Custom RAG pipeline with your data",
      "Vector database integration",
      "Citation-backed responses",
      "Multi-format document processing",
      "API integration with platforms",
    ],
    cta: "Learn More",
  },
  {
    title: "AI Agent Development",
    slug: "ai-agents",
    description: "Autonomous AI agents that work independently. Multi-step task automation with smart decision-making.",
    icon: Bot,
    gradient: "from-cyan-500 to-blue-600",
    features: [
      "Autonomous task execution",
      "Custom tool integrations",
      "Smart decision making",
      "Human-in-the-loop workflows",
      "24/7 independent operation",
    ],
    cta: "Learn More",
  },
  {
    title: "AI Website Builder",
    slug: "ai-website",
    description: "Modern websites with built-in AI. Fast, SEO-optimized sites with integrated chatbots.",
    icon: Globe,
    gradient: "from-emerald-500 to-teal-600",
    features: [
      "Custom Next.js development",
      "AI chatbot integration",
      "SEO optimized architecture",
      "Lightning-fast performance",
      "Mobile-first responsive design",
    ],
    cta: "Learn More",
  },
  {
    title: "AI Landing Page Builder",
    slug: "ai-landing-page",
    description: "High-converting landing pages powered by AI. A/B tested, optimized for conversions.",
    icon: Layout,
    gradient: "from-orange-500 to-red-600",
    features: [
      "AI-optimized copywriting",
      "Conversion-focused design",
      "A/B testing integration",
      "Analytics and tracking",
      "Lead capture automation",
    ],
    cta: "Learn More",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function AIServicesSection() {
  return (
    <Section id="services" background="muted">
      <SectionHeader
        title="AI Services That Drive Results"
        subtitle="From RAG chatbots to autonomous AI agents, I build custom AI solutions that transform how your business operates. As my first client, you get dedicated attention and competitive rates."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {aiServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group h-full overflow-hidden border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />

                <CardContent className="p-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="w-full group/btn"
                    size="lg"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-16"
      >
        <p className="text-muted-foreground mb-4">
          Need a custom AI solution?
        </p>
        <Button variant="gradient" size="lg">
          Schedule a Free Consultation
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </Section>
  );
}
