"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { Logo } from "@/components/common/Logo";
import { useToast } from "@/components/providers/ToastProvider";
import { site } from "@/lib/site";
import { services } from "@/lib/data/services";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: services.slice(0, 6).map((s) => ({
      label: s.title,
      href: `/services#${s.slug}`,
    })),
  },
  {
    title: "Legal",
    links: [
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

const socials = [
  { icon: FiFacebook, href: site.socials.facebook, label: "Facebook" },
  { icon: FiInstagram, href: site.socials.instagram, label: "Instagram" },
  { icon: FiLinkedin, href: site.socials.linkedin, label: "LinkedIn" },
  { icon: FiTwitter, href: site.socials.twitter, label: "X (Twitter)" },
  { icon: FiYoutube, href: site.socials.youtube, label: "YouTube" },
];

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "error",
      });
      return;
    }
    toast({
      title: "You're subscribed!",
      description: "Watch your inbox for growth tips and offers.",
      variant: "success",
    });
    setEmail("");
  }

  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/40">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[46rem] -translate-x-1/2 rounded-full bg-brand-gradient opacity-[0.07] blur-3xl" />

      <div className="container-xl relative">
        {/* Newsletter */}
        <div className="grid gap-8 border-b border-border py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Get growth tips that actually{" "}
              <span className="text-gradient">move the needle</span>
            </h3>
            <p className="mt-3 max-w-md text-muted-foreground">
              Join our newsletter for actionable local marketing strategies. No
              spam, unsubscribe anytime.
            </p>
          </div>
          <form
            onSubmit={handleSubscribe}
            className="flex w-full flex-col gap-3 sm:flex-row lg:justify-end"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@business.com"
              className="h-12 w-full rounded-full border border-border bg-background px-5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-600/60 focus:ring-2 focus:ring-brand-600/20 sm:w-72"
            />
            <button
              type="submit"
              className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-cyanic px-6 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Subscribe
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        {/* Main */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-brand-600 dark:hover:text-cyanic"
              >
                <FiMail className="h-4 w-4 shrink-0" />
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-brand-600 dark:hover:text-cyanic"
              >
                <FiPhone className="h-4 w-4 shrink-0" />
                {site.phone}
              </a>
              <p className="flex items-start gap-3 text-muted-foreground">
                <FiMapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {site.address.full}
              </p>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-brand-600 dark:hover:text-cyanic"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-border py-8 sm:flex-row">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-brand-600/40 hover:text-brand-600 dark:hover:text-cyanic"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
