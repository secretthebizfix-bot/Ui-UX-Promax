import Link from "next/link";
import { MessageCircleQuestion } from "lucide-react";
import { faqs } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/common/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="container-px grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:h-fit">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title={
              <>
                Questions? <span className="text-gradient">Answered.</span>
              </>
            }
            description="Everything you need to know about working with us. Can't find your answer? We're one message away."
          />
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-background/50 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-secondary/50 hover:text-secondary"
          >
            <MessageCircleQuestion className="size-4" />
            Ask us anything
          </Link>
        </div>

        <Reveal direction="up">
          <Accordion type="single" collapsible defaultValue="item-0" className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
