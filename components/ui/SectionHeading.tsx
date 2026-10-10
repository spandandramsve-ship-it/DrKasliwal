import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: React.ReactNode;
  /** Small tracked capitals above the heading (plan's "eyebrow") */
  eyebrow?: string;
  intro?: React.ReactNode;
  align?: "left" | "center";
  /** Use on navy backgrounds */
  tone?: "default" | "light";
  as?: "h1" | "h2";
  id?: string;
  /** Optional element (usually a Button) placed beside the heading on desktop */
  action?: React.ReactNode;
  className?: string;
}

/** Small pill label above a heading */
export function Eyebrow({ children, tone = "default", className }: { children: React.ReactNode; tone?: "default" | "light"; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em]",
        tone === "light" ? "bg-white/10 text-gold-light ring-1 ring-white/20" : "bg-sand text-gold ring-1 ring-sand-border",
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", tone === "light" ? "bg-gold-light" : "bg-gold")} aria-hidden="true" />
      {children}
    </p>
  );
}

export default function SectionHeading({
  title,
  eyebrow,
  intro,
  align = "left",
  tone = "default",
  as: Tag = "h2",
  id,
  action,
  className,
}: SectionHeadingProps) {
  const light = tone === "light";
  const heading = (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Eyebrow tone={tone} className="mb-3">{eyebrow}</Eyebrow>}
      <Tag
        id={id}
        className={cn(
          "font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p className={cn("mt-4 text-lg leading-relaxed", light ? "text-slate-200" : "text-slate-600")}>
          {intro}
        </p>
      )}
    </div>
  );

  if (!action) return <div className={cn("mb-10 sm:mb-12", className)}>{heading}</div>;

  return (
    <div className={cn("mb-10 flex flex-col gap-6 sm:mb-12 md:flex-row md:items-end md:justify-between", className)}>
      {heading}
      <div className="shrink-0">{action}</div>
    </div>
  );
}
