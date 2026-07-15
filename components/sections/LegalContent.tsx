import { FiCalendar } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import type { LegalDoc } from "@/lib/data/legal";

export function LegalContent({ doc }: { doc: LegalDoc }) {
  return (
    <section className="section !pt-6">
      <div className="container-xl">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground w-fit">
              <FiCalendar className="h-4 w-4" />
              Last updated: {doc.updated}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              {doc.intro}
            </p>
          </Reveal>

          <div className="mt-10 space-y-10">
            {doc.sections.map((section, i) => (
              <Reveal key={section.heading} delay={Math.min(i * 0.03, 0.2)}>
                <div className="scroll-mt-24">
                  <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.body.map((para, j) => (
                      <p
                        key={j}
                        className="leading-relaxed text-muted-foreground"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
