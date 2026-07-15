import { cn } from "@/lib/utils";

/**
 * Ambient animated gradient blobs + subtle grid. Purely decorative,
 * pointer-events disabled, respects reduced-motion via CSS.
 */
export function AnimatedBackground({
  className,
  grid = true,
}: {
  className?: string;
  grid?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {grid && (
        <div className="absolute inset-0 bg-grid-light bg-[size:56px_56px] opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] dark:bg-grid-dark" />
      )}
      <div className="absolute -left-24 top-0 h-[32rem] w-[32rem] animate-float-slow rounded-full bg-brand-600/20 blur-3xl dark:bg-brand-600/25" />
      <div className="absolute -right-20 top-40 h-[28rem] w-[28rem] animate-float-slow rounded-full bg-cyanic/20 blur-3xl [animation-delay:-3s] dark:bg-cyanic/25" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] animate-float-slow rounded-full bg-teal/20 blur-3xl [animation-delay:-6s] dark:bg-teal/20" />
    </div>
  );
}
