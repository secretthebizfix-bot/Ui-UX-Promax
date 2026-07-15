import { cn } from "@/lib/utils";

interface AuroraProps {
  className?: string;
}

/**
 * Ambient animated aurora background. Soft, blurred gradient blobs that
 * drift slowly — the atmospheric layer behind sections.
 */
export function Aurora({ className }: AuroraProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div className="absolute -left-24 top-[-6rem] size-[34rem] rounded-full bg-secondary/25 opacity-60 blur-[120px] animate-float-slow" />
      <div className="absolute right-[-8rem] top-24 size-[30rem] rounded-full bg-accent/25 opacity-50 blur-[120px] animate-float [animation-delay:1.5s]" />
      <div className="absolute bottom-[-10rem] left-1/3 size-[32rem] rounded-full bg-highlight/20 opacity-50 blur-[130px] animate-float-slow [animation-delay:3s]" />
    </div>
  );
}

export function GridBackdrop({ className }: AuroraProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)] dark:opacity-30",
        className,
      )}
    />
  );
}
