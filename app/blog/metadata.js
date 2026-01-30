export const metadata = {
  title: "Blog | Taxi Antibes - Conseils et Actualités",
  description:
    "Découvrez nos conseils pour vos transports à Antibes. Guides pratiques, actualités et informations sur nos services de taxi premium.",
  keywords: [
    "blog taxi antibes",
    "conseils transport antibes",
    "guide chauffeur privé",
    "actualités taxi",
    "transport côte d'azur",
    "taxi aéroport nice",
  ],
  openGraph: {
    title: "Blog | Taxi Antibes",
    description:
      "Découvrez nos conseils pour vos transports à Antibes. Guides pratiques, actualités et informations sur nos services de taxi premium.",
    url: "https://www.taxi-antibes.fr/blog", // ✅ Version canonique avec www
    type: "website",
    images: [
      {
        url: "https://www.taxi-antibes.fr/bg-image.png", // ✅ Version canonique avec www
        width: 1200,
        height: 630,
        alt: "Blog Taxi Antibes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Taxi Antibes",
    description: "Découvrez nos conseils pour vos transports à Antibes.",
    images: ["https://www.taxi-antibes.fr/bg-image.png"], // ✅ Version canonique avec www
  },
  alternates: {
    canonical: "/blog", // ✅ Relatif, metadataBase gère le domaine (www)
    languages: {
      fr: "/blog",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
