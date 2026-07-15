"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import { PricingCard } from "@/components/sections/pricing-card";

export function PricingExplorer({ defaultSlug }: { defaultSlug?: string }) {
  const [activeSlug, setActiveSlug] = useState(defaultSlug ?? services[0].slug);
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const active = services.find((s) => s.slug === activeSlug) ?? services[0];

  return (
    <div className="flex flex-col gap-10">
      {/* Service selector */}
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2">
        {services.map((service) => {
          const selected = service.slug === activeSlug;
          return (
            <button
              key={service.slug}
              type="button"
              onClick={() => setActiveSlug(service.slug)}
              className={cn(
                "relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                selected ? "text-white" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {selected && (
                <motion.span
                  layoutId="pricing-tab"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-secondary to-accent shadow-glow"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <service.icon className="size-4" />
              {service.title}
            </button>
          );
        })}
      </div>

      {/* Billing toggle */}
      <div className="flex items-center justify-center gap-4">
        <span className={cn("text-sm font-medium", billing === "monthly" ? "text-foreground" : "text-muted-foreground")}>
          Monthly
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={billing === "annual"}
          aria-label="Toggle annual billing"
          onClick={() => setBilling((b) => (b === "monthly" ? "annual" : "monthly"))}
          className={cn(
            "relative h-7 w-12 rounded-full border border-border/70 transition-colors",
            billing === "annual" ? "bg-gradient-to-r from-secondary to-accent" : "bg-muted",
          )}
        >
          <motion.span
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={cn(
              "absolute top-1/2 size-5 -translate-y-1/2 rounded-full bg-white shadow-sm",
              billing === "annual" ? "right-1" : "left-1",
            )}
          />
        </button>
        <span className={cn("text-sm font-medium", billing === "annual" ? "text-foreground" : "text-muted-foreground")}>
          Annual
          <span className="ml-1.5 rounded-full bg-highlight/15 px-2 py-0.5 text-xs font-semibold text-highlight">
            Save 17%
          </span>
        </span>
      </div>

      {/* Cards */}
      <motion.div
        key={activeSlug}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="grid items-stretch gap-6 lg:grid-cols-3"
      >
        {active.plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} billing={billing} accent={active.accent} />
        ))}
      </motion.div>

      <p className="text-center text-sm text-muted-foreground">
        Need a custom scope or multi-service bundle?{" "}
        <a href="/contact" className="font-medium text-secondary hover:underline">
          Talk to us for tailored pricing →
        </a>
      </p>
    </div>
  );
}
