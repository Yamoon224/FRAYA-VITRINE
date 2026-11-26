"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#comment-ca-marche", label: "Comment ça marche" },
  { href: "#gammes", label: "Nos gammes" },
  { href: "#securite", label: "Sécurité" },
  { href: "#chauffeurs", label: "Devenir chauffeur" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "bg-ink/95 backdrop-blur-sm border-b border-ink-line/60"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-18 max-w-[1200px] items-center justify-between px-6 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/fraya-logo.png"
            alt="Fraya Taxi"
            width={132}
            height={72}
            className="h-10 w-auto"
            priority
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-paper-soft/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#telecharger"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95"
          >
            Télécharger l&rsquo;app
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-paper-soft md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-line/60 bg-ink px-6 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-paper-soft/90 hover:bg-ink-soft hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#telecharger"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-ink"
            >
              Télécharger l&rsquo;app
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
