import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { AnimatedBackground } from "@/components/common/AnimatedBackground";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumb: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden pb-14 pt-36 sm:pt-40">
      <AnimatedBackground />
      <div className="container-xl">
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground"
          >
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.label} className="inline-flex items-center gap-1.5">
                {i > 0 && <FiChevronRight className="h-3.5 w-3.5" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </Reveal>

        <div className="mx-auto mt-6 max-w-3xl text-center">
          {eyebrow && (
            <Reveal delay={0.05}>
              <span className="eyebrow">{eyebrow}</span>
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.15}>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
