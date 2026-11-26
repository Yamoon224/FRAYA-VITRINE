import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Comment ça marche - Fraya Taxi",
  description:
    "Commandez une course Fraya Taxi, suivez votre chauffeur en direct et payez comme vous voulez. Voici comment ça marche, étape par étape.",
};

export default function CommentCaManchePage() {
  return (
    <>
      <PageHeader
        kicker="Fraya Taxi"
        title="Comment ça marche"
        subtitle="Trois gestes séparent votre position de votre destination : commander, suivre, arriver."
      />
      <HowItWorks />
      <FAQ />
    </>
  );
}
