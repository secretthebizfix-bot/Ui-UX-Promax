import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

interface LogoProps {
  className?: string;
  showText?: boolean;
  href?: string | null;
}

export function Logo({ className, showText = true, href = "/" }: LogoProps) {
  const content = (
    <span className={cn("group inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex size-9 items-center justify-center">
        <svg viewBox="0 0 40 40" fill="none" className="size-9" aria-hidden>
          <defs>
            <linearGradient id="bbs-logo" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563EB" />
              <stop offset="0.5" stopColor="#06B6D4" />
              <stop offset="1" stopColor="#14B8A6" />
            </linearGradient>
          </defs>
          <rect x="1.5" y="1.5" width="37" height="37" rx="11" fill="url(#bbs-logo)" fillOpacity="0.14" stroke="url(#bbs-logo)" strokeWidth="1.5" />
          <path
            d="M13 27V13h6.2c2.7 0 4.4 1.4 4.4 3.6 0 1.6-.9 2.7-2.3 3.1 1.7.3 2.9 1.6 2.9 3.4 0 2.4-1.9 3.9-4.9 3.9H13Zm3.1-8.4h2.5c1.1 0 1.8-.6 1.8-1.5s-.7-1.5-1.8-1.5h-2.5v3Zm0 5.9h2.8c1.2 0 1.9-.6 1.9-1.6s-.7-1.6-1.9-1.6h-2.8v3.2Z"
            fill="url(#bbs-logo)"
          />
          <circle cx="28.5" cy="13.5" r="2.5" fill="#06B6D4" />
        </svg>
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-semibold tracking-tight text-foreground">
            Better Business
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Solutions
          </span>
        </span>
      )}
    </span>
  );

  if (href === null) return content;
  return (
    <Link href={href} aria-label={`${SITE.name} home`}>
      {content}
    </Link>
  );
}
