import type { IconType } from "react-icons";
import {
  FiSearch,
  FiPenTool,
  FiCpu,
  FiSend,
  FiBarChart2,
  FiAward,
  FiClock,
  FiUsers,
  FiZap,
  FiHeart,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 480, suffix: "+", label: "Local businesses grown" },
  { value: 12, suffix: "M+", label: "Leads generated" },
  { value: 98, suffix: "%", label: "Client retention rate" },
  { value: 4.9, suffix: "/5", label: "Average client rating" },
];

export type WhyItem = {
  icon: IconType;
  title: string;
  description: string;
};

export const whyChooseUs: WhyItem[] = [
  {
    icon: FiTarget,
    title: "ROI-Obsessed",
    description:
      "Every campaign is tied to real business outcomes — calls, bookings, and revenue, not vanity metrics.",
  },
  {
    icon: FiZap,
    title: "Blazing Execution",
    description:
      "Fast turnarounds and proactive optimization. We move at the speed your growth demands.",
  },
  {
    icon: FiUsers,
    title: "Dedicated Team",
    description:
      "A senior strategist, designer, and marketer assigned to your account — no juniors, no hand-offs.",
  },
  {
    icon: FiTrendingUp,
    title: "Data-Driven",
    description:
      "Transparent dashboards and reporting so you always know exactly what's working and why.",
  },
  {
    icon: FiAward,
    title: "Award-Winning Craft",
    description:
      "Design and development held to Apple, Stripe, and Awwwards-level standards of quality.",
  },
  {
    icon: FiHeart,
    title: "True Partnership",
    description:
      "We treat your business like our own. Long-term relationships over one-off transactions.",
  },
];

export type Step = {
  icon: IconType;
  step: string;
  title: string;
  description: string;
};

export const process: Step[] = [
  {
    icon: FiSearch,
    step: "01",
    title: "Discover & Audit",
    description:
      "We deep-dive into your market, competitors, and current presence to find the biggest growth opportunities.",
  },
  {
    icon: FiPenTool,
    step: "02",
    title: "Strategize & Design",
    description:
      "A custom roadmap and premium creative built around your goals, audience, and brand voice.",
  },
  {
    icon: FiCpu,
    step: "03",
    title: "Build & Launch",
    description:
      "We execute with precision — websites, profiles, campaigns, and creatives that go live fast.",
  },
  {
    icon: FiSend,
    step: "04",
    title: "Optimize & Scale",
    description:
      "Continuous testing and reporting to compound results and scale what converts.",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Marcus Delgado",
    role: "Owner",
    company: "Delgado Plumbing Co.",
    quote:
      "Within 90 days our Google profile went from invisible to the top of the map pack. We're booked out two weeks in advance now.",
    rating: 5,
    initials: "MD",
  },
  {
    name: "Sarah Kim",
    role: "Founder",
    company: "Bloom Dental Studio",
    quote:
      "The new website is stunning and it actually converts. New patient bookings are up 3x since launch. Worth every penny.",
    rating: 5,
    initials: "SK",
  },
  {
    name: "James Okafor",
    role: "CEO",
    company: "Apex HVAC Services",
    quote:
      "Their Google Guaranteed setup was flawless. We now get qualified leads daily and only pay for the real ones. Game changer.",
    rating: 5,
    initials: "JO",
  },
  {
    name: "Elena Rossi",
    role: "Marketing Lead",
    company: "Rossi Family Restaurants",
    quote:
      "Our social media finally looks premium and on-brand. Engagement doubled and we're seeing real foot traffic from it.",
    rating: 5,
    initials: "ER",
  },
  {
    name: "David Thompson",
    role: "Owner",
    company: "Thompson Law Group",
    quote:
      "SEO results that actually compound. We rank page one for our most valuable keywords and the leads keep coming.",
    rating: 5,
    initials: "DT",
  },
  {
    name: "Priya Nair",
    role: "Director",
    company: "Serenity Wellness Spa",
    quote:
      "From branding to the website to ads, everything feels cohesive and luxurious. Our clients notice the difference immediately.",
    rating: 5,
    initials: "PN",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "How quickly will I see results?",
    answer:
      "It depends on the service. Google Business Profile and paid campaigns (LSA, social ads) can drive leads within days. SEO and organic growth typically compound over 3–6 months. We set clear expectations and milestones for every engagement.",
  },
  {
    question: "Do you work with businesses in my industry?",
    answer:
      "We work with local service businesses across home services, healthcare, legal, hospitality, wellness, and retail. Our strategies are tailored to your specific market and competitive landscape.",
  },
  {
    question: "Are there long-term contracts?",
    answer:
      "Our monthly plans are flexible with no long lock-ins — most run month-to-month after an initial 90-day ramp. One-time projects like websites are milestone-based. We earn your business every month.",
  },
  {
    question: "How is reporting handled?",
    answer:
      "You get a transparent dashboard plus regular reports (bi-weekly or weekly depending on your plan) showing rankings, leads, traffic, and ROI. No jargon — just clear results and next steps.",
  },
  {
    question: "Can I combine multiple services?",
    answer:
      "Absolutely — and we recommend it. Our services compound: a fast website plus optimized Google profile plus SEO and ads create a complete growth engine. We offer custom bundles with preferred pricing.",
  },
  {
    question: "What makes you different from other agencies?",
    answer:
      "Award-winning design quality, senior-only teams, radical transparency, and a relentless focus on real business outcomes. We build long-term partnerships, not one-off projects.",
  },
];

export type Project = {
  title: string;
  category: "Website" | "Branding" | "SEO" | "Ads" | "Social";
  result: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    title: "Delgado Plumbing",
    category: "SEO",
    result: "+312% organic leads",
    gradient: "from-brand-600 to-cyanic",
  },
  {
    title: "Bloom Dental Studio",
    category: "Website",
    result: "3x patient bookings",
    gradient: "from-cyanic to-teal",
  },
  {
    title: "Apex HVAC",
    category: "Ads",
    result: "$14 cost per lead",
    gradient: "from-teal to-brand-600",
  },
  {
    title: "Rossi Restaurants",
    category: "Social",
    result: "2x engagement rate",
    gradient: "from-brand-700 to-cyanic",
  },
  {
    title: "Thompson Law",
    category: "SEO",
    result: "#1 for 40+ keywords",
    gradient: "from-cyanic to-brand-600",
  },
  {
    title: "Serenity Spa",
    category: "Branding",
    result: "Full rebrand + 5.0 rating",
    gradient: "from-teal to-cyanic",
  },
];

export const trustedBy = [
  "Delgado Plumbing",
  "Bloom Dental",
  "Apex HVAC",
  "Rossi Restaurants",
  "Thompson Law",
  "Serenity Spa",
  "Northgate Realty",
  "Summit Fitness",
];

export const highlights = [
  { icon: FiClock, label: "24h avg. response" },
  { icon: FiBarChart2, label: "Transparent reporting" },
  { icon: FiAward, label: "Award-winning design" },
];
