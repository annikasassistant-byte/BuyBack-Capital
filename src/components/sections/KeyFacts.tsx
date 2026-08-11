import {
  CalendarCheck2,
  Euro,
  RefreshCcw,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { defaultBuybackContent } from "@/lib/cms/defaults";
import type { KeyFactsContent } from "@/lib/cms/types";

const iconMap: Record<string, LucideIcon> = {
  euro: Euro,
  wallet: Wallet,
  refresh: RefreshCcw,
  calendar: CalendarCheck2,
};

type KeyFactsProps = {
  content?: KeyFactsContent;
};

export function KeyFacts({
  content = defaultBuybackContent.landing.keyFacts,
}: KeyFactsProps) {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto">
        <Reveal>
          <div className="mb-16 text-center">
            <SectionLabel>{content.label}</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              {content.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.facts.map((fact, i) => {
            const Icon = iconMap[fact.iconKey] ?? Euro;
            return (
              <Reveal key={fact.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg">
                  <Icon className="mb-4 h-6 w-6 text-primary" />
                  <p className="mb-1 text-3xl font-bold text-foreground">
                    {fact.value}
                  </p>
                  <p className="mb-2 text-sm font-semibold text-foreground">
                    {fact.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{fact.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {content.highlights.map((highlight) => (
              <div key={highlight.title} className="rounded-2xl bg-primary p-8">
                <h3 className="mb-3 text-xl font-bold text-primary-foreground">
                  {highlight.title}
                </h3>
                <p className="text-primary-foreground/70">{highlight.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
