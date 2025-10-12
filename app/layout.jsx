import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Inter, Playfair_Display } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Taxi Antibes - Transferts Aéroport Nice | Service Premium",
  description:
    "Taxi pour l'aéroport de Nice depuis Antibes. Transferts aéroport, courses locales et service premium sur la Côte d'Azur. Réservation 24h/24.",
  generator: "v0.app",
  keywords:
    "taxi antibes, transferts aéroport nice, taxi pour l'aéroport de nice, taxi antibes aéroport, vtc antibes nice, chauffeur privé antibes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} ${playfair.variable} ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
