import {
  CalendarCheck2,
  Euro,
  RefreshCcw,
  Wallet,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const facts = [
  {
    icon: Euro,
    value: "7,34 Mio €",
    title: "Umsatz gesamt",
    desc: "Bewiesenes Geschäftsmodell seit 2023–2025",
  },
  {
    icon: Wallet,
    value: "858.883 €",
    title: "Finanzierungsvolumen gesamt",
    desc: "Davon zurückgeführt: 622.185,81 € · Noch offen: 236.697,29 €",
  },
  {
    icon: RefreshCcw,
    value: "Ø 45 Tage",
    title: "Kapitalumschlag",
    desc: "Schnelle Umwandlung von Kapital in Umsatz",
  },
  {
    icon: CalendarCheck2,
    value: "Seit 2023",
    title: "Operativ profitabel",
    desc: "Zwei Handelsmodelle mit stabilem Wachstum",
  },
];

export function KeyFacts() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto">
        <Reveal>
          <div className="mb-16 text-center">
            <SectionLabel>Kennzahlen</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Key Facts
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, i) => {
            const Icon = fact.icon;
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
            <div className="rounded-2xl bg-primary p-8">
              <h3 className="mb-3 text-xl font-bold text-primary-foreground">
                Zwei skalierbare Handelsmodelle im Wachstumsmarkt
              </h3>
              <p className="text-primary-foreground/70">
                Re-Commerce und End-of-Life Goods bieten stabile Nachfrage ohne
                aufwändiges Marketing.
              </p>
            </div>
            <div className="rounded-2xl bg-primary p-8">
              <h3 className="mb-3 text-xl font-bold text-primary-foreground">
                Zusätzliche Liquidität für direkten Ausbau
              </h3>
              <p className="text-primary-foreground/70">
                Dein Kapital fließt unmittelbar in den Warenbestand und
                ermöglicht direktes Umsatzwachstum.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
