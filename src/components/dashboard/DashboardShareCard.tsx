"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Copy, ExternalLink, Share2 } from "lucide-react";

export function DashboardShareCard() {
  const [copied, setCopied] = useState(false);

  function getLandingUrl() {
    return typeof window !== "undefined" ? `${window.location.origin}/` : "/";
  }

  async function copyLink() {
    const url = getLandingUrl();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Landing-Page-Link kopieren:", url);
    }
  }

  async function shareLink() {
    const url = getLandingUrl();
    if (navigator.share) {
      try {
        await navigator.share({
          title: "BuyBack Capital",
          text: "BuyBack Capital – Working Capital Financing (Private Debt)",
          url,
        });
        return;
      } catch {
        // cancelled
      }
    }
    await copyLink();
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
        <div className="p-8 md:p-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Für Weiterempfehlungen
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Landing Page öffnen &amp; teilen
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Wenn du BuyBack Capital an jemanden weitergeben möchtest, nutze die
            öffentliche Landing Page statt dieses Dashboards. Dort finden
            Interessenten Konditionen, Sicherheitsstruktur und Kontakt auf einen
            Blick.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" />
              Zur Landing Page
            </Link>
            <button
              type="button"
              onClick={shareLink}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              <Share2 className="h-4 w-4" />
              Teilen
            </button>
            <button
              type="button"
              onClick={copyLink}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              {copied ? (
                <Check className="h-4 w-4 text-primary" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copied ? "Kopiert" : "Link kopieren"}
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-primary p-8 text-primary-foreground md:p-10">
          <p className="text-xs font-medium uppercase tracking-widest text-primary-foreground/60">
            BuyBack Capital
          </p>
          <p className="mt-4 text-2xl font-bold leading-snug">
            Öffentliche Pitch-Seite weiterleiten — nicht das Dashboard.
          </p>
        </div>
      </div>
    </section>
  );
}
