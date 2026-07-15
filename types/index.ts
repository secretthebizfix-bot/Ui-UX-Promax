import type { ComponentType, SVGProps } from "react";

export type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

export interface PlanTier {
  name: "Starter" | "Professional" | "Enterprise";
  price: { monthly: number; oneTime?: number };
  cadence: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: IconType;
  accent: string; // tailwind gradient stops e.g. "from-secondary to-accent"
  features: string[];
  benefits: string[];
  outcomes: { label: string; value: string }[];
  plans: PlanTier[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  result: string;
  metric: string;
  gradient: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}
