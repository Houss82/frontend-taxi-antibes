import { metadata as pageMetadata } from "./metadata";

export const metadata = {
  ...pageMetadata,
  openGraph: {
    title: pageMetadata.title,
    description: pageMetadata.description,
    url: "https://www.taxi-antibes.fr/services/taxi-conventionne",
    type: "website",
    images: [
      {
        url: "https://www.taxi-antibes.fr/taxi-conventionne-nice-pasteur.jpeg",
        width: 1200,
        height: 630,
        alt: "Taxi Conventionné CPAM Antibes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.title,
    description: pageMetadata.description,
    images: ["https://www.taxi-antibes.fr/taxi-conventionne-nice-pasteur.jpeg"],
  },
  alternates: {
    canonical: "https://www.taxi-antibes.fr/services/taxi-conventionne",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TaxiConventionneLayout({ children }) {
  return children;
}

