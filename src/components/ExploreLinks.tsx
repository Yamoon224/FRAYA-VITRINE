"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation, Car, ShieldCheck, HandCoins, ChevronRight } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

const MotionLink = motion(Link);

const LINKS = [
  {
    icon: Navigation,
    title: "Comment ça marche",
    body: "De la commande à l’arrivée, chaque étape de la course.",
    href: "/comment-ca-marche",
  },
  {
    icon: Car,
    title: "Nos gammes",
    body: "Magic, Gladiateur, Elite : le bon véhicule pour chaque trajet.",
    href: "/gammes",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité",
    body: "Vérifications des chauffeurs, chiffrement, conformité ARTCI.",
    href: "/securite",
  },
  {
    icon: HandCoins,
    title: "Devenir chauffeur",
    body: "Rejoignez le réseau et choisissez vos horaires.",
    href: "/chauffeurs",
  },
];

export function ExploreLinks() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <Container>
        <Reveal className="text-center">
          <h2 className="font-display mx-auto max-w-lg text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-4xl">
            Tout savoir sur Fraya Taxi.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LINKS.map((item, i) => (
            <MotionLink
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group flex h-full flex-col justify-between rounded-[1.5rem] border border-[var(--text-dark)]/10 p-7 transition-colors hover:border-gold"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -4 }}
                transition={{ duration: 0.2 }}
                className="w-fit"
              >
                <item.icon size={34} className="text-gold" strokeWidth={1.5} />
              </motion.div>
              <div className="mt-8">
                <h3 className="font-display text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-dark)]/60">
                  {item.body}
                </p>
                <span className="mt-4 flex items-center gap-1 text-sm font-medium text-gold-deep">
                  Découvrir
                  <ChevronRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </MotionLink>
          ))}
        </div>
      </Container>
    </section>
  );
}
