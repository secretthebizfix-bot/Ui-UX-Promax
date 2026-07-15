"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

// Three.js is client-only and heavy — load it lazily with no SSR.
const HeroScene = dynamic(() => import("./hero-scene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => (
    <div className="flex size-full items-center justify-center">
      <div className="size-64 animate-pulse rounded-full bg-gradient-to-br from-secondary/40 via-accent/30 to-highlight/30 blur-2xl" />
    </div>
  ),
});

export function HeroCanvas({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <HeroScene />
    </div>
  );
}
