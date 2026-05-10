import { NavItem, Integration, Testimonial, Stat, FAQ } from "@/types";

export const siteConfig = {
  name: "Syed Rafay",
  description: "AI Automation Developer | AI Chatbot Development, AI Agents & AI Websites",
  url: "https://my-new-portfolio-gamma-two.vercel.app",
  portfolioUrl: "https://my-new-portfolio-gamma-two.vercel.app",
  keywords: [
    "AI chatbot development",
    "AI agent automation",
    "AI website builder",
    "AI landing page builder",
    "business automation AI",
    "ChatGPT integration",
    "AI automation developer",
    "custom AI solutions",
    "RAG chatbot",
    "AI agent development",
  ],
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    portfolio: "https://my-new-portfolio-gamma-two.vercel.app",
  },
  contact: {
    email: "srafay2021@gmail.com",
    phone: "+92 316 1612741",
    location: "Karachi, Pakistan",
  },
};

export const navItems: NavItem[] = [
  { title: "Services", href: "/services" },
  { title: "AI Solutions", href: "#ai-solutions" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Contact", href: "/contact" },
];

export const integrations: Integration[] = [
  { name: "OpenAI", category: "AI", logo: "🤖", description: "GPT-4 & ChatGPT integration" },
  { name: "LangChain", category: "AI Framework", logo: "⛓️", description: "RAG & agent frameworks" },
  { name: "Pinecone", category: "Vector DB", logo: "🌲", description: "Vector embeddings storage" },
  { name: "Next.js", category: "Framework", logo: "⚡", description: "React framework for AI websites" },
  { name: "Vercel AI SDK", category: "AI SDK", logo: "▲", description: "AI streaming & responses" },
  { name: "Zapier", category: "Automation", logo: "⚡", description: "5000+ app connections" },
  { name: "Slack", category: "Communication", logo: "💬", description: "AI bot notifications" },
  { name: "Stripe", category: "Finance", logo: "💳", description: "Payment integration" },
];

export const testimonials: Testimonial[] = [
  {
    quote: "As my first client, you'll get my undivided attention and premium quality work.",
    author: "Syed Rafay",
    role: "AI Automation Developer",
    company: "Freelance",
  },
];

export const stats: Stat[] = [
  { value: "50+", label: "AI Projects in Portfolio" },
  { value: "100%", label: "Dedication" },
  { value: "24/7", label: "Availability" },
  { value: "Custom", label: "Solutions" },
];

export const faqs: FAQ[] = [
  {
    question: "Why should I be your first client?",
    answer: "As my first client, you get premium attention, personalized service, and competitive introductory rates. I'm highly motivated to deliver exceptional results that build my reputation. Your success becomes my success.",
  },
  {
    question: "How long does it take to build an AI chatbot?",
    answer: "Most AI chatbot projects take 2-4 weeks depending on complexity and integrations. Simple chatbots can be deployed in as little as 1 week, while complex RAG systems with multiple integrations may take 6-8 weeks.",
  },
  {
    question: "What AI technologies do you specialize in?",
    answer: "I specialize in OpenAI GPT models, LangChain, RAG (Retrieval-Augmented Generation), AI agents, vector databases (Pinecone, Weaviate), and custom AI integrations. I build solutions using cutting-edge AI technology.",
  },
  {
    question: "Do you offer ongoing support after deployment?",
    answer: "Yes! I offer various support packages including ongoing AI model optimization, training data updates, performance monitoring, and troubleshooting. I'm committed to your long-term AI success.",
  },
  {
    question: "Can you integrate AI with our existing tools?",
    answer: "Absolutely. I've built AI integrations with 100+ tools including CRMs, helpdesk systems, communication platforms, and more. If it has an API, I can connect AI solutions to it.",
  },
  {
    question: "What's your pricing structure?",
    answer: "I offer competitive project-based pricing for AI development, especially for my first clients. Contact me for a custom quote based on your specific AI automation needs.",
  },
];
