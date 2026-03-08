"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/config/site";

export function FAQSection() {
  return (
    <Section id="faq" background="muted">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <Accordion items={faqs} />
      </motion.div>
    </Section>
  );
}
