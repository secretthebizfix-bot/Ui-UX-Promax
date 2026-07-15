import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ServicesSection } from "@/components/sections/services-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { Process } from "@/components/sections/process";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { JsonLd } from "@/components/common/json-ld";
import { faqSchema } from "@/lib/seo";
import { faqs } from "@/data/site-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <Hero />
      <TrustedBy />
      <WhyChooseUs />
      <ServicesSection />
      <PricingSection />
      <Process />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
