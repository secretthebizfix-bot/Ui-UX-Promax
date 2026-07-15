import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { LegalContent } from "@/components/sections/LegalContent";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { termsConditions } from "@/lib/data/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing your use of Better Business Solutions' website and services, including payments, liability, and governing law.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title={termsConditions.title}
        description="The terms that govern our partnership. Please read them carefully."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
        ]}
      />
      <LegalContent doc={termsConditions} />
      <ContactCTA />
    </>
  );
}
