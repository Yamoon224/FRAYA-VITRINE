"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Quote } from "lucide-react";

/* Avis illustratifs - à remplacer par de vrais retours passagers/chauffeurs. */
const QUOTES = [
  {
    quote:
      "Je vois le chauffeur arriver sur la carte en temps réel, ça change tout pour patienter sereinement le soir.",
    name: "Awa",
    role: "Passagère, Cocody",
  },
  {
    quote:
      "Le tarif est affiché avant de valider la course, aucune mauvaise surprise à l’arrivée.",
    name: "Serge",
    role: "Passager, Marcory",
  },
  {
    quote:
      "Je choisis mes horaires et je suis payé chaque semaine. L’accompagnement KYC a été rapide.",
    name: "Moussa",
    role: "Chauffeur partenaire, gamme Gladiateur",
  },
];

export function Testimonials() {
  return (
    <section className="bg-paper-soft py-24 sm:py-32">
      <Container>
        <Reveal className="text-center">
          <h2 className="font-display mx-auto max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-4xl lg:whitespace-nowrap">
            Ce que vivent déjà passagers et chauffeurs.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {QUOTES.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex h-full flex-col rounded-[1.75rem] bg-paper p-8 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
            >
              <Quote size={34} className="text-gold" strokeWidth={1.5} />
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-[var(--text-dark)]/75">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold">{item.name}</span>
                <span className="text-[var(--text-dark)]/50"> - {item.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
