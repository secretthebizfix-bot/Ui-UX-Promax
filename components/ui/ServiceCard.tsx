"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import type { Service } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const accentMap = {
  brand: {
    icon: "from-brand-600 to-brand-500",
    glow: "group-hover:shadow-glow",
    text: "text-brand-600 dark:text-brand-400",
  },
  cyan: {
    icon: "from-cyanic to-cyanic-light",
    glow: "group-hover:shadow-glow-cyan",
    text: "text-cyanic-dark dark:text-cyanic-light",
  },
  teal: {
    icon: "from-teal to-teal-light",
    glow: "group-hover:shadow-glow-teal",
    text: "text-teal-dark dark:text-teal-light",
  },
} as const;

export function ServiceCard({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  const accent = accentMap[service.accent];
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="perspective h-full"
    >
      <Link
        href={`/services#${service.slug}`}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/70 p-8 shadow-soft backdrop-blur-xl transition-shadow duration-500",
          accent.glow
        )}
      >
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15" />

        <div style={{ transform: "translateZ(40px)" }}>
          <span
            className={cn(
              "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg",
              accent.icon
            )}
          >
            <Icon className="h-7 w-7" />
          </span>
        </div>

        <h3 className="mt-6 text-xl font-semibold text-foreground">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
          {service.short}
        </p>

        <ul className="mt-6 space-y-2.5">
          {service.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm">
              <FiCheck className={cn("mt-0.5 h-4 w-4 shrink-0", accent.text)} />
              <span className="text-muted-foreground">{f}</span>
            </li>
          ))}
        </ul>

        <span
          className={cn(
            "mt-7 inline-flex items-center gap-1.5 text-sm font-semibold",
            accent.text
          )}
        >
          Explore plans
          <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </motion.div>
  );
}
