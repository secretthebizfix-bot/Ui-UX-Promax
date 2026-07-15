"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { services } from "@/data/services";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Magnetic } from "@/components/common/magnetic";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMegaOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 ease-premium sm:px-5",
          scrolled
            ? "glass-strong shadow-premium"
            : "border border-transparent bg-transparent",
        )}
      >
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isServices = link.href === "/services";
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            if (isServices) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn("size-3.5 transition-transform duration-300", megaOpen && "rotate-180")}
                    />
                  </Link>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-4"
                      >
                        <MegaMenu />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-muted/70"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Magnetic strength={0.25} className="hidden lg:block">
            <Button asChild size="sm" shimmer className="h-10">
              <Link href="/contact">
                Get Started
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Magnetic>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}

function MegaMenu() {
  return (
    <div className="grid grid-cols-2 gap-2 rounded-3xl glass-strong p-3 shadow-premium-lg">
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-muted/60"
        >
          <span
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-glow",
              service.accent,
            )}
          >
            <service.icon className="size-5" />
          </span>
          <span className="flex flex-col">
            <span className="flex items-center gap-1 text-sm font-semibold text-foreground">
              {service.title}
              <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </span>
            <span className="text-xs leading-snug text-muted-foreground">{service.short}</span>
          </span>
        </Link>
      ))}
      <Link
        href="/pricing"
        className="col-span-2 mt-1 flex items-center justify-between rounded-2xl bg-gradient-to-r from-secondary/10 to-accent/10 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:from-secondary/20 hover:to-accent/20"
      >
        Compare all plans & pricing
        <ArrowRight className="size-4 text-secondary" />
      </Link>
    </div>
  );
}
