import Link from "next/link";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  return (
    <section className="relative z-0 overflow-hidden bg-ink pb-20 pt-32 sm:pb-28 sm:pt-40">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-8">
        <h1 className="font-display whitespace-normal text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.02em] text-paper-soft sm:text-[3.4rem] lg:whitespace-nowrap lg:text-[3.4rem] xl:text-[3.8rem]">
          <span
            className="inline-block -rotate-6 rounded-2xl px-3 py-1 align-middle"
            style={{ backgroundColor: "#f0d570" }}
          >
            <span className="text-ink">Abidjan</span>
          </span>{" "}
          avance avec vous.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-paper-soft/70">
          Fraya Taxi met en relation passagers et chauffeurs vérifiés, de
          Cocody au Plateau, de Yopougon à la Riviera. Une course se commande
          en un geste, se suit en direct, et se paie comme vous voulez.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/telecharger"
            className="cta-pulse rounded-full bg-gold px-7 py-3.5 text-center text-sm font-semibold text-ink transition-transform hover:scale-[1.02] active:scale-95"
          >
            Télécharger l&rsquo;app
          </Link>
          <Link
            href="/chauffeurs"
            className="rounded-full border border-paper-soft/25 px-7 py-3.5 text-center text-sm font-semibold text-paper-soft transition-colors hover:border-gold hover:text-gold"
          >
            Devenir chauffeur partenaire
          </Link>
        </div>

        <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-paper-soft/60">
          <span>4,8/5 de note moyenne passagers</span>
          <span>Chauffeurs identité et casier vérifiés</span>
          <span>Mobile Money, Wave ou espèces</span>
        </div>
      </div>
    </section>
  );
}
