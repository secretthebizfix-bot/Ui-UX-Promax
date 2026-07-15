"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PricingTiers } from "@/components/ui/PricingTiers";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export function PricingExplorer({ defaultSlug }: { defaultSlug?: string }) {
  const [activeSlug, setActiveSlug] = useState(
    defaultSlug ?? services[0].slug
  );
  const [annual, setAnnual] = useState(false);
  const active = services.find((s) => s.slug === activeSlug) ?? services[0];

  return (
    <div>
      {/* Service tabs */}
      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {services.map((s) => (
          <button
            key={s.slug}
            onClick={() => setActiveSlug(s.slug)}
            className={cn(
              "relative shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-colors",
              activeSlug === s.slug
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {activeSlug === s.slug && (
              <motion.span
                layoutId="pricing-tab"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-600 to-cyanic shadow-glow"
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
              />
            )}
            <span className="inline-flex items-center gap-2">
              <s.icon className="h-4 w-4" />
              {s.title}
            </span>
          </button>
        ))}
      </div>

      {/* Billing toggle */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <span
          className={cn(
            "text-sm font-medium",
            !annual ? "text-foreground" : "text-muted-foreground"
          )}
        >
          Monthly
        </span>
        <button
          role="switch"
          aria-checked={annual}
          aria-label="Toggle annual billing"
          onClick={() => setAnnual((v) => !v)}
          className={cn(
            "relative h-7 w-12 rounded-full transition-colors",
            annual ? "bg-gradient-to-r from-brand-600 to-cyanic" : "bg-muted"
          )}
        >
          <motion.span
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={cn(
              "absolute top-1 h-5 w-5 rounded-full bg-white shadow",
              annual ? "left-6" : "left-1"
            )}
          />
        </button>
        <span
          className={cn(
            "text-sm font-medium",
            annual ? "text-foreground" : "text-muted-foreground"
          )}
        >
          Annual
          <span className="ml-2 rounded-full bg-teal/10 px-2 py-0.5 text-xs font-semibold text-teal">
            Save 20%
          </span>
        </span>
      </div>

      {/* Tiers */}
      <div className="mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <h3 className="text-2xl font-bold text-foreground">
                {active.title} Plans
              </h3>
              <p className="mt-2 text-muted-foreground">{active.short}</p>
            </div>
            <PricingTiers service={active} annual={annual} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
