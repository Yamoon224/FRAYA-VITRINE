import type { Metadata } from "next";
import { AppDownload } from "@/components/AppDownload";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { PASSENGER_SCREENSHOTS } from "@/lib/screenshots";

export const metadata: Metadata = {
  title: "Télécharger l'app - Fraya Taxi",
  description:
    "Installez Fraya Taxi et commandez votre première course en moins d'une minute.",
};

export default function TelechargerPage() {
  return (
    <>
      <AppDownload asPage />
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <Reveal className="text-center">
            <h2 className="font-display mx-auto max-w-lg text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-4xl">
              De la demande à l&rsquo;arrivée.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[var(--text-dark)]/65">
              Un aperçu complet de l&rsquo;application passager, telle que
              vous la retrouverez après l&rsquo;installation.
            </p>
          </Reveal>
        </Container>
        <Container className="mt-10 max-w-none">
          <ScreenshotGallery screenshots={PASSENGER_SCREENSHOTS} />
        </Container>
      </section>
    </>
  );
}
