import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const details = [
  "ab 50.000 €",
  "12,5 % Financing Fee",
  "12–24 Monate Laufzeit",
  "Monatliche Rückzahlung",
];

export function InvestmentStructure() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto">
        <Reveal>
          <div className="mb-16 text-center">
            <SectionLabel>Konditionen</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Investmentstruktur
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Gesamtvolumen dieser Runde:{" "}
              <strong className="text-foreground">2,5 Mio €</strong> ·
              aufgeteilt auf maximal 20 Investoren.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-6 text-xl font-bold text-foreground">
                Investment Details
              </h3>
              <div className="space-y-4">
                {details.map((item) => (
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
                Beispielrechnung
              </p>
              <p className="mb-1 text-5xl font-bold text-primary-foreground">
                100.000 €
              </p>
              <p className="mb-6 text-lg text-primary-foreground/70">
                Investitionssumme
              </p>
              <div className="mb-6 h-px w-full bg-primary-foreground/20" />
              <div className="grid w-full grid-cols-2 gap-6">
                <div>
                  <p className="text-2xl font-bold">1.041,67 €</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    pro Monat
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold">12.500 €</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    pro Jahr
                  </p>
                </div>
              </div>
              <p className="mt-6 text-xs text-primary-foreground/50">
                Bei 12,5 % Financing Fee · 12 Monate Laufzeit
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
