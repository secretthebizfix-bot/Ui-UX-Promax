import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/reveal";
import { Magnetic } from "@/components/common/magnetic";

export function Cta() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-px">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-primary px-6 py-16 text-center text-primary-foreground shadow-premium-lg sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 15% 20%, hsl(221 83% 53% / 0.5), transparent 42%), radial-gradient(circle at 85% 75%, hsl(173 80% 40% / 0.45), transparent 45%), radial-gradient(circle at 55% 50%, hsl(189 94% 43% / 0.25), transparent 55%)",
              }}
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-[0.07]" />

            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-highlight" />
                  <span className="relative inline-flex size-2 rounded-full bg-highlight" />
                </span>
                Now booking new local partners
              </span>

              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
                Ready to dominate your local market?
              </h2>
              <p className="max-w-xl text-pretty text-base text-primary-foreground/75 sm:text-lg">
                Get a free growth audit and a custom roadmap for more calls, leads, and customers —
                no obligation, no pressure.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Magnetic strength={0.3}>
                  <Button asChild size="lg" shimmer>
                    <Link href="/contact">
                      Get your free audit
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </Magnetic>
                <Button
                  asChild
                  size="lg"
                  variant="glass"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  <a href={SITE.phoneHref}>
                    <Phone className="size-4" />
                    {SITE.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
