import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/common/reveal";
import { processSteps } from "@/data/site-data";
import { cn } from "@/lib/utils";

export function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="container-px flex flex-col gap-16">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              A proven path from <span className="text-gradient">invisible to unavoidable</span>
            </>
          }
          description="A clear, collaborative process designed to deliver results fast — and keep compounding them month after month."
        />

        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[46px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          />
          {processSteps.map((step, i) => (
            <Reveal key={step.step} direction="up" delay={i * 0.08}>
              <div className="group relative flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-card/60 p-7 shadow-premium backdrop-blur transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-secondary/40">
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      "relative z-10 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-accent font-display text-lg font-bold text-white shadow-glow transition-transform duration-500 group-hover:scale-110",
                    )}
                  >
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
