"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import type { PlanTier } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  plan: PlanTier;
  billing: "monthly" | "annual";
  accent?: string;
}

export function PricingCard({ plan, billing, accent = "from-secondary to-accent" }: PricingCardProps) {
  const isAnnual = billing === "annual";
  // Annual billing = 2 months free (~17% off) on recurring price.
  const monthly = plan.price.monthly;
  const displayPrice = isAnnual ? Math.round((monthly * 10) / 12) : monthly;
  const featured = plan.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative flex h-full flex-col rounded-3xl border p-7 shadow-premium transition-all duration-500 ease-premium hover:-translate-y-1.5",
        featured
          ? "gradient-border border-transparent bg-card shadow-premium-lg lg:scale-[1.03]"
          : "border-border/70 bg-card/70 hover:shadow-premium-lg",
      )}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-secondary to-accent px-3.5 py-1.5 text-xs font-semibold text-white shadow-glow">
          <Sparkles className="size-3.5" /> Most Popular
        </span>
      )}

      <div className="flex flex-col gap-1.5">
        <h3 className="font-display text-lg font-semibold tracking-tight">{plan.name}</h3>
        <p className="min-h-[40px] text-sm text-muted-foreground">{plan.description}</p>
      </div>

      <div className="mt-5 flex items-end gap-1">
        <span className="font-display text-4xl font-bold tabular-nums tracking-tight">
          ${displayPrice.toLocaleString()}
        </span>
        <span className="mb-1 text-sm text-muted-foreground">{plan.cadence}</span>
      </div>
      {plan.price.oneTime ? (
        <p className="mt-1 text-xs text-muted-foreground">
          from ${plan.price.oneTime.toLocaleString()} one-time build
        </p>
      ) : (
        <p className="mt-1 text-xs text-muted-foreground">
          {isAnnual ? "billed annually · 2 months free" : "billed monthly · cancel anytime"}
        </p>
      )}

      <div className="my-6 h-px bg-border/70" />

      <ul className="flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <span
              className={cn(
                "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white",
                featured ? accent : "from-secondary/80 to-accent/80",
              )}
            >
              <Check className="size-3" strokeWidth={3} />
            </span>
            <span className="text-foreground/85">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={featured ? "primary" : "outline"}
        shimmer={featured}
        className="mt-7 w-full"
      >
        <Link href="/contact">
          Get Started
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    </motion.div>
  );
}
