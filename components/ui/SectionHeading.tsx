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
  /** When align="center", position the action button on the right flank on desktop or bottom */
  actionPosition?: "bottom" | "right";
  className?: string;
}

/** Refined editorial kicker above a heading (no AI-style pills or dots) */
export function Eyebrow({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "light";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className={cn("h-px w-5", light ? "bg-gold-light/60" : "bg-gold")}
      />
      <span
        className={cn(
          "text-xs font-bold uppercase tracking-[0.22em]",
          light ? "text-gold-light" : "text-clinical-blue"
        )}
      >
        {children}
      </span>
    </div>
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
  actionPosition = "right",
  className,
}: SectionHeadingProps) {
  const light = tone === "light";
  const isCenter = align === "center";

  const heading = (
    <div className={cn("max-w-3xl", isCenter && (action && actionPosition === "right" ? "mx-auto text-center max-w-2xl" : "mx-auto text-center"))}>
      {eyebrow && (
        <div className={cn(isCenter && "flex justify-center")}>
          <Eyebrow tone={tone} className="mb-3">
            {eyebrow}
          </Eyebrow>
        </div>
      )}
      <Tag
        id={id}
        className={cn(
          "font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p className={cn("mt-3 text-base sm:text-lg leading-relaxed", light ? "text-slate-200" : "text-slate-600")}>
          {intro}
        </p>
      )}
    </div>
  );

  if (isCenter) {
    if (action && actionPosition === "right") {
      return (
        <div className={cn("mb-8 sm:mb-10 text-center", className)}>
          {eyebrow && (
            <div className="flex justify-center mb-2.5 sm:mb-3">
              <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
            </div>
          )}
          <div className="relative">
            <div className="max-w-2xl mx-auto text-center">
              <Tag
                id={id}
                className={cn(
                  "font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight",
                  light ? "text-white" : "text-navy"
                )}
              >
                {title}
              </Tag>
              {intro && (
                <p className={cn("mt-2 text-base sm:text-lg leading-relaxed", light ? "text-slate-200" : "text-slate-600")}>
                  {intro}
                </p>
              )}
            </div>
            <div className="mt-3 flex justify-center md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:mt-0">
              {action}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={cn("relative mb-8 sm:mb-10 text-center", className)}>
        {heading}
        {action && (
          <div className="mt-3 sm:mt-3.5 flex justify-center">
            {action}
          </div>
        )}
      </div>
    );
  }

  if (!action) return <div className={cn("mb-10 sm:mb-12", className)}>{heading}</div>;

  return (
    <div className={cn("mb-10 flex flex-col gap-6 sm:mb-12 md:flex-row md:items-end md:justify-between", className)}>
      {heading}
      <div className="shrink-0">{action}</div>
    </div>
  );
}
