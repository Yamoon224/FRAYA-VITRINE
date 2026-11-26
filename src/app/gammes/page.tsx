import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { VehicleTiers } from "@/components/VehicleTiers";

export const metadata: Metadata = {
  title: "Nos gammes - Fraya Taxi",
  description:
    "Magic, Gladiateur, Elite : trois gammes de véhicules Fraya Taxi, toutes soumises à la même vérification d'identité et de sécurité.",
};

export default function GammesPage() {
  return (
    <>
      <PageHeader
        kicker="Nos gammes"
        title="Un véhicule pour chaque trajet"
        subtitle="Du déplacement du quotidien au rendez-vous important, choisissez la gamme adaptée sans jamais faire de compromis sur la sécurité."
      />
      <VehicleTiers />
    </>
  );
}
