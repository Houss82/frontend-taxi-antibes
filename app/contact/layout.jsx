export const metadata = {
  title: "Taxi Antibes Numéro ☎️ 07 49 77 76 21 | Disponible 24h/24",
  description:
    "Besoin du numéro de taxi à Antibes ? Appelez le 07 49 77 76 21. Taxi disponible 24h/24 – réponse immédiate.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Taxi Antibes Numéro ☎️ 07 49 77 76 21 | Disponible 24h/24",
    description:
      "Besoin du numéro de taxi à Antibes ? Appelez le 07 49 77 76 21. Taxi disponible 24h/24 – réponse immédiate.",
    url: "https://www.taxi-antibes.fr/contact",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "https://www.taxi-antibes.fr/contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Taxi Antibes - Numéro de téléphone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Antibes Numéro ☎️ 07 49 77 76 21 | Disponible 24h/24",
    description:
      "Besoin du numéro de taxi à Antibes ? Appelez le 07 49 77 76 21. Taxi disponible 24h/24 – réponse immédiate.",
    images: ["https://www.taxi-antibes.fr/contact.jpg"],
  },
};

export default function ContactLayout({ children }) {
  return children;
}
