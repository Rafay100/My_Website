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
  Github,
  ExternalLink,
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
    title: "AI Customer Support Agent",
    slug: "ai-customer-support-agent",
    description: "Intelligent AI agent that handles customer inquiries 24/7, reducing support tickets by up to 80%.",
    features: [
      "Instant responses to common questions",
      "Seamless handoff to human agents",
      "Integration with helpdesk systems",
      "Multi-language support",
    ],
    technologies: [
      { name: "OpenAI GPT-4", icon: Brain },
      { name: "LangChain", icon: Code },
      { name: "Python", icon: Zap },
      { name: "FastAPI", icon: Globe },
    ],
    category: "AI Agent",
    gradient: "from-emerald-500 to-teal-600",
    icon: MessageSquare,
    deliverables: ["Custom AI agent", "Admin dashboard", "Analytics panel", "30 days support"],
    githubUrl: "https://github.com/Rafay100/Ai_Customer_Support_Agent",
  },
  {
    title: "AI Agentic Automation",
    slug: "ai-agentic-automation",
    description: "Advanced AI automation system with autonomous agents that handle complex workflows and tasks.",
    features: [
      "Multi-agent orchestration",
      "Automated workflow execution",
      "Task delegation and monitoring",
      "Real-time decision making",
    ],
    technologies: [
      { name: "LangChain", icon: Brain },
      { name: "CrewAI", icon: Zap },
      { name: "Python", icon: Code },
      { name: "Redis", icon: Database },
    ],
    category: "Automation",
    gradient: "from-violet-500 to-purple-600",
    icon: Brain,
    deliverables: ["Agent framework", "Workflow automation", "Monitoring dashboard", "Documentation"],
    githubUrl: "https://github.com/Rafay100/ai-agentic-automation",
  },
  {
    title: "AI Excel Agent",
    slug: "ai-excel-agent",
    description: "Smart AI agent that automates Excel tasks, data analysis, and report generation with natural language.",
    features: [
      "Natural language Excel commands",
      "Automated data analysis",
      "Report generation",
      "Formula suggestions and debugging",
    ],
    technologies: [
      { name: "OpenAI GPT-4", icon: Brain },
      { name: "Pandas", icon: Database },
      { name: "Python", icon: Code },
      { name: "Streamlit", icon: Globe },
    ],
    category: "Data Automation",
    gradient: "from-cyan-500 to-blue-600",
    icon: Database,
    deliverables: ["Excel automation tool", "Data analysis features", "Report templates", "User guide"],
    githubUrl: "https://github.com/Rafay100/Ai_Excel_Agent",
  },
  {
    title: "AI Calling Agent",
    slug: "ai-calling-agent",
    description: "Voice-enabled AI agent that handles phone calls, schedules appointments, and qualifies leads automatically.",
    features: [
      "Natural voice conversations",
      "Appointment scheduling",
      "Lead qualification",
      "Call transcription and analysis",
    ],
    technologies: [
      { name: "OpenAI Whisper", icon: Brain },
      { name: "ElevenLabs", icon: Zap },
      { name: "Twilio", icon: Globe },
      { name: "Python", icon: Code },
    ],
    category: "Voice AI",
    gradient: "from-orange-500 to-red-600",
    icon: MessageSquare,
    deliverables: ["Voice AI system", "Call routing", "Analytics dashboard", "Integration support"],
    githubUrl: "https://github.com/Rafay100/Ai_Calling_Agent",
  },
  {
    title: "AI Ad Agency",
    slug: "ai-ad-agency",
    description: "AI-powered advertising platform that generates ad copy, designs, and optimizes campaigns automatically.",
    features: [
      "AI-generated ad copy",
      "Automated A/B testing",
      "Campaign optimization",
      "Performance analytics",
    ],
    technologies: [
      { name: "OpenAI GPT-4", icon: Brain },
      { name: "DALL-E", icon: Zap },
      { name: "Next.js", icon: Globe },
      { name: "PostgreSQL", icon: Database },
    ],
    category: "Marketing AI",
    gradient: "from-pink-500 to-rose-600",
    icon: ShoppingCart,
    deliverables: ["Ad generation tool", "Campaign manager", "Analytics suite", "API access"],
    githubUrl: "https://github.com/Rafay100/ad_agency",
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

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                        <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button variant="default" className="flex-1 group/btn">
                      Request This
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
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
