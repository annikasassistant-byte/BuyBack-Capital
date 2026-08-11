import { ChevronDown } from "lucide-react";
import { defaultBuybackContent } from "@/lib/cms/defaults";
import type { HeroContent } from "@/lib/cms/types";

type HeroProps = {
  content?: HeroContent;
};

export function Hero({ content = defaultBuybackContent.landing.hero }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70" />
      <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-primary-foreground/10" />
      <div className="absolute -left-20 bottom-20 h-[300px] w-[300px] rounded-full bg-primary-foreground/5" />

      <div className="container relative z-10 mx-auto py-20 pt-28">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground">
            {content.eyebrow}
          </p>
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
            {content.kicker}
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-primary-foreground md:text-7xl">
            {content.headlineLine1}
            <br />
            <span className="text-primary-foreground/80">
              {content.headlineLine2}
            </span>
          </h1>

          <p className="mb-4 text-xl font-light text-primary-foreground/80 md:text-2xl">
            {content.subheadline}
          </p>

          <p className="mb-12 max-w-xl text-lg text-primary-foreground/60">
            {content.body}
          </p>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary-foreground/50">
              {content.offersHeading}
            </p>
            <div className="flex flex-wrap gap-10 text-primary-foreground">
              {content.offers.map((item) => (
                <div key={item.label}>
                  <p className="text-4xl font-bold">{item.value}</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href={content.scrollHref}
          aria-label={content.scrollAriaLabel}
          className="text-primary-foreground/70 transition hover:text-primary-foreground"
        >
          <ChevronDown className="h-7 w-7 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
