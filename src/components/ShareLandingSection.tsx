"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Copy, ExternalLink, Share2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function ShareLandingSection() {
  const [copied, setCopied] = useState(false);

  function getUrl() {
    return typeof window !== "undefined" ? `${window.location.origin}/` : "/";
  }

  async function copyLink() {
    const url = getUrl();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Landing-Page-Link kopieren:", url);
    }
  }

  async function shareLink() {
    const url = getUrl();
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
    <section className="bg-background py-24">
      <div className="container mx-auto">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-10">
                <SectionLabel>Weiterempfehlen</SectionLabel>
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                  Landing Page teilen
                </h2>
                <p className="max-w-xl text-muted-foreground">
                  Wenn du BuyBack Capital an jemanden weitergeben möchtest,
                  teile bitte diese Landing Page — nicht das Investor-Dashboard.
                  So bleibt der Einstieg klar und einfach weiterleitbar.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={shareLink}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    <Share2 className="h-4 w-4" />
                    Landing Page teilen
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
                    {copied ? "Link kopiert" : "Link kopieren"}
                  </button>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Öffnen
                  </Link>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-primary p-8 text-primary-foreground md:p-10">
                <p className="text-xs font-medium uppercase tracking-widest text-primary-foreground/60">
                  BuyBack Capital
                </p>
                <p className="mt-4 text-2xl font-bold leading-snug md:text-3xl">
                  Der richtige Link für Interessenten.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
                  Öffentliche Pitch-Seite mit Konditionen, Sicherheitsstruktur
                  und Kontakt — ideal zum Weiterleiten.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
