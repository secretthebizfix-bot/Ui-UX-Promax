import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { LegalDocument } from "@/components/sections/legal-document";
import { privacyPolicy } from "@/data/legal";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  path: "/privacy-policy",
  description: "How Better Business Solutions collects, uses, and protects your information.",
});

export default function PrivacyPolicyPage() {
  return <LegalDocument doc={privacyPolicy} />;
}
