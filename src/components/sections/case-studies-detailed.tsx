"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  X,
  CheckCircle,
  Wrench,
  TrendingUp,
  AlertCircle,
  Clock,
  Users,
  Quote,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies, caseStudyCategories } from "@/config/case-studies";

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

interface CaseStudyModalProps {
  caseStudy: (typeof caseStudies)[0];
  onClose: () => void;
}

function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "challenge" | "solution" | "results">("overview");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-background max-w-5xl w-full my-8 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className={`relative h-40 bg-gradient-to-r ${caseStudy.color} p-8`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{caseStudy.client.logo}</span>
            <div>
              <h3 className="text-white font-semibold text-lg">{caseStudy.client.name}</h3>
              <p className="text-white/80 text-sm">
                {caseStudy.client.industry} • {caseStudy.client.size}
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white max-w-2xl">
            {caseStudy.title}
          </h2>
        </div>

        {/* Tabs */}
        <div className="border-b border-border">
          <div className="flex overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "challenge", label: "Challenge" },
              { id: "solution", label: "Solution" },
              { id: "results", label: "Results" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {caseStudy.subtitle}
                  </p>
                </div>

                {/* Client Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="text-sm text-muted-foreground mb-1">Industry</div>
                    <div className="font-semibold">{caseStudy.client.industry}</div>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="text-sm text-muted-foreground mb-1">Company Size</div>
                    <div className="font-semibold">{caseStudy.client.size}</div>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="text-sm text-muted-foreground mb-1">Location</div>
                    <div className="font-semibold">{caseStudy.client.location}</div>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                    <div className="font-semibold">{caseStudy.solution.timeline}</div>
                  </div>
                </div>

                {/* Quick Metrics Preview */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {caseStudy.results.metrics.slice(0, 6).map((metric, i) => (
                      <div key={i} className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4">
                        <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                        <div className="text-sm font-medium mb-1">{metric.label}</div>
                        <div className="text-xs text-muted-foreground">{metric.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Used */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {caseStudy.tools.map((tool, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2"
                      >
                        <span className="text-xl">{tool.icon}</span>
                        <div>
                          <div className="font-medium text-sm">{tool.name}</div>
                          <div className="text-xs text-muted-foreground">{tool.category}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "challenge" && (
              <motion.div
                key="challenge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-3">{caseStudy.challenge.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {caseStudy.challenge.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    Key Pain Points
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {caseStudy.challenge.painPoints.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4"
                      >
                        <X className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "solution" && (
              <motion.div
                key="solution"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-3">{caseStudy.solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {caseStudy.solution.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-primary" />
                    Our Approach
                  </h4>
                  <div className="space-y-3">
                    {caseStudy.solution.approach.map((step, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-primary/5 rounded-lg p-4"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Timeline</span>
                    </div>
                    <div className="text-lg font-semibold">{caseStudy.solution.timeline}</div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Team Size</span>
                    </div>
                    <div className="text-lg font-semibold">{caseStudy.solution.teamSize}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Tools Implemented</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {caseStudy.tools.map((tool, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-card border border-border rounded-lg p-3"
                      >
                        <span className="text-2xl">{tool.icon}</span>
                        <div>
                          <div className="font-medium text-sm">{tool.name}</div>
                          <div className="text-xs text-muted-foreground">{tool.category}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "results" && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-3">{caseStudy.results.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {caseStudy.results.summary}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    Key Metrics
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {caseStudy.results.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-5"
                      >
                        <div className="text-3xl font-bold text-accent mb-2">{metric.value}</div>
                        <div className="font-semibold mb-1">{metric.label}</div>
                        <div className="text-sm text-muted-foreground">{metric.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <blockquote className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                    &ldquo;{caseStudy.results.testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                      {caseStudy.results.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{caseStudy.results.testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {caseStudy.results.testimonial.role}, {caseStudy.results.testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-border bg-muted/30 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Interested in similar results for your business?
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button variant="gradient">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CaseStudiesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<(typeof caseStudies)[0] | null>(null);

  const getFilteredCaseStudies = () => {
    const category = caseStudyCategories.find((cat) => cat.name === selectedCategory);
    if (category && category.name !== "All") {
      return caseStudies.filter(category.filter);
    }
    return caseStudies;
  };

  const displayedCaseStudies = getFilteredCaseStudies();

  return (
    <>
      <section className="py-20 md:py-28 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Case Studies
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Results for{" "}
              <span className="gradient-text">Real Businesses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we&apos;ve helped companies transform their sales operations
              and drive measurable growth.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {caseStudyCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-primary text-white shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {displayedCaseStudies.map((caseStudy) => (
              <motion.div key={caseStudy.id} variants={cardVariants}>
                <div
                  onClick={() => setSelectedCaseStudy(caseStudy)}
                  className="group cursor-pointer bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-500"
                >
                  {/* Card Header with Gradient */}
                  <div className={`h-3 bg-gradient-to-r ${caseStudy.color}`} />

                  <div className="p-8">
                    {/* Client Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{caseStudy.client.logo}</span>
                      <div>
                        <h3 className="font-semibold">{caseStudy.client.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {caseStudy.client.industry}
                        </p>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {caseStudy.title}
                    </h4>

                    {/* Subtitle */}
                    <p className="text-muted-foreground mb-6 line-clamp-2">
                      {caseStudy.subtitle}
                    </p>

                    {/* Key Metrics Preview */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {caseStudy.results.metrics.slice(0, 3).map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg font-bold text-primary">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tools Preview */}
                    <div className="flex items-center gap-2 mb-6 pb-6 border-b border-border">
                      <span className="text-xs text-muted-foreground">Tools:</span>
                      <div className="flex gap-1">
                        {caseStudy.tools.slice(0, 4).map((tool, i) => (
                          <span key={i} className="text-lg" title={tool.name}>
                            {tool.icon}
                          </span>
                        ))}
                        {caseStudy.tools.length > 4 && (
                          <span className="text-xs text-muted-foreground">
                            +{caseStudy.tools.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      className="w-full group/btn"
                    >
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-4">
              Want to see more success stories?
            </p>
            <Button variant="outline" size="lg">
              View All Case Studies
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <CaseStudyModal
            caseStudy={selectedCaseStudy}
            onClose={() => setSelectedCaseStudy(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
