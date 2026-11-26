"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Users, Clock } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

const TIERS = [
  {
    name: "Magic",
    tagline: "Économique et pratique",
    image: "/images/vehicles/magic.webp",
    price: "2 500",
    badge: { label: "Le moins cher", className: "bg-emerald-100 text-emerald-700" },
    recommended: true,
  },
  {
    name: "Gladiateur",
    tagline: "Confort standard",
    image: "/images/vehicles/gladiateur.webp",
    price: "3 250",
    badge: null,
    recommended: false,
  },
  {
    name: "Elite",
    tagline: "Véhicules récents, climatisés",
    image: "/images/vehicles/elite.webp",
    price: "4 000",
    badge: { label: "Confort assuré", className: "bg-sky-100 text-sky-700" },
    recommended: false,
  },
];

export function VehicleTiers() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <Reveal className="text-center">
          <h2 className="font-display mx-auto max-w-5xl text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-4xl lg:whitespace-nowrap">
            Trois gammes, une seule exigence de sécurité.
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-[var(--text-dark)]/65">
            Chaque chauffeur passe par la même vérification d’identité, de
            permis et de casier judiciaire - seul le véhicule change.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border-2 ${
                tier.recommended
                  ? "border-gold bg-gold/10"
                  : "border-[var(--text-dark)]/10 bg-paper"
              }`}
            >
              {tier.recommended && (
                <span className="absolute right-4 top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-gold shadow-sm">
                  <Check size={14} className="text-ink" strokeWidth={3} />
                </span>
              )}

              <div className="relative h-36 w-full overflow-hidden bg-paper-soft">
                <Image
                  src={tier.image}
                  alt={`Véhicule de la gamme ${tier.name}`}
                  fill
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.07]"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <div>
                  <h3 className="font-display text-lg font-semibold">{tier.name}</h3>
                  <p className="mt-0.5 text-sm text-[var(--text-dark)]/60">
                    {tier.tagline}
                  </p>
                </div>

                {tier.badge && (
                  <span
                    className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-semibold ${tier.badge.className}`}
                  >
                    {tier.badge.label}
                  </span>
                )}

                <div className="mt-auto flex items-end justify-between">
                  <div className="flex items-center gap-2 text-xs text-[var(--text-dark)]/60">
                    <span className="flex items-center gap-1">
                      <Users size={14} />4
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-gold/15 px-2 py-1 font-medium text-[var(--text-dark)]/75">
                      <Clock size={13} />
                      ~5 min
                    </span>
                  </div>
                  <p className="text-right">
                    <span
                      className={`font-display block text-xl font-bold ${
                        tier.recommended ? "text-gold-deep" : ""
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span className="block text-xs text-[var(--text-dark)]/50">FCFA</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
