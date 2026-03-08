"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles, Zap, TrendingUp, Users } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function AITestimonialsSection() {
  return (
    <Section id="testimonials" background="default">
      <SectionHeader
        title="Why Work With Me?"
        subtitle="I'm a dedicated AI automation developer looking for my first clients. This means you get premium attention, personalized service, and competitive rates."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* Card 1: Personalized Attention */}
        <motion.div key={1} variants={cardVariants}>
          <div className="h-full bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300 relative overflow-hidden group">
            <Quote className="absolute top-4 right-4 w-12 h-12 text-muted-foreground/10 group-hover:text-primary/10 transition-colors" />
            <div className="flex space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <blockquote className="text-muted-foreground mb-8 leading-relaxed relative z-10">
              &ldquo;As my first client, you&apos;ll get my undivided attention. Every detail matters, every feature is polished, and I&apos;m committed to delivering exceptional results that build my reputation.&rdquo;
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">Personalized Attention</div>
                <div className="text-sm text-muted-foreground">Your project is my priority</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Premium Quality */}
        <motion.div key={2} variants={cardVariants}>
          <div className="h-full bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300 relative overflow-hidden group">
            <Quote className="absolute top-4 right-4 w-12 h-12 text-muted-foreground/10 group-hover:text-primary/10 transition-colors" />
            <div className="flex space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <blockquote className="text-muted-foreground mb-8 leading-relaxed relative z-10">
              &ldquo;I build every project as if it were my own business. Clean code, modern design, and AI solutions that actually deliver results for your business.&rdquo;
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">Premium Quality</div>
                <div className="text-sm text-muted-foreground">Built to impress</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Great Value */}
        <motion.div key={3} variants={cardVariants}>
          <div className="h-full bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300 relative overflow-hidden group">
            <Quote className="absolute top-4 right-4 w-12 h-12 text-muted-foreground/10 group-hover:text-primary/10 transition-colors" />
            <div className="flex space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <blockquote className="text-muted-foreground mb-8 leading-relaxed relative z-10">
              &ldquo;My first clients get special introductory rates. You get agency-quality work at freelance prices while I build my portfolio and reputation.&rdquo;
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">Great Value</div>
                <div className="text-sm text-muted-foreground">Introductory rates</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
      >
        {[
          { icon: Users, value: "50+", label: "AI Projects in Portfolio" },
          { icon: Zap, value: "24/7", label: "Availability" },
          { icon: TrendingUp, value: "100%", label: "Dedication" },
          { icon: Sparkles, value: "Custom", label: "Solutions" },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center"
            >
              <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Button variant="gradient" size="lg">
          Let&apos;s Work Together
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </Section>
  );
}
