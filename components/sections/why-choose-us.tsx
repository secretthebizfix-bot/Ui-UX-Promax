import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/common/reveal";
import { Counter } from "@/components/common/counter";
import { whyChooseUs, stats } from "@/data/site-data";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden py-24 lg:py-32">
      <div className="container-px flex flex-col gap-16">
        <SectionHeading
          eyebrow="Why choose us"
          title={
            <>
              An unfair advantage for <span className="text-gradient">local growth</span>
            </>
          }
          description="We combine award-level design and engineering with a relentless focus on ROI — all under one roof, so every channel compounds instead of competing."
        />

        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <RevealItem key={item.title}>
              <SpotlightCard className="h-full p-7">
                <div className="flex flex-col gap-4">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/15 to-accent/15 text-secondary ring-1 ring-inset ring-secondary/20">
                    <CheckCircle2 className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-4xl border border-border/70 bg-gradient-to-br from-primary to-primary p-px shadow-premium-lg">
            <div className="relative grid gap-8 rounded-[calc(2rem-1px)] bg-primary px-8 py-12 text-primary-foreground sm:grid-cols-2 lg:grid-cols-4">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, hsl(221 83% 53% / 0.4), transparent 40%), radial-gradient(circle at 80% 60%, hsl(173 80% 40% / 0.35), transparent 45%)",
                }}
              />
              {stats.map((stat) => (
                <div key={stat.label} className="relative flex flex-col items-center gap-1 text-center">
                  <span className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                    <Counter
                      to={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                  </span>
                  <span className="text-sm text-primary-foreground/70">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
