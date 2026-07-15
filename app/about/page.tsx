import type { Metadata } from "next";
import { FiTarget, FiEye, FiArrowRight } from "react-icons/fi";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { Button } from "@/components/ui/Button";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { stats } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Better Business Solutions — a senior-only digital agency helping local businesses dominate online with design, SEO, and marketing that drives real revenue.",
  alternates: { canonical: "/about" },
};

const timeline = [
  {
    year: "2018",
    title: "The beginning",
    description:
      "Founded with a simple belief: local businesses deserve the same world-class marketing as big brands.",
  },
  {
    year: "2020",
    title: "Full-service expansion",
    description:
      "Added web development, SEO, and Google Guaranteed to become a true one-stop growth partner.",
  },
  {
    year: "2022",
    title: "Award-winning craft",
    description:
      "Our design and development work reached Awwwards-level standards, setting us apart from templates.",
  },
  {
    year: "2024",
    title: "480+ businesses grown",
    description:
      "Crossed a major milestone — generating over 12 million leads for local businesses nationwide.",
  },
];

const values = [
  { title: "Transparency", text: "Clear reporting and honest advice, always." },
  { title: "Excellence", text: "World-class craft in everything we ship." },
  { title: "Partnership", text: "Your growth is our only success metric." },
  { title: "Speed", text: "We move fast and optimize relentlessly." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            We help local businesses{" "}
            <span className="text-gradient">win online</span>
          </>
        }
        description="Better Business Solutions is a senior-only digital agency obsessed with one thing: turning your online presence into a predictable source of real customers."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="section !pt-6">
        <div className="container-xl grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-brand-gradient opacity-10 blur-2xl" />
              <div className="glass relative overflow-hidden rounded-[2rem] p-8 shadow-soft-lg">
                <div className="grid grid-cols-2 gap-5">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl bg-card/60 p-5 text-center"
                    >
                      <p className="text-3xl font-bold text-gradient">
                        <Counter
                          value={s.value}
                          suffix={s.suffix}
                          decimals={Number.isInteger(s.value) ? 0 : 1}
                        />
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow">Our Story</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Big-brand marketing, built for local businesses
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  We started Better Business Solutions because too many great
                  local businesses were invisible online — losing customers to
                  competitors with worse products but better marketing.
                </p>
                <p>
                  Today, our senior team of strategists, designers, and marketers
                  delivers the kind of premium, results-driven work usually
                  reserved for enterprise brands — at a scale that works for
                  Main Street.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8">
                <Button href="/services">
                  Explore our services
                  <FiArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section !pt-0">
        <div className="container-xl grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-8 shadow-soft sm:p-10">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyanic text-white shadow-glow">
                <FiTarget className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-2xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To empower every local business with world-class digital
                marketing that generates real, measurable growth — leveling the
                playing field against bigger competitors.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass h-full rounded-3xl p-8 shadow-soft sm:p-10">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyanic to-teal text-white shadow-glow-cyan">
                <FiEye className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-2xl font-bold text-foreground">
                Our Vision
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                A world where any local business — regardless of size or budget —
                can compete and win online, powered by design and marketing that
                rivals the best brands on earth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section !pt-0">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Our Journey"
            title={
              <>
                Milestones on the road to{" "}
                <span className="text-gradient">real impact</span>
              </>
            }
          />
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-600 via-cyanic to-teal sm:left-1/2 sm:-translate-x-1/2" />
            <RevealGroup className="space-y-10">
              {timeline.map((item, i) => (
                <RevealItem key={item.year}>
                  <div
                    className={`relative flex flex-col gap-4 pl-12 sm:w-1/2 sm:pl-0 ${
                      i % 2 === 0
                        ? "sm:ml-0 sm:pr-12 sm:text-right"
                        : "sm:ml-auto sm:pl-12"
                    }`}
                  >
                    <span
                      className={`absolute left-4 top-1.5 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-600 to-cyanic ring-4 ring-background sm:left-auto ${
                        i % 2 === 0 ? "sm:-right-2 sm:left-auto" : "sm:-left-2"
                      }`}
                    />
                    <div className="glass rounded-2xl p-6 shadow-soft">
                      <span className="text-sm font-bold text-gradient">
                        {item.year}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section !pt-0">
        <div className="container-xl">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <RevealItem key={v.title}>
                <div className="rounded-3xl border border-border bg-card/40 p-6 text-center transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-gradient">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <WhyChooseUs />
      <ContactCTA />
    </>
  );
}
