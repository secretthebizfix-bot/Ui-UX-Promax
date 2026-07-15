"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FiArrowRight } from "react-icons/fi";
import { services } from "@/lib/data/services";

export function ServicesShowcase() {
  return (
    <section id="services" className="section relative">
      <div className="container-xl">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Full-service growth,{" "}
              <span className="text-gradient">under one roof</span>
            </>
          }
          description="Six specialized services engineered to work together as a complete customer-generating engine for your local business."
        />

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem key={service.slug} className="h-full">
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-14 flex justify-center">
          <Button href="/services" size="lg" variant="outline">
            View all services
            <FiArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
