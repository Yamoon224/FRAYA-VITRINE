import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[560px] w-[560px] rounded-full opacity-60 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, var(--gold) 0%, var(--coral) 45%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-16 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.02em] text-paper-soft sm:text-[3.4rem] lg:text-[3.8rem]">
            Abidjan avance
            <br />
            avec vous.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-soft/70">
            Fraya Taxi met en relation passagers et chauffeurs vérifiés, de
            Cocody au Plateau, de Yopougon à la Riviera. Une course se
            commande en un geste, se suit en direct, et se paie comme vous
            voulez.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#telecharger"
              className="rounded-full bg-gold px-7 py-3.5 text-center text-sm font-semibold text-ink transition-transform hover:scale-[1.02] active:scale-95"
            >
              Télécharger l&rsquo;app
            </a>
            <a
              href="#chauffeurs"
              className="rounded-full border border-paper-soft/25 px-7 py-3.5 text-center text-sm font-semibold text-paper-soft transition-colors hover:border-gold hover:text-gold"
            >
              Devenir chauffeur partenaire
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-paper-soft/60">
            <span>4,8/5 de note moyenne passagers</span>
            <span className="h-4 w-px bg-paper-soft/20" />
            <span>Chauffeurs identité et casier vérifiés</span>
            <span className="h-4 w-px bg-paper-soft/20" />
            <span>Mobile Money, Wave ou espèces</span>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <svg
            viewBox="0 0 400 420"
            className="pointer-events-none absolute -left-6 top-0 hidden h-full w-full opacity-80 sm:block"
            fill="none"
          >
            <path
              className="route-path"
              d="M30 40 C 120 60, 40 180, 130 220 S 260 330, 370 390"
              stroke="var(--gold)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
