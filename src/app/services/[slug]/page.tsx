import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  MessageSquare,
  Bot,
  Globe,
  Layout,
  Check,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/config/services";

const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  Bot,
  Globe,
  Layout,
};

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | CRMFlow`,
    description: service.fullDescription,
    openGraph: {
      title: `${service.title} | CRMFlow`,
      description: service.fullDescription,
      type: "website",
    },
  };
}

export default function ServicePage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`relative py-24 md:py-32 overflow-hidden`}>
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Icon className="w-4 h-4" />
              {service.title}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="gradient" size="lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Timeline</h3>
              <p className="text-3xl font-bold text-primary">{service.timeline}</p>
              <p className="text-sm text-muted-foreground mt-1">
                From kickoff to completion
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <DollarSign className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Starting At</h3>
              <p className="text-3xl font-bold text-primary">{service.startingPrice}</p>
              <p className="text-sm text-muted-foreground mt-1">
                Custom pricing based on scope
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Ideal For</h3>
              <p className="text-lg font-medium">{service.idealFor}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results that impact your bottom line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{benefit}</h3>
                  <p className="text-sm text-muted-foreground">
                    Measurable impact on your business performance
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What&apos;s Included
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for success, all in one package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border"
              >
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Deliverables
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tangible outcomes you can expect from our engagement.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {service.deliverables.map((deliverable, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-lg font-medium">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r ${service.color}`}>
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your {service.title}?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl">
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
