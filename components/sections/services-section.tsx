import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/common/reveal";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="container-px flex flex-col gap-16">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Everything you need to <span className="text-gradient">grow online</span>
            </>
          }
          description="Six specialized services, one aligned strategy. Pick a single channel or combine them into a compounding growth engine."
        />

        <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <RevealItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className={cn(
                  "group relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-3xl border border-border/70 bg-card p-7 shadow-premium transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-premium-lg",
                  i === 0 && "lg:col-span-1",
                )}
              >
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30",
                    service.accent,
                  )}
                />
                <div className="flex items-start justify-between">
                  <span
                    className={cn(
                      "flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-glow transition-transform duration-500 ease-premium group-hover:scale-110 group-hover:-rotate-6",
                      service.accent,
                    )}
                  >
                    <service.icon className="size-7" />
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-secondary" />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-display text-xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.short}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {service.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-border/70 bg-muted/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal direction="up" className="flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-secondary/50 hover:text-secondary"
          >
            Explore all services
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
