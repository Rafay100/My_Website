"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const companies = [
  { name: "TechStart", logo: "🚀" },
  { name: "GrowthCo", logo: "📈" },
  { name: "ScaleUp", logo: "⚡" },
  { name: "Innovate", logo: "💡" },
  { name: "DigitalFirst", logo: "🌐" },
  { name: "CloudNine", logo: "☁️" },
  { name: "DataFlow", logo: "📊" },
  { name: "AutoMate", logo: "🤖" },
];

export function TrustBarSection() {
  return (
    <Section className="py-12 bg-muted/30">
      <div className="text-center mb-8">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Trusted by Industry Leaders
        </p>
      </div>

      {/* Logo Carousel */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-12 md:gap-20"
          animate={{ x: [0, -500] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Double the logos for seamless loop */}
          {[...companies, ...companies].map((company, index) => (
            <motion.div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 flex items-center space-x-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl">{company.logo}</span>
              <span className="font-semibold text-muted-foreground whitespace-nowrap">
                {company.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </Section>
  );
}
