import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center",
        className
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 40" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id="bbs-logo" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="55%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="12" fill="url(#bbs-logo)" />
        <path
          d="M13 11.5h8.2c3.2 0 5.3 1.7 5.3 4.4 0 1.9-1 3.2-2.7 3.8 2.2.5 3.5 2 3.5 4.2 0 3-2.4 4.8-6 4.8H13V11.5Zm7.4 6.7c1.4 0 2.3-.7 2.3-1.9s-.9-1.9-2.3-1.9h-3.6v3.8h3.6Zm.4 7c1.6 0 2.6-.8 2.6-2.1s-1-2.1-2.6-2.1h-4v4.2h4Z"
          fill="white"
        />
      </svg>
    </span>
  );
}

export function Logo({
  className,
  href = "/",
  onClick,
}: {
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-lg",
        className
      )}
      aria-label={`${site.name} home`}
    >
      <LogoMark className="transition-transform duration-300 group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-bold tracking-tight text-foreground">
          Better Business
        </span>
        <span className="text-[13px] font-semibold text-gradient">
          Solutions
        </span>
      </span>
    </Link>
  );
}
