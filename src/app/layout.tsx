import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fraya Taxi — Votre route, en toute confiance",
  description:
    "Fraya Taxi, l'application de VTC à Abidjan. Commandez une course en quelques secondes, suivez votre chauffeur en direct et payez par Mobile Money, Wave ou espèces.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${bricolage.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-[var(--text-dark)] font-body">
        {children}
      </body>
    </html>
  );
}
