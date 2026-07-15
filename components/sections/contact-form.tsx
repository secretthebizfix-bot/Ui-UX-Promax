"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface FormState {
  name: string;
  email: string;
  phone: string;
  business: string;
  service: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  business: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (form.phone.replace(/\D/g, "").length < 7) next.phone = "Enter a valid phone number.";
    if (form.business.trim().length < 2) next.business = "Please enter your business name.";
    if (!form.service) next.service = "Please choose a service.";
    if (form.message.trim().length < 10) next.message = "Tell us a bit more (10+ characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setLoading(true);
    // Simulated submit — wire to an API route / CRM / email service in production.
    await new Promise((r) => setTimeout(r, 1100));
    setLoading(false);
    setSent(true);
    setForm(initialState);
    toast.success("Thanks! We'll be in touch within one business day.");
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-5 rounded-3xl border border-border/70 bg-card p-10 text-center shadow-premium"
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-highlight text-white shadow-glow">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="font-display text-2xl font-semibold tracking-tight">Message sent!</h3>
        <p className="max-w-sm text-muted-foreground">
          Thanks for reaching out. A growth specialist will get back to you within one business day.
        </p>
        <Button variant="outline" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-3xl border border-border/70 bg-card p-7 shadow-premium sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" error={errors.name} required>
          <Input id="name" name="name" autoComplete="name" placeholder="Jane Doe" value={form.name} onChange={update("name")} aria-invalid={!!errors.name} />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email} required>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="jane@business.com" value={form.email} onChange={update("email")} aria-invalid={!!errors.email} />
        </Field>
        <Field label="Phone" htmlFor="phone" error={errors.phone} required>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={update("phone")} aria-invalid={!!errors.phone} />
        </Field>
        <Field label="Business name" htmlFor="business" error={errors.business} required>
          <Input id="business" name="business" autoComplete="organization" placeholder="Acme Local Co." value={form.business} onChange={update("business")} aria-invalid={!!errors.business} />
        </Field>
      </div>

      <Field label="Service interested in" htmlFor="service" error={errors.service} required>
        <Select id="service" name="service" value={form.service} onChange={update("service")} aria-invalid={!!errors.service}>
          <option value="" disabled>
            Select a service…
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Multiple / Not sure">Multiple / Not sure</option>
        </Select>
      </Field>

      <Field label="How can we help?" htmlFor="message" error={errors.message} required>
        <Textarea id="message" name="message" placeholder="Tell us about your business and your goals…" value={form.message} onChange={update("message")} aria-invalid={!!errors.message} />
      </Field>

      <Button type="submit" size="lg" shimmer disabled={loading} className="w-full">
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <Send className="size-4" />
          </>
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        By submitting, you agree to our{" "}
        <a href="/privacy-policy" className="text-secondary hover:underline">
          Privacy Policy
        </a>
        . We&apos;ll never share your information.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </Label>
      {children}
      {error && (
        <p role="alert" className="text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
