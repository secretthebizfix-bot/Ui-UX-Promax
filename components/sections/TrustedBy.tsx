"use client";

import { trustedBy } from "@/lib/data/content";

export function TrustedBy() {
  const items = [...trustedBy, ...trustedBy];
  return (
    <section className="border-y border-border bg-card/30 py-10">
      <div className="container-xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by growing businesses across the country
        </p>
        <div className="mask-fade-x relative mt-8 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12">
            {items.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap text-lg font-semibold text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
