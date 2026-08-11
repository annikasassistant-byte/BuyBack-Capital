import type { BuybackCmsContent } from "./types";

export const defaultBuybackContent: BuybackCmsContent = {
  site: {
    locale: "de",
    brand: {
      monogram: "BB",
      namePrimary: "BuyBack",
      nameAccent: "Capital",
      fullName: "BuyBack Capital",
    },
    contact: {
      whatsappUrl: "https://wa.me/491732142293",
      whatsappDisplay: "+49 173 214 2293",
    },
    share: {
      title: "BuyBack Capital",
      text: "BuyBack Capital – Working Capital Financing (Private Debt)",
      path: "/",
    },
    metadata: {
      landing: {
        title: "BuyBack Capital – Working Capital Investment",
        description:
          "Exklusive Private-Debt-Runde für Working-Capital-Finanzierung im Re-Commerce.",
      },
      dashboard: {
        title: "BuyBack Capital | Investor Area",
        description:
          "Investor Area — Landing Page teilen und Konditionen prüfen.",
      },
    },
  },
  chrome: {
    header: {
      navLabel: "Investor Area",
      navHref: "/dashboard",
    },
    footer: {
      tagline:
        "BuyBack Capital – Private Debt für Working Capital im Re-Commerce.",
      links: [
        { label: "Landing Page", href: "/" },
        { label: "Dashboard", href: "/dashboard" },
        { label: "Kontakt", href: "https://wa.me/491732142293" },
      ],
    },
  },
  landing: {
    hero: {
      eyebrow: "BuyBack Capital",
      kicker: "Private Debt · Exklusive Runde · Max. 20 Investoren",
      headlineLine1: "Working Capital",
      headlineLine2: "Financing",
      subheadline: "Re-Commerce & EOL Goods",
      body: "Als Private-Debt-Investor stellst du BuyBack Capital Kapital für unseren Wareneinkauf zur Verfügung — besichert, mit Financing Fee und planbarer Rückzahlung.",
      offersHeading: "Dein Angebot",
      offers: [
        { value: "12,5 %", label: "Financing Fee" },
        { value: "12–24", label: "Monate Laufzeit" },
        { value: "ab 50.000 €", label: "Mindestanlage" },
      ],
      scrollHref: "#how-it-works",
      scrollAriaLabel: "Weiter scrollen",
    },
    howItWorks: {
      label: "So funktioniert es",
      title: "Working Capital & Private Debt",
      intro:
        "Wir handeln mit Re-Commerce- und End-of-Life-Waren. Unser Wachstum wird nicht durch Nachfrage limitiert, sondern durch die Menge an Ware, die wir gleichzeitig einkaufen können. Genau dafür brauchen wir Working Capital — also flüssiges Kapital, das direkt in den Wareneinkauf fließt und innerhalb weniger Wochen wieder als Umsatz zurückkommt.",
      introEmphasis: "Working Capital",
      steps: [
        { label: "Schritt 1", title: "Dein Kapital", value: "50k+" },
        { label: "Schritt 2", title: "Wareneinkauf", value: "" },
        { label: "Schritt 3", title: "Verkauf", value: "Ø 45 Tage" },
        {
          label: "Schritt 4",
          title: "Rückzahlung + Financing Fee",
          value: "12,5 %",
        },
      ],
      comparisonTitle: "Private Debt vs. klassisches Bankprodukt",
      comparisonSubtitle:
        "Warum Private-Debt-Investments für dich als Anleger deutlich attraktiver sind als klassische Bank- oder Festgeldprodukte.",
      bankCard: {
        eyebrow: "Bank / Festgeld",
        title: "Klassisches Bankprodukt",
        rows: [
          { label: "Financing Fee", value: "~ 2–3 %" },
          { label: "Transparenz", value: "Keine Einsicht" },
          { label: "Sicherheit", value: "Einlagensicherung" },
          { label: "Kontakt", value: "Anonym / Filiale" },
          { label: "Mitgestaltung", value: "Keine" },
        ],
      },
      debtCard: {
        badge: "Dein Angebot",
        eyebrow: "Private Debt",
        title: "Direktinvestment bei uns",
        rows: [
          { label: "Financing Fee", value: "12,5 %" },
          { label: "Transparenz", value: "Quartals-BWA + Lager" },
          { label: "Sicherheit", value: "Warenpfand + Haftung" },
          { label: "Kontakt", value: "Direkt mit Gründern" },
          { label: "Mitgestaltung", value: "Persönliche Partnerschaft" },
        ],
      },
    },
    keyFacts: {
      label: "Kennzahlen",
      title: "Key Facts",
      facts: [
        {
          iconKey: "euro",
          value: "7,34 Mio €",
          title: "Umsatz gesamt",
          desc: "Bewiesenes Geschäftsmodell seit 2023–2025",
        },
        {
          iconKey: "wallet",
          value: "858.883 €",
          title: "Finanzierungsvolumen gesamt",
          desc: "Davon zurückgeführt: 622.185,81 € · Noch offen: 236.697,29 €",
        },
        {
          iconKey: "refresh",
          value: "Ø 45 Tage",
          title: "Kapitalumschlag",
          desc: "Schnelle Umwandlung von Kapital in Umsatz",
        },
        {
          iconKey: "calendar",
          value: "Seit 2023",
          title: "Operativ profitabel",
          desc: "Zwei Handelsmodelle mit stabilem Wachstum",
        },
      ],
      highlights: [
        {
          title: "Zwei skalierbare Handelsmodelle im Wachstumsmarkt",
          body: "Re-Commerce und End-of-Life Goods bieten stabile Nachfrage ohne aufwändiges Marketing.",
        },
        {
          title: "Zusätzliche Liquidität für direkten Ausbau",
          body: "Dein Kapital fließt unmittelbar in den Warenbestand und ermöglicht direktes Umsatzwachstum.",
        },
      ],
    },
    businessModel: {
      label: "Geschäftsmodell",
      title: "Warum dieses Modell funktioniert",
      points: [
        { title: "Keine Lieferantenabhängigkeit", desc: "Bessere Einkaufspreise" },
        { title: "Jeder Einkauf validiert", desc: "Minimiertes Risiko" },
        { title: "Ø ~45 Tage Umschlag", desc: "Kapital arbeitet effizient" },
        { title: "Sofortige Nachfrage", desc: "Kein Marketing nötig" },
      ],
      tagline: "Kapital wird effizient, schnell und risikooptimiert eingesetzt",
      revenueHeading: "Umsatzentwicklung",
      revenueBars: [
        { year: "2023", value: "1,072 Mio €", height: "28%" },
        { year: "2024", value: "2,38 Mio €", height: "55%" },
        { year: "2025", value: "3,89 Mio €", height: "90%" },
      ],
      revenueTotalLabel: "Gesamt: 7,34 Mio €",
      partnersHeading: "Finanzierungspartner",
      partnersSubtitle: "Diese Partner vertrauten uns bereits",
      partners: [
        { name: "Amazon / YouLend", src: "/images/logo-amazon.png" },
        { name: "Fulfin", src: "/images/logo-fulfin.png" },
        { name: "Tupel", src: "/images/logo-tupel.png" },
        { name: "VR Bank", src: "/images/logo-vrbank.png" },
      ],
    },
    investmentStructure: {
      label: "Konditionen",
      title: "Investmentstruktur",
      subtitleBefore: "Gesamtvolumen dieser Runde:",
      subtitleVolume: "2,5 Mio €",
      subtitleAfter: "· aufgeteilt auf maximal 20 Investoren.",
      detailsTitle: "Investment Details",
      details: [
        "ab 50.000 €",
        "12,5 % Financing Fee",
        "12–24 Monate Laufzeit",
        "Monatliche Rückzahlung",
      ],
      exampleEyebrow: "Beispielrechnung",
      examplePrincipal: "100.000 €",
      examplePrincipalLabel: "Investitionssumme",
      exampleMonthly: "1.041,67 €",
      exampleMonthlyLabel: "pro Monat",
      exampleYearly: "12.500 €",
      exampleYearlyLabel: "pro Jahr",
      exampleFootnote: "Bei 12,5 % Financing Fee · 12 Monate Laufzeit",
    },
    security: {
      label: "Sicherheit & Transparenz",
      title: "Wir fundieren deine Sicherheit",
      intro:
        "Besicherung durch Warenbestand, persönliche Haftung und quartalsweises Reporting — dein Kapital wird nur in validierte Produkte eingesetzt.",
      items: [
        {
          iconKey: "warehouse",
          title: "Sicherungsübereignung",
          desc: "Rechte am Warenbestand als sachliche Sicherheit für dein Investment",
        },
        {
          iconKey: "handshake",
          title: "Persönliche Haftung",
          desc: "Zusätzliche persönliche Bürgschaft der Gründer — auch nach GmbH-Gründung",
        },
        {
          iconKey: "file",
          title: "Darlehensvertrag",
          desc: "Klare Kündigungsrechte bei Verzug, rechtssicher aufgesetzt",
        },
        {
          iconKey: "shield",
          title: "Volle Transparenz",
          desc: "Quartalsweise BWA und Lagerbestandsexport — du siehst jederzeit, wo dein Geld arbeitet",
        },
        {
          iconKey: "scale",
          title: "GmbH-Übergang",
          desc: "Schuldübernahme auf die zu gründende GmbH mit persönlicher Bürgschaft der Gründer",
        },
        {
          iconKey: "package",
          title: "Abtretung von Forderungen",
          desc: "Marktplatz-Forderungen werden als zusätzliche Sicherheit abgetreten",
        },
      ],
      mediaSrc: "/images/warehouse.jpg",
      mediaAlt: "Warenbestand als Sicherheit",
      mediaCaption:
        "Einsatz nur in validierte Produkte — jeder Einkauf wird vorab geprüft",
    },
    privatePlacement: {
      title: "Exklusive Privatplatzierung",
      introBefore:
        "Bei BuyBack Capital ist uns eine langfristige und persönliche Partnerschaft wichtig. Deshalb richten wir diese Runde an einen ausgewählten Kreis von",
      introHighlight1: "maximal 20 Privatpersonen",
      introMiddle: "mit einem Gesamtvolumen von",
      introHighlight2: "2,5 Mio €",
      introAfter: ".",
      items: [
        { value: "2,5 Mio €", desc: "Gesamtvolumen der Runde" },
        {
          value: "Max. 20 Investoren",
          desc: "Ausgewählter Kreis, persönliche Betreuung",
        },
        { value: "Schnelle Abwicklung", desc: "Keine bürokratischen Hürden" },
        {
          value: "Nicht öffentlich",
          desc: "Early Access für ausgewählte Personen",
        },
      ],
      footerNote:
        "Schlankes Team, volle Konzentration auf das operative Geschäft — ohne aufgeblähte Strukturen oder unnötige Fixkosten.",
    },
    team: {
      label: "Team",
      title: "Geschwister mit Vision",
      members: [
        {
          name: "Julian Witeczek",
          role: "Gründer & Geschäftsführer",
          bio: "Unternehmer seit 2019, Skalierung auf Millionenumsätze im Re-Commerce",
          src: "/images/julian.jpeg",
        },
        {
          name: "Annika Witeczek",
          role: "Finanzen & Struktur",
          bio: "Steuerrecht & Deloitte Background, Finanz- und Strukturfokus",
          src: "/images/annika.jpeg",
        },
      ],
    },
    share: {
      label: "Weiterempfehlen",
      title: "Landing Page teilen",
      body: "Wenn du BuyBack Capital an jemanden weitergeben möchtest, teile bitte diese Landing Page — nicht das Investor-Dashboard. So bleibt der Einstieg klar und einfach weiterleitbar.",
      shareButton: "Landing Page teilen",
      copyButton: "Link kopieren",
      copiedButton: "Link kopiert",
      openButton: "Öffnen",
      panelEyebrow: "BuyBack Capital",
      panelTitle: "Der richtige Link für Interessenten.",
      panelBody:
        "Öffentliche Pitch-Seite mit Konditionen, Sicherheitsstruktur und Kontakt — ideal zum Weiterleiten.",
    },
    cta: {
      eyebrow: "BuyBack Capital",
      title: "Interesse geweckt?",
      body: "Weitere Informationen und ein persönliches Gespräch — wir freuen uns auf den Austausch.",
      buttonLabel: "Kontakt aufnehmen",
    },
  },
  dashboard: {
    navLabel: "Landing Page",
    navHref: "/",
    introLabel: "Investor Area",
    introTitle: "BuyBack Capital Dashboard",
    introBody:
      "Übersicht für bestehende und interessierte Private-Debt-Investoren. Zum Weiterleiten bitte die öffentliche Landing Page verwenden.",
    shareCard: {
      eyebrow: "Für Weiterempfehlungen",
      title: "Landing Page öffnen & teilen",
      body: "Wenn du BuyBack Capital an jemanden weitergeben möchtest, nutze die öffentliche Landing Page statt dieses Dashboards. Dort finden Interessenten Konditionen, Sicherheitsstruktur und Kontakt auf einen Blick.",
      openButton: "Zur Landing Page",
      shareButton: "Teilen",
      copyButton: "Link kopieren",
      copiedButton: "Kopiert",
      panelEyebrow: "BuyBack Capital",
      panelTitle: "Öffentliche Pitch-Seite weiterleiten — nicht das Dashboard.",
    },
    stats: [
      { label: "Financing Fee", value: "12,5 %" },
      { label: "Laufzeit", value: "12–24 Monate" },
      { label: "Mindestanlage", value: "ab 50.000 €" },
      { label: "Runde", value: "max. 20 Investoren" },
    ],
    nextStepsTitle: "Nächste Schritte",
    nextSteps: [
      "Landing Page an Interessenten weiterleiten",
      "Persönliches Gespräch über WhatsApp vereinbaren",
      "Konditionen und Sicherheiten auf der Pitch-Seite prüfen",
    ],
    quickAccessTitle: "Schnellzugriff",
    quickAccessBody:
      "Die öffentliche Landing Page ist der empfohlene Link für alle Weiterempfehlungen.",
    primaryCtaLabel: "Öffentliche Landing Page",
    primaryCtaHref: "/",
    secondaryCtaLabel: "Kontakt aufnehmen",
  },
};
