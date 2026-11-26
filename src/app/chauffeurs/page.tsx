import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { DriverCTA } from "@/components/DriverCTA";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { DRIVER_SCREENSHOTS } from "@/lib/screenshots";

export const metadata: Metadata = {
  title: "Devenir chauffeur - Fraya Taxi",
  description:
    "Rejoignez le réseau de chauffeurs partenaires Fraya Taxi à Abidjan : horaires libres, revenus hebdomadaires, support dédié.",
};

export default function ChauffeursPage() {
  return (
    <>
      <PageHeader
        kicker="Devenir chauffeur"
        title="Conduisez à votre rythme"
        subtitle="Quelle que soit la gamme de votre véhicule, rejoignez le réseau de chauffeurs partenaires Fraya Taxi à Abidjan."
      />
      <DriverCTA />
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <Reveal className="text-center">
            <h2 className="font-display mx-auto max-w-lg text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-4xl">
              Votre espace chauffeur.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[var(--text-dark)]/65">
              Recettes, courses en direct, passage en ligne : l&rsquo;app
              chauffeur en un coup d&rsquo;œil.
            </p>
          </Reveal>
        </Container>
        <Container className="mt-10 max-w-none">
          <ScreenshotGallery screenshots={DRIVER_SCREENSHOTS} />
        </Container>
      </section>
    </>
  );
}
