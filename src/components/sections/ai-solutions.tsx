"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Bot,
  Globe,
  Layout,
  ArrowRight,
  CheckCircle,
  Zap,
  Clock,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";

const aiSolutions = [
  {
    title: "RAG Chatbot Development",
    slug: "rag-chatbot",
    shortDescription: "Intelligent chatbots powered by your data. RAG-based AI that answers accurately with citations.",
    fullDescription: "Transform your customer experience with Retrieval-Augmented Generation (RAG) chatbots that understand your business data. Our custom chatbots pull from your knowledge base, documentation, and databases to provide accurate, cited responses that never hallucinate.",
    icon: MessageSquare,
    gradient: "from-violet-500 to-purple-600",
    features: [
      { icon: MessageSquare, text: "Custom RAG pipeline" },
      { icon: Zap, text: "Vector database integration" },
      { icon: Clock, text: "24/7 availability" },
      { icon: TrendingUp, text: "90%+ auto-resolution" },
    ],
    benefits: [
      "Reduce support tickets by up to 70%",
      "Respond to customers in under 1 second",
      "Handle unlimited conversations simultaneously",
      "Accurate responses with cited sources",
    ],
    cta: "Book Demo",
  },
  {
    title: "AI Agent Development",
    slug: "ai-agents",
    shortDescription: "Autonomous AI agents that work independently. Multi-step task automation with smart decision-making.",
    fullDescription: "Deploy intelligent AI agents that autonomously execute complex workflows, make decisions, and interact with your tools. From research agents to sales automation agents, we build AI systems that work 24/7 to amplify your team's productivity.",
    icon: Bot,
    gradient: "from-cyan-500 to-blue-600",
    features: [
      { icon: Bot, text: "Autonomous task execution" },
      { icon: Sparkles, text: "Smart decision making" },
      { icon: Zap, text: "Custom tool integrations" },
      { icon: TrendingUp, text: "50+ hours saved/week" },
    ],
    benefits: [
      "Automate complex workflows end-to-end",
      "Scale operations without hiring",
      "Consistent execution with zero errors",
      "Focus your team on high-value work",
    ],
    cta: "Get Started",
  },
  {
    title: "AI Website Builder",
    slug: "ai-website",
    shortDescription: "Modern websites with built-in AI. Fast, SEO-optimized sites with integrated chatbots.",
    fullDescription: "Get a stunning, high-performance website built with the latest AI technologies. From SaaS landing pages to complete business websites, we create digital experiences that engage visitors, rank on Google, and drive conversions—all with built-in AI chatbot integration.",
    icon: Globe,
    gradient: "from-emerald-500 to-teal-600",
    features: [
      { icon: Globe, text: "Next.js development" },
      { icon: Sparkles, text: "AI chatbot integration" },
      { icon: Zap, text: "95+ PageSpeed score" },
      { icon: TrendingUp, text: "SEO optimized" },
    ],
    benefits: [
      "Launch in weeks, not months",
      "Built-in AI capabilities from day one",
      "Lightning-fast page load speeds",
      "SEO-ready for immediate ranking",
    ],
    cta: "View Examples",
  },
  {
    title: "AI Landing Page Builder",
    slug: "ai-landing-page",
    shortDescription: "High-converting landing pages powered by AI. A/B tested, optimized for conversions.",
    fullDescription: "Launch high-converting landing pages that turn visitors into customers. We combine AI-powered copywriting, data-driven design, and conversion optimization to create landing pages that perform. Includes A/B testing integration and continuous optimization.",
    icon: Layout,
    gradient: "from-orange-500 to-red-600",
    features: [
      { icon: Layout, text: "AI-optimized copywriting" },
      { icon: Sparkles, text: "Conversion-focused design" },
      { icon: Zap, text: "A/B testing integration" },
      { icon: TrendingUp, text: "2-3x higher conversions" },
    ],
    benefits: [
      "Launch campaigns in days, not weeks",
      "Data-driven design decisions",
      "Continuous performance improvement",
      "Integrated lead capture automation",
    ],
    cta: "Start Building",
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

export function AISolutionsSection() {
  return (
    <Section id="ai-solutions" background="default">
      <SectionHeader
        title="AI Solutions for Modern Businesses"
        subtitle="We build intelligent AI systems that automate customer support, generate leads, and power modern business websites."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
      >
        {aiSolutions.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <motion.div key={index} variants={cardVariants}>
              <Card className="group h-full overflow-hidden border-0 bg-card shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${solution.gradient}`} />

                <CardContent className="p-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.shortDescription}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, i) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <li
                          key={i}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <FeatureIcon className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                          {feature.text}
                        </li>
                      );
                    })}
                  </ul>

                  {/* Benefits Box */}
                  <div className="bg-muted/50 rounded-xl p-5 mb-8">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="gradient"
                    size="lg"
                    className="w-full group/btn"
                  >
                    {solution.cta}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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
          Ready to automate your business with AI?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gradient" size="lg">
            Book a Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg">
            View Portfolio
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
