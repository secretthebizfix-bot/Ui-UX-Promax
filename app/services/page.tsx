import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { Process } from "@/components/sections/Process";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { services } from "@/lib/data/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full-service digital marketing: Google Business Profile, website development, SEO, Google Guaranteed (LSA), graphic design, and social media marketing.",
  alternates: { canonical: "/services" },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.short,
      provider: { "@type": "Organization", name: site.name },
      url: `${site.url}/services#${s.slug}`,
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything you need to{" "}
            <span className="text-gradient">grow online</span>
          </>
        }
        description="Six specialized services, engineered to work together as one complete customer-generating engine for your local business."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <div>
        {services.map((service, i) => (
          <ServiceDetail key={service.slug} slug={service.slug} index={i} />
        ))}
      </div>

      <Process />
      <ContactCTA />
    </>
  );
}
