import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "navy" | "light" | "outline" | "outline-light" | "whatsapp" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  /** Shows a trailing → (plan §2: primary buttons carry an arrow) */
  arrow?: boolean;
}

type LinkButtonProps = BaseProps & { href: string; external?: boolean };
type NativeButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

// All sizes meet the 44px minimum tap target (plan §13.2)
const sizeStyles: Record<Size, string> = {
  sm: "min-h-11 px-4 text-sm",
  md: "min-h-12 px-5 text-base",
  lg: "min-h-13 px-7 text-base sm:text-lg",
};

const variantStyles: Record<Variant, string> = {
  primary: "bg-clinical-blue text-white shadow-glow hover:-translate-y-0.5 hover:bg-navy",
  navy: "bg-navy text-white shadow-soft hover:-translate-y-0.5 hover:bg-clinical-blue",
  light: "bg-white text-navy shadow-soft hover:-translate-y-0.5 hover:bg-sand",
  outline: "border-2 border-navy/15 bg-white text-navy hover:border-clinical-blue hover:text-clinical-blue",
  "outline-light": "border-2 border-white/40 text-white hover:bg-white hover:text-navy",
  whatsapp: "bg-whatsapp text-white shadow-soft hover:-translate-y-0.5 hover:bg-whatsapp-hover",
  ghost: "text-clinical-blue hover:text-navy underline-offset-4 hover:underline",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full text-center font-semibold transition-all duration-200 sm:whitespace-nowrap motion-reduce:transform-none",
    "disabled:pointer-events-none disabled:opacity-50",
    variant !== "ghost" && sizeStyles[size],
    variant === "ghost" && "min-h-11",
    variantStyles[variant],
    className
  );
}

/**
 * Renders a Next <Link> for internal hrefs, an <a> for tel:/mailto:/http(s) hrefs,
 * and a <button> when no href is given.
 */
export default function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", size = "md", className, children, arrow } = props;
  const classes = buttonClasses(variant, size, className);
  const content = (
    <>
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </>
  );

  if (props.href !== undefined) {
    const { href, external } = props;
    const isNonRoute = /^(tel:|mailto:|https?:)/.test(href);
    if (isNonRoute) {
      const opensNewTab = external ?? href.startsWith("http");
      return (
        <a
          href={href}
          className={classes}
          {...(opensNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant: _v, size: _s, className: _c, children: _ch, arrow: _a, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
