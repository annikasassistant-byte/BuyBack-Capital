"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Copy, ExternalLink, Share2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { defaultBuybackContent } from "@/lib/cms/defaults";
import type { ShareLandingContent, ShareMetaContent } from "@/lib/cms/types";

type ShareLandingSectionProps = {
  content?: ShareLandingContent;
  share?: ShareMetaContent;
};

export function ShareLandingSection({
  content = defaultBuybackContent.landing.share,
  share = defaultBuybackContent.site.share,
}: ShareLandingSectionProps) {
  const [copied, setCopied] = useState(false);

  function getUrl() {
    if (typeof window === "undefined") return share.path || "/";
    return `${window.location.origin}${share.path || "/"}`;
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
          title: share.title,
          text: share.text,
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
                <SectionLabel>{content.label}</SectionLabel>
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                  {content.title}
                </h2>
                <p className="max-w-xl text-muted-foreground">{content.body}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={shareLink}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    <Share2 className="h-4 w-4" />
                    {content.shareButton}
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
                    {copied ? content.copiedButton : content.copyButton}
                  </button>
                  <Link
                    href={share.path || "/"}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {content.openButton}
                  </Link>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-primary p-8 text-primary-foreground md:p-10">
                <p className="text-xs font-medium uppercase tracking-widest text-primary-foreground/60">
                  {content.panelEyebrow}
                </p>
                <p className="mt-4 text-2xl font-bold leading-snug md:text-3xl">
                  {content.panelTitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
                  {content.panelBody}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
