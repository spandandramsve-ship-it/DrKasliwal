import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Makes the whole card a link (keeps a single tab stop) */
  href?: string;
  tone?: "white" | "sand" | "ice" | "navy";
}

// Soft surfaces: generous radius + shadow instead of hard borders
const toneStyles = {
  white: "bg-white shadow-soft ring-1 ring-navy/5",
  sand: "bg-gradient-to-b from-sand-light to-white shadow-soft ring-1 ring-sand-border/60",
  ice: "bg-gradient-to-b from-ice-blue to-white shadow-soft ring-1 ring-navy/5",
  navy: "bg-navy text-white shadow-lift",
};

export default function Card({ children, className, href, tone = "white" }: CardProps) {
  const classes = cn("flex flex-col rounded-2xl sm:rounded-3xl p-5 sm:p-8", toneStyles[tone], className);

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          classes,
          "group transition-all duration-300 hover:-translate-y-1 hover:shadow-lift motion-reduce:transform-none"
        )}
      >
        {children}
      </Link>
    );
  }
  return <div className={classes}>{children}</div>;
}
