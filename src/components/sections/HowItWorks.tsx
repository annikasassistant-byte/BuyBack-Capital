import { Building2, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { defaultBuybackContent } from "@/lib/cms/defaults";
import type { HowItWorksContent } from "@/lib/cms/types";

type HowItWorksProps = {
  content?: HowItWorksContent;
};

function IntroWithEmphasis({
  intro,
  emphasis,
}: {
  intro: string;
  emphasis: string;
}) {
  if (!emphasis || !intro.includes(emphasis)) {
    return <>{intro}</>;
  }

  const parts = intro.split(emphasis);
  return (
    <>
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 ? (
            <strong className="text-foreground">{emphasis}</strong>
          ) : null}
        </span>
      ))}
    </>
  );
}

export function HowItWorks({
  content = defaultBuybackContent.landing.howItWorks,
}: HowItWorksProps) {
  return (
    <section id="how-it-works" className="bg-background py-24">
      <div className="container mx-auto">
        <Reveal>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <SectionLabel>{content.label}</SectionLabel>
            <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              {content.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              <IntroWithEmphasis
                intro={content.intro}
                emphasis={content.introEmphasis}
              />
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mb-20 max-w-4xl">
            <div className="grid items-stretch gap-4 md:grid-cols-4">
              {content.steps.map((step) => (
                <div
                  key={step.title}
                  className="flex h-full flex-col justify-center rounded-2xl bg-secondary p-6 text-center"
                >
                  <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {step.label}
                  </p>
                  <p className="font-bold text-secondary-foreground">
                    {step.title}
                  </p>
                  {step.value ? (
                    <p className="mt-1 text-sm font-semibold text-primary">
                      {step.value}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mb-12 text-center">
            <h3 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              {content.comparisonTitle}
            </h3>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {content.comparisonSubtitle}
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-muted p-8">
              <Building2 className="mb-4 h-6 w-6 text-muted-foreground" />
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {content.bankCard.eyebrow}
              </p>
              <h4 className="mb-6 text-xl font-bold text-foreground">
                {content.bankCard.title}
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                {content.bankCard.rows.map((row) => (
                  <li
                    key={row.label}
                    className="flex justify-between border-b border-border/60 pb-2"
                  >
                    <span>{row.label}</span>
                    <span className="font-semibold text-foreground">
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-2xl bg-primary p-8 text-primary-foreground shadow-xl">
              <div className="absolute -top-3 right-6 rounded-full bg-primary-foreground px-3 py-1 text-xs font-bold text-primary">
                {content.debtCard.badge}
              </div>
              <TrendingUp className="mb-4 h-6 w-6 text-primary-foreground" />
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-primary-foreground/60">
                {content.debtCard.eyebrow}
              </p>
              <h4 className="mb-6 text-xl font-bold">{content.debtCard.title}</h4>
              <ul className="space-y-3">
                {content.debtCard.rows.map((row) => (
                  <li
                    key={row.label}
                    className="flex justify-between border-b border-primary-foreground/20 pb-2"
                  >
                    <span className="text-primary-foreground/80">
                      {row.label}
                    </span>
                    <span className="font-bold">{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
