export const SITE = {
  name: "Better Business Solutions",
  shortName: "BBS",
  legalName: "Better Business Solutions LLC",
  domain: "https://www.thebizfix.com",
  url: "https://www.thebizfix.com",
  tagline: "Helping Local Businesses Dominate Online",
  description:
    "Better Business Solutions is a full-service digital agency helping local businesses grow with premium websites, Google Business Profile optimization, SEO, Google Guaranteed (LSA) ads, graphic design, and social media marketing.",
  email: "support@thebizfix.com",
  phone: "+1 818 570 0968",
  phoneHref: "tel:+18185700968",
  address: {
    line1: "15442 Ventura Blvd Ste 201",
    city: "Sherman Oaks",
    state: "CA",
    zip: "91403",
    country: "United States",
    full: "15442 Ventura Blvd Ste 201, Sherman Oaks, CA 91403, United States",
  },
  // Google Maps embed centred on the Ventura Blvd address (keyless embed endpoint).
  mapEmbed:
    "https://maps.google.com/maps?q=15442%20Ventura%20Blvd%20Ste%20201%2C%20Sherman%20Oaks%2C%20CA%2091403&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapLink: "https://maps.google.com/?q=15442+Ventura+Blvd+Ste+201,+Sherman+Oaks,+CA+91403",
  founded: "2019",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
    youtube: "https://youtube.com",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
