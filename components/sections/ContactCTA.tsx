"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function ContactCTA() {
  return (
    <section className="section relative">
      <div className="container-xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink-900 px-6 py-16 text-center shadow-soft-lg sm:px-12 sm:py-20">
            {/* animated gradient orbs */}
            <div className="pointer-events-none absolute inset-0">
              <motion.div
                animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-10 top-0 h-72 w-72 rounded-full bg-brand-600/40 blur-3xl"
              />
              <motion.div
                animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-cyanic/40 blur-3xl"
              />
              <div className="absolute inset-0 bg-grid-dark bg-[size:44px_44px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyanic-light">
                Ready to grow?
              </span>
              <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Let's turn your online presence into a{" "}
                <span className="text-gradient-animated">customer machine</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-ink-300">
                Book a free strategy call. We'll audit your presence and show you
                exactly how to attract more local customers.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Magnetic>
                  <Button href="/contact" size="lg">
                    Get Started Free
                    <FiArrowRight className="h-5 w-5" />
                  </Button>
                </Magnetic>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                >
                  <FiPhone className="h-4 w-4" />
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
