import type {
  Testimonial,
  FaqItem,
  ProcessStep,
  PortfolioItem,
  Stat,
} from "@/types";

export const stats: Stat[] = [
  { value: 480, suffix: "+", label: "Local businesses served" },
  { value: 12, suffix: "M+", label: "Leads generated" },
  { value: 240, suffix: "%", label: "Avg. organic growth" },
  { value: 4.9, suffix: "★", label: "Average client rating" },
];

export const trustedBy: string[] = [
  "Northside Dental",
  "Peak Roofing Co.",
  "Verde Landscaping",
  "Harbor Law Group",
  "Bright Smile Spa",
  "Summit HVAC",
  "Coastal Realty",
  "Iron & Oak Fitness",
];

export const whyChooseUs = [
  {
    title: "ROI-obsessed, not vanity metrics",
    description:
      "Every campaign is tied to leads, calls, and revenue — not likes. You get a dashboard that shows exactly what your marketing earns.",
  },
  {
    title: "One team, every channel",
    description:
      "Websites, SEO, GBP, LSA, design, and social under one roof — perfectly aligned, so your brand compounds instead of competing with itself.",
  },
  {
    title: "Senior specialists on your account",
    description:
      "No junior hand-offs. Real strategists who've grown hundreds of local businesses work directly on your growth.",
  },
  {
    title: "Transparent, no lock-in contracts",
    description:
      "Clear reporting, flat pricing, and month-to-month plans. We keep your business because we perform — not because you're trapped.",
  },
  {
    title: "Local search experts",
    description:
      "The map pack, Google Guaranteed, and near-me searches are our home turf. We know exactly how local customers find and choose you.",
  },
  {
    title: "Fast, premium execution",
    description:
      "Launches in days, not months. Award-level design and engineering delivered with startup speed.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We audit your online presence, competitors, and goals to find the fastest paths to more customers.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "You get a custom growth roadmap with clear priorities, timelines, and the metrics we'll move together.",
  },
  {
    step: "03",
    title: "Build & Launch",
    description:
      "Our specialists design, build, and deploy — websites, profiles, campaigns, and creative that convert.",
  },
  {
    step: "04",
    title: "Optimize & Scale",
    description:
      "We track, test, and refine every month, then double down on what drives the most revenue for you.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Marcus Bennett",
    role: "Owner",
    company: "Peak Roofing Co.",
    initials: "MB",
    rating: 5,
    quote:
      "Within 90 days we went from page three to the top of the map pack. Our phone hasn't stopped ringing. Best marketing decision we've ever made.",
  },
  {
    name: "Ana López",
    role: "Founder",
    company: "Bright Smile Spa",
    initials: "AL",
    rating: 5,
    quote:
      "The new website is stunning and books appointments while I sleep. Bounce rate dropped, and new-patient calls are up over 60%.",
  },
  {
    name: "David Kim",
    role: "Managing Partner",
    company: "Harbor Law Group",
    initials: "DK",
    rating: 5,
    quote:
      "Their Google Guaranteed and LSA setup cut our cost per lead nearly in half. The green badge alone changed how prospects trust us.",
  },
  {
    name: "Rachel Turner",
    role: "Director",
    company: "Verde Landscaping",
    initials: "RT",
    rating: 5,
    quote:
      "Finally an agency that reports on revenue, not vanity metrics. Organic traffic more than tripled and the leads are actually qualified.",
  },
  {
    name: "James Whitfield",
    role: "CEO",
    company: "Summit HVAC",
    initials: "JW",
    rating: 5,
    quote:
      "The social content makes us look like a national brand. Engagement is up, and we're booking jobs directly from Instagram now.",
  },
  {
    name: "Priya Nair",
    role: "Owner",
    company: "Coastal Realty",
    initials: "PN",
    rating: 5,
    quote:
      "From branding to SEO, everything finally feels cohesive and premium. We look like the most established agency in our city.",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "How quickly will I see results?",
    answer:
      "It depends on the service. Google Business Profile and LSA can drive calls within the first 2–4 weeks, while SEO typically compounds over 3–6 months. We set clear expectations up front and report progress every month so you always know exactly where things stand.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. Most of our plans are month-to-month. We believe in earning your business through results, not locking you into contracts. If a project has a build phase (like a website), we'll outline the scope and timeline clearly before we begin.",
  },
  {
    question: "Can I combine multiple services?",
    answer:
      "Absolutely — and that's where the magic happens. When your website, SEO, Google Business Profile, LSA, design, and social all work together, results compound. We offer custom bundles with meaningful discounts for multi-service clients.",
  },
  {
    question: "What size businesses do you work with?",
    answer:
      "We specialize in local and small-to-mid-sized businesses — from single-location service providers to multi-location franchises. Our plans scale from Starter to Enterprise so you only pay for what you need at each stage of growth.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Most services are a flat monthly rate with transparent, all-inclusive pricing — no surprise fees. Website projects include a one-time build plus an optional care plan. You can see exact figures on our Pricing page, and custom quotes are available for larger scopes.",
  },
  {
    question: "Who actually works on my account?",
    answer:
      "Senior specialists — not junior hand-offs. You'll have a dedicated strategist as your point of contact, backed by expert designers, developers, and marketers who focus on their craft. Higher-tier plans include more frequent strategy calls.",
  },
  {
    question: "How do you report on results?",
    answer:
      "You get a live dashboard plus a clear monthly report focused on the metrics that matter: calls, leads, rankings, traffic, and ROI. We translate the data into plain language and concrete next steps — no jargon, no fluff.",
  },
  {
    question: "What makes Better Business Solutions different?",
    answer:
      "We combine award-level design and engineering with a relentless focus on ROI, all under one roof. Most agencies do one thing; we align every channel so your brand grows as a system. That's how local businesses go from invisible to unavoidable.",
  },
];

export const portfolio: PortfolioItem[] = [
  {
    title: "Peak Roofing Co.",
    category: "Website + Local SEO",
    result: "Map-pack #1 in 3 months",
    metric: "+180% calls",
    gradient: "from-secondary to-accent",
  },
  {
    title: "Bright Smile Spa",
    category: "Website + GBP",
    result: "Online bookings on autopilot",
    metric: "+64% conversions",
    gradient: "from-accent to-highlight",
  },
  {
    title: "Harbor Law Group",
    category: "Google Guaranteed (LSA)",
    result: "Lead cost cut in half",
    metric: "-42% CPL",
    gradient: "from-highlight to-secondary",
  },
  {
    title: "Verde Landscaping",
    category: "SEO",
    result: "Ranked 500+ keywords",
    metric: "+240% traffic",
    gradient: "from-secondary via-accent to-highlight",
  },
  {
    title: "Summit HVAC",
    category: "Social Media Marketing",
    result: "Booked jobs from Reels",
    metric: "4.8x ROAS",
    gradient: "from-accent to-secondary",
  },
  {
    title: "Coastal Realty",
    category: "Branding + Web",
    result: "A premium market presence",
    metric: "+72% engagement",
    gradient: "from-highlight to-accent",
  },
];

export const portfolioCategories = [
  "All",
  "Website",
  "SEO",
  "GBP",
  "LSA",
  "Social",
  "Branding",
];

export const stats2 = stats;
