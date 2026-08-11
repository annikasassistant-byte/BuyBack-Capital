import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { defaultBuybackContent } from "@/lib/cms/defaults";
import type { InvestmentStructureContent } from "@/lib/cms/types";

type InvestmentStructureProps = {
  content?: InvestmentStructureContent;
};

export function InvestmentStructure({
  content = defaultBuybackContent.landing.investmentStructure,
}: InvestmentStructureProps) {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto">
        <Reveal>
          <div className="mb-16 text-center">
            <SectionLabel>{content.label}</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              {content.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {content.subtitleBefore}{" "}
              <strong className="text-foreground">
                {content.subtitleVolume}
              </strong>{" "}
              {content.subtitleAfter}
            </p>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-6 text-xl font-bold text-foreground">
                {content.detailsTitle}
              </h3>
              <div className="space-y-4">
                {content.details.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-primary p-8 text-center text-primary-foreground">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/50">
                {content.exampleEyebrow}
              </p>
              <p className="mb-1 text-5xl font-bold text-primary-foreground">
                {content.examplePrincipal}
              </p>
              <p className="mb-6 text-lg text-primary-foreground/70">
                {content.examplePrincipalLabel}
              </p>
              <div className="mb-6 h-px w-full bg-primary-foreground/20" />
              <div className="grid w-full grid-cols-2 gap-6">
                <div>
                  <p className="text-2xl font-bold">{content.exampleMonthly}</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    {content.exampleMonthlyLabel}
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{content.exampleYearly}</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    {content.exampleYearlyLabel}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-xs text-primary-foreground/50">
                {content.exampleFootnote}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
