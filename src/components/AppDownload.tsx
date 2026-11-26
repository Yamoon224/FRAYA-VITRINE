import Image from "next/image";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { ScreenshotCarousel } from "./ScreenshotCarousel";
import { HeroBackground } from "./HeroBackground";
import { cn } from "@/lib/utils";
import { PASSENGER_SCREENSHOTS } from "@/lib/screenshots";

const PASSENGER_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=fraya.taxi.ci&hl=fr";
const PASSENGER_APP_STORE_URL =
  "https://apps.apple.com/fr/app/fraya-taxi/id6825035633";

const STORES = [
  {
    iconSrc: "/images/stores/appstore.webp",
    top: "Télécharger sur",
    bottom: "l’App Store",
    href: PASSENGER_APP_STORE_URL,
  },
  {
    iconSrc: "/images/stores/googleplay.webp",
    top: "Disponible sur",
    bottom: "Google Play",
    href: PASSENGER_PLAY_STORE_URL,
  },
];

export function AppDownload({ asPage = false }: { asPage?: boolean }) {
  return (
    <section
      className={cn(
        "relative z-0 overflow-hidden bg-ink pb-24 sm:pb-32",
        asPage ? "pt-32 sm:pt-40" : "pt-24 sm:pt-32"
      )}
    >
      {asPage && <HeroBackground />}
      <Container className="relative z-10 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="text-center">
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.01em] text-paper-soft sm:text-4xl lg:whitespace-nowrap">
            Votre prochaine course est à un geste.
          </h2>
          <p className="mx-auto mt-5 max-w-sm text-[15px] leading-relaxed text-paper-soft/65">
            Installez Fraya Taxi, enregistrez vos adresses fréquentes et
            commandez votre premier trajet en moins d&rsquo;une minute.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {STORES.map(({ iconSrc, top, bottom, href }) => {
              const content = (
                <>
                  <Image src={iconSrc} alt="" width={28} height={28} className="h-7 w-7 shrink-0" />
                  <span className="text-left leading-tight">
                    <span className="block text-[11px] text-paper-soft/55">{top}</span>
                    <span className="block text-sm font-semibold text-paper-soft">
                      {bottom}
                    </span>
                  </span>
                </>
              );
              const className =
                "flex items-center gap-3 rounded-2xl border border-paper-soft/15 px-5 py-3 transition-colors";

              return href ? (
                <a
                  key={bottom}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(className, "hover:border-gold")}
                >
                  {content}
                </a>
              ) : (
                <span
                  key={bottom}
                  aria-disabled="true"
                  className={cn(className, "opacity-45")}
                >
                  {content}
                </span>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex justify-center lg:justify-end">
          <ScreenshotCarousel screenshots={PASSENGER_SCREENSHOTS} />
        </Reveal>
      </Container>
    </section>
  );
}
