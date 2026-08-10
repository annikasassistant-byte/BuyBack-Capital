import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const members = [
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
];

export function Team() {
  return (
    <section className="bg-muted py-24">
      <div className="container mx-auto">
        <Reveal>
          <div className="mb-16 text-center">
            <SectionLabel>Team</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Geschwister mit Vision
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
          {members.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <article className="rounded-2xl border border-border bg-card p-8 text-center">
                <div className="relative mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-primary/20">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="112px"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
