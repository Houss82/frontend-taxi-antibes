import { metadata as pageMetadata } from "./metadata";

export const metadata = {
  ...pageMetadata,
  openGraph: {
    title: pageMetadata.title,
    description: pageMetadata.description,
    url: "https://www.taxi-antibes.fr/services/taxi-aeroport-nice",
    type: "website",
    images: [
      {
        url: "https://www.taxi-antibes.fr/aeroport-nice-depart-t2-2.jpeg",
        width: 1200,
        height: 630,
        alt: "Taxi Aéroport Nice Côte d'Azur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.title,
    description: pageMetadata.description,
    images: ["https://www.taxi-antibes.fr/aeroport-nice-depart-t2-2.jpeg"],
  },
  alternates: {
    canonical: "https://www.taxi-antibes.fr/services/taxi-aeroport-nice",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TaxiAeroportNiceLayout({ children }) {
  return children;
}

