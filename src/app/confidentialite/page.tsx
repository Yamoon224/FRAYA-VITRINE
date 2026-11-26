import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Fraya Taxi",
  description:
    "Comment Fraya Taxi SAU collecte, utilise et protège les données personnelles de ses passagers, chauffeurs et partenaires de flotte.",
};

const SECTIONS = [
  {
    title: "Article 1 : Données collectées",
    items: [
      "Informations de compte : nom, prénom, adresse e-mail, numéro de téléphone, photo de profil, identifiants d’accès chiffrés.",
      "Vérification d’identité et KYC (chauffeurs/partenaires) : pièce d’identité, permis de conduire, carte grise, extrait de casier judiciaire, attestation d’assurance du véhicule.",
      "Données de géolocalisation : coordonnées GPS précises en temps réel, nécessaires à la mise en relation, au calcul du trajet et à la sécurité.",
      "Données de transaction : historique des courses, montants, horodatages et modes de paiement (Mobile Money, Wave, espèces).",
      "Données techniques et de sécurité : adresse IP, identifiants d’appareil, logs de connexion, jetons d’authentification (JWT).",
    ],
  },
  {
    title: "Article 2 : Finalités du traitement",
    items: [
      "Exécution des services de transport et mise en relation.",
      "Gestion des paiements et facturation.",
      "Sécurité de la plateforme, traçabilité des trajets et prévention de la fraude.",
      "Support client, gestion des litiges et des réclamations.",
      "Respect des obligations légales et réglementaires.",
    ],
  },
  {
    title: "Article 3 : Destinataires et partage des données",
    items: [
      "Entre utilisateurs : le passager accède au prénom, à la photo, à la note et au numéro de plaque du chauffeur ; le chauffeur accède au prénom et aux points de prise en charge/destination du passager.",
      "Prestataires techniques : services de cartographie, agrégateurs de paiement agréés et hébergeurs Cloud (AWS).",
      "Autorités légales : uniquement sur réquisition judiciaire ou légale conforme au droit ivoirien.",
    ],
  },
  {
    title: "Article 4 : Durées de conservation",
    items: [
      "Données de géolocalisation GPS : conservées 12 mois maximum, puis purgées ou anonymisées.",
      "Comptes inactifs et historique applicatif : conservés 3 ans à compter de la fermeture du compte ou de la dernière activité.",
      "Logs de connexion et traçabilité : conservés 1 an glissant.",
      "Données comptables et financières : conservées 10 ans conformément aux exigences du droit commercial et comptable OHADA.",
    ],
  },
  {
    title: "Article 5 : Sécurité des données",
    items: [
      "Chiffrement des communications en transit (HTTPS / TLS 1.2 et 1.3).",
      "Chiffrement des données stockées et des sauvegardes (AES-256).",
      "Hachage irréversible des mots de passe (Argon2id) et authentification forte (MFA/OTP).",
      "Contrôle d’accès strict par profil (RBAC), selon le principe du moindre privilège.",
      "Protection par pare-feu applicatif (WAF) et isolation des environnements.",
    ],
  },
  {
    title: "Article 6 : Gestion des violations de données",
    items: [
      "En cas d’incident de sécurité entraînant une violation de données personnelles, Fraya Taxi SAU s’engage à notifier l’Autorité de Régulation (ARTCI) sous 72 heures maximum, et à informer les personnes concernées dans les meilleurs délais en cas de risque élevé pour leurs droits.",
    ],
  },
  {
    title: "Article 7 : Vos droits",
    items: [
      "Droit d’accès, de rectification et d’information : consulter et mettre à jour vos données.",
      "Droit à l’effacement / droit à l’oubli : demander la suppression de votre compte, sous réserve des obligations légales de conservation.",
      "Droit d’opposition : refuser le traitement de vos données à des fins de prospection.",
      "Droit de réclamation : saisir l’ARTCI (www.artci.ci) en cas de différend non résolu.",
    ],
  },
  {
    title: "Article 8 : Contact DPO",
    items: [
      "Pour exercer vos droits ou pour toute question relative à la gestion de vos données : info@frayataxi.ci",
    ],
  },
];

export default function ConfidentialitePage() {
  return (
    <>
      <PageHeader
        kicker="Fraya Taxi SAU - Abidjan"
        title="Politique de confidentialité"
        subtitle="La présente politique décrit la manière dont Fraya Taxi SAU, dont le siège social est à Abidjan, collecte, utilise, conserve et protège les données à caractère personnel de ses utilisateurs (passagers, chauffeurs et partenaires de flotte), conformément à la loi ivoirienne n°2013-450 du 19 juin 2013 relative à la protection des données à caractère personnel."
      />
      <div className="bg-paper pb-24 pt-16 sm:pt-20">
        <Container className="max-w-[760px]">
          <div className="space-y-12">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl font-semibold">
                  {section.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-[var(--text-dark)]/70">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
