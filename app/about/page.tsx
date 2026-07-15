import Link from "next/link";
import type { Metadata } from "next";
import { Target, Eye, Heart, Zap, Users, Award } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { PageHeader } from "@/components/sections/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/common/reveal";
import { Counter } from "@/components/common/counter";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Cta } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "About",
  path: "/about",
  description:
    "Better Business Solutions is a full-service digital agency on a mission to help local businesses grow with premium marketing that delivers real, measurable results.",
});

const values = [
  { icon: Heart, title: "Client outcomes first", description: "Your growth is our scoreboard. We win when you win — measured in leads and revenue." },
  { icon: Zap, title: "Move fast, stay premium", description: "Startup speed with agency-grade craft. We ship quickly without cutting corners." },
  { icon: Users, title: "Radical transparency", description: "Clear reporting, honest advice, and no jargon. You always know what's happening and why." },
  { icon: Award, title: "Relentless excellence", description: "We hold every deliverable to an award-winning standard — because your brand deserves it." },
];

const timeline = [
  { year: "2019", title: "The beginning", description: "Founded with a simple belief: local businesses deserve marketing as good as the big brands." },
  { year: "2021", title: "Full-service growth", description: "Expanded from websites into SEO, Google Business Profile, and paid local channels." },
  { year: "2023", title: "Google Guaranteed", description: "Became a go-to partner for Local Services Ads, cutting client lead costs dramatically." },
  { year: "2025", title: "480+ businesses", description: "Grew to serve hundreds of local businesses nationwide with a 4.9★ average rating." },
];

const aboutStats = [
  { value: 480, suffix: "+", label: "Businesses served" },
  { value: 6, suffix: "+", label: "Years of growth" },
  { value: 12, suffix: "M+", label: "Leads generated" },
  { value: 98, suffix: "%", label: "Client retention" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={
          <>
            We help local businesses <span className="text-gradient">grow with confidence</span>
          </>
        }
        description={`Since ${SITE.founded}, Better Business Solutions has been the growth partner local businesses trust — combining premium design, engineering, and marketing to turn searches into customers.`}
      >
        <Button asChild size="lg" shimmer>
          <Link href="/contact">Work with us</Link>
        </Button>
      </PageHeader>

      {/* Stats */}
      <section className="py-8">
        <div className="container-px">
          <div className="grid gap-4 rounded-4xl border border-border/70 bg-card/60 p-8 shadow-premium backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
                <span className="font-display text-4xl font-bold tracking-tight text-gradient">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container-px grid gap-6 lg:grid-cols-2">
          <Reveal direction="up">
            <div className="flex h-full flex-col gap-5 rounded-4xl border border-border/70 bg-card p-8 shadow-premium lg:p-10">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-accent text-white shadow-glow">
                <Target className="size-6" />
              </span>
              <h2 className="font-display text-2xl font-semibold tracking-tight">Our mission</h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                To help local businesses grow through digital marketing that actually works — premium
                websites, SEO, Google Business Profile optimization, Google Guaranteed ads, design,
                and social media that generate real customers, not just clicks. We level the playing
                field so local businesses can compete with anyone.
              </p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.08}>
            <div className="flex h-full flex-col gap-5 rounded-4xl border border-white/10 bg-primary p-8 text-primary-foreground shadow-premium lg:p-10">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-highlight ring-1 ring-inset ring-white/15">
                <Eye className="size-6" />
              </span>
              <h2 className="font-display text-2xl font-semibold tracking-tight">Our vision</h2>
              <p className="text-pretty leading-relaxed text-primary-foreground/80">
                A world where every local business — no matter its size or budget — has access to
                world-class marketing. We&apos;re building the most trusted growth partner for local
                businesses, where craft, transparency, and results are the standard, not the
                exception.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container-px flex flex-col gap-14">
          <SectionHeading
            eyebrow="Our values"
            title="What we stand for"
            description="The principles that guide every project, every campaign, and every client relationship."
          />
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <RevealItem key={value.title}>
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-card/60 p-7 shadow-premium backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-secondary/40">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/15 to-accent/15 text-secondary ring-1 ring-inset ring-secondary/20">
                    <value.icon className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold tracking-tight">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container-px flex flex-col gap-14">
          <SectionHeading
            eyebrow="Our journey"
            title="From a bold idea to a trusted partner"
            description="A few milestones on the road to helping hundreds of local businesses grow."
          />
          <div className="relative mx-auto max-w-3xl">
            <div
              aria-hidden
              className="absolute left-[27px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-secondary via-accent to-highlight sm:left-1/2 sm:-translate-x-1/2"
            />
            <div className="flex flex-col gap-8">
              {timeline.map((item, i) => (
                <Reveal key={item.year} direction="up" delay={i * 0.06}>
                  <div
                    className={cn(
                      "relative flex items-start gap-6 sm:w-1/2",
                      i % 2 === 0 ? "sm:ml-auto sm:flex-row-reverse sm:pl-8 sm:text-right" : "sm:pr-8",
                    )}
                  >
                    <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-accent font-display text-sm font-bold text-white shadow-glow">
                      {item.year}
                    </span>
                    <div className="flex flex-col gap-1.5 rounded-2xl border border-border/70 bg-card/60 p-5 shadow-premium backdrop-blur">
                      <h3 className="font-display text-lg font-semibold tracking-tight">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Cta />
    </>
  );
}
