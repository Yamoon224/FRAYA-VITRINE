"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { MapIllustration } from "./MapIllustration";
import { ShieldCheck, Siren, Star, Tag, Radar } from "lucide-react";
import type { ReactNode } from "react";

function Card({
  className,
  delay = 0,
  border = "border-paper-soft/10",
  children,
}: {
  className?: string;
  delay?: number;
  border?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div
        className={`flex h-full flex-col rounded-[1.75rem] border ${border} bg-ink-soft p-8 sm:p-10`}
      >
        {children}
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="bg-ink py-24 text-paper-soft sm:py-32">
      <Container>
        <Reveal className="text-center">
          <h2 className="font-display mx-auto max-w-lg text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-4xl">
            Pensé pour les rues d&rsquo;Abidjan.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-6">
          <Card className="md:col-span-6" delay={0}>
            <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <Radar size={26} className="text-gold" strokeWidth={1.6} />
                <h3 className="font-display mt-5 text-xl font-semibold sm:text-2xl">
                  Suivi GPS en direct, du départ à l&rsquo;arrivée
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-paper-soft/60">
                  Partagez votre trajet avec un proche et visualisez la
                  position du chauffeur en temps réel, y compris l&rsquo;ETA
                  recalculé selon le trafic.
                </p>
              </div>
              <MapIllustration className="h-56 w-full overflow-hidden rounded-2xl sm:h-72" />
            </div>
          </Card>

          <Card className="md:col-span-3" delay={0.05}>
            <ShieldCheck size={24} className="text-gold" strokeWidth={1.6} />
            <div className="mt-5">
              <h3 className="font-display text-lg font-semibold">
                Chauffeurs vérifiés
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-paper-soft/60">
                Identité, permis, carte grise et casier judiciaire contrôlés
                avant la première course, avec des rappels réguliers tant que
                le chauffeur reste actif sur la plateforme.
              </p>
            </div>
          </Card>

          <Card className="md:col-span-3" delay={0.1} border="border-coral/20">
            <Siren size={24} className="text-coral" strokeWidth={1.6} />
            <div className="mt-5">
              <h3 className="font-display text-lg font-semibold">
                Bouton SOS
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-paper-soft/60">
                Une alerte avec votre position part directement à nos équipes
                de sécurité, à tout moment du trajet.
              </p>
            </div>
          </Card>

          <Card className="md:col-span-3" delay={0.15}>
            <Star size={24} className="text-gold" strokeWidth={1.6} />
            <div className="mt-5">
              <h3 className="font-display text-lg font-semibold">
                Notation à deux sens
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-paper-soft/60">
                Passagers et chauffeurs se notent mutuellement après chaque
                course.
              </p>
            </div>
          </Card>

          <Card className="md:col-span-3" delay={0.2}>
            <Tag size={24} className="text-gold" strokeWidth={1.6} />
            <div className="mt-5">
              <h3 className="font-display text-lg font-semibold">
                Codes promo
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-paper-soft/60">
                Des réductions ponctuelles, appliquées directement sur le prix
                de la course.
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
