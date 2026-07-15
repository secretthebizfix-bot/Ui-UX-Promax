import Link from "next/link";
import { Home, ArrowLeft, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Aurora, GridBackdrop } from "@/components/ui/gradient-blob";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-32">
      <Aurora />
      <GridBackdrop />
      <div className="relative flex flex-col items-center gap-8 text-center">
        <span className="relative font-display text-[9rem] font-bold leading-none tracking-tighter sm:text-[14rem]">
          <span className="text-gradient">404</span>
          <span
            aria-hidden
            className="absolute inset-0 -z-10 select-none text-gradient blur-3xl opacity-40"
          >
            404
          </span>
        </span>
        <div className="flex flex-col gap-3">
          <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            This page took a wrong turn
          </h1>
          <p className="mx-auto max-w-md text-pretty text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you
            back to growing your business.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" shimmer>
            <Link href="/">
              <Home className="size-4" />
              Back to home
            </Link>
          </Button>
          <Button asChild size="lg" variant="glass">
            <Link href="/contact">
              <LifeBuoy className="size-4" />
              Contact support
            </Link>
          </Button>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-secondary"
        >
          <ArrowLeft className="size-3.5" />
          Or explore our services
        </Link>
      </div>
    </section>
  );
}
