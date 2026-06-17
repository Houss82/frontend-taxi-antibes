export const metadata = {
  title: "Nos Secteurs | Taxi Antibes sur la Côte d'Azur",
  description:
    "Découvrez les secteurs desservis par Taxi Antibes : Monaco, Cannes, Nice, Juan-les-Pins et toute la Côte d'Azur. Chauffeur privé 24/7, service premium et réservation rapide.",
  openGraph: {
    title: "Taxi Antibes - Nos Secteurs desservis",
    description:
      "Monaco, Cannes, Nice, Juan-les-Pins : nos chauffeurs couvrent toute la Côte d'Azur avec un service premium 24/7.",
    url: "https://www.taxi-antibes.fr/secteurs", // ✅ Version canonique avec www
    type: "website",
    images: [
      {
        url: "https://www.taxi-antibes.fr/van-aéro copie.jpeg", // ✅ Version canonique avec www
        width: 1200,
        height: 630,
        alt: "Taxi Antibes - Nos Secteurs",
      },
    ],
  },
  alternates: {
    canonical: "/secteurs", // ✅ Relatif, metadataBase gère le domaine (www)
  },
  robots: {
    index: true,
    follow: true,
  },
};

