import type { IconType } from "react-icons";
import {
  FiMapPin,
  FiMonitor,
  FiPenTool,
  FiTrendingUp,
  FiShare2,
  FiShield,
} from "react-icons/fi";

export type PricingTier = {
  name: "Starter" | "Professional" | "Enterprise";
  price: number;
  period: string;
  summary: string;
  features: string[];
  highlighted?: boolean;
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: IconType;
  accent: "brand" | "cyan" | "teal";
  features: string[];
  benefits: string[];
  tiers: PricingTier[];
};

export const services: Service[] = [
  {
    slug: "google-my-business",
    title: "Google My Business",
    short: "Own the local map pack and convert nearby searchers.",
    description:
      "We optimize and manage your Google Business Profile so your business shows up first when local customers search — with compelling posts, review strategy, and conversion-ready listings.",
    icon: FiMapPin,
    accent: "brand",
    features: [
      "Full profile optimization & verification",
      "Weekly Google Posts & offers",
      "Review generation & response management",
      "Geo-tagged photos & media uploads",
      "Q&A seeding & spam listing cleanup",
      "Insights & call tracking reporting",
    ],
    benefits: [
      "Appear in the local 3-pack",
      "More calls, directions & website clicks",
      "Higher trust from real reviews",
    ],
    tiers: [
      {
        name: "Starter",
        price: 149,
        period: "/mo",
        summary: "Get found locally with a fully optimized profile.",
        features: [
          "1 profile optimization",
          "2 Google Posts / month",
          "Review response (up to 10)",
          "Monthly performance report",
        ],
      },
      {
        name: "Professional",
        price: 299,
        period: "/mo",
        summary: "Actively grow calls and directions every month.",
        highlighted: true,
        features: [
          "Everything in Starter",
          "6 Google Posts / month",
          "Review generation campaign",
          "Geo-tagged photo uploads",
          "Competitor rank tracking",
          "Bi-weekly reporting",
        ],
      },
      {
        name: "Enterprise",
        price: 599,
        period: "/mo",
        summary: "Multi-location dominance with full-service management.",
        features: [
          "Everything in Professional",
          "Up to 5 locations",
          "Daily posting & monitoring",
          "Dedicated account manager",
          "Call tracking & CRM sync",
          "Weekly strategy calls",
        ],
      },
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    short: "Lightning-fast, conversion-focused websites that sell.",
    description:
      "Custom, high-performance websites built to convert. Modern design, blazing speed, SEO foundations, and analytics — everything a growing local business needs to win online.",
    icon: FiMonitor,
    accent: "cyan",
    features: [
      "Custom responsive design",
      "Next.js / performance-first build",
      "On-page SEO foundations",
      "Lead forms & CRM integrations",
      "Analytics & conversion tracking",
      "Ongoing maintenance & hosting",
    ],
    benefits: [
      "90+ Lighthouse performance scores",
      "Mobile-first, accessible experiences",
      "Turn visitors into booked customers",
    ],
    tiers: [
      {
        name: "Starter",
        price: 899,
        period: "one-time",
        summary: "A polished 5-page site to launch fast.",
        features: [
          "Up to 5 pages",
          "Mobile responsive design",
          "Contact form & maps",
          "Basic on-page SEO",
          "1 round of revisions",
        ],
      },
      {
        name: "Professional",
        price: 2499,
        period: "one-time",
        summary: "A conversion-optimized site for serious growth.",
        highlighted: true,
        features: [
          "Up to 12 pages",
          "Custom UI/UX design",
          "Blog & CMS setup",
          "Advanced SEO + schema",
          "Speed optimization",
          "3 rounds of revisions",
        ],
      },
      {
        name: "Enterprise",
        price: 6500,
        period: "one-time",
        summary: "A bespoke platform with integrations & automation.",
        features: [
          "Unlimited pages",
          "E-commerce / booking systems",
          "Custom integrations & API",
          "A/B testing setup",
          "Dedicated project team",
          "Priority support SLA",
        ],
      },
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    short: "Scroll-stopping brand visuals that build authority.",
    description:
      "From logos to social creatives and print, our award-winning designers craft a cohesive, premium brand identity that makes your business unforgettable.",
    icon: FiPenTool,
    accent: "teal",
    features: [
      "Logo & brand identity systems",
      "Social media creatives",
      "Ad & banner design",
      "Print & packaging design",
      "Brand guidelines",
      "Unlimited-style design retainers",
    ],
    benefits: [
      "Cohesive, premium brand identity",
      "Higher engagement on every channel",
      "Assets ready for every platform",
    ],
    tiers: [
      {
        name: "Starter",
        price: 199,
        period: "/mo",
        summary: "Fresh creatives to keep your brand active.",
        features: [
          "8 social creatives / month",
          "2 revisions per design",
          "Source files included",
          "48-hour turnaround",
        ],
      },
      {
        name: "Professional",
        price: 449,
        period: "/mo",
        summary: "A full creative engine for your marketing.",
        highlighted: true,
        features: [
          "20 designs / month",
          "Ad & banner creatives",
          "Brand style kit",
          "Unlimited revisions",
          "24-hour turnaround",
          "Dedicated designer",
        ],
      },
      {
        name: "Enterprise",
        price: 999,
        period: "/mo",
        summary: "Unlimited design for scaling brands.",
        features: [
          "Unlimited design requests",
          "Full brand identity system",
          "Motion & video graphics",
          "Print & packaging",
          "Dedicated design team",
          "Same-day priority tasks",
        ],
      },
    ],
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    short: "Rank higher, capture demand, and grow organic leads.",
    description:
      "Data-driven SEO that puts your business on page one. Technical fixes, content strategy, and authority building that compounds into a predictable pipeline of organic customers.",
    icon: FiTrendingUp,
    accent: "brand",
    features: [
      "Technical SEO audit & fixes",
      "Keyword research & mapping",
      "On-page & content optimization",
      "Local & national link building",
      "Schema & Core Web Vitals",
      "Transparent rank reporting",
    ],
    benefits: [
      "Sustained page-one rankings",
      "Compounding organic traffic",
      "Lower cost-per-lead over time",
    ],
    tiers: [
      {
        name: "Starter",
        price: 399,
        period: "/mo",
        summary: "Local SEO to get found in your city.",
        features: [
          "10 target keywords",
          "On-page optimization",
          "Local citations",
          "Monthly rank reports",
        ],
      },
      {
        name: "Professional",
        price: 899,
        period: "/mo",
        summary: "Aggressive growth across your service area.",
        highlighted: true,
        features: [
          "30 target keywords",
          "Content strategy & blogs",
          "Authority link building",
          "Technical SEO fixes",
          "Competitor analysis",
          "Bi-weekly reporting",
        ],
      },
      {
        name: "Enterprise",
        price: 1899,
        period: "/mo",
        summary: "National-scale SEO with a dedicated team.",
        features: [
          "75+ target keywords",
          "Full content production",
          "Digital PR & outreach",
          "Programmatic SEO",
          "Dedicated SEO strategist",
          "Weekly reporting",
        ],
      },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Turn followers into a loyal, paying community.",
    description:
      "Full-service social media management and paid campaigns that grow your audience, drive engagement, and convert attention into revenue across every platform.",
    icon: FiShare2,
    accent: "cyan",
    features: [
      "Content calendar & posting",
      "Community management",
      "Paid social ad campaigns",
      "Influencer collaborations",
      "Analytics & growth reporting",
      "Reels & short-form video",
    ],
    benefits: [
      "Consistent, on-brand presence",
      "Real audience & engagement growth",
      "Trackable ROI from paid social",
    ],
    tiers: [
      {
        name: "Starter",
        price: 349,
        period: "/mo",
        summary: "Stay consistent on the platforms that matter.",
        features: [
          "2 platforms managed",
          "12 posts / month",
          "Basic community replies",
          "Monthly report",
        ],
      },
      {
        name: "Professional",
        price: 749,
        period: "/mo",
        summary: "Grow and engage with content plus ads.",
        highlighted: true,
        features: [
          "3 platforms managed",
          "20 posts + 8 reels / month",
          "Paid ad management",
          "Community management",
          "Growth strategy",
          "Bi-weekly reporting",
        ],
      },
      {
        name: "Enterprise",
        price: 1499,
        period: "/mo",
        summary: "A full social team driving measurable revenue.",
        features: [
          "All major platforms",
          "Daily content & reels",
          "Full paid ad scaling",
          "Influencer campaigns",
          "Dedicated social manager",
          "Weekly reporting",
        ],
      },
    ],
  },
  {
    slug: "google-guaranteed-lsa",
    title: "Google Guaranteed (LSA)",
    short: "Pay-per-lead ads with the Google Guaranteed badge.",
    description:
      "We set up and manage your Local Services Ads so you appear at the very top of Google with the trust-building Google Guaranteed badge — and only pay for real, qualified leads.",
    icon: FiShield,
    accent: "teal",
    features: [
      "LSA account setup & verification",
      "Google Guaranteed badge",
      "Background & license checks",
      "Lead dispute management",
      "Bid & budget optimization",
      "Lead tracking & reporting",
    ],
    benefits: [
      "Top-of-page placement above ads",
      "Pay only for qualified leads",
      "Instant trust with the green badge",
    ],
    tiers: [
      {
        name: "Starter",
        price: 249,
        period: "/mo + ad spend",
        summary: "Get verified and live with LSA fast.",
        features: [
          "Account setup & verification",
          "Badge application support",
          "Basic bid management",
          "Monthly report",
        ],
      },
      {
        name: "Professional",
        price: 499,
        period: "/mo + ad spend",
        summary: "Actively managed leads and disputes.",
        highlighted: true,
        features: [
          "Everything in Starter",
          "Weekly bid optimization",
          "Lead dispute handling",
          "Review integration",
          "Competitor monitoring",
          "Bi-weekly reporting",
        ],
      },
      {
        name: "Enterprise",
        price: 999,
        period: "/mo + ad spend",
        summary: "Multi-location LSA scaling & management.",
        features: [
          "Up to 5 locations",
          "Daily optimization",
          "Full dispute management",
          "CRM & call tracking",
          "Dedicated ads manager",
          "Weekly strategy calls",
        ],
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
