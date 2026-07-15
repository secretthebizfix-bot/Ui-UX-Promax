"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiLoader } from "react-icons/fi";
import { useToast } from "@/components/providers/ToastProvider";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  phone: string;
  business: string;
  service: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  business: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.service) next.service = "Please select a service.";
    if (form.message.trim().length < 10)
      next.message = "Tell us a little more (10+ characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      toast({
        title: "Please check the form",
        description: "A few fields need your attention.",
        variant: "error",
      });
      const firstError = document.querySelector<HTMLElement>("[data-error='true']");
      firstError?.focus();
      return;
    }
    setSubmitting(true);
    // Simulate async submission (wire to your API / email service here).
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setForm(initial);
    toast({
      title: "Message sent!",
      description: "Our team will get back to you within one business day.",
      variant: "success",
    });
  }

  const fieldClass = (hasError?: string) =>
    cn(
      "h-12 w-full rounded-xl border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:ring-2 focus:ring-brand-600/20",
      hasError
        ? "border-red-500/60 focus:border-red-500"
        : "border-border focus:border-brand-600/60"
    );

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass rounded-[2rem] p-6 shadow-soft-lg sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required error={errors.name}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            data-error={!!errors.name}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Cooper"
            className={fieldClass(errors.name)}
          />
        </Field>
        <Field label="Email" required error={errors.email}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            data-error={!!errors.email}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jane@business.com"
            className={fieldClass(errors.email)}
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+1 (555) 000-0000"
            className={fieldClass(errors.phone)}
          />
        </Field>
        <Field label="Business name" error={errors.business}>
          <input
            id="business"
            type="text"
            autoComplete="organization"
            value={form.business}
            onChange={(e) => update("business", e.target.value)}
            placeholder="Cooper & Co."
            className={fieldClass(errors.business)}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Service interested in" required error={errors.service}>
          <select
            id="service"
            data-error={!!errors.service}
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            className={cn(fieldClass(errors.service), "cursor-pointer")}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Multiple / Custom bundle">
              Multiple / Custom bundle
            </option>
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" required error={errors.message}>
          <textarea
            id="message"
            rows={5}
            data-error={!!errors.message}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us about your business and your goals…"
            className={cn(
              "w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:ring-2 focus:ring-brand-600/20",
              errors.message
                ? "border-red-500/60 focus:border-red-500"
                : "border-border focus:border-brand-600/60"
            )}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="group mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-cyanic px-6 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? (
          <>
            <FiLoader className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <FiSend className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We respect your privacy. Your details are never shared.
      </p>
    </motion.form>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  const id = label.toLowerCase().split(" ")[0];
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
        {required && <span className="ml-0.5 text-brand-600">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
