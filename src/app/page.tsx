import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ShareLandingSection } from "@/components/ShareLandingSection";
import { BusinessModel } from "@/components/sections/BusinessModel";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { InvestmentStructure } from "@/components/sections/InvestmentStructure";
import { KeyFacts } from "@/components/sections/KeyFacts";
import { PrivatePlacement } from "@/components/sections/PrivatePlacement";
import { Security } from "@/components/sections/Security";
import { Team } from "@/components/sections/Team";
import { getBuybackCmsContent } from "@/lib/cms/fetch";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getBuybackCmsContent();
  const meta = content.site.metadata.landing;
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
    },
  };
}

export default async function Home() {
  const content = await getBuybackCmsContent();

  return (
    <>
      <SiteHeader header={content.chrome.header} brand={content.site.brand} />
      <main className="flex-1">
        <Hero content={content.landing.hero} />
        <HowItWorks content={content.landing.howItWorks} />
        <KeyFacts content={content.landing.keyFacts} />
        <BusinessModel content={content.landing.businessModel} />
        <InvestmentStructure content={content.landing.investmentStructure} />
        <Security content={content.landing.security} />
        <PrivatePlacement content={content.landing.privatePlacement} />
        <Team content={content.landing.team} />
        <ShareLandingSection
          content={content.landing.share}
          share={content.site.share}
        />
        <CTA content={content.landing.cta} contact={content.site.contact} />
      </main>
      <SiteFooter
        footer={content.chrome.footer}
        brand={content.site.brand}
        contact={content.site.contact}
      />
    </>
  );
}
