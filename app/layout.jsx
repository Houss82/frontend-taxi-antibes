import { HydrationFix } from "@/components/hydration-fix";
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              name: "Taxi Antibes",
              description:
                "Service de taxi premium à Antibes pour l'aéroport de Nice et toute la Côte d'Azur",
              url: "https://taxi-antibes.fr",
              telephone: "+33623360501",
              email: "contact@taxi-antibes.fr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Antibes",
                addressLocality: "Antibes",
                postalCode: "06600",
                addressRegion: "Alpes-Maritimes",
                addressCountry: "FR",
              },
              areaServed: [
                "Antibes",
                "Nice",
                "Cannes",
                "Monaco",
                "Juan-les-Pins",
                "Côte d'Azur",
              ],
              serviceType: "Transport de personnes",
              priceRange: "€€",
              openingHours: "Mo-Su 00:00-23:59",
              sameAs: ["https://maps.app.goo.gl/ZvawMHedMtxisBiQ7"],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} ${playfair.variable} ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <HydrationFix />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
