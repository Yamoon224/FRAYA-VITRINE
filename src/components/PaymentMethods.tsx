"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

const METHODS = [
  { name: "Wave", src: "/images/payments/wave.webp" },
  { name: "Orange Money", src: "/images/payments/orange-money.webp" },
  { name: "MTN MoMo", src: "/images/payments/mtn-momo.webp" },
  { name: "Moov Money", src: "/images/payments/moov-money.webp" },
];

export function PaymentMethods() {
  return (
    <section className="bg-paper-soft py-24 sm:py-32">
      <Container>
        <Reveal className="text-center">
          <h2 className="font-display mx-auto max-w-lg text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-4xl">
            Payez comme vous préférez.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[var(--text-dark)]/60">
            Mobile Money ou espèces : le choix reste le vôtre, à chaque
            course.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {METHODS.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: i * 0.08 },
                y: {
                  duration: 3.6 + (i % 3) * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4 + i * 0.2,
                },
              }}
              whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
              className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-3xl bg-paper shadow-[0_20px_45px_-20px_rgba(0,0,0,0.25)] sm:h-36 sm:w-36"
            >
              <Image
                src={m.src}
                alt={m.name}
                width={240}
                height={240}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
