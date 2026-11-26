import Image from "next/image";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Clock, HandCoins, Headset } from "lucide-react";

const DRIVER_STORES = [
  {
    iconSrc: "/images/stores/appstore.webp",
    label: "App Store",
    href: "https://apps.apple.com/fr/app/fraya-taxi-driver/id6825035443",
  },
  {
    iconSrc: "/images/stores/googleplay.webp",
    label: "Google Play",
    href: "https://play.google.com/store/apps/details?id=fraya.taxi.driver.ci&hl=fr",
  },
];

const BENEFITS = [
  { icon: Clock, label: "Vos horaires, votre rythme" },
  { icon: HandCoins, label: "Revenus versés chaque semaine" },
  { icon: Headset, label: "Un support dédié aux chauffeurs" },
];

export function DriverCTA() {
  return (
    <section className="relative overflow-hidden bg-gold py-24 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-ink/10 blur-2xl"
      />
      <Container className="relative flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display max-w-5xl text-3xl font-semibold leading-tight tracking-[-0.01em] text-ink sm:text-5xl lg:whitespace-nowrap">
            Votre véhicule peut devenir votre revenu.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/70 sm:text-base">
            Rejoignez le réseau Fraya Taxi, quelle que soit la gamme de votre
            véhicule - Magic, Gladiateur ou Elite - et commencez à prendre des
            courses dès votre validation KYC.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {BENEFITS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-ink/80"
              >
                <Icon size={17} strokeWidth={1.8} />
                {label}
              </span>
            ))}
          </div>

          <a
            href="mailto:info@frayataxi.ci?subject=Candidature%20chauffeur%20Fraya%20Taxi"
            className="mt-10 rounded-full bg-ink px-8 py-3.5 text-center text-sm font-semibold text-paper-soft transition-transform hover:scale-[1.02] active:scale-95"
          >
            Postuler comme chauffeur
          </a>

          <div className="mt-6">
            <p className="text-xs font-medium text-ink/55">
              Déjà validé ? Téléchargez l&rsquo;app chauffeur
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
              {DRIVER_STORES.map(({ iconSrc, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink/5"
                >
                  <Image src={iconSrc} alt="" width={20} height={20} className="h-5 w-5 shrink-0" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
