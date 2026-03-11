// src/config/case-studies.ts

export type Tool = {
  name: string;
  category: string;
  icon: string;
};

export type Metric = {
  value: string | number;
  label: string;
  description?: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  color: string; // Tailwind gradient classes
  client: {
    name: string;
    logo: string; // emoji or short string
    industry: string;
    size: string;
    location: string;
  };
  challenge: {
    title: string;
    description: string;
    painPoints: string[];
  };
  solution: {
    title: string;
    description: string;
    approach: string[];
    timeline: string;
    teamSize: string;
  };
  results: {
    title: string;
    summary: string;
    metrics: Metric[];
    testimonial: Testimonial;
  };
  tools: Tool[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "AI Customer Support Chatbot",
    subtitle: "Automating 80% of customer queries for ShopFlow.",
    color: "from-primary to-secondary",
    client: {
      name: "ShopFlow",
      logo: "🛍️",
      industry: "E-commerce",
      size: "50-200 employees",
      location: "USA",
    },
    challenge: {
      title: "High Support Costs & Slow Response",
      description: "Manual support was slow and expensive, impacting customer satisfaction.",
      painPoints: [
        "Long response times",
        "High support costs",
        "Customer dissatisfaction",
      ],
    },
    solution: {
      title: "AI Chatbot Implementation",
      description:
        "Implemented an AI-powered chatbot integrated with CRM for automated responses and routing.",
      approach: [
        "Integrated AI chatbot with CRM",
        "Automated FAQ handling",
        "Escalation rules for complex queries",
      ],
      timeline: "3 months",
      teamSize: "4 members",
    },
    results: {
      title: "Results & Impact",
      summary: "Significant improvement in efficiency and customer satisfaction.",
      metrics: [
        { value: "80%", label: "Auto-Resolution Rate" },
        { value: "10K+", label: "Monthly Conversations" },
        { value: "50%", label: "Support Cost Reduction" },
      ],
      testimonial: {
        quote: "The AI chatbot transformed our support operations.",
        author: "Jane Doe",
        role: "Customer Support Manager",
        company: "ShopFlow",
      },
    },
    tools: [
      { name: "OpenAI", category: "AI Engine", icon: "🤖" },
      { name: "React", category: "Frontend", icon: "⚛️" },
      { name: "Figma", category: "Design", icon: "🎨" },
      { name: "Clockify", category: "Project Tracking", icon: "⏱️" },
      { name: "Google Analytics", category: "Analytics", icon: "📊" },
    ],
  },

  // You can add more case studies below
  {
    id: "2",
    title: "AI Lead Generation Chatbot",
    subtitle: "3x more qualified leads for CloudMetrics.",
    color: "from-green-400 to-blue-500",
    client: {
      name: "CloudMetrics",
      logo: "☁️",
      industry: "SaaS",
      size: "100-500 employees",
      location: "UK",
    },
    challenge: {
      title: "Low Lead Conversion",
      description: "Manual outreach had low conversion rates and wasted sales time.",
      painPoints: [
        "Low lead quality",
        "Time-consuming outreach",
        "Missed opportunities",
      ],
    },
    solution: {
      title: "Automated AI Lead Bot",
      description:
        "AI chatbot interacts with prospects, qualifies leads, and books meetings automatically.",
      approach: [
        "Integrated lead capture with website",
        "AI qualification logic",
        "Meeting scheduling automation",
      ],
      timeline: "2 months",
      teamSize: "3 members",
    },
    results: {
      title: "Results & Impact",
      summary: "Higher conversion rates and more booked meetings.",
      metrics: [
        { value: "3x", label: "Qualified Leads" },
        { value: "45%", label: "Meeting Booking Rate" },
        { value: "25%", label: "Conversion Increase" },
      ],
      testimonial: {
        quote: "AI lead bot doubled our pipeline in 2 months.",
        author: "John Smith",
        role: "Head of Sales",
        company: "CloudMetrics",
      },
    },
    tools: [
      { name: "OpenAI", category: "AI Engine", icon: "🤖" },
      { name: "Next.js", category: "Frontend", icon: "▲" },
      { name: "HubSpot", category: "CRM", icon: "🎯" },
    ],
  },
];

export const caseStudyCategories = [
  { name: "All", filter: (cs: CaseStudy) => true },
  { name: "AI Chatbots", filter: (cs: CaseStudy) => cs.title.includes("Chatbot") },
  { name: "AI Agents", filter: (cs: CaseStudy) => cs.title.includes("Agent") },
  { name: "AI Websites", filter: (cs: CaseStudy) => cs.title.includes("Website") },
];