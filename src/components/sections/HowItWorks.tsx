import { Building2, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const steps = [
  { label: "Schritt 1", title: "Dein Kapital", value: "50k+" },
  { label: "Schritt 2", title: "Wareneinkauf", value: "" },
  { label: "Schritt 3", title: "Verkauf", value: "Ø 45 Tage" },
  { label: "Schritt 4", title: "Rückzahlung + Financing Fee", value: "12,5 %" },
];

const bankRows = [
  { label: "Financing Fee", value: "~ 2–3 %" },
  { label: "Transparenz", value: "Keine Einsicht" },
  { label: "Sicherheit", value: "Einlagensicherung" },
  { label: "Kontakt", value: "Anonym / Filiale" },
  { label: "Mitgestaltung", value: "Keine" },
];

const debtRows = [
  { label: "Financing Fee", value: "12,5 %" },
  { label: "Transparenz", value: "Quartals-BWA + Lager" },
  { label: "Sicherheit", value: "Warenpfand + Haftung" },
  { label: "Kontakt", value: "Direkt mit Gründern" },
  { label: "Mitgestaltung", value: "Persönliche Partnerschaft" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-24">
      <div className="container mx-auto">
        <Reveal>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <SectionLabel>So funktioniert es</SectionLabel>
            <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              Working Capital &amp; Private Debt
            </h2>
            <p className="text-lg text-muted-foreground">
              Wir handeln mit Re-Commerce- und End-of-Life-Waren. Unser Wachstum
              wird nicht durch Nachfrage limitiert, sondern durch die Menge an
              Ware, die wir gleichzeitig einkaufen können. Genau dafür brauchen
              wir <strong className="text-foreground">Working Capital</strong> —
              also flüssiges Kapital, das direkt in den Wareneinkauf fließt und
              innerhalb weniger Wochen wieder als Umsatz zurückkommt.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mb-20 max-w-4xl">
            <div className="grid items-stretch gap-4 md:grid-cols-4">
              {steps.map((step) => (
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
              Private Debt vs. klassisches Bankprodukt
            </h3>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Warum Private-Debt-Investments für dich als Anleger deutlich
              attraktiver sind als klassische Bank- oder Festgeldprodukte.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-muted p-8">
              <Building2 className="mb-4 h-6 w-6 text-muted-foreground" />
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Bank / Festgeld
              </p>
              <h4 className="mb-6 text-xl font-bold text-foreground">
                Klassisches Bankprodukt
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                {bankRows.map((row) => (
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
                Dein Angebot
              </div>
              <TrendingUp className="mb-4 h-6 w-6 text-primary-foreground" />
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-primary-foreground/60">
                Private Debt
              </p>
              <h4 className="mb-6 text-xl font-bold">
                Direktinvestment bei uns
              </h4>
              <ul className="space-y-3">
                {debtRows.map((row) => (
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
