"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { process } from "@/lib/data/content";

export function Process() {
  return (
    <section id="process" className="section relative overflow-hidden bg-card/30">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Our Process"
          title={
            <>
              A proven path from{" "}
              <span className="text-gradient">audit to scale</span>
            </>
          }
          description="A clear, collaborative process designed to deliver momentum fast and compound results over time."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <RevealItem key={step.step}>
                <div className="group relative flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-background shadow-soft ring-1 ring-border"
                  >
                    <step.icon className="h-7 w-7 text-brand-600 dark:text-cyanic" />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-cyanic text-xs font-bold text-white shadow-glow">
                      {step.step}
                    </span>
                  </motion.div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
