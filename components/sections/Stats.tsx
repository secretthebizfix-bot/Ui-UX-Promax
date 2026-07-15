"use client";

import { Counter } from "@/components/ui/Counter";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { stats } from "@/lib/data/content";

export function Stats() {
  return (
    <section className="relative section !py-16">
      <div className="container-xl">
        <RevealGroup className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <RevealItem key={stat.label}>
              <div className="glass group relative overflow-hidden rounded-3xl p-6 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-600/50 to-transparent" />
                <p className="text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={Number.isInteger(stat.value) ? 0 : 1}
                  />
                </p>
                <p className="mt-3 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
