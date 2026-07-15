import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { PageHeader } from "@/components/sections/page-header";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/common/reveal";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Get in touch with Better Business Solutions. Book a free growth audit for your local business — websites, SEO, Google Business Profile, LSA, design, and social media marketing.",
});

const contactCards = [
  { icon: Mail, label: "Email us", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: "Call us", value: SITE.phone, href: SITE.phoneHref },
  { icon: MapPin, label: "Visit us", value: SITE.address.full, href: SITE.mapLink },
  { icon: Clock, label: "Hours", value: "Mon–Fri · 9am–6pm PST", href: null },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s grow your <span className="text-gradient">business</span>
          </>
        }
        description="Tell us about your goals and we'll put together a free, no-obligation growth plan. Expect a reply within one business day."
      />

      <section className="pb-24 pt-4 lg:pb-32">
        <div className="container-px grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Info + map */}
          <div className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactCards.map((card) => {
                const inner = (
                  <div className="flex h-full flex-col gap-3 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-premium backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white shadow-glow">
                      <card.icon className="size-5" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {card.label}
                    </span>
                    <span className="text-sm font-medium text-foreground">{card.value}</span>
                  </div>
                );
                return (
                  <Reveal key={card.label} direction="up">
                    {card.href ? (
                      <a
                        href={card.href}
                        target={card.href.startsWith("http") ? "_blank" : undefined}
                        rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block h-full"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </Reveal>
                );
              })}
            </div>

            <Reveal direction="up">
              <div className="overflow-hidden rounded-3xl border border-border/70 shadow-premium">
                <iframe
                  title={`Map to ${SITE.name}`}
                  src={SITE.mapEmbed}
                  width="100%"
                  height="320"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full grayscale-[0.2] transition-all duration-500 hover:grayscale-0"
                  style={{ border: 0 }}
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal direction="up" delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
