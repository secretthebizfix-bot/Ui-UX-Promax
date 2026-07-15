import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { LegalDocument } from "@/components/sections/legal-document";
import { termsAndConditions } from "@/data/legal";

export const metadata: Metadata = createMetadata({
  title: "Terms & Conditions",
  path: "/terms",
  description: "The terms and conditions governing use of Better Business Solutions services.",
});

export default function TermsPage() {
  return <LegalDocument doc={termsAndConditions} />;
}
