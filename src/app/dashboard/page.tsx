import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { DashboardShareCard } from "@/components/dashboard/DashboardShareCard";
import { SectionLabel } from "@/components/SectionLabel";
import { getBuybackCmsContent } from "@/lib/cms/fetch";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getBuybackCmsContent();
  const meta = content.site.metadata.dashboard;
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function DashboardPage() {
  const content = await getBuybackCmsContent();
  const { dashboard, site } = content;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container flex items-center justify-between py-4">
          <BrandMark href="/dashboard" brand={site.brand} />
          <nav className="flex items-center gap-3">
            <Link
              href={dashboard.navHref}
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              {dashboard.navLabel}
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-12 md:py-16">
        <div className="mb-10 max-w-3xl">
          <SectionLabel>{dashboard.introLabel}</SectionLabel>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            {dashboard.introTitle}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {dashboard.introBody}
          </p>
        </div>

        <DashboardShareCard
          content={dashboard.shareCard}
          share={site.share}
        />

        <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dashboard.stats.map((stat) => (
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
              {dashboard.nextStepsTitle}
            </h2>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {dashboard.nextSteps.map((step) => (
                <li key={step}>• {step}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="mb-3 text-xl font-bold text-foreground">
              {dashboard.quickAccessTitle}
            </h2>
            <p className="mb-6 text-sm text-muted-foreground">
              {dashboard.quickAccessBody}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={dashboard.primaryCtaHref}
                className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                {dashboard.primaryCtaLabel}
              </Link>
              <a
                href={site.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                {dashboard.secondaryCtaLabel}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
