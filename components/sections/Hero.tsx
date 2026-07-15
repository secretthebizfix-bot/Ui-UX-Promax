"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/MagneticButton";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { Stars } from "@/components/ui/Stars";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      {/* 3D backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-[42rem] max-w-5xl">
          <HeroCanvas />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        <div className="absolute inset-0 bg-radial-fade" />
      </div>

      <div className="container-xl relative pb-20 lg:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-foreground shadow-soft">
              <Stars rating={5} />
              <span className="text-muted-foreground">
                Trusted by 480+ local businesses
              </span>
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-7 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Helping Local Businesses{" "}
            <span className="relative inline-block">
              <span className="text-gradient-animated">Dominate</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M2 9C60 3 120 3 180 6C230 8 270 6 298 4"
                  stroke="url(#underline)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="underline" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#2563EB" />
                    <stop offset="0.5" stopColor="#06B6D4" />
                    <stop offset="1" stopColor="#14B8A6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            Online
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Professional websites, Google Business Profile optimization, SEO,
            Google Guaranteed Ads, Graphic Design & Social Media Marketing that
            generate real customers.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Magnetic>
              <Button href="/contact" size="lg">
                Get Started
                <FiArrowRight className="h-5 w-5" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button href="/pricing" size="lg" variant="secondary">
                View Plans
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
          >
            {["No long-term contracts", "Senior-only team", "Transparent reporting"].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <FiCheck className="h-4 w-4 text-teal" />
                  {item}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1.5"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-brand-600 dark:bg-cyanic"
          />
        </motion.div>
      </div>
    </section>
  );
}
