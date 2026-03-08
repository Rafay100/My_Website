export interface NavItem {
  title: string;
  href: string;
}

export interface Service {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  color: string;
  features: string[];
  benefits: string[];
  idealFor: string;
  deliverables: string[];
  timeline: string;
  startingPrice: string;
}

export interface Integration {
  name: string;
  category: string;
  logo: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: {
    name: string;
    industry: string;
    size: string;
    location: string;
    logo: string;
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
  tools: {
    name: string;
    category: string;
    icon: string;
  }[];
  results: {
    title: string;
    summary: string;
    metrics: {
      value: string;
      label: string;
      description: string;
    }[];
    testimonial: {
      quote: string;
      author: string;
      role: string;
      company: string;
    };
  };
  featured: boolean;
  color: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}
