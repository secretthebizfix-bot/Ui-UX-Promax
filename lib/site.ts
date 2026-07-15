/** Central site configuration used across metadata, footer, schema, and contact. */
export const site = {
  name: "Better Business Solutions",
  shortName: "BizFix",
  legalName: "Better Business Solutions LLC",
  tagline: "Helping Local Businesses Dominate Online",
  description:
    "Professional websites, Google Business Profile optimization, SEO, Google Guaranteed Ads, Graphic Design & Social Media Marketing that generate real customers.",
  url: "https://www.thebizfix.com",
  ogImage: "/og-image.svg",
  locale: "en_US",
  email: "support@thebizfix.com",
  phone: "+1 818 570 0968",
  phoneHref: "tel:+18185700968",
  address: {
    street: "15442 Ventura Blvd Ste 201",
    city: "Sherman Oaks",
    region: "CA",
    postalCode: "91403",
    country: "United States",
    full: "15442 Ventura Blvd Ste 201, Sherman Oaks, CA 91403, United States",
  },
  maps: "https://www.google.com/maps/search/?api=1&query=15442+Ventura+Blvd+Ste+201+Sherman+Oaks+CA+91403",
  mapsEmbed:
    "https://maps.google.com/maps?q=15442%20Ventura%20Blvd%20Ste%20201%20Sherman%20Oaks%20CA%2091403&t=&z=15&ie=UTF8&iwloc=&output=embed",
  hours: "Mon – Fri: 9:00 AM – 6:00 PM PST",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
] as const;
