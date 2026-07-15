import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { createMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import { PageHeader } from "@/components/sections/page-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/common/reveal";
import { Process } from "@/components/sections/process";
import { Cta } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createMetadata({
  title: "Services",
  path: "/services",
  description:
    "Full-service digital marketing for local businesses: Google Business Profile, websites, SEO, Google Guaranteed (LSA), graphic design, and social media marketing.",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title={
          <>
            Six services. One <span className="text-gradient">growth engine.</span>
          </>
        }
        description="Everything a local business needs to get found, build trust, and win more customers — delivered by senior specialists under one roof."
      >
        <Button asChild size="lg" shimmer>
          <Link href="/pricing">View all plans & pricing</Link>
        </Button>
      </PageHeader>

      <section className="py-12 lg:py-16">
        <div className="container-px">
          <RevealGroup className="flex flex-col gap-6">
            {services.map((service, i) => (
              <RevealItem key={service.slug}>
                <div
                  className={cn(
                    "group grid gap-8 overflow-hidden rounded-4xl border border-border/70 bg-card p-7 shadow-premium transition-all duration-500 ease-premium hover:shadow-premium-lg lg:grid-cols-[1.4fr_1fr] lg:p-10",
                    i % 2 === 1 && "lg:[&>div:first-child]:order-2",
                  )}
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <span
                        className={cn(
                          "flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-glow",
                          service.accent,
                        )}
                      >
                        <service.icon className="size-7" />
                      </span>
                      <div className="flex flex-col">
                        <h2 className="font-display text-2xl font-semibold tracking-tight">
                          {service.title}
                        </h2>
                        <span className="text-sm text-muted-foreground">Starting at ${service.plans[0].price.monthly}{service.plans[0].cadence}</span>
                      </div>
                    </div>
                    <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5 text-sm">
                          <Check className="mt-0.5 size-4 shrink-0 text-highlight" strokeWidth={2.5} />
                          <span className="text-foreground/85">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 pt-1">
                      <Button asChild>
                        <Link href={`/services/${service.slug}`}>
                          Explore {service.title}
                          <ArrowUpRight className="size-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href="/contact">Get a quote</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center gap-4 rounded-3xl border border-border/60 bg-background/40 p-7">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Typical results
                    </span>
                    <div className="grid grid-cols-3 gap-3">
                      {service.outcomes.map((outcome) => (
                        <div key={outcome.label} className="flex flex-col gap-1">
                          <span
                            className={cn(
                              "bg-gradient-to-br bg-clip-text font-display text-2xl font-bold text-transparent",
                              service.accent,
                            )}
                          >
                            {outcome.value}
                          </span>
                          <span className="text-xs leading-tight text-muted-foreground">
                            {outcome.label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 h-px bg-border/70" />
                    <ul className="flex flex-col gap-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5 text-sm">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-secondary to-accent" />
                          <span className="text-foreground/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Process />
      <Cta />
    </>
  );
}
