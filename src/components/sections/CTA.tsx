import { MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-primary py-24">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/60">
          BuyBack Capital
        </p>
        <h2 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl">
          Interesse geweckt?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-primary-foreground/70">
          Weitere Informationen und ein persönliches Gespräch — wir freuen uns
          auf den Austausch.
        </p>

        <a
          href="https://wa.me/491732142293"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-lg font-semibold text-primary transition-opacity hover:opacity-90"
        >
          <MessageCircle className="h-5 w-5" />
          Kontakt aufnehmen
        </a>

        <p className="mt-6 text-sm text-primary-foreground/50">
          WhatsApp: +49 173 214 2293
        </p>
      </div>
    </section>
  );
}
