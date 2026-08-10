import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { DashboardShareCard } from "@/components/dashboard/DashboardShareCard";
import { SectionLabel } from "@/components/SectionLabel";

const stats = [
  { label: "Financing Fee", value: "12,5 %" },
  { label: "Laufzeit", value: "12–24 Monate" },
  { label: "Mindestanlage", value: "ab 50.000 €" },
  { label: "Runde", value: "max. 20 Investoren" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container flex items-center justify-between py-4">
          <BrandMark href="/dashboard" />
          <nav className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Landing Page
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-12 md:py-16">
        <div className="mb-10 max-w-3xl">
          <SectionLabel>Investor Area</SectionLabel>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            BuyBack Capital Dashboard
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Übersicht für bestehende und interessierte Private-Debt-Investoren.
            Zum Weiterleiten bitte die öffentliche Landing Page verwenden.
          </p>
        </div>

        <DashboardShareCard />

        <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-primary p-8">
            <h2 className="mb-3 text-xl font-bold text-primary-foreground">
              Nächste Schritte
            </h2>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>• Landing Page an Interessenten weiterleiten</li>
              <li>• Persönliches Gespräch über WhatsApp vereinbaren</li>
              <li>• Konditionen und Sicherheiten auf der Pitch-Seite prüfen</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="mb-3 text-xl font-bold text-foreground">
              Schnellzugriff
            </h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Die öffentliche Landing Page ist der empfohlene Link für alle
              Weiterempfehlungen.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Öffentliche Landing Page
              </Link>
              <a
                href="https://wa.me/491732142293"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
