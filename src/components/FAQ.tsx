"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Comment les chauffeurs sont-ils vérifiés ?",
    a: "Chaque chauffeur passe par un contrôle d’identité, de permis de conduire, de carte grise et de casier judiciaire avant toute mise en ligne, puis des rappels réguliers tant qu’il reste actif sur la plateforme.",
  },
  {
    q: "Quels moyens de paiement sont acceptés ?",
    a: "Mobile Money, Wave et les espèces sont acceptés sur l’ensemble des courses, quelle que soit la gamme de véhicule choisie.",
  },
  {
    q: "Que se passe-t-il en cas d’urgence pendant une course ?",
    a: "Un bouton SOS reste accessible tout au long du trajet. Il envoie immédiatement votre position et les détails de la course à nos équipes de sécurité.",
  },
  {
    q: "Fraya Taxi est disponible dans quels quartiers ?",
    a: "Le service est actif à Abidjan, de Cocody au Plateau en passant par Marcory, Yopougon, la Riviera et Bingerville, avec une couverture qui continue de s’étendre.",
  },
  {
    q: "Comment mes données personnelles sont-elles protégées ?",
    a: "Vos données sont chiffrées en transit et au repos, et traitées conformément à la loi ivoirienne n°2013-450. Vous pouvez à tout moment demander l’accès, la rectification ou la suppression de votre compte.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container className="max-w-[760px]">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-4xl">
            Questions fréquentes
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 divide-y divide-[var(--text-dark)]/10 border-t border-[var(--text-dark)]/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-semibold">
                    {item.q}
                  </span>
                  <Plus
                    size={20}
                    className={cn(
                      "shrink-0 text-gold transition-transform duration-300",
                      isOpen && "rotate-45"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <p className="overflow-hidden text-[15px] leading-relaxed text-[var(--text-dark)]/65">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
