"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started with AI",
    monthlyPrice: 299,
    yearlyPrice: 249,
    currency: "$",
    period: "month",
    features: [
      { text: "AI Chatbot (up to 500 conversations/month)", included: true },
      { text: "Basic website integration", included: true },
      { text: "Email support", included: true },
      { text: "Standard response templates", included: true },
      { text: "Analytics dashboard", included: true },
      { text: "Custom AI agent development", included: false },
      { text: "Multi-platform integration", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Get Started",
    popular: false,
    highlight: false,
  },
  {
    name: "Professional",
    description: "For growing businesses ready to scale with AI",
    monthlyPrice: 799,
    yearlyPrice: 649,
    currency: "$",
    period: "month",
    features: [
      { text: "AI Chatbot (up to 5,000 conversations/month)", included: true },
      { text: "Advanced website integration", included: true },
      { text: "Priority email & chat support", included: true },
      { text: "Custom response training", included: true },
      { text: "Advanced analytics & reporting", included: true },
      { text: "Custom AI agent development", included: true },
      { text: "Multi-platform integration", included: true },
      { text: "A/B testing", included: true },
    ],
    cta: "Get Started",
    popular: true,
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "Complete AI automation for large organizations",
    monthlyPrice: 2499,
    yearlyPrice: 1999,
    currency: "$",
    period: "month",
    features: [
      { text: "Unlimited AI chatbot conversations", included: true },
      { text: "Full website & app integration", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Custom AI model training", included: true },
      { text: "Advanced security & compliance", included: true },
      { text: "Multiple custom AI agents", included: true },
      { text: "Enterprise integrations (CRM, ERP)", included: true },
      { text: "SLA guarantee", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
    highlight: false,
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

export function AIPricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Section id="pricing" background="muted">
      <SectionHeader
        title="Simple, Transparent Pricing"
        subtitle="Choose the AI automation package that fits your business needs. All plans include a 14-day free trial."
      />

      {/* Billing Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-4 mb-12"
      >
        <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
          Monthly
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className="relative w-14 h-7 bg-primary rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
          aria-label="Toggle billing period"
        >
          <div
            className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
              isYearly ? 'left-8' : 'left-1'
            }`}
          />
        </button>
        <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
          Yearly
          <span className="ml-2 text-xs text-accent font-semibold">Save 20%</span>
        </span>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {pricingPlans.map((plan, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card
              className={`relative h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                plan.highlight
                  ? "ring-2 ring-primary scale-105 bg-gradient-to-b from-primary/5 to-transparent"
                  : "bg-card"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-4 py-2 rounded-bl-lg z-10">
                  MOST POPULAR
                </div>
              )}

              <CardContent className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold gradient-text">
                      {plan.currency}{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      /{plan.period}
                    </span>
                  </div>
                  {isYearly && (
                    <div className="text-xs text-accent mt-2">
                      Billed annually (${plan.yearlyPrice * 12}/year)
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 text-sm ${
                        feature.included
                          ? 'text-muted-foreground'
                          : 'text-muted-foreground/50'
                      }`}
                    >
                      {feature.included ? (
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant={plan.highlight ? "gradient" : "outline"}
                  size="lg"
                  className="w-full group/btn"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Feature Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-2xl font-bold text-center mb-8">
          Compare All Features
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold">Feature</th>
                <th className="text-center py-4 px-4 font-semibold">Starter</th>
                <th className="text-center py-4 px-4 font-semibold text-primary">Professional</th>
                <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "AI Chatbot Conversations", starter: "500/mo", professional: "5,000/mo", enterprise: "Unlimited" },
                { feature: "Website Integration", starter: "Basic", professional: "Advanced", enterprise: "Full" },
                { feature: "Support", starter: "Email", professional: "Priority", enterprise: "24/7 Dedicated" },
                { feature: "Custom AI Agents", starter: "—", professional: "✓", enterprise: "Multiple" },
                { feature: "Multi-Platform", starter: "—", professional: "✓", enterprise: "✓" },
                { feature: "Custom AI Training", starter: "—", professional: "—", enterprise: "✓" },
                { feature: "SLA Guarantee", starter: "—", professional: "—", enterprise: "✓" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-4 px-4 text-sm text-muted-foreground">{row.feature}</td>
                  <td className="py-4 px-4 text-center text-sm">{row.starter}</td>
                  <td className="py-4 px-4 text-center text-sm font-medium text-primary">{row.professional}</td>
                  <td className="py-4 px-4 text-center text-sm">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
          Not sure which plan is right for you?
        </p>
        <Button variant="outline" size="lg">
          Schedule a Free Consultation
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </Section>
  );
}
