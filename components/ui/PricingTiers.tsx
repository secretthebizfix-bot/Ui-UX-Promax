"use client";

import { motion } from "framer-motion";
import { FiCheck, FiArrowRight, FiStar } from "react-icons/fi";
import Link from "next/link";
import type { Service } from "@/lib/data/services";
import { cn } from "@/lib/utils";

function priceLabel(price: number, period: string, annual: boolean) {
  const isMonthly = period.startsWith("/mo");
  if (!isMonthly) {
    return { amount: `$${price.toLocaleString()}`, sub: period };
  }
  const suffix = period.replace("/mo", "");
  if (annual) {
    const discounted = Math.round(price * 0.8);
    return { amount: `$${discounted.toLocaleString()}`, sub: `/mo${suffix} · billed yearly` };
  }
  return { amount: `$${price.toLocaleString()}`, sub: `/mo${suffix}` };
}

export function PricingTiers({
  service,
  annual = false,
}: {
  service: Service;
  annual?: boolean;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {service.tiers.map((tier, i) => {
        const { amount, sub } = priceLabel(tier.price, tier.period, annual);
        const highlighted = tier.highlighted;
        return (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative flex flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1",
              highlighted
                ? "border-2 border-transparent bg-ink-900 text-white shadow-soft-lg [background:linear-gradient(theme(colors.ink.900),theme(colors.ink.900))_padding-box,linear-gradient(120deg,#2563EB,#06B6D4,#14B8A6)_border-box] lg:-my-2 lg:scale-[1.03]"
                : "border border-border bg-card/60 shadow-soft backdrop-blur-xl"
            )}
          >
            {highlighted && (
              <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-600 to-cyanic px-4 py-1.5 text-xs font-semibold text-white shadow-glow">
                <FiStar className="h-3.5 w-3.5" />
                Most Popular
              </span>
            )}

            <h3
              className={cn(
                "text-lg font-semibold",
                highlighted ? "text-white" : "text-foreground"
              )}
            >
              {tier.name}
            </h3>
            <p
              className={cn(
                "mt-2 text-sm",
                highlighted ? "text-ink-300" : "text-muted-foreground"
              )}
            >
              {tier.summary}
            </p>

            <div className="mt-6 flex items-end gap-1">
              <span
                className={cn(
                  "text-4xl font-bold tracking-tight",
                  highlighted ? "text-white" : "text-foreground"
                )}
              >
                {amount}
              </span>
              <span
                className={cn(
                  "mb-1 text-sm",
                  highlighted ? "text-ink-300" : "text-muted-foreground"
                )}
              >
                {sub}
              </span>
            </div>

            <Link
              href="/contact"
              className={cn(
                "group mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all",
                highlighted
                  ? "bg-gradient-to-r from-brand-600 to-cyanic text-white shadow-glow hover:-translate-y-0.5"
                  : "border border-border bg-background text-foreground hover:border-brand-600/50 hover:bg-brand-600/5"
              )}
            >
              Get {tier.name}
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <ul className="mt-8 space-y-3.5">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span
                    className={cn(
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                      highlighted
                        ? "bg-cyanic/20 text-cyanic-light"
                        : "bg-teal/10 text-teal"
                    )}
                  >
                    <FiCheck className="h-3 w-3" />
                  </span>
                  <span
                    className={highlighted ? "text-ink-200" : "text-muted-foreground"}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}
