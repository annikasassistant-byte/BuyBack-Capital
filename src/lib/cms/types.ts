export type BrandContent = {
  monogram: string;
  namePrimary: string;
  nameAccent: string;
  fullName: string;
};

export type ContactContent = {
  whatsappUrl: string;
  whatsappDisplay: string;
};

export type ShareMetaContent = {
  title: string;
  text: string;
  path: string;
};

export type PageMetadataContent = {
  title: string;
  description: string;
};

export type SiteContent = {
  locale: string;
  brand: BrandContent;
  contact: ContactContent;
  share: ShareMetaContent;
  metadata: {
    landing: PageMetadataContent;
    dashboard: PageMetadataContent;
  };
};

export type ChromeHeaderContent = {
  navLabel: string;
  navHref: string;
};

export type ChromeFooterLink = {
  label: string;
  href: string;
};

export type ChromeFooterContent = {
  tagline: string;
  links: ChromeFooterLink[];
};

export type ChromeContent = {
  header: ChromeHeaderContent;
  footer: ChromeFooterContent;
};

export type HeroOffer = {
  value: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  kicker: string;
  headlineLine1: string;
  headlineLine2: string;
  subheadline: string;
  body: string;
  offersHeading: string;
  offers: HeroOffer[];
  scrollHref: string;
  scrollAriaLabel: string;
};

export type HowItWorksStep = {
  label: string;
  title: string;
  value: string;
};

export type ComparisonRow = {
  label: string;
  value: string;
};

export type BankCardContent = {
  eyebrow: string;
  title: string;
  rows: ComparisonRow[];
};

export type DebtCardContent = {
  badge: string;
  eyebrow: string;
  title: string;
  rows: ComparisonRow[];
};

export type HowItWorksContent = {
  label: string;
  title: string;
  intro: string;
  introEmphasis: string;
  steps: HowItWorksStep[];
  comparisonTitle: string;
  comparisonSubtitle: string;
  bankCard: BankCardContent;
  debtCard: DebtCardContent;
};

export type KeyFactItem = {
  iconKey: string;
  value: string;
  title: string;
  desc: string;
};

export type KeyFactHighlight = {
  title: string;
  body: string;
};

export type KeyFactsContent = {
  label: string;
  title: string;
  facts: KeyFactItem[];
  highlights: KeyFactHighlight[];
};

export type BusinessModelPoint = {
  title: string;
  desc: string;
};

export type RevenueBar = {
  year: string;
  value: string;
  height: string;
};

export type PartnerItem = {
  name: string;
  src: string;
};

export type BusinessModelContent = {
  label: string;
  title: string;
  points: BusinessModelPoint[];
  tagline: string;
  revenueHeading: string;
  revenueBars: RevenueBar[];
  revenueTotalLabel: string;
  partnersHeading: string;
  partnersSubtitle: string;
  partners: PartnerItem[];
};

export type InvestmentStructureContent = {
  label: string;
  title: string;
  subtitleBefore: string;
  subtitleVolume: string;
  subtitleAfter: string;
  detailsTitle: string;
  details: string[];
  exampleEyebrow: string;
  examplePrincipal: string;
  examplePrincipalLabel: string;
  exampleMonthly: string;
  exampleMonthlyLabel: string;
  exampleYearly: string;
  exampleYearlyLabel: string;
  exampleFootnote: string;
};

export type SecurityItem = {
  iconKey: string;
  title: string;
  desc: string;
};

export type SecurityContent = {
  label: string;
  title: string;
  intro: string;
  items: SecurityItem[];
  mediaSrc: string;
  mediaAlt: string;
  mediaCaption: string;
};

export type PrivatePlacementItem = {
  value: string;
  desc: string;
};

export type PrivatePlacementContent = {
  title: string;
  introBefore: string;
  introHighlight1: string;
  introMiddle: string;
  introHighlight2: string;
  introAfter: string;
  items: PrivatePlacementItem[];
  footerNote: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  src: string;
};

export type TeamContent = {
  label: string;
  title: string;
  members: TeamMember[];
};

export type ShareLandingContent = {
  label: string;
  title: string;
  body: string;
  shareButton: string;
  copyButton: string;
  copiedButton: string;
  openButton: string;
  panelEyebrow: string;
  panelTitle: string;
  panelBody: string;
};

export type CtaContent = {
  eyebrow: string;
  title: string;
  body: string;
  buttonLabel: string;
};

export type LandingContent = {
  hero: HeroContent;
  howItWorks: HowItWorksContent;
  keyFacts: KeyFactsContent;
  businessModel: BusinessModelContent;
  investmentStructure: InvestmentStructureContent;
  security: SecurityContent;
  privatePlacement: PrivatePlacementContent;
  team: TeamContent;
  share: ShareLandingContent;
  cta: CtaContent;
};

export type DashboardShareCardContent = {
  eyebrow: string;
  title: string;
  body: string;
  openButton: string;
  shareButton: string;
  copyButton: string;
  copiedButton: string;
  panelEyebrow: string;
  panelTitle: string;
};

export type DashboardStat = {
  label: string;
  value: string;
};

export type DashboardContent = {
  navLabel: string;
  navHref: string;
  introLabel: string;
  introTitle: string;
  introBody: string;
  shareCard: DashboardShareCardContent;
  stats: DashboardStat[];
  nextStepsTitle: string;
  nextSteps: string[];
  quickAccessTitle: string;
  quickAccessBody: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
};

export type BuybackCmsContent = {
  site: SiteContent;
  chrome: ChromeContent;
  landing: LandingContent;
  dashboard: DashboardContent;
};
