import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { defaultBuybackContent } from "@/lib/cms/defaults";
import type { TeamContent } from "@/lib/cms/types";

type TeamProps = {
  content?: TeamContent;
};

export function Team({ content = defaultBuybackContent.landing.team }: TeamProps) {
  return (
    <section className="bg-muted py-24">
      <div className="container mx-auto">
        <Reveal>
          <div className="mb-16 text-center">
            <SectionLabel>{content.label}</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              {content.title}
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
          {content.members.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <article className="rounded-2xl border border-border bg-card p-8 text-center">
                <div className="relative mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-primary/20">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="112px"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
