import { Marquee } from "@/components/ui/marquee";
import { trustedBy } from "@/data/site-data";

export function TrustedBy() {
  return (
    <section className="border-y border-border/50 bg-card/30 py-12">
      <div className="container-px flex flex-col items-center gap-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by growing local businesses across the U.S.
        </p>
        <div className="relative w-full mask-fade-x">
          <Marquee>
            {trustedBy.map((name) => (
              <div
                key={name}
                className="flex items-center gap-2.5 whitespace-nowrap px-6 text-lg font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                <span className="size-2 rounded-full bg-gradient-to-r from-secondary to-accent" />
                {name}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
