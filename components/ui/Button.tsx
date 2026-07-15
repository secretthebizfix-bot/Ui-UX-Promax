"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand-600 to-cyanic text-white shadow-glow hover:shadow-glow-cyan hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "glass-strong text-foreground hover:-translate-y-0.5 hover:shadow-soft",
  outline:
    "border border-border bg-transparent text-foreground hover:border-brand-600/50 hover:bg-brand-600/5 hover:-translate-y-0.5",
  ghost: "text-foreground hover:bg-muted",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonAsButton | ButtonAsLink
>(function Button(props, ref) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  const shine =
    variant === "primary" ? (
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute -inset-x-10 -top-1 h-full -translate-x-full skew-x-[-20deg] bg-white/25 transition-transform duration-700 group-hover:translate-x-[220%]" />
      </span>
    ) : null;

  if ("href" in props && props.href !== undefined) {
    const { href, external } = props;
    const rel = external ? "noopener noreferrer" : undefined;
    const targetProps = external ? { target: "_blank", rel } : {};
    return (
      <Link href={href} className={classes} {...targetProps}>
        {shine}
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;

  return (
    <button ref={ref} className={classes} {...rest}>
      {shine}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </button>
  );
});
