import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const points = [
  {
    title: "Keine Lieferantenabhängigkeit",
    desc: "Bessere Einkaufspreise",
  },
  {
    title: "Jeder Einkauf validiert",
    desc: "Minimiertes Risiko",
  },
  {
    title: "Ø ~45 Tage Umschlag",
    desc: "Kapital arbeitet effizient",
  },
  {
    title: "Sofortige Nachfrage",
    desc: "Kein Marketing nötig",
  },
];

const revenue = [
  { year: "2023", value: "1,072 Mio €", height: "28%" },
  { year: "2024", value: "2,38 Mio €", height: "55%" },
  { year: "2025", value: "3,89 Mio €", height: "90%" },
];

const partners = [
  { name: "Amazon / YouLend", src: "/images/logo-amazon.png" },
  { name: "Fulfin", src: "/images/logo-fulfin.png" },
  { name: "Tupel", src: "/images/logo-tupel.png" },
  { name: "VR Bank", src: "/images/logo-vrbank.png" },
];

export function BusinessModel() {
  return (
    <section className="bg-muted py-24">
      <div className="container mx-auto">
        <Reveal>
          <div className="mb-16 text-center">
            <SectionLabel>Geschäftsmodell</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Warum dieses Modell funktioniert
            </h2>
          </div>
        </Reveal>

        <div className="mb-12 grid gap-4 md:grid-cols-2">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.04}>
              <div className="rounded-xl bg-primary p-8 text-center">
                <p className="text-lg font-bold text-primary-foreground">
                  {point.title}
                </p>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  {point.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mb-16 text-center text-lg font-semibold text-primary">
          Kapital wird effizient, schnell und risikooptimiert eingesetzt
        </p>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <Reveal>
            <div>
              <h3 className="mb-6 text-2xl font-bold text-foreground">
                Umsatzentwicklung
              </h3>
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex h-56 items-end gap-6">
                  {revenue.map((item) => (
                    <div
                      key={item.year}
                      className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                    >
                      <span className="text-sm font-bold text-foreground">
                        {item.value}
                      </span>
                      <div
                        className="w-full rounded-t-lg bg-gradient-to-t from-primary to-primary/70"
                        style={{ height: item.height }}
                      />
                      <span className="text-xs font-medium text-muted-foreground">
                        {item.year}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm font-medium text-muted-foreground">
                  Gesamt: 7,34 Mio €
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-foreground">
                Finanzierungspartner
              </h3>
              <p className="mb-6 text-muted-foreground">
                Diese Partner vertrauten uns bereits
              </p>
              <div className="space-y-3">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
                      <Image
                        src={partner.src}
                        alt={partner.name}
                        width={32}
                        height={32}
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                    <span className="font-medium text-foreground">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
