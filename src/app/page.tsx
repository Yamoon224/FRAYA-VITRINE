import { Hero } from "@/components/Hero";
import { CitiesMarquee } from "@/components/CitiesMarquee";
import { AppPreview } from "@/components/AppPreview";
import { ExploreLinks } from "@/components/ExploreLinks";
import { Features } from "@/components/Features";
import { PaymentMethods } from "@/components/PaymentMethods";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { AppDownload } from "@/components/AppDownload";

export default function Home() {
  return (
    <>
      <Hero />
      <CitiesMarquee />
      <AppPreview />
      <ExploreLinks />
      <Features />
      <PaymentMethods />
      <Stats />
      <Testimonials />
      <AppDownload />
    </>
  );
}
