import type { Metadata } from "next";
import { ShieldCheck, Headset, RefreshCw, TrendingUp } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/sections/page-header";
import { PricingExplorer } from "@/components/sections/pricing-explorer";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/common/reveal";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  path: "/pricing",
  description:
    "Simple, transparent pricing for websites, SEO, Google Business Profile, Google Guaranteed (LSA), graphic design, and social media marketing. Starter, Professional, and Enterprise plans.",
});

const guarantees = [
  { icon: ShieldCheck, title: "No lock-in contracts", description: "Month-to-month plans. Stay because we perform, not because you're trapped." },
  { icon: TrendingUp, title: "ROI-focused reporting", description: "Track calls, leads, and revenue in a live dashboard — never vanity metrics." },
  { icon: Headset, title: "Senior specialists", description: "A dedicated strategist on your account, backed by expert designers & marketers." },
  { icon: RefreshCw, title: "Cancel anytime", description: "No hidden fees or cancellation penalties. Full transparency, always." },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title={
          <>
            Pricing that pays for <span className="text-gradient">itself</span>
          </>
        }
        description="Flat, transparent rates across every service. Choose a service, compare Starter, Professional, and Enterprise, and toggle annual billing to save 17%."
      />

      <section className="py-8 lg:py-12">
        <div className="container-px">
          <PricingExplorer />
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-px flex flex-col gap-14">
          <SectionHeading
            eyebrow="Every plan includes"
            title="Peace of mind, built in"
            description="No matter which service or tier you choose, these come standard."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((item, i) => (
              <Reveal key={item.title} direction="up" delay={i * 0.06}>
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-card/60 p-7 shadow-premium backdrop-blur">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/15 to-accent/15 text-secondary ring-1 ring-inset ring-secondary/20">
                    <item.icon className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold tracking-tight">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq />
      <Cta />
    </>
  );
}
