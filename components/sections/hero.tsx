"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, TrendingUp, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Aurora, GridBackdrop } from "@/components/ui/gradient-blob";
import { Magnetic } from "@/components/common/magnetic";
import { TextReveal } from "@/components/common/text-reveal";
import { HeroCanvas } from "@/components/three/hero-canvas";
import { cn } from "@/lib/utils";

const floatingCards = [
  {
    icon: TrendingUp,
    title: "+240% organic traffic",
    subtitle: "SEO campaign · 90 days",
    className: "left-0 top-10",
    accent: "from-secondary to-accent",
    delay: 0.6,
  },
  {
    icon: MapPin,
    title: "#1 in the map pack",
    subtitle: "Google Business Profile",
    className: "right-0 top-28",
    accent: "from-accent to-highlight",
    delay: 0.8,
  },
  {
    icon: ShieldCheck,
    title: "Google Guaranteed",
    subtitle: "-42% cost per lead",
    className: "bottom-6 left-6",
    accent: "from-highlight to-secondary",
    delay: 1,
  },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 lg:pt-32">
      <Aurora />
      <GridBackdrop />

      <div className="container-px grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="flex flex-col items-start gap-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge variant="glass" className="gap-2 py-2 pl-2 pr-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-secondary to-accent px-2 py-0.5 text-[11px] font-semibold text-white">
                <Star className="size-3 fill-current" /> 4.9
              </span>
              Trusted by 480+ local businesses
            </Badge>
          </motion.div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            <TextReveal text="Helping Local Businesses" className="text-foreground" />
            <span className="mt-1 block">
              <TextReveal text="Dominate Online" className="text-gradient" delay={0.25} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Professional websites, Google Business Profile optimization, SEO, Google Guaranteed
            Ads, Graphic Design & Social Media Marketing that generate real customers — not just
            clicks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Magnetic strength={0.3}>
              <Button asChild size="lg" shimmer>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </Magnetic>
            <Button asChild size="lg" variant="glass">
              <Link href="/pricing">
                <Play className="size-4" />
                View Plans
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2"
          >
            {[
              { value: "12M+", label: "Leads generated" },
              { value: "480+", label: "Businesses served" },
              { value: "6.2x", label: "Average ROI" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-foreground">
                  {item.value}
                </span>
                <span className="text-xs text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3D visual */}
        <div className="relative mx-auto aspect-square w-full max-w-xl">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-secondary/20 via-accent/10 to-highlight/20 blur-3xl" />
          <HeroCanvas className="size-full" />

          {floatingCards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
              className={cn("absolute z-10", card.className)}
            >
              <div className="animate-float [animation-duration:7s]">
                <div className="flex items-center gap-3 rounded-2xl glass-strong p-3 pr-5 shadow-premium">
                  <span
                    className={cn(
                      "flex size-10 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-glow",
                      card.accent,
                    )}
                  >
                    <card.icon className="size-5" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground">{card.title}</span>
                    <span className="text-xs text-muted-foreground">{card.subtitle}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
