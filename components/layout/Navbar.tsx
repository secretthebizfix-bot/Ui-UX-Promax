"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiArrowRight, FiChevronDown } from "react-icons/fi";
import { Logo } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
          scrolled ? "py-2.5" : "py-4"
        )}
      >
        <div className="container-xl">
          <nav
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-5",
              scrolled
                ? "glass-strong h-14 shadow-soft"
                : "h-16 bg-transparent"
            )}
          >
            <Logo />

            <div className="hidden items-center gap-1 lg:flex">
              {nav.map((item) =>
                item.label === "Services" ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        isActive(item.href)
                          ? "text-brand-600 dark:text-cyanic"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.label}
                      <FiChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          megaOpen && "rotate-180"
                        )}
                      />
                    </Link>

                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3"
                        >
                          <div className="glass-strong grid grid-cols-2 gap-1.5 rounded-3xl p-3 shadow-soft-lg">
                            {services.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services#${s.slug}`}
                                className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-brand-600/5"
                              >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600/15 to-cyanic/15 text-brand-600 dark:text-cyanic">
                                  <s.icon className="h-5 w-5" />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-sm font-semibold text-foreground">
                                    {s.title}
                                  </span>
                                  <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                                    {s.short}
                                  </span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "text-brand-600 dark:text-cyanic"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle className="hidden sm:inline-flex" />
              <Button href="/contact" size="sm" className="hidden lg:inline-flex">
                Get Started
                <FiArrowRight className="h-4 w-4" />
              </Button>
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen(true)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground lg:hidden"
              >
                <FiMenu className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[130] bg-ink-950/50 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="glass-strong fixed inset-y-0 right-0 z-[140] flex w-[86%] max-w-sm flex-col p-6 lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-1">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-lg font-semibold transition-colors",
                      isActive(item.href)
                        ? "bg-brand-600/10 text-brand-600 dark:text-cyanic"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto space-y-4 pt-6">
                <div className="flex items-center justify-between rounded-2xl border border-border px-4 py-3">
                  <span className="text-sm font-medium text-muted-foreground">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
                <Button href="/contact" size="lg" className="w-full">
                  Get Started
                  <FiArrowRight className="h-4 w-4" />
                </Button>
                <a
                  href={site.phoneHref}
                  className="block text-center text-sm text-muted-foreground"
                >
                  {site.phone}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
