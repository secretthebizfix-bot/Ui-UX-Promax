import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Stats } from "@/components/sections/Stats";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { PricingSection } from "@/components/sections/PricingSection";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Stats />
      <WhyChooseUs />
      <ServicesShowcase />
      <PricingSection />
      <Process />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
