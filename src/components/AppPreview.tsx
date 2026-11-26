import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { ScreenshotMarquee } from "./ScreenshotMarquee";
import { PASSENGER_SCREENSHOTS } from "@/lib/screenshots";

export function AppPreview() {
  return (
    <section className="overflow-hidden bg-ink pb-20 pt-16 sm:pb-28 sm:pt-20">
      <Container>
        <Reveal className="text-center">
          <h2 className="font-display mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.01em] text-paper-soft sm:text-4xl lg:whitespace-nowrap">
            L&rsquo;expérience d&rsquo;utilisation passagère.
          </h2>
          <Link
            href="/telecharger"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold hover:text-gold-pale"
          >
            Voir toutes les captures
            <ChevronRight size={15} />
          </Link>
        </Reveal>
      </Container>

      <div className="mt-10">
        <ScreenshotMarquee screenshots={PASSENGER_SCREENSHOTS} />
      </div>
    </section>
  );
}
