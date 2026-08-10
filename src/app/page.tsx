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

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <KeyFacts />
        <BusinessModel />
        <InvestmentStructure />
        <Security />
        <PrivatePlacement />
        <Team />
        <ShareLandingSection />
        <CTA />
      </main>
      <SiteFooter />
    </>
  );
}
