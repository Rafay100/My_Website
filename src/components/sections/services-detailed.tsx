"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Bot,
  Globe,
  Layout,
  Check,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
  X,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/config/services";

const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  Bot,
  Globe,
  Layout,
  Sparkles,
};

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

interface ServiceCardProps {
  service: (typeof services)[0];
  onSelect: (service: (typeof services)[0]) => void;
}

function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <motion.div variants={cardVariants} layout>
      <Card className="group h-full overflow-hidden border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500">
        {/* Gradient Header */}
        <div
          className={`h-2 bg-gradient-to-r ${service.color}`}
        />

        <CardContent className="p-8">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            {service.title}
          </h3>

          {/* Short Description */}
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Features Preview */}
          <ul className="space-y-3 mb-8">
            {service.features.slice(0, 4).map((feature, i) => (
              <li
                key={i}
                className="flex items-start text-sm text-muted-foreground"
              >
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
            {service.features.length > 4 && (
              <li className="text-sm text-primary font-medium">
                +{service.features.length - 4} more features
              </li>
            )}
          </ul>

          {/* Timeline & Price */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {service.timeline}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <DollarSign className="w-4 h-4" />
              From {service.startingPrice}
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => onSelect(service)}
            variant="outline"
            className="w-full group/btn"
            size="lg"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface ServiceModalProps {
  service: (typeof services)[0] | null;
  onClose: () => void;
}

function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  const Icon = iconMap[service.icon];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-background max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        >
          {/* Header */}
          <div className={`relative h-32 bg-gradient-to-r ${service.color} p-8`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="absolute -bottom-8 left-8">
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl`}
              >
                <Icon className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-12 pb-8 px-8">
            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {service.fullDescription}
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-muted/50 rounded-xl p-4">
                <Clock className="w-5 h-5 text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Timeline</div>
                <div className="font-semibold">{service.timeline}</div>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <DollarSign className="w-5 h-5 text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Starting At</div>
                <div className="font-semibold">{service.startingPrice}</div>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <Users className="w-5 h-5 text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Ideal For</div>
                <div className="font-semibold text-sm">
                  {service.idealFor.split(" ").slice(0, 6).join(" ")}...
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">What&apos;s Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4"
                  >
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Deliverables</h3>
              <ul className="space-y-2">
                {service.deliverables.map((deliverable, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
              <Button variant="gradient" size="lg" className="flex-1">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

  return (
    <>
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our AI Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Solutions That{" "}
              <span className="gradient-text">Transform Your Business</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From intelligent chatbots to complete AI automation, we build AI
              solutions that drive real business results.
            </p>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                onSelect={setSelectedService}
              />
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-4">
              Not sure which service is right for you?
            </p>
            <Button variant="outline" size="lg">
              Schedule a Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
}
