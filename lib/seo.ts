import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

interface PageSeo {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
}

export function createMetadata({
  title,
  description = SITE.description,
  path = "/",
  keywords = [],
}: PageSeo): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = path === "/" ? `${SITE.name} — ${SITE.tagline}` : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "digital marketing agency",
      "local SEO",
      "Google Business Profile optimization",
      "Google Guaranteed",
      "Local Services Ads",
      "web design",
      "social media marketing",
      "graphic design",
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      locale: "en_US",
      images: [{ url: "/og.svg", width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og.svg"],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    description: SITE.description,
    priceRange: "$$",
    foundingDate: SITE.founded,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line1,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    areaServed: "United States",
    sameAs: Object.values(SITE.socials),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "480",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
