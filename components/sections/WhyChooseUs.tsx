"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { AnimatedBackground } from "@/components/common/AnimatedBackground";
import { whyChooseUs } from "@/lib/data/content";

export function WhyChooseUs() {
  return (
    <section id="why" className="section relative">
      <AnimatedBackground grid={false} />
      <div className="container-xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              A growth partner built{" "}
              <span className="text-gradient">to outperform</span>
            </>
          }
          description="We combine award-winning design, senior expertise, and relentless optimization to deliver results that actually grow your bottom line."
        />

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <RevealItem key={item.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass group relative h-full overflow-hidden rounded-3xl p-8 shadow-soft"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />
                <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyanic text-white shadow-glow">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-6 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="relative mt-3 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
