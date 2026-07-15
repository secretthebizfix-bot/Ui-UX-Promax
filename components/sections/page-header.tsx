import { Badge } from "@/components/ui/badge";
import { Aurora, GridBackdrop } from "@/components/ui/gradient-blob";
import { Reveal } from "@/components/common/reveal";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export function PageHeader({ eyebrow, title, description, children, className }: PageHeaderProps) {
  return (
    <section className={cn("relative overflow-hidden pb-14 pt-36 lg:pt-44", className)}>
      <Aurora />
      <GridBackdrop />
      <div className="container-px flex flex-col items-center gap-6 text-center">
        {eyebrow && (
          <Reveal direction="fade">
            <Badge variant="glass">
              <span className="size-1.5 rounded-full bg-gradient-to-r from-secondary to-accent" />
              {eyebrow}
            </Badge>
          </Reveal>
        )}
        <Reveal direction="up" delay={0.05}>
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal direction="up" delay={0.12}>
            <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal direction="up" delay={0.18}>
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
