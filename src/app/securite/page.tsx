import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Safety } from "@/components/Safety";

export const metadata: Metadata = {
  title: "Sécurité - Fraya Taxi",
  description:
    "Chauffeurs vérifiés, données chiffrées, bouton SOS : comment Fraya Taxi protège passagers et chauffeurs à chaque course.",
};

export default function SecuritePage() {
  return (
    <>
      <PageHeader
        kicker="Sécurité"
        title="Votre sécurité, à chaque étape"
        subtitle="De la vérification du chauffeur au chiffrement de vos données, la sécurité n'est jamais une option chez Fraya Taxi."
      />
      <Safety />
    </>
  );
}
