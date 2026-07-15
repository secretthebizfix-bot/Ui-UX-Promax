import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { LegalDocument } from "@/components/sections/legal-document";
import { refundPolicy } from "@/data/legal";

export const metadata: Metadata = createMetadata({
  title: "Refund Policy",
  path: "/refund-policy",
  description: "Refund, billing, and cancellation terms for Better Business Solutions services.",
});

export default function RefundPolicyPage() {
  return <LegalDocument doc={refundPolicy} />;
}
