import React from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";

type Tone = "white" | "ice" | "sand" | "navy" | "mist";

const toneStyles: Record<Tone, string> = {
  white: "bg-white",
  ice: "bg-gradient-to-b from-ice-blue/70 to-white",
  sand: "bg-gradient-to-b from-sand-light to-sand/60",
  mist: "bg-gradient-to-br from-white via-ice-blue/40 to-sand-light",
  navy: "bg-navy text-white",
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  /** Container width */
  width?: "sm" | "md" | "lg" | "xl" | "full";
  /** Soft blurred colour shapes in the background */
  decor?: boolean;
  children: React.ReactNode;
}

/** Standard page band: background tone + vertical rhythm + centred container. */
export default function Section({
  tone = "white",
  size = "lg",
  width = "lg",
  decor = false,
  className,
  children,
  ...props
}: SectionProps) {
  const padding = { sm: "py-10 sm:py-12", md: "py-14 sm:py-16", lg: "py-16 sm:py-24" }[size];
  return (
    <section className={cn("relative overflow-hidden", toneStyles[tone], padding, className)} {...props}>
      {decor && <Blobs />}
      <Container size={width} className="relative" data-reveal>
        {children}
      </Container>
    </section>
  );
}

export function Blobs({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-clinical-blue/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
    </div>
  );
}

/** Curved divider placed at the top or bottom edge of a section. `fill` should match the neighbouring section. */
export function Wave({ fill = "#ffffff", flip = false, className }: { fill?: string; flip?: boolean; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={cn("block h-10 w-full sm:h-16", flip && "rotate-180", className)}
    >
      <path fill={fill} d="M0,40 C240,80 480,0 720,24 C960,48 1200,80 1440,32 L1440,80 L0,80 Z" />
    </svg>
  );
}
