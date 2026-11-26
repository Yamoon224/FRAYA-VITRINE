import type { ReactNode } from "react";
import { Container } from "./Container";
import { HeroBackground } from "./HeroBackground";

export function PageHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative z-0 overflow-hidden bg-ink pb-16 pt-32 sm:pb-20 sm:pt-40">
      <HeroBackground />
      <Container className="relative z-10 text-center">
        <p className="text-sm font-medium text-gold">{kicker}</p>
        <h1 className="font-display mx-auto mt-3 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.01em] text-paper-soft sm:text-5xl lg:whitespace-nowrap">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-paper-soft/65 sm:text-base">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
