"use client";

import Link from "next/link";
import { CalendarDays } from "lucide-react";
import type { LegalDoc } from "@/data/legal";
import { Aurora } from "@/components/ui/gradient-blob";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  const ids = doc.sections.map((s) => s.id);
  const activeId = useScrollSpy(ids);

  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-36 lg:pt-44">
        <Aurora />
        <div className="container-px flex flex-col gap-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <CalendarDays className="size-3.5 text-secondary" />
            Last updated: {doc.updated}
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{doc.title}</h1>
          <p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground">{doc.intro}</p>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="container-px grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28 flex flex-col gap-1" aria-label="Table of contents">
              <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                On this page
              </span>
              {doc.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={cn(
                    "rounded-lg border-l-2 px-3 py-1.5 text-sm transition-colors",
                    activeId === section.id
                      ? "border-secondary bg-secondary/5 font-medium text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground",
                  )}
                >
                  {section.heading}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <article className="flex max-w-3xl flex-col gap-10">
            {doc.sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-28 flex flex-col gap-4">
                <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {section.heading}
                </h2>
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Have questions about this policy? We&apos;re happy to help.
              </p>
              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Contact us
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
