import type { Metadata } from "next";
import { FiCheck, FiHelpCircle } from "react-icons/fi";
import { PageHero } from "@/components/common/PageHero";
import { PricingExplorer } from "@/components/ui/PricingExplorer";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, flexible pricing for every service — Starter, Professional, and Enterprise plans. No hidden fees, cancel anytime.",
  alternates: { canonical: "/pricing" },
};

const included = [
  "Dedicated account manager",
  "Transparent reporting dashboard",
  "No long-term contracts",
  "Senior-only team",
  "Fast turnaround times",
  "Cancel anytime",
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Simple pricing,{" "}
            <span className="text-gradient">serious results</span>
          </>
        }
        description="Choose a service to compare plans. Every plan is built to deliver measurable ROI — with the flexibility to scale as you grow."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
      />

      <section className="section !pt-4">
        <div className="container-xl">
          <PricingExplorer />
        </div>
      </section>

      {/* Everything included */}
      <section className="section !pt-0">
        <div className="container-xl">
          <Reveal>
            <div className="glass rounded-[2rem] p-8 shadow-soft sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                <div>
                  <span className="eyebrow">Every Plan Includes</span>
                  <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Premium service, no matter which plan you choose
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    We hold every engagement to the same high standard — from
                    Starter to Enterprise.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {included.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-card/60 p-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-cyanic text-white">
                        <FiCheck className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border p-6 text-center sm:flex-row">
              <FiHelpCircle className="h-5 w-5 text-brand-600 dark:text-cyanic" />
              <p className="text-sm text-muted-foreground">
                Need a custom bundle across multiple services?{" "}
                <a
                  href="/contact"
                  className="font-semibold text-brand-600 underline-offset-4 hover:underline dark:text-cyanic"
                >
                  Let's build a plan tailored to you.
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ />
      <ContactCTA />
    </>
  );
}
