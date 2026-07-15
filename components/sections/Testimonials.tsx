"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stars } from "@/components/ui/Stars";
import { testimonials } from "@/lib/data/content";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);

  const paginate = useCallback(
    (d: number) => {
      setState(([i]) => [
        (i + d + testimonials.length) % testimonials.length,
        d,
      ]);
    },
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => paginate(1), 5500);
    return () => window.clearInterval(id);
  }, [paused, paginate]);

  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      className="section relative overflow-hidden bg-card/30"
    >
      <div className="container-xl">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved by the businesses{" "}
              <span className="text-gradient">we grow</span>
            </>
          }
          description="Don't take our word for it — hear from the owners who trusted us with their growth."
        />

        <div
          className="relative mx-auto mt-16 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[20rem] sm:min-h-[17rem]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.blockquote
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir >= 0 ? -60 : 60 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="glass-strong absolute inset-0 flex flex-col rounded-4xl p-8 shadow-soft-lg sm:p-10"
              >
                <Stars rating={t.rating} className="[&_svg]:h-5 [&_svg]:w-5" />
                <p className="mt-6 flex-1 text-pretty text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                  “{t.quote}”
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-cyanic text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:border-brand-600/40 hover:text-brand-600 dark:hover:text-cyanic"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setState([i, i > index ? 1 : -1])}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index
                      ? "w-8 bg-gradient-to-r from-brand-600 to-cyanic"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:border-brand-600/40 hover:text-brand-600 dark:hover:text-cyanic"
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
