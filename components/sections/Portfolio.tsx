"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiTrendingUp } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/lib/data/content";
import { cn } from "@/lib/utils";

const filters = ["All", "Website", "Branding", "SEO", "Ads", "Social"] as const;
type Filter = (typeof filters)[number];

export function Portfolio() {
  const [active, setActive] = useState<Filter>("All");
  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section relative">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Real work, <span className="text-gradient">real results</span>
            </>
          }
          description="A snapshot of the measurable growth we've driven for local businesses just like yours."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
                active === f
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {active === f && (
                <motion.span
                  layoutId="portfolio-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-600 to-cyanic shadow-glow"
                  transition={{ type: "spring", stiffness: 300, damping: 26 }}
                />
              )}
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <PortfolioCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-border shadow-soft"
    >
      <div
        className={cn(
          "relative flex h-56 items-end bg-gradient-to-br p-6",
          project.gradient
        )}
      >
        <div className="absolute inset-0 bg-grid-dark bg-[size:32px_32px] opacity-30" />
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
          <FiArrowUpRight className="h-5 w-5" />
        </div>
        <div className="relative">
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {project.category}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 bg-card p-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-teal">
            <FiTrendingUp className="h-4 w-4" />
            {project.result}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
