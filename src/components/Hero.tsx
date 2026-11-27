import Link from "next/link";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  return (
    <section className="relative z-0 overflow-hidden bg-ink pb-8 pt-20 sm:pb-10 sm:pt-24">
      <HeroBackground />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-3 lg:gap-10 lg:px-8">
        <div className="text-center lg:col-span-2 lg:text-left">
          <h1 className="font-display whitespace-normal text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.02em] text-paper-soft sm:text-[3.4rem] xl:text-[3.8rem]">
            <span
              className="inline-block -rotate-6 rounded-2xl px-3 py-1 align-middle"
              style={{ backgroundColor: "#f0d570" }}
            >
              <span className="text-ink">Abidjan</span>
            </span>{" "}
            avance
            <br />
            avec vous.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-paper-soft/70 lg:mx-0">
            Fraya Taxi met en relation passagers et chauffeurs vérifiés, de
            Cocody au Plateau, de Yopougon à la Riviera. Une course se commande
            en un geste, se suit en direct, et se paie comme vous voulez.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
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

          <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-paper-soft/60 lg:mx-0 lg:justify-start">
            <span>4,8/5 de note moyenne passagers</span>
            <span>Chauffeurs identité et casier vérifiés</span>
            <span>Mobile Money, Wave ou espèces</span>
          </div>
        </div>

        <div className="float-idle mx-auto w-full max-w-[200px] sm:max-w-[220px] lg:col-span-1 lg:max-w-[230px]">
          <div className="group relative overflow-hidden rounded-[1.5rem] border border-gold/30 bg-ink-soft p-1.5 shadow-[0_30px_70px_-20px_rgba(240,213,112,0.35)]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[1.5rem] opacity-60"
              style={{
                background:
                  "radial-gradient(120% 60% at 50% -10%, rgba(240,213,112,0.35) 0%, transparent 60%)",
              }}
            />
            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.1rem] bg-ink">
              <video
                className="h-full w-full object-cover"
                src="/videos/hero-demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
