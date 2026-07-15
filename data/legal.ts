import { SITE } from "@/lib/constants";

export interface LegalSection {
  id: string;
  heading: string;
  body: string[];
}

export interface LegalDoc {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

const contactBlock = `If you have any questions, contact us at ${SITE.email}, call ${SITE.phone}, or write to us at ${SITE.address.full}.`;

export const refundPolicy: LegalDoc = {
  title: "Refund Policy",
  updated: "July 15, 2026",
  intro: `This Refund Policy explains how refunds, cancellations, and billing work for services provided by ${SITE.legalName} ("we", "us", or "our"). By purchasing a service, you agree to the terms below.`,
  sections: [
    {
      id: "services",
      heading: "1. Services",
      body: [
        "We provide digital marketing services including website development, Google Business Profile optimization, SEO, Google Guaranteed (Local Services Ads) management, graphic design, and social media marketing.",
        "Services are delivered on a recurring monthly basis, as one-time projects, or as a combination of both, as described in your plan or proposal.",
      ],
    },
    {
      id: "payments",
      heading: "2. Payments & Billing",
      body: [
        "Recurring plans are billed in advance on a monthly or annual basis. One-time projects (such as website builds) are billed according to the milestones outlined in your proposal — typically a deposit to begin and the balance on completion.",
        "All fees are quoted and charged in U.S. dollars and are exclusive of any applicable taxes. Third-party advertising spend (for example, Google Ads or Local Services Ads budgets) is separate from our management fees and is non-refundable once spent.",
      ],
    },
    {
      id: "refunds",
      heading: "3. Refunds",
      body: [
        "Because our services involve dedicated strategist time, tooling, and work performed on your behalf, fees for completed work are generally non-refundable.",
        "Monthly management fees are non-refundable once the billing period has begun, as work is performed throughout the month. For one-time projects, deposits are non-refundable once work has commenced. If a project is cancelled before work begins, the deposit is refundable minus any onboarding or discovery costs already incurred.",
        "If you believe there has been a billing error or you are dissatisfied with our work, contact us within 14 days and we will review your account in good faith and work toward a fair resolution.",
      ],
    },
    {
      id: "client-responsibilities",
      heading: "4. Client Responsibilities",
      body: [
        "Timely delivery depends on your cooperation. You agree to provide required content, access, approvals, and feedback in a reasonable timeframe.",
        "Delays caused by missing materials, slow approvals, or lack of access are not grounds for a refund, though we will always work with you to keep projects on track.",
      ],
    },
    {
      id: "cancellation",
      heading: "5. Cancellation",
      body: [
        "Most recurring plans are month-to-month and can be cancelled at any time with at least 7 days' written notice before your next billing date. Cancellation stops future billing; it does not refund the current period.",
        "Upon cancellation we will provide reasonable assistance transitioning your accounts and assets that you own. Some third-party assets or optimizations may remain in place, while access to proprietary tools and ongoing management ends.",
      ],
    },
    {
      id: "chargebacks",
      heading: "6. Disputes & Chargebacks",
      body: [
        "Please contact us before initiating a chargeback — most issues can be resolved quickly and amicably. Filing a chargeback for legitimately delivered services may result in suspension of your account and services.",
      ],
    },
    {
      id: "contact",
      heading: "7. Contact Us",
      body: [contactBlock],
    },
  ],
};

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  updated: "July 15, 2026",
  intro: `${SITE.legalName} ("we", "us", or "our") respects your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have when you use our website and services.`,
  sections: [
    {
      id: "data-collection",
      heading: "1. Information We Collect",
      body: [
        "Information you provide: When you fill out a form, subscribe to our newsletter, or contact us, we collect details such as your name, email address, phone number, business name, and the contents of your message.",
        "Information collected automatically: When you visit our website, we may automatically collect device and usage data such as your IP address, browser type, pages viewed, and referring URLs, using cookies and similar technologies.",
        "Client account data: When you engage our services, we may access analytics, advertising, and business-profile accounts you authorize in order to deliver those services.",
      ],
    },
    {
      id: "use",
      heading: "2. How We Use Your Information",
      body: [
        "We use your information to respond to inquiries, provide and improve our services, send you relevant updates you have opted into, process payments, maintain security, and comply with legal obligations.",
        "We do not sell your personal information. We may use aggregated, de-identified data to analyze and improve our offerings.",
      ],
    },
    {
      id: "cookies",
      heading: "3. Cookies & Tracking",
      body: [
        "We use essential cookies to make our site work and optional analytics cookies to understand how visitors use our site. You can control cookies through your browser settings; disabling some cookies may affect site functionality.",
        "We may use analytics tools (such as privacy-respecting website analytics) and conversion tracking to measure marketing performance.",
      ],
    },
    {
      id: "third-party",
      heading: "4. Third-Party Services",
      body: [
        "We rely on trusted third-party providers to operate our business — for example, hosting, analytics, email delivery, payment processing, and advertising platforms such as Google. These providers process data on our behalf under their own privacy and security commitments.",
        "Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites and encourage you to review their policies.",
      ],
    },
    {
      id: "data-security",
      heading: "5. Data Security & Retention",
      body: [
        "We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission or storage is completely secure.",
        "We retain personal information only as long as necessary to fulfill the purposes described in this policy, to comply with legal obligations, resolve disputes, and enforce our agreements.",
      ],
    },
    {
      id: "your-rights",
      heading: "6. Your Rights & Choices",
      body: [
        "Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information, and to opt out of marketing communications.",
        "To exercise any of these rights, contact us using the details below. You can unsubscribe from marketing emails at any time using the link in each message.",
      ],
    },
    {
      id: "childrens-privacy",
      heading: "7. Children's Privacy",
      body: [
        "Our services are intended for businesses and are not directed to children under 13. We do not knowingly collect personal information from children.",
      ],
    },
    {
      id: "changes",
      heading: "8. Changes to This Policy",
      body: [
        "We may update this Privacy Policy from time to time. Material changes will be posted on this page with an updated effective date.",
      ],
    },
    {
      id: "contact",
      heading: "9. Contact Us",
      body: [contactBlock],
    },
  ],
};

export const termsAndConditions: LegalDoc = {
  title: "Terms & Conditions",
  updated: "July 15, 2026",
  intro: `These Terms & Conditions ("Terms") govern your access to and use of the website and services provided by ${SITE.legalName} ("we", "us", or "our"). By accessing our website or engaging our services, you agree to these Terms.`,
  sections: [
    {
      id: "services",
      heading: "1. Services",
      body: [
        "We provide digital marketing services including websites, Google Business Profile optimization, SEO, Google Guaranteed (LSA) management, graphic design, and social media marketing, as described in your plan, proposal, or statement of work.",
        "We will perform services with reasonable skill and care. Specific deliverables, timelines, and fees are set out in your proposal or plan, which forms part of these Terms.",
      ],
    },
    {
      id: "payments",
      heading: "2. Payments",
      body: [
        "You agree to pay all fees for the services you select. Recurring plans are billed in advance and continue until cancelled in accordance with our Refund Policy. Late or failed payments may result in suspension of services.",
        "Advertising budgets paid to third-party platforms are separate from our fees and are your responsibility.",
      ],
    },
    {
      id: "refunds",
      heading: "3. Refunds & Cancellation",
      body: [
        "Refunds and cancellations are governed by our Refund Policy, which is incorporated into these Terms by reference. Please review it carefully.",
      ],
    },
    {
      id: "client-responsibilities",
      heading: "4. Client Responsibilities",
      body: [
        "You agree to provide accurate information, necessary access and approvals, and timely feedback. You represent that any content you provide does not infringe third-party rights and complies with applicable laws.",
        "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "5. Intellectual Property",
      body: [
        "Upon full payment, you own the final deliverables created specifically for you, except for third-party assets and our pre-existing tools, templates, and know-how, which remain our property or that of their respective owners.",
        "We may showcase non-confidential work we perform for you in our portfolio and marketing unless you request otherwise in writing.",
      ],
    },
    {
      id: "third-party",
      heading: "6. Third-Party Services",
      body: [
        "Our services often rely on third-party platforms (such as Google, hosting providers, and analytics tools). Your use of those platforms is subject to their own terms, and we are not responsible for their availability, decisions, or policy changes.",
      ],
    },
    {
      id: "liability",
      heading: "7. Limitation of Liability",
      body: [
        "We do not guarantee specific rankings, lead volumes, or revenue outcomes, as results depend on many factors outside our control. Any performance figures shown are illustrative and not a promise of future results.",
        "To the maximum extent permitted by law, our total liability arising out of or related to the services shall not exceed the fees you paid to us in the three (3) months preceding the claim. We are not liable for indirect, incidental, or consequential damages.",
      ],
    },
    {
      id: "indemnification",
      heading: "8. Indemnification",
      body: [
        "You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from content you provide, your use of the services, or your violation of these Terms or applicable law.",
      ],
    },
    {
      id: "governing-law",
      heading: "9. Governing Law",
      body: [
        `These Terms are governed by the laws of the State of California, United States, without regard to its conflict-of-laws principles. Any disputes shall be subject to the exclusive jurisdiction of the state and federal courts located in ${SITE.address.city}, California.`,
      ],
    },
    {
      id: "changes",
      heading: "10. Changes to These Terms",
      body: [
        "We may update these Terms from time to time. Continued use of our website or services after changes take effect constitutes acceptance of the revised Terms.",
      ],
    },
    {
      id: "contact",
      heading: "11. Contact Us",
      body: [contactBlock],
    },
  ],
};
