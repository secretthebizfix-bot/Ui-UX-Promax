import type { Metadata } from "next";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiMessageCircle,
} from "react-icons/fi";
import { PageHero } from "@/components/common/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Better Business Solutions. Book a free strategy call, or reach us by phone, email, or at our Sherman Oaks office.",
  alternates: { canonical: "/contact" },
};

const details = [
  {
    icon: FiMail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: FiMapPin,
    label: "Office",
    value: site.address.full,
    href: site.maps,
  },
  {
    icon: FiClock,
    label: "Hours",
    value: site.hours,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's start your{" "}
            <span className="text-gradient">growth story</span>
          </>
        }
        description="Tell us about your business and goals. We'll get back to you within one business day with a plan to grow."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section !pt-4">
        <div className="container-xl grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Left: info */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
                </span>
                Currently accepting new clients
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
                Reach out any way you like
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Prefer to talk it through? Call or email us directly, or fill out
                the form and we'll come to you. Either way, you'll get a real
                human — fast.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {details.map((d) => {
                const Wrapper = d.href ? "a" : "div";
                return (
                  <Reveal key={d.label} delay={0.12}>
                    <Wrapper
                      {...(d.href
                        ? {
                            href: d.href,
                            ...(d.href.startsWith("http")
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {}),
                          }
                        : {})}
                      className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card/50 p-5 transition-all hover:-translate-y-0.5 hover:border-brand-600/40 hover:shadow-soft"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600/15 to-cyanic/15 text-brand-600 dark:text-cyanic">
                        <d.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {d.label}
                        </span>
                        <span className="mt-1 block font-medium text-foreground">
                          {d.value}
                        </span>
                      </span>
                    </Wrapper>
                  </Reveal>
                );
              })}
            </div>

            {/* Map */}
            <Reveal delay={0.15}>
              <div className="mt-6 overflow-hidden rounded-[2rem] border border-border shadow-soft">
                <iframe
                  title={`${site.name} office location map`}
                  src={site.mapsEmbed}
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[0.2] transition-all duration-500 hover:grayscale-0"
                />
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div>
            <div className="mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <FiMessageCircle className="h-5 w-5 text-brand-600 dark:text-cyanic" />
              Send us a message
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
