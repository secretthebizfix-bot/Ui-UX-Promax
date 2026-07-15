import Link from "next/link";
import { FiHome, FiArrowRight } from "react-icons/fi";
import { AnimatedBackground } from "@/components/common/AnimatedBackground";
import { Button } from "@/components/ui/Button";
import { nav } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <AnimatedBackground />
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="relative inline-block select-none text-[8rem] font-bold leading-none tracking-tighter text-gradient-animated sm:text-[12rem]">
            404
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            This page took a wrong turn
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            The page you're looking for doesn't exist or has moved. Let's get you
            back on track to growing your business.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/" size="lg">
              <FiHome className="h-5 w-5" />
              Back to home
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Contact us
              <FiArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Popular pages
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {nav
                .filter((n) => n.href !== "/")
                .map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className="rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand-600/40 hover:text-brand-600 dark:hover:text-cyanic"
                  >
                    {n.label}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
