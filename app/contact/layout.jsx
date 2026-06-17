export const metadata = {
  title: "Contact Taxi Antibes Riviera – Réservation et Service Client 24h/24",
  description:
    "Contactez Taxi Antibes Riviera : téléphone, email, formulaire de contact. Service client disponible 24h/24 pour vos réservations et questions.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Taxi Antibes Riviera – Réservation et Service Client 24h/24",
    description:
      "Contactez Taxi Antibes Riviera : téléphone, email, formulaire de contact. Service client disponible 24h/24 pour vos réservations et questions.",
    url: "https://www.taxi-antibes.fr/contact",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "https://www.taxi-antibes.fr/contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Taxi Antibes Riviera",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Taxi Antibes Riviera – Réservation et Service Client 24h/24",
    description:
      "Contactez Taxi Antibes Riviera : téléphone, email, formulaire de contact. Service client disponible 24h/24 pour vos réservations et questions.",
    images: ["https://www.taxi-antibes.fr/contact.jpg"],
  },
};

export default function ContactLayout({ children }) {
  return children;
}
