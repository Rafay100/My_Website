"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function CTASection() {
  return (
    <Section className="py-24">
      <div className="relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl -z-10" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden -z-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="py-16 md:py-24 px-8 md:px-16 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Headline */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Transform Your CRM?
            </h2>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let&apos;s discuss how we can help you scale your business with a
              CRM system that works as hard as you do.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="secondary"
                size="xl"
                className="group bg-white text-primary hover:bg-white/90"
              >
                📅 Book Free Strategy Call
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Alternative Contact */}
            <div className="mt-8 flex items-center justify-center space-x-2 text-white/70">
              <Mail className="w-4 h-4" />
              <span>Or send us a message at</span>
              <a
                href="mailto:hello@crmflow.io"
                className="text-white font-semibold hover:underline"
              >
                hello@crmflow.io
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
