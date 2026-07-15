"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { portfolio, portfolioCategories } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/section-heading";

const matches = (category: string, filter: string) =>
  filter === "All" || category.toLowerCase().includes(filter.toLowerCase());

export function Portfolio() {
  const [filter, setFilter] = useState("All");
  const items = portfolio.filter((item) => matches(item.category, filter));

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="container-px flex flex-col gap-12">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Real businesses, <span className="text-gradient">real results</span>
            </>
          }
          description="A snapshot of the growth we've driven for local businesses — from map-pack domination to conversion-first websites."
        />

        <div className="flex flex-wrap items-center justify-center gap-2">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                filter === category
                  ? "border-transparent bg-gradient-to-r from-secondary to-accent text-white shadow-glow"
                  : "border-border/70 bg-background/50 text-muted-foreground hover:border-secondary/40 hover:text-foreground",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.article
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-premium"
              >
                <div className={cn("relative aspect-[4/3] overflow-hidden bg-gradient-to-br", item.gradient)}>
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="noise absolute inset-0" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl font-bold text-white/90 drop-shadow-lg transition-transform duration-700 ease-premium group-hover:scale-110">
                      {item.metric}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="flex items-center justify-between gap-3 p-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold tracking-tight">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.result}</p>
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all duration-500 group-hover:border-secondary/50 group-hover:text-secondary">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
