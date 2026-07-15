import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { LegalContent } from "@/components/sections/LegalContent";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { privacyPolicy } from "@/lib/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Better Business Solutions collects, uses, and protects your data, including cookies, third-party services, and your privacy rights.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title={privacyPolicy.title}
        description="Your privacy matters. Here's how we handle and protect your information."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <LegalContent doc={privacyPolicy} />
      <ContactCTA />
    </>
  );
}
