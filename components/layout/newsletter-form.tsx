"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    // Simulated subscribe — wire to your ESP / API route in production.
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setEmail("");
    toast.success("You're subscribed! Welcome aboard. 🎉");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
      <label htmlFor="newsletter-email" className="text-sm font-medium text-foreground">
        Growth tips, in your inbox
      </label>
      <div className="flex gap-2">
        <Input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          placeholder="you@business.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-11"
        />
        <button
          type="submit"
          disabled={loading}
          aria-label="Subscribe"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-secondary to-accent text-white shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-70"
        >
          {loading ? <Loader2 className="size-5 animate-spin" /> : <ArrowRight className="size-5" />}
        </button>
      </div>
      <p className="text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
    </form>
  );
}
