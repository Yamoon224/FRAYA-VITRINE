import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { AnimatedCounter } from "./AnimatedCounter";

const STATS = [
  { value: 3, suffix: "", label: "gammes de véhicules, du quotidien au premium" },
  { value: 13, suffix: "", label: "communes desservies à Abidjan" },
  { value: 72, suffix: "h", label: "délai maximum de notification en cas d’incident" },
];

export function Stats() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <Container>
        <Reveal className="text-center">
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-4xl lg:whitespace-nowrap">
            Fraya Taxi en quelques chiffres.
          </h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-14 grid gap-10 border-t border-[var(--text-dark)]/10 pt-12 text-center sm:grid-cols-3"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mx-auto mt-3 max-w-[14rem] text-[15px] leading-relaxed text-[var(--text-dark)]/60">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
