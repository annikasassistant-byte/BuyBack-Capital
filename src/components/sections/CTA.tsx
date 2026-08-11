import { MessageCircle } from "lucide-react";
import { defaultBuybackContent } from "@/lib/cms/defaults";
import type { ContactContent, CtaContent } from "@/lib/cms/types";

type CTAProps = {
  content?: CtaContent;
  contact?: ContactContent;
};

export function CTA({
  content = defaultBuybackContent.landing.cta,
  contact = defaultBuybackContent.site.contact,
}: CTAProps) {
  return (
    <section className="bg-primary py-24">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/60">
          {content.eyebrow}
        </p>
        <h2 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl">
          {content.title}
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-primary-foreground/70">
          {content.body}
        </p>

        <a
          href={contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-lg font-semibold text-primary transition-opacity hover:opacity-90"
        >
          <MessageCircle className="h-5 w-5" />
          {content.buttonLabel}
        </a>

        <p className="mt-6 text-sm text-primary-foreground/50">
          WhatsApp: {contact.whatsappDisplay}
        </p>
      </div>
    </section>
  );
}
