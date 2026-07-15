import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "glass";
}

export function Badge({ className, variant = "glass", ...props }: BadgeProps) {
  const styles = {
    default: "bg-secondary/10 text-secondary border-secondary/20",
    outline: "border-border text-muted-foreground",
    glass: "glass text-foreground/80",
  } as const;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide",
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}
