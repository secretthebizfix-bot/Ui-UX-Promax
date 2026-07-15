"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingExplorer } from "@/components/ui/PricingExplorer";
import { AnimatedBackground } from "@/components/common/AnimatedBackground";

export function PricingSection() {
  return (
    <section id="pricing" className="section relative">
      <AnimatedBackground grid={false} />
      <div className="container-xl">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Transparent plans that{" "}
              <span className="text-gradient">scale with you</span>
            </>
          }
          description="Pick a service to explore Starter, Professional, and Enterprise plans. No hidden fees — cancel anytime."
        />
        <div className="mt-14">
          <PricingExplorer />
        </div>
      </div>
    </section>
  );
}
