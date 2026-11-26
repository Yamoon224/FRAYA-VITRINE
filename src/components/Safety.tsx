import { Container } from "./Container";
import { Reveal } from "./Reveal";

const POINTS = [
  "Vos trajets sont chiffrés en transit et jamais revendus à des tiers.",
  "En cas d’incident, l’Autorité de Régulation des Télécommunications (ARTCI) est informée sous 72 heures maximum.",
  "Traitement conforme à la loi ivoirienne n°2013-450 sur la protection des données personnelles.",
];

export function Safety() {
  return (
    <section className="bg-paper-soft py-24 sm:py-32">
      <Container>
        <Reveal className="text-center">
          <h2 className="font-display mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-4xl lg:whitespace-nowrap">
            Votre sécurité n&rsquo;est pas une option.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="font-display text-7xl font-bold leading-none text-gold sm:text-8xl">
              100%
            </p>
            <p className="mt-4 max-w-[16rem] text-lg leading-snug text-[var(--text-dark)]/70">
              des chauffeurs vérifiés avant leur toute première course.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="space-y-5">
              {POINTS.map((point) => (
                <li key={point} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-[15px] leading-relaxed text-[var(--text-dark)]/70">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
