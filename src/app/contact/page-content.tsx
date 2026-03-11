"use client";

import { useState } from "react";
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Calendar,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  Loader2,
  MessageSquare,
  Bot,
  Globe,
  Sparkles,
} from "lucide-react";
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

const contactInfo = [
  {
    icon: Mail,
    title: "Email Me",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    description: "I'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Me",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\D/g, "")}`,
    description: "Mon-Fri from 9am to 6pm",
  },
  {
    icon: MapPin,
    title: "Location",
    value: siteConfig.contact.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.location)}`,
    description: "Available for remote work worldwide",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Monday - Friday, 9:00 AM - 6:00 PM",
    href: null,
    description: "Available for emergency support 24/7",
  },
];

const socialLinks = [
  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
  { icon: Github, href: siteConfig.links.github, label: "GitHub" },
];

const serviceOptions = [
  { value: "chatbot", label: "AI Chatbot Development", icon: MessageSquare },
  { value: "agents", label: "AI Agent Automation", icon: Bot },
  { value: "website", label: "AI Website Builder", icon: Globe },
  { value: "landing", label: "AI Landing Page", icon: Sparkles },
  { value: "other", label: "Other", icon: MessageSquare },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  newsletter: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPageContent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    newsletter: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        newsletter: false,
      });
    } catch {
      setSubmitError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
            <p className="text-muted-foreground mb-8">
              Thank you for reaching out. I&apos;ll get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing Together</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your business with AI? I&apos;m here to help.
              Schedule a call or send a message.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Send Me a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and I&apos;ll get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name
                            ? "border-destructive focus:border-destructive"
                            : "border-border focus:border-primary"
                        } bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email
                            ? "border-destructive focus:border-destructive"
                            : "border-border focus:border-primary"
                        } bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors`}
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="3k-5k">$3,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-20k">$10,000 - $20,000</option>
                      <option value="20k+">$20,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message
                          ? "border-destructive focus:border-destructive"
                          : "border-border focus:border-primary"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none`}
                      placeholder="Tell me about your AI project, goals, and timeline..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
                    />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      Subscribe to my newsletter for AI tips and insights.
                    </label>
                  </div>

                  {submitError && (
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-destructive" />
                      <p className="text-sm text-destructive">{submitError}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Booking */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Information Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
                  >
                    <info.icon className="w-6 h-6 text-primary mb-3" />
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-primary hover:underline block mb-1"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.value}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Meeting Booking */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-bold">Schedule a Call</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Book a free 30-minute strategy call to discuss your AI project.
                </p>

                <div className="bg-background border border-border rounded-xl p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">
                    Ready to get started?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Select a time that works for you.
                  </p>
                  <Button variant="gradient">
                    Book Your Free Strategy Call
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4">
                    No credit card required • 30 minutes
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How quickly can we get started on my AI project?",
                a: "Most projects can kick off within 1-2 weeks of initial contact. We'll schedule a discovery call to understand your needs and provide a detailed proposal.",
              },
              {
                q: "What's the typical timeline for an AI chatbot?",
                a: "Simple chatbots take 2-4 weeks, while complex AI agents with multiple integrations may take 6-10 weeks. I'll provide a detailed timeline during our discovery phase.",
              },
              {
                q: "Do you offer ongoing support after deployment?",
                a: "Yes! I offer various support packages including ongoing optimization, training, and troubleshooting. I'm committed to your long-term success.",
              },
              {
                q: "What industries do you specialize in?",
                a: "I have deep expertise in B2B SaaS, e-commerce, professional services, and technology. However, AI solutions work across all industries.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
