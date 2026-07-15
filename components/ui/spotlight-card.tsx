"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
}

/**
 * A glass card with a cursor-following radial spotlight and subtle
 * 3D tilt on hover. Pure CSS variables — no re-renders on mouse move.
 */
export function SpotlightCard({
  className,
  children,
  spotlightColor = "hsl(var(--accent) / 0.18)",
  ...props
}: SpotlightCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
    const rx = ((y - rect.height / 2) / rect.height) * -6;
    const ry = ((x - rect.width / 2) / rect.width) * 6;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ "--spotlight": spotlightColor } as React.CSSProperties}
      className={cn(
        "group/spot relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-premium transition-transform duration-300 ease-premium [transform:perspective(1000px)_rotateX(var(--rx,0))_rotateY(var(--ry,0))]",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--x) var(--y), var(--spotlight), transparent 65%)",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
