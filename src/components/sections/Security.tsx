import Image from "next/image";
import {
  FileText,
  Handshake,
  Package,
  Scale,
  ShieldCheck,
  Warehouse,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const items = [
  {
    icon: Warehouse,
    title: "Sicherungsübereignung",
    desc: "Rechte am Warenbestand als sachliche Sicherheit für dein Investment",
  },
  {
    icon: Handshake,
    title: "Persönliche Haftung",
    desc: "Zusätzliche persönliche Bürgschaft der Gründer — auch nach GmbH-Gründung",
  },
  {
    icon: FileText,
    title: "Darlehensvertrag",
    desc: "Klare Kündigungsrechte bei Verzug, rechtssicher aufgesetzt",
  },
  {
    icon: ShieldCheck,
    title: "Volle Transparenz",
    desc: "Quartalsweise BWA und Lagerbestandsexport — du siehst jederzeit, wo dein Geld arbeitet",
  },
  {
    icon: Scale,
    title: "GmbH-Übergang",
    desc: "Schuldübernahme auf die zu gründende GmbH mit persönlicher Bürgschaft der Gründer",
  },
  {
    icon: Package,
    title: "Abtretung von Forderungen",
    desc: "Marktplatz-Forderungen werden als zusätzliche Sicherheit abgetreten",
  },
];

export function Security() {
  return (
    <section className="bg-muted py-24">
      <div className="container mx-auto">
        <Reveal>
          <div className="mb-16 text-center">
            <SectionLabel>Sicherheit & Transparenz</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Wir fundieren deine Sicherheit
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Besicherung durch Warenbestand, persönliche Haftung und
              quartalsweises Reporting — dein Kapital wird nur in validierte
              Produkte eingesetzt.
            </p>
          </div>
        </Reveal>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
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
              src="/images/warehouse.jpg"
              alt="Warenbestand als Sicherheit"
              width={1920}
              height={1080}
              className="h-64 w-full object-cover"
            />
            <div className="bg-primary p-6 text-center">
              <p className="font-medium text-primary-foreground">
                Einsatz nur in validierte Produkte — jeder Einkauf wird vorab
                geprüft
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
