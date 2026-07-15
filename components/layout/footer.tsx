import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { services } from "@/data/services";
import { Logo } from "@/components/layout/logo";
import { NewsletterForm } from "@/components/layout/newsletter-form";

const socials = [
  { icon: FaFacebookF, href: SITE.socials.facebook, label: "Facebook" },
  { icon: FaInstagram, href: SITE.socials.instagram, label: "Instagram" },
  { icon: FaLinkedinIn, href: SITE.socials.linkedin, label: "LinkedIn" },
  { icon: FaXTwitter, href: SITE.socials.x, label: "X" },
  { icon: FaYoutube, href: SITE.socials.youtube, label: "YouTube" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-card/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-80 w-3/4 rounded-full bg-secondary/10 blur-[120px]"
      />
      <div className="container-px py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE.description}
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-secondary">
                <Mail className="size-4 text-secondary" /> {SITE.email}
              </a>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-secondary">
                <Phone className="size-4 text-secondary" /> {SITE.phone}
              </a>
              <span className="inline-flex items-start gap-2.5 text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" /> {SITE.address.full}
              </span>
            </div>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-background/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-secondary/50 hover:text-secondary"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            <FooterColumn title="Services" links={services.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))} />
            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="Legal" links={legalLinks} />
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border/70 bg-background/40 p-5 backdrop-blur">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-secondary">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-secondary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
