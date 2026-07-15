import { SectionHeading } from "@/components/ui/section-heading";
import { Aurora } from "@/components/ui/gradient-blob";
import { PricingExplorer } from "@/components/sections/pricing-explorer";

export function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 lg:py-32">
      <Aurora />
      <div className="container-px flex flex-col gap-16">
        <SectionHeading
          eyebrow="Pricing plans"
          title={
            <>
              Simple, transparent <span className="text-gradient">pricing</span>
            </>
          }
          description="Flat monthly rates, no lock-in contracts, no surprise fees. Choose a service to see its Starter, Professional, and Enterprise plans."
        />
        <PricingExplorer />
      </div>
    </section>
  );
}
