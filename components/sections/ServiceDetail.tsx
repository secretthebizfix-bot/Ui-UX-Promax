"use client";

import { motion } from "framer-motion";
import { FiCheck, FiArrowRight, FiZap } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { getService } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const accentBg = {
  brand: "from-brand-600/15 to-brand-500/5",
  cyan: "from-cyanic/15 to-cyanic-light/5",
  teal: "from-teal/15 to-teal-light/5",
} as const;

const accentIcon = {
  brand: "from-brand-600 to-brand-500 shadow-glow",
  cyan: "from-cyanic to-cyanic-light shadow-glow-cyan",
  teal: "from-teal to-teal-light shadow-glow-teal",
} as const;

export function ServiceDetail({
  slug,
  index,
}: {
  slug: string;
  index: number;
}) {
  const service = getService(slug);
  if (!service) return null;
  const reversed = index % 2 === 1;
  const Icon = service.icon;

  return (
    <section
      id={service.slug}
      className="section scroll-mt-24 border-t border-border/60 first:border-t-0"
    >
      <div className="container-xl">
        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-2",
            reversed && "lg:[direction:rtl]"
          )}
        >
          {/* Copy */}
          <div className="lg:[direction:ltr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className={cn(
                  "inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white",
                  accentIcon[service.accent]
                )}
              >
                <Icon className="h-7 w-7" />
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href={`/pricing#${service.slug}`}>
                  View pricing
                  <FiArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/contact" variant="outline">
                  Talk to us
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Benefits card */}
          <div className="lg:[direction:ltr]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "relative overflow-hidden rounded-[2rem] bg-gradient-to-br p-8 shadow-soft-lg sm:p-10",
                accentBg[service.accent]
              )}
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-gradient opacity-20 blur-3xl" />
              <div className="glass-strong relative rounded-3xl p-7">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  <FiZap className="h-5 w-5 text-brand-600 dark:text-cyanic" />
                  Key Benefits
                </h3>
                <ul className="mt-5 space-y-4">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-cyanic text-white">
                        <FiCheck className="h-3.5 w-3.5" />
                      </span>
                      <span className="font-medium text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl border border-border bg-card/50 p-4">
                  <p className="text-sm text-muted-foreground">Plans starting at</p>
                  <p className="text-2xl font-bold text-gradient">
                    ${Math.min(...service.tiers.map((t) => t.price)).toLocaleString()}
                    <span className="text-sm font-medium text-muted-foreground">
                      {" "}
                      {service.tiers[0].period.includes("mo") ? "/mo" : ""}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
