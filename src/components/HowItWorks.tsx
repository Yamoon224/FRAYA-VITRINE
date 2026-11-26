import { Reveal } from "./Reveal";
import { Container } from "./Container";
import { MapPin, Navigation, CircleCheck } from "lucide-react";

const STEPS = [
  {
    icon: MapPin,
    title: "Indiquez votre destination",
    body: "Ouvrez l’app, placez votre point de départ et d’arrivée. Le tarif s’affiche avant même de valider la course.",
  },
  {
    icon: Navigation,
    title: "Suivez votre chauffeur en direct",
    body: "Un chauffeur vérifié accepte la course et vous rejoint. Son nom, sa note, sa plaque et sa position s’affichent en temps réel.",
  },
  {
    icon: CircleCheck,
    title: "Arrivez, payez, notez",
    body: "Réglez en Mobile Money, Wave ou en espèces, puis notez le trajet. Un bouton SOS reste accessible à tout moment du parcours.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <Reveal className="text-center">
          <h2 className="font-display mx-auto max-w-lg text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-4xl">
            Une course, trois gestes.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <svg
            className="pointer-events-none absolute left-[27px] top-0 hidden h-full w-px sm:block md:left-1/2"
            width="2"
            height="100%"
            aria-hidden
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="var(--ink-line)"
              strokeWidth="2"
              strokeDasharray="3 9"
              strokeLinecap="round"
            />
          </svg>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12}>
                <div className="relative flex gap-5 md:block md:text-center">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-paper md:mx-auto">
                    <step.icon size={22} className="text-gold" strokeWidth={1.75} />
                  </div>
                  <div className="md:mt-6">
                    <span className="font-display text-xs font-semibold tracking-wide text-gold">
                      Étape {i + 1}
                    </span>
                    <h3 className="font-display mt-1.5 text-xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-[var(--text-dark)]/65 md:mx-auto">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
