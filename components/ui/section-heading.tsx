import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/common/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "mx-auto max-w-3xl items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal direction="fade">
          <Badge variant="glass">
            <span className="size-1.5 rounded-full bg-gradient-to-r from-secondary to-accent" />
            {eyebrow}
          </Badge>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.05}>
        <h2
          className={cn(
            "font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl",
            titleClassName,
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.12}>
          <p
            className={cn(
              "text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg",
              align === "center" ? "max-w-2xl" : "max-w-xl",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
