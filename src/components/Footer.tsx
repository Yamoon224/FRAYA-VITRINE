import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

const COPYRIGHT_YEAR = 2026;

const COLUMNS = [
  {
    title: "Produit",
    links: [
      { label: "Comment ça marche", href: "/comment-ca-marche" },
      { label: "Nos gammes", href: "/gammes" },
      { label: "Sécurité", href: "/securite" },
      { label: "Télécharger l’app", href: "/telecharger" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "Devenir chauffeur", href: "/chauffeurs" },
      { label: "Nous contacter", href: "mailto:info@frayataxi.ci" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Politique de confidentialité", href: "/confidentialite" },
      { label: "Conditions générales d’utilisation", href: "/legal/cgu-fraya-taxi.pdf" },
      { label: "Conditions générales de vente", href: "/legal/cgv-fraya-taxi.pdf" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-16 text-paper-soft">
      <Container>
        <div className="grid gap-12 sm:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/fraya-logo.png"
                alt="Fraya Taxi"
                width={132}
                height={72}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper-soft/55">
              Fraya Taxi SAU - service de VTC opérant à Abidjan, Côte
              d&rsquo;Ivoire.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-sm font-semibold text-paper-soft">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => {
                    const isInternal = link.href.startsWith("/") && !link.href.endsWith(".pdf");
                    const className =
                      "text-sm text-paper-soft/55 transition-colors hover:text-gold";
                    return (
                      <li key={link.label}>
                        {isInternal ? (
                          <Link href={link.href} className={className}>
                            {link.label}
                          </Link>
                        ) : (
                          <a href={link.href} className={className}>
                            {link.label}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper-soft/10 pt-6 text-xs text-paper-soft/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {COPYRIGHT_YEAR} Fraya Taxi SAU. Tous droits réservés.</span>
          <span>Abidjan, Côte d&rsquo;Ivoire</span>
        </div>
      </Container>
    </footer>
  );
}
