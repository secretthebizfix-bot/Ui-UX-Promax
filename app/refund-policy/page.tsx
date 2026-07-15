import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { LegalContent } from "@/components/sections/LegalContent";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { refundPolicy } from "@/lib/data/legal";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Read the Better Business Solutions refund policy covering monthly retainers, one-time projects, cancellations, and how to request a refund.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero
        title={refundPolicy.title}
        description="Clear, fair terms for our services. Here's exactly how refunds work at Better Business Solutions."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Refund Policy" }]}
      />
      <LegalContent doc={refundPolicy} />
      <ContactCTA />
    </>
  );
}
