"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/comment-ca-marche", label: "Comment ça marche" },
  { href: "/gammes", label: "Nos gammes" },
  { href: "/securite", label: "Sécurité" },
  { href: "/chauffeurs", label: "Devenir chauffeur" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={cn(
          "mx-auto flex h-16 max-w-[1200px] items-center justify-between rounded-full border border-paper-soft/10 bg-ink/95 px-5 backdrop-blur-md transition-shadow duration-300 sm:px-7",
          scrolled || open
            ? "shadow-[0_16px_40px_-18px_rgba(0,0,0,0.7)]"
            : "shadow-[0_8px_24px_-16px_rgba(0,0,0,0.5)]"
        )}
      >
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/fraya-logo.png"
            alt="Fraya Taxi"
            width={132}
            height={72}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium underline-offset-4 transition-colors hover:text-gold",
                pathname === link.href
                  ? "text-gold underline"
                  : "text-paper-soft/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/telecharger"
            className="cta-pulse flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95"
          >
            <Download size={16} strokeWidth={2.2} />
            Télécharger l&rsquo;app
          </Link>
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
        <div className="mx-auto mt-3 max-w-[1200px] rounded-3xl border border-ink-line/60 bg-ink px-6 pb-6 pt-4 shadow-[0_16px_40px_-18px_rgba(0,0,0,0.7)] md:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-3 text-base font-medium underline-offset-4 hover:bg-ink-soft hover:text-gold",
                  pathname === link.href
                    ? "text-gold underline"
                    : "text-paper-soft/90"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/telecharger"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-ink"
            >
              <Download size={16} strokeWidth={2.2} />
              Télécharger l&rsquo;app
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
