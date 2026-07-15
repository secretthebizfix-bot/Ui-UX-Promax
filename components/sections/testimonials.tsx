"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduced = usePrefersReducedMotion();
  const count = testimonials.length;

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => go(1), 6000);
    return () => clearInterval(timer);
  }, [go, reduced]);

  const active = testimonials[index];

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-72 w-2/3 rounded-full bg-accent/10 blur-[130px]"
      />
      <div className="container-px flex flex-col gap-14">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved by <span className="text-gradient">business owners</span>
            </>
          }
          description="Don't take our word for it — here's what local business owners say about working with us."
        />

        <div className="mx-auto w-full max-w-3xl">
          <div className="relative min-h-[300px] sm:min-h-[260px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-7 rounded-4xl border border-border/70 bg-card/70 p-8 text-center shadow-premium backdrop-blur sm:p-12"
              >
                <Quote className="size-9 text-secondary/40" />
                <div className="flex gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="size-5 fill-highlight text-highlight" />
                  ))}
                </div>
                <p className="text-pretty text-lg font-medium leading-relaxed text-foreground sm:text-xl">
                  “{active.quote}”
                </p>
                <footer className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent font-display text-sm font-bold text-white">
                    {active.initials}
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="font-semibold text-foreground">{active.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {active.role}, {active.company}
                    </span>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border/70 bg-background/50 text-muted-foreground transition-colors hover:border-secondary/50 hover:text-secondary"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index ? "w-7 bg-gradient-to-r from-secondary to-accent" : "w-2 bg-border",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border/70 bg-background/50 text-muted-foreground transition-colors hover:border-secondary/50 hover:text-secondary"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
