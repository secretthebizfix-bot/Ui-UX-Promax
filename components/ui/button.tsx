"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full text-sm font-semibold tracking-tight transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-secondary to-accent text-white shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5",
        solid: "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:opacity-90",
        outline:
          "border border-border bg-background/40 backdrop-blur hover:border-secondary/60 hover:bg-secondary/5",
        glass: "glass text-foreground hover:border-secondary/50 hover:-translate-y-0.5",
        ghost: "hover:bg-muted/60 text-foreground",
        link: "text-secondary underline-offset-4 hover:underline rounded-none px-0",
      },
      size: {
        sm: "h-9 px-4 text-[13px]",
        md: "h-11 px-6",
        lg: "h-14 px-8 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  shimmer?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, shimmer = false, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);

    // Radix Slot requires a single child, so shimmer/overlay only applies to
    // the native <button>. asChild buttons render their child directly.
    if (asChild) {
      return (
        <Slot ref={ref} className={classes} {...props}>
          {children}
        </Slot>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        {shimmer && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-premium group-hover/btn:translate-x-full"
          />
        )}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
