import { Lock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { defaultBuybackContent } from "@/lib/cms/defaults";
import type { PrivatePlacementContent } from "@/lib/cms/types";

type PrivatePlacementProps = {
  content?: PrivatePlacementContent;
};

export function PrivatePlacement({
  content = defaultBuybackContent.landing.privatePlacement,
}: PrivatePlacementProps) {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Lock className="h-5 w-5 text-primary" />
              </div>
            </div>
            <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              {content.title}
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              {content.introBefore}{" "}
              <strong className="text-foreground">
                {content.introHighlight1}
              </strong>{" "}
              {content.introMiddle}{" "}
              <strong className="text-foreground">
                {content.introHighlight2}
              </strong>
              {content.introAfter}
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {content.items.map((item, i) => (
                <Reveal key={item.value} delay={i * 0.05}>
                  <div className="h-full rounded-2xl bg-secondary p-6">
                    <p className="text-xl font-bold text-secondary-foreground">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-12 text-sm text-muted-foreground">
              {content.footerNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
