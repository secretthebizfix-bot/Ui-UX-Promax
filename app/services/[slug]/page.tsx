import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import { services, getService } from "@/data/services";
import { PageHeader } from "@/components/sections/page-header";
import { PricingCard } from "@/components/sections/pricing-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/common/reveal";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/common/json-ld";
import { SITE } from "@/lib/constants";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return createMetadata({ title: "Service not found", path: "/services" });
  return createMetadata({
    title: `${service.title} Plans`,
    path: `/services/${service.slug}`,
    description: service.description,
    keywords: [service.title.toLowerCase()],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: "United States",
    offers: service.plans.map((plan) => ({
      "@type": "Offer",
      name: `${service.title} — ${plan.name}`,
      price: plan.price.monthly,
      priceCurrency: "USD",
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          serviceSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <PageHeader
        eyebrow={
          <span className="inline-flex items-center gap-2">
            <service.icon className="size-3.5" />
            {service.title}
          </span>
        }
        title={<span className="text-balance">{service.short}</span>}
        description={service.description}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" shimmer>
            <Link href="/contact">
              Get Started
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="glass">
            <Link href="/services">All services</Link>
          </Button>
        </div>
      </PageHeader>

      {/* Outcomes */}
      <section className="pb-8">
        <div className="container-px">
          <div className="grid gap-4 sm:grid-cols-3">
            {service.outcomes.map((outcome) => (
              <Reveal key={outcome.label} direction="up">
                <div className="flex flex-col items-center gap-1.5 rounded-3xl border border-border/70 bg-card/60 p-8 text-center shadow-premium backdrop-blur">
                  <span
                    className={cn(
                      "bg-gradient-to-br bg-clip-text font-display text-4xl font-bold text-transparent",
                      service.accent,
                    )}
                  >
                    {outcome.value}
                  </span>
                  <span className="text-sm text-muted-foreground">{outcome.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features + Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container-px grid gap-8 lg:grid-cols-2">
          <Reveal direction="up">
            <div className="flex h-full flex-col gap-6 rounded-4xl border border-border/70 bg-card p-8 shadow-premium lg:p-10">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                What&apos;s included
              </h2>
              <ul className="grid gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={cn(
                        "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white",
                        service.accent,
                      )}
                    >
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/85">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.08}>
            <div className="flex h-full flex-col gap-6 rounded-4xl border border-white/10 bg-primary p-8 text-primary-foreground shadow-premium lg:p-10">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Why it moves the needle
              </h2>
              <ul className="grid gap-5">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 size-5 shrink-0 text-highlight" />
                    <span className="text-lg text-primary-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button
                  asChild
                  variant="glass"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  <Link href="/contact">
                    Talk to a specialist
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Plans */}
      <section className="py-8 lg:py-12">
        <div className="container-px flex flex-col gap-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {service.title} <span className="text-gradient">plans</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Straightforward pricing that scales with your goals. Every plan is month-to-month with
              no lock-in.
            </p>
          </div>
          <RevealGroup className="grid items-stretch gap-6 lg:grid-cols-3">
            {service.plans.map((plan) => (
              <RevealItem key={plan.name}>
                <PricingCard plan={plan} billing="monthly" accent={service.accent} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 lg:py-24">
        <div className="container-px flex flex-col gap-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Pairs well with</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-card/60 p-5 shadow-premium backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40"
                >
                  <span
                    className={cn(
                      "flex size-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-glow",
                      related.accent,
                    )}
                  >
                    <related.icon className="size-5" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-semibold">{related.title}</span>
                    <span className="text-sm text-muted-foreground">{related.short}</span>
                  </div>
                  <ArrowRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-secondary" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Faq />
      <Cta />
    </>
  );
}
