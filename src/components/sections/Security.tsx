import Image from "next/image";
import {
  FileText,
  Handshake,
  Package,
  Scale,
  ShieldCheck,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { defaultBuybackContent } from "@/lib/cms/defaults";
import type { SecurityContent } from "@/lib/cms/types";

const iconMap: Record<string, LucideIcon> = {
  warehouse: Warehouse,
  handshake: Handshake,
  file: FileText,
  shield: ShieldCheck,
  scale: Scale,
  package: Package,
};

type SecurityProps = {
  content?: SecurityContent;
};

export function Security({
  content = defaultBuybackContent.landing.security,
}: SecurityProps) {
  return (
    <section className="bg-muted py-24">
      <div className="container mx-auto">
        <Reveal>
          <div className="mb-16 text-center">
            <SectionLabel>{content.label}</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              {content.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {content.intro}
            </p>
          </div>
        </Reveal>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, i) => {
            const Icon = iconMap[item.iconKey] ?? ShieldCheck;
            return (
              <Reveal key={item.title} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                  <Icon className="mb-4 h-6 w-6 text-primary" />
                  <h3 className="mb-2 font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl">
            <Image
              src={content.mediaSrc}
              alt={content.mediaAlt}
              width={1920}
              height={1080}
              className="h-64 w-full object-cover"
            />
            <div className="bg-primary p-6 text-center">
              <p className="font-medium text-primary-foreground">
                {content.mediaCaption}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
