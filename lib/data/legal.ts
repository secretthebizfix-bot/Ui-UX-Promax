import { site } from "@/lib/site";

export type LegalSection = { heading: string; body: string[] };
export type LegalDoc = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

const updated = "January 1, 2026";

export const refundPolicy: LegalDoc = {
  title: "Refund Policy",
  updated,
  intro: `This Refund Policy explains the terms under which ${site.legalName} ("we", "us", "our") issues refunds for the digital marketing, design, and development services provided to our clients ("you").`,
  sections: [
    {
      heading: "1. Services",
      body: [
        `We provide digital services including website development, Google Business Profile optimization, search engine optimization (SEO), Google Guaranteed / Local Services Ads (LSA), graphic design, and social media marketing.`,
        `Because these are custom, labor-intensive services, refund eligibility varies by service type and the stage of work completed, as described below.`,
      ],
    },
    {
      heading: "2. Payments",
      body: [
        `Monthly retainer services are billed in advance at the start of each billing cycle. One-time projects (such as websites) are billed via milestone deposits — typically 50% to begin and the balance on delivery.`,
        `All payments are processed securely through our third-party payment providers. Applicable taxes may be added where required by law.`,
      ],
    },
    {
      heading: "3. Refunds",
      body: [
        `Monthly retainers: You may cancel at any time. If you cancel within the first 7 days of a new billing cycle and no significant work has begun, you are eligible for a prorated refund of that cycle. After work has commenced, fees for the current cycle are non-refundable, but no further charges will apply.`,
        `One-time projects: Deposits cover discovery, strategy, and initial production and are non-refundable once work has started. If you cancel before any work begins, your deposit is fully refundable.`,
        `Third-party ad spend (e.g., Google, Meta) is paid directly to those platforms and is non-refundable by us.`,
      ],
    },
    {
      heading: "4. Client Responsibilities",
      body: [
        `Timely delivery depends on your cooperation. You agree to provide required assets, access, content, and approvals in a reasonable timeframe.`,
        `Delays caused by missing information or lack of response are not grounds for a refund and may extend project timelines.`,
      ],
    },
    {
      heading: "5. Cancellation",
      body: [
        `To cancel a service, contact us at ${site.email} or ${site.phone}. Cancellations are effective at the end of the current billing cycle unless otherwise agreed in writing.`,
        `Upon cancellation we will deliver completed work and any assets you have paid for in full.`,
      ],
    },
    {
      heading: "6. How to Request a Refund",
      body: [
        `Email ${site.email} with your account details and the reason for your request. We review all requests within 5 business days and, where approved, issue refunds to the original payment method within 5–10 business days.`,
      ],
    },
    {
      heading: "7. Contact Information",
      body: [
        `Questions about this policy? Reach us at ${site.email}, ${site.phone}, or ${site.address.full}.`,
      ],
    },
  ],
};

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  updated,
  intro: `${site.legalName} ("we", "us", "our") respects your privacy. This Privacy Policy describes how we collect, use, and protect your information when you visit our website or use our services.`,
  sections: [
    {
      heading: "1. Data Collection",
      body: [
        `We collect information you provide directly — such as your name, email, phone number, business name, and message — when you fill out forms, subscribe to our newsletter, or contact us.`,
        `We also automatically collect limited technical data such as IP address, browser type, device information, and pages visited to improve our website and services.`,
      ],
    },
    {
      heading: "2. How We Use Your Data",
      body: [
        `We use your information to respond to inquiries, deliver and improve our services, send relevant updates and marketing (which you can opt out of at any time), and comply with legal obligations.`,
        `We never sell your personal information to third parties.`,
      ],
    },
    {
      heading: "3. Cookies",
      body: [
        `Our website uses cookies and similar technologies to remember preferences, analyze traffic, and improve your experience. You can control cookies through your browser settings.`,
        `Disabling cookies may affect certain features of the site.`,
      ],
    },
    {
      heading: "4. Third-Party Services",
      body: [
        `We use trusted third-party tools for analytics, advertising, payments, and communications (for example Google Analytics, Google Ads, and payment processors). These providers process data under their own privacy policies.`,
        `We only share the minimum information necessary for these services to function.`,
      ],
    },
    {
      heading: "5. Data Security",
      body: [
        `We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
      ],
    },
    {
      heading: "6. Your Rights",
      body: [
        `Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal data, and to opt out of marketing communications.`,
        `To exercise these rights, contact us at ${site.email}.`,
      ],
    },
    {
      heading: "7. Data Retention",
      body: [
        `We retain personal information only as long as necessary to fulfill the purposes described in this policy or as required by law.`,
      ],
    },
    {
      heading: "8. Contact Information",
      body: [
        `For privacy questions, contact ${site.email}, ${site.phone}, or ${site.address.full}.`,
      ],
    },
  ],
};

export const termsConditions: LegalDoc = {
  title: "Terms & Conditions",
  updated,
  intro: `These Terms & Conditions ("Terms") govern your use of the ${site.name} website and services provided by ${site.legalName}. By accessing our site or engaging our services, you agree to these Terms.`,
  sections: [
    {
      heading: "1. Services",
      body: [
        `We provide digital marketing, website development, SEO, Google Business Profile optimization, Google Guaranteed (LSA), graphic design, and social media marketing services as described in your agreement or proposal.`,
        `We reserve the right to modify or discontinue any service with reasonable notice.`,
      ],
    },
    {
      heading: "2. Payments",
      body: [
        `You agree to pay all fees as set out in your proposal or invoice. Retainers are billed in advance; project work is billed by milestone. Late payments may result in paused services and may incur interest where permitted by law.`,
      ],
    },
    {
      heading: "3. Refunds & Cancellation",
      body: [
        `Refunds and cancellations are governed by our Refund Policy, which forms part of these Terms.`,
      ],
    },
    {
      heading: "4. Client Responsibilities",
      body: [
        `You are responsible for providing accurate information, timely approvals, necessary access, and any content or assets required to deliver the services.`,
        `You confirm that any materials you provide do not infringe third-party rights.`,
      ],
    },
    {
      heading: "5. Intellectual Property",
      body: [
        `Upon full payment, you own the final deliverables created specifically for you. We retain ownership of our proprietary tools, processes, and pre-existing materials, and may showcase completed work in our portfolio unless otherwise agreed.`,
      ],
    },
    {
      heading: "6. Third-Party Services",
      body: [
        `Some services rely on third-party platforms (Google, Meta, hosting providers, etc.). We are not responsible for changes, outages, or policy decisions made by those platforms.`,
      ],
    },
    {
      heading: "7. Liability",
      body: [
        `We deliver services with professional care but do not guarantee specific rankings, revenue, or results, as outcomes depend on factors outside our control.`,
        `To the maximum extent permitted by law, our total liability for any claim is limited to the fees you paid us for the service in question during the preceding three months.`,
      ],
    },
    {
      heading: "8. Confidentiality",
      body: [
        `Both parties agree to keep confidential any non-public information shared during the engagement and to use it only to deliver the services.`,
      ],
    },
    {
      heading: "9. Governing Law",
      body: [
        `These Terms are governed by the laws of the State of California, United States, without regard to conflict-of-law principles. Any disputes will be handled in the courts located in California.`,
      ],
    },
    {
      heading: "10. Changes to These Terms",
      body: [
        `We may update these Terms from time to time. Continued use of our services after changes take effect constitutes acceptance of the revised Terms.`,
      ],
    },
    {
      heading: "11. Contact Information",
      body: [
        `Questions about these Terms? Contact ${site.email}, ${site.phone}, or ${site.address.full}.`,
      ],
    },
  ],
};
