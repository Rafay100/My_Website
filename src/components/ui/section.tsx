import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "muted" | "gradient";
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, id, background = "default", children, ...props }, ref) => {
    const bgStyles = {
      default: "bg-background",
      muted: "bg-muted/50",
      gradient: "bg-gradient-to-b from-muted/50 to-background",
    };

    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          "py-20 md:py-28 lg:py-32",
          bgStyles[background],
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {children}
        </div>
      </section>
    );
  }
);
Section.displayName = "Section";

const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    subtitle?: string;
    align?: "left" | "center" | "right";
  }
>(({ className, title, subtitle, align = "center", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mb-12 md:mb-16",
      align === "center" && "text-center",
      align === "left" && "text-left",
      align === "right" && "text-right",
      className
    )}
    {...props}
  >
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
));
SectionHeader.displayName = "SectionHeader";

export { Section, SectionHeader };
