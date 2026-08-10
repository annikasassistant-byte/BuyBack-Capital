import { Lock } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    value: "2,5 Mio €",
    desc: "Gesamtvolumen der Runde",
  },
  {
    value: "Max. 20 Investoren",
    desc: "Ausgewählter Kreis, persönliche Betreuung",
  },
  {
    value: "Schnelle Abwicklung",
    desc: "Keine bürokratischen Hürden",
  },
  {
    value: "Nicht öffentlich",
    desc: "Early Access für ausgewählte Personen",
  },
];

export function PrivatePlacement() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Lock className="h-5 w-5 text-primary" />
              </div>
            </div>
            <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              Exklusive Privatplatzierung
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Bei BuyBack Capital ist uns eine langfristige und persönliche
              Partnerschaft wichtig. Deshalb richten wir diese Runde an einen
              ausgewählten Kreis von{" "}
              <strong className="text-foreground">
                maximal 20 Privatpersonen
              </strong>{" "}
              mit einem Gesamtvolumen von{" "}
              <strong className="text-foreground">2,5 Mio €</strong>.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {items.map((item, i) => (
                <Reveal key={item.value} delay={i * 0.05}>
                  <div className="h-full rounded-2xl bg-secondary p-6">
                    <p className="text-xl font-bold text-secondary-foreground">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-12 text-sm text-muted-foreground">
              Schlankes Team, volle Konzentration auf das operative Geschäft —
              ohne aufgeblähte Strukturen oder unnötige Fixkosten.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
