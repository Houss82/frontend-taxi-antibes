// app/layout.jsx (SERVER) — pas de "use client"
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Police principale du site : Outfit
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

// ✅ Génère <title>, <meta>, canonical… côté serveur (HTML initial)
export async function generateMetadata() {
  const siteUrl = "https://taxi-antibes.fr";
  const siteName = "Taxi Antibes";
  const title =
    "Taxi Antibes - Transferts Aéroport Nice 24/7 | Service Premium Côte d'Azur";
  const description =
    "Service de taxi officiel à Antibes. Transferts aéroport Nice, courses locales, Juan-les-Pins, Cannes, Monaco. Réservation 24h/24 - Chauffeurs professionnels - Tarifs transparents.";

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords:
      "taxi antibes, transferts aéroport nice, taxi pour l'aéroport de nice depuis antibes, taxi antibes aéroport, vtc antibes nice, chauffeur privé antibes, taxi juan-les-pins, taxi côte d'azur",
    alternates: {
      canonical: siteUrl,
      languages: {
        fr: siteUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: siteUrl,
      siteName,
      title,
      description,
      images: [
        {
          url: `${siteUrl}/van-aéro copie.jpeg`,
          width: 1200,
          height: 630,
          alt: "Taxi Antibes - Service Premium",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/van-aéro copie.jpeg`],
    },
    // Métadonnées géo
    other: {
      "geo.region": "FR-06",
      "geo.placename": "Antibes",
      "geo.position": "43.580418;7.125102",
      ICBM: "43.580418, 7.125102",
    },
  };
}

export default function RootLayout({ children }) {
  // JSON-LD pour le SEO (Schema.org) - inclus côté serveur dans le HTML initial
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": "https://taxi-antibes.fr/#organization",
    name: "Taxi Antibes",
    description:
      "Service de taxi premium à Antibes pour l'aéroport de Nice et toute la Côte d'Azur",
    url: "https://taxi-antibes.fr",
    telephone: "+33749777621",
    email: "contact@taxi-antibes.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Antibes",
      addressLocality: "Antibes",
      postalCode: "06600",
      addressRegion: "Alpes-Maritimes",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "43.580418",
      longitude: "7.125102",
    },
    areaServed: [
      { "@type": "City", name: "Antibes" },
      { "@type": "City", name: "Nice" },
      { "@type": "City", name: "Cannes" },
      { "@type": "City", name: "Monaco" },
      { "@type": "City", name: "Juan-les-Pins" },
    ],
    serviceType: "Transport de personnes",
    priceRange: "€€",
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: ["https://maps.app.goo.gl/gAA4M31jtVcsY3Km9"],
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://taxi-antibes.fr/reservation",
      },
    },
  };

  return (
    <html lang="fr">
      <head>
        {/* ✅ Linkavista - Vérification de propriété du site */}
        <meta name="linkavista" content="link-8847-6460" />
        {/* ✅ Google Ads (gtag.js) - Suivi des conversions */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17731163340"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17731163340');
            `,
          }}
        />
        {/* ✅ JSON-LD inclus dans le HTML initial (SSR) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.className} ${playfair.variable} ${GeistSans.variable} ${GeistMono.variable} antialiased`}
        suppressHydrationWarning
        itemScope
        itemType="https://schema.org/TaxiService"
      >
        {/* ✅ Le contenu SSR arrive ICI - pas enveloppé dans un composant client */}
        <main>{children}</main>

        {/* ✅ IMPORTANT: Les providers/scripts clients sont À CÔTÉ, pas autour de {children} */}
        {/* @ts-expect-error Server/Client boundary ok */}
        <ClientProviders />
      </body>
    </html>
  );
}

// Import dynamique pour éviter les problèmes d'ordre
import ClientProviders from "./ClientProviders";
