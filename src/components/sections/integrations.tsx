"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { integrations } from "@/config/site";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function IntegrationsSection() {
  return (
    <Section id="integrations" background="default">
      <SectionHeader
        title="Integrations That Connect Your Stack"
        subtitle="Seamlessly connect your CRM with 100+ tools you already use"
      />

      {/* Integration Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
      >
        {integrations.map((integration, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-4xl mb-4"
              >
                {integration.logo}
              </motion.div>

              {/* Name */}
              <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                {integration.name}
              </h3>

              {/* Category Badge */}
              <span className="inline-block text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full mb-3">
                {integration.category}
              </span>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {integration.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-12"
      >
        <p className="text-muted-foreground mb-2">
          Don&apos;t see your tool? We build custom integrations.
        </p>
        <a
          href="#contact"
          className="text-primary font-semibold hover:underline inline-flex items-center"
        >
          Request an Integration
        </a>
      </motion.div>
    </Section>
  );
}
