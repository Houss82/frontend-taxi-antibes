import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Script from "next/script";
import {
  Bus,
  Calculator,
  Car as CarIcon,
  Crown,
  MapPin,
  Phone,
  Plane,
  Car as PremiumCarIcon,
} from "lucide-react";
import { Outfit } from "next/font/google";

export const metadata = {
  title: "Prix Taxi Antibes : Tarifs 2026, Devis & Transferts Aéroport Nice",
  description:
    "Prix taxi Antibes et tarifs 2026 : courses locales, transferts aéroport Nice, Juan-les-Pins, Cannes, Monaco. Devis gratuit, prix annoncés à l'avance, service 24h/24.",
  keywords:
    "prix taxi antibes, tarif taxi antibes, tarifs taxi antibes, prix taxi antibes aéroport nice, taxi antibes tarif, taxi antibes prix",
  openGraph: {
    title: "Prix Taxi Antibes : Tarifs 2026 & Devis",
    description:
      "Consultez les tarifs taxi Antibes : prix fixes, estimations et suppléments. Devis gratuit 24h/24.",
    type: "website",
    locale: "fr_FR",
  },
};

// Import de la police Outfit
const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const basePrices = {
  destinations: [
    {
      name: "Antibes",
      day: "76 €",
      night: "",
      fixed: true,
    },
    {
      name: "Auron",
      day: "230 - 250 €",
      night: "290 - 310 €",
      fixed: false,
    },
    {
      name: "Beaulieu-sur-Mer",
      day: "55 - 60 €",
      night: "65 - 90 €",
      fixed: false,
    },
    {
      name: "Cannes",
      day: "89 €",
      night: "",
      fixed: true,
    },
    {
      name: "Fréjus",
      day: "180 - 200 €",
      night: "200 - 220 €",
      fixed: false,
    },
    {
      name: "Grasse",
      day: "92 - 100 €",
      night: "120 - 130 €",
      fixed: false,
    },
    {
      name: "Juan-les-Pins",
      day: "60 - 70 €",
      night: "70 - 80 €",
      fixed: false,
    },
    {
      name: "Menton",
      day: "100 - 110 €",
      night: "120 - 140 €",
      fixed: false,
    },
    {
      name: "Monaco",
      day: "99 €",
      night: "",
      fixed: true,
    },
    {
      name: "Mougins",
      day: "75 - 82 €",
      night: "90 - 95 €",
      fixed: false,
    },
    {
      name: "Nice Ouest",
      day: "12 - 18 €",
      night: "17 - 25 €",
      fixed: false,
    },
    {
      name: "Nice Centre",
      day: "36 €",
      night: "",
      fixed: true,
    },
    {
      name: "Nice Est",
      day: "40 - 44 €",
      night: "45 - 51 €",
      fixed: false,
    },
    {
      name: "Opio",
      day: "75 - 82 €",
      night: "90 - 95 €",
      fixed: false,
    },
    {
      name: "Sanremo",
      day: "190 - 210 €",
      night: "220 - 230 €",
      fixed: false,
    },
    {
      name: "Sophia Antipolis",
      day: "60 - 65 €",
      night: "70 - 80 €",
      fixed: false,
    },
    {
      name: "Cap Ferrat",
      day: "60 - 65 €",
      night: "70 - 78 €",
      fixed: false,
    },
    {
      name: "Saint-Paul-de-Vence",
      day: "55 - 60 €",
      night: "65 - 70 €",
      fixed: false,
    },
    {
      name: "Saint-Tropez",
      day: "280 - 310 €",
      night: "340 - 360 €",
      fixed: false,
    },
    {
      name: "Valbonne",
      day: "75 - 80 €",
      night: "85 - 90 €",
      fixed: false,
    },
    {
      name: "Villefranche-sur-Mer",
      day: "55 - 60 €",
      night: "65 - 90 €",
      fixed: false,
    },
  ],
  supplements: [
    { name: "Tarif minimum", price: "8,00 €" },
    { name: "Bagage supplémentaire", price: "2,00 €" },
    { name: "5ème personne", price: "4,00 €" },
    { name: "Supplément neige", price: "10%" },
    {
      name: "Péage autoroute",
      price: "Uniquement avec le client",
    },
  ],
  perKm: [
    {
      type: "Retour à vide",
      day: "2,58 €/km",
      night: "3,30 €/km",
    },
    {
      type: "Retour chargé",
      rateA: "1,29 €/km",
      rateB: "1,65 €/km",
    },
  ],
};

// Calculer les prix Classe V (+15%)
const calculateClassVPrices = (price) => {
  if (!price || price === "") return "";
  if (price.includes("-")) {
    const [min, max] = price.split(" - ");
    const minNum = parseFloat(min.replace("€", "").trim());
    const maxNum = parseFloat(max.replace("€", "").trim());
    const newMin = Math.round(minNum * 1.15);
    const newMax = Math.round(maxNum * 1.15);
    return `${newMin} - ${newMax} €`;
  } else {
    const num = parseFloat(price.replace("€", "").trim());
    const newPrice = Math.round(num * 1.15);
    return `${newPrice} €`;
  }
};

const tarifs = [
  {
    title: "Berline Standard (Classe GLC/E)",
    icon: Plane,
    description: "Véhicules berline confortables pour tous vos déplacements",
    destinations: basePrices.destinations,
    supplements: basePrices.supplements,
    perKm: basePrices.perKm,
    image: "/imageGLC copie.png",
  },
  {
    title: "Van Premium (Classe V)",
    icon: MapPin,
    description: "Véhicules haut de gamme avec supplément de 15%",
    destinations: basePrices.destinations.map((dest) => ({
      ...dest,
      day: calculateClassVPrices(dest.day),
      night: calculateClassVPrices(dest.night),
    })),
    supplements: basePrices.supplements,
    perKm: basePrices.perKm,
    image: "/image-van copie.png",
  },
];

const vehicules = [
  {
    name: "Berline Standard",
    capacity: "1-4 passagers",
    price: "Tarif de base",
    features: ["Climatisation", "WiFi", "Eau fraîche", "Chargement USB"],
    icon: CarIcon,
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Berline Premium",
    capacity: "1-4 passagers",
    price: "+20%",
    features: [
      "Véhicule haut de gamme",
      "Cuir",
      "Espace bagages",
      "Confort supérieur",
    ],
    icon: PremiumCarIcon,
    color: "bg-silver-100 text-silver-600",
  },
  {
    name: "Van 8 places",
    capacity: "5-8 passagers",
    price: "+50%",
    features: [
      "Espace généreux",
      "Bagages nombreux",
      "Idéal familles",
      "Accessible PMR",
    ],
    icon: Bus,
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Voiture de Luxe",
    capacity: "1-4 passagers",
    price: "+100%",
    features: [
      "Marque premium",
      "Chauffeur en uniforme",
      "Eau fraîche",
      "Service VIP",
    ],
    icon: Crown,
    color: "bg-gold-100 text-gold-600",
  },
];

const suppléments = [
  { service: "Attente supplémentaire", price: "15€/30 min" },
  { service: "Supplément nuit (22h-6h)", price: "+20%" },
  { service: "Supplément dimanche", price: "+15%" },
  { service: "Supplément jour férié", price: "+25%" },
  { service: "Supplément bagages (5+)", price: "5€/bagage" },
  { service: "Supplément animal", price: "10€" },
];

export default function TarifsPage() {
  // Schema JSON-LD pour FAQ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quel est le prix d'un taxi à Antibes ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le prix d'un taxi à Antibes dépend de la destination, de l'heure (jour/nuit) et des suppléments éventuels. Pour un prix exact, appelez le 07 49 77 76 21."
        }
      },
      {
        "@type": "Question",
        "name": "Les tarifs taxi Antibes sont-ils fixes ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Certains trajets peuvent être proposés en prix fixes selon la destination. D'autres varient selon l'horaire et la distance."
        }
      },
      {
        "@type": "Question",
        "name": "Comment obtenir un devis taxi Antibes ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Demandez un devis gratuit par téléphone au 07 49 77 76 21 ou via la réservation en ligne."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le tarif taxi Antibes la nuit ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le tarif taxi Antibes la nuit (22h-6h) inclut un supplément de 20% par rapport au tarif de jour. Pour connaître le prix exact selon votre destination, appelez le 07 49 77 76 21."
        }
      },
      {
        "@type": "Question",
        "name": "Prix taxi Antibes → Aéroport Nice ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le prix pour un transfert taxi Antibes vers l'aéroport Nice dépend de votre adresse exacte à Antibes et de l'horaire. Un prix fixe peut être annoncé à l'avance. Appelez le 07 49 77 76 21 pour un devis précis."
        }
      },
      {
        "@type": "Question",
        "name": "Peut-on réserver un taxi à Antibes à l'avance ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, vous pouvez réserver un taxi à Antibes à l'avance, même plusieurs jours ou semaines avant votre déplacement. C'est particulièrement recommandé pour les transferts aéroport ou les trajets importants. Réservez au 07 49 77 76 21 ou via notre page réservation."
        }
      }
    ]
  };

  // Schema JSON-LD pour LocalBusiness/TaxiService
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Taxi Antibes Riviera",
    "telephone": "+33749777621",
    "url": "https://www.taxi-antibes.fr/tarifs",
    "areaServed": ["Antibes", "Juan-les-Pins", "Côte d'Azur"],
    "availableLanguage": "fr",
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "€€",
    "image": "https://www.taxi-antibes.fr/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Antibes",
      "postalCode": "06600",
      "addressCountry": "FR"
    }
  };

  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="taxi-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <PageLayout
        title="Prix Taxi Antibes : Tarifs 2026, Devis & Transferts"
        subtitle="Tarifs transparents (jour/nuit), prix fixes et devis gratuit 24h/24."
        backgroundImage="/tarif.jpg"
      >
        {/* Tarifs Principaux */}
        <section className="py-24  md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className={`text-4xl md:text-5xl font-light mb-4 text-balance text-cyan-700 ${outfit.className}`}
              >
                Nos{" "}
                <span className="font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                  tarifs taxi Antibes
                </span>
              </h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                Des tarifs transparents et compétitifs pour votre <strong>taxi à Antibes</strong>{" "}
                pour tous vos déplacements depuis Antibes vers l'aéroport de Nice, Juan-les-Pins, Cannes, Monaco et toute la Côte d'Azur.
              </p>
            </div>

            {/* Bloc SEO en haut */}
            <section className="max-w-4xl mx-auto mt-8 p-6 rounded-2xl border border-cyan-100 bg-cyan-50">
              <h2 className="text-2xl md:text-3xl font-semibold text-cyan-800 mb-3 text-center">
                Tarifs taxi Antibes : estimations et prix fixes
              </h2>

              <p className="text-gray-700 mt-3 leading-relaxed">
                Vous cherchez le <strong>prix d'un taxi à Antibes</strong> ou un{" "}
                <strong>tarif taxi Antibes</strong> clair ? Sur cette page, vous trouverez
                nos <strong>tarifs taxi Antibes</strong> les plus demandés (courses locales,
                transferts aéroport Nice, Juan-les-Pins, Cannes, Monaco…), avec des{" "}
                <strong>prix annoncés à l'avance</strong>.
              </p>

              <p className="text-gray-700 mt-3 leading-relaxed">
                Le <strong>prix taxi Antibes</strong> dépend principalement de la destination,
                de l'horaire (jour/nuit) et des éventuels suppléments (bagages, attente…).
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+33749777621"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 hover:from-amber-500 hover:via-gold-600 hover:to-orange-500 transition-colors"
                >
                  📞 Appeler pour un prix exact : 07 49 77 76 21
                </a>
                <Link
                  href="/reservation"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-cyan-200 bg-white text-cyan-800 hover:bg-cyan-50 transition-colors"
                >
                  Réserver en ligne
                </Link>
              </div>
            </section>

            {/* Section Prix Populaires */}
            <section className="max-w-4xl mx-auto mt-10">
              <h2 className="text-2xl font-semibold text-cyan-800 mb-2">
                Tarifs taxi Antibes les plus demandés
              </h2>

              <p className="text-gray-700 mt-2 mb-4">
                Voici des exemples de <strong>prix taxi Antibes</strong> fréquemment demandés.
                Pour un <strong>tarif taxi Antibes</strong> exact selon votre adresse et l'horaire,
                appelez le <a className="underline font-semibold text-cyan-600 hover:text-amber-600" href="tel:+33749777621">07 49 77 76 21</a>.
              </p>

              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="p-4 bg-white border border-cyan-100 rounded-xl">
                  <strong className="text-cyan-700">Antibes → Cannes</strong> : à partir de 89 €
                </li>
                <li className="p-4 bg-white border border-cyan-100 rounded-xl">
                  <strong className="text-cyan-700">Antibes → Monaco</strong> : à partir de 99 €
                </li>
                <li className="p-4 bg-white border border-cyan-100 rounded-xl">
                  <strong className="text-cyan-700">Antibes → Juan-les-Pins</strong> : 60-70 €
                </li>
                <li className="p-4 bg-white border border-cyan-100 rounded-xl">
                  <strong className="text-cyan-700">Antibes → Aéroport Nice</strong> : prix annoncé à l'avance
                </li>
              </ul>
            </section>

            {/* Phrase avant tableau */}
            <p className="text-gray-700 max-w-4xl mx-auto mt-6 text-center">
              Les <strong>tarifs taxi Antibes</strong> ci-dessous couvrent Antibes, Juan-les-Pins et les principales destinations de la Côte d'Azur.
            </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {tarifs.map((tarif, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-cyan-100 bg-white rounded-3xl"
              >
                <div className="text-center mb-6">
                  {tarif.image ? (
                    <div className="flex items-center justify-center mx-auto mb-4">
                      <img
                        src={tarif.image}
                        alt={tarif.title}
                        className="h-40 w-40 object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <tarif.icon className="h-8 w-8 text-white" />
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold mb-2 text-cyan-700">
                    {tarif.title}
                  </h3>
                  <p className="text-gray-700 font-light">
                    {tarif.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {tarif.destinations.map((dest, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-2 border-b border-cyan-100"
                    >
                      <div>
                        <div className="font-medium text-cyan-700">
                          {dest.name}
                        </div>
                        {dest.fixed && (
                          <div className="text-xs text-gray-500">
                            Tarif fixe
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        {dest.day && (
                          <div className="font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent text-sm">
                            Jour: {dest.day}
                          </div>
                        )}
                        {dest.night && (
                          <div className="font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent text-sm">
                            Nuit: {dest.night}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold mb-3 text-cyan-700">
                    Suppléments :
                  </h4>
                  {tarif.supplements.map((supp, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center text-sm text-gray-600"
                    >
                      <span>{supp.name}</span>
                      <span className="font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                        {supp.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-cyan-100">
                  <h4 className="font-semibold mb-3 text-cyan-700">
                    Tarifs au km :
                  </h4>
                  {tarif.perKm.map((km, idx) => (
                    <div key={idx} className="text-sm text-gray-600 mb-2">
                      <div className="flex justify-between">
                        <span>{km.type}</span>
                        <div className="text-right">
                          {km.day && <div>{km.day}</div>}
                          {km.night && <div>{km.night}</div>}
                          {km.rateA && <div>{km.rateA}</div>}
                          {km.rateB && <div>{km.rateB}</div>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types de Véhicules Glc/E */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-light mb-4 text-balance text-cyan-700 ${outfit.className}`}
            >
              Nos{" "}
              <span className="font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                véhicules taxi Antibes
              </span>
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
              Une flotte variée taxi Antibes pour s'adapter à tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicules.map((vehicule, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-cyan-100 bg-white rounded-2xl text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <vehicule.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-700">
                  {vehicule.name}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {vehicule.capacity}
                </p>
                <div className="text-lg font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent mb-4">
                  {vehicule.price}
                </div>
                <div className="space-y-2">
                  {vehicule.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-gray-600">
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Suppléments */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className={`text-4xl md:text-5xl font-light mb-4 text-balance text-cyan-700 ${outfit.className}`}
              >
                <span className="font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                  Suppléments
                </span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Tarifs des services supplémentaires
              </p>
            </div>

            <Card className="p-8 bg-white border-cyan-100 rounded-3xl shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {suppléments.map((supplément, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-cyan-100"
                  >
                    <span className="font-medium text-cyan-700">
                      {supplément.service}
                    </span>
                    <span className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent font-semibold">
                      {supplément.price}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="mt-8 p-6 bg-cyan-50 rounded-2xl border border-cyan-100">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="h-6 w-6 text-cyan-600" />
                <h3 className="text-xl font-semibold text-cyan-700">
                  Devis Gratuit
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Pour un devis personnalisé ou des trajets spécifiques,
                contactez-nous directement.
              </p>
              <Button asChild className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 hover:from-amber-500 hover:via-gold-600 hover:to-orange-500 text-white shadow-lg">
                <a href="tel:+33749777621" className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Demander un devis
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Comment est calculé le prix */}
      <section className="max-w-4xl mx-auto mt-10 p-6 bg-white border border-cyan-100 rounded-2xl">
        <h2 className="text-2xl font-semibold text-cyan-800 mb-3">
          Comment est calculé le prix d'un taxi à Antibes ?
        </h2>
        <p className="text-gray-700 mt-2 leading-relaxed">
          Le <strong>prix taxi Antibes</strong> dépend de la distance, de l'horaire (jour/nuit),
          et des éventuels suppléments (bagages, attente, jours fériés…). Pour certains trajets,
          un <strong>tarif fixe</strong> peut être annoncé à l'avance.
        </p>
        <p className="text-gray-700 mt-2 leading-relaxed">
          Pour connaître le <strong>tarif taxi Antibes</strong> exact selon votre adresse de départ,
          l'horaire et le nombre de passagers, appelez le{" "}
          <a className="underline font-semibold text-cyan-600 hover:text-amber-600" href="tel:+33749777621">
            07 49 77 76 21
          </a>.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mt-12 py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan-800 mb-6">
          FAQ – Prix et tarif taxi Antibes
        </h2>

        <div className="mt-4 space-y-4">
          <details className="p-4 bg-white border border-cyan-100 rounded-xl hover:shadow-md transition-shadow">
            <summary className="font-semibold cursor-pointer text-cyan-700 hover:text-cyan-800">
              Quel est le prix d'un taxi à Antibes ?
            </summary>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Le <strong>prix taxi Antibes</strong> dépend de la destination, de l'heure (jour/nuit)
              et des suppléments éventuels (bagages, attente…). Pour un prix exact, appelez le{" "}
              <a className="underline font-semibold text-cyan-600 hover:text-amber-600" href="tel:+33749777621">07 49 77 76 21</a>.
            </p>
          </details>

          <details className="p-4 bg-white border border-cyan-100 rounded-xl hover:shadow-md transition-shadow">
            <summary className="font-semibold cursor-pointer text-cyan-700 hover:text-cyan-800">
              Les tarifs taxi Antibes sont-ils fixes ?
            </summary>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Certains trajets peuvent être proposés en <strong>prix fixes</strong> (selon destination).
              Sinon, le tarif dépend des conditions (jour/nuit, distance). Consultez notre tableau de tarifs
              pour voir les destinations avec prix fixes.
            </p>
          </details>

          <details className="p-4 bg-white border border-cyan-100 rounded-xl hover:shadow-md transition-shadow">
            <summary className="font-semibold cursor-pointer text-cyan-700 hover:text-cyan-800">
              Comment obtenir un devis taxi Antibes ?
            </summary>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Vous pouvez demander un <strong>devis gratuit</strong> par téléphone au{" "}
              <a className="underline font-semibold text-cyan-600 hover:text-amber-600" href="tel:+33749777621">07 49 77 76 21</a>{" "}
              ou via la <Link href="/reservation" className="underline font-semibold text-cyan-600 hover:text-amber-600">page réservation</Link>.
            </p>
          </details>

          <details className="p-4 bg-white border border-cyan-100 rounded-xl hover:shadow-md transition-shadow">
            <summary className="font-semibold cursor-pointer text-cyan-700 hover:text-cyan-800">
              Quel est le tarif taxi Antibes la nuit ?
            </summary>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Le <strong>tarif taxi Antibes la nuit</strong> (22h-6h) inclut un supplément de 20% par rapport au tarif de jour.
              Pour connaître le prix exact selon votre destination, appelez le{" "}
              <a className="underline font-semibold text-cyan-600 hover:text-amber-600" href="tel:+33749777621">07 49 77 76 21</a>.
            </p>
          </details>

          <details className="p-4 bg-white border border-cyan-100 rounded-xl hover:shadow-md transition-shadow">
            <summary className="font-semibold cursor-pointer text-cyan-700 hover:text-cyan-800">
              Prix taxi Antibes → Aéroport Nice ?
            </summary>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Le <strong>prix pour un transfert taxi Antibes vers l'aéroport Nice</strong> dépend de votre adresse exacte à Antibes et de l'horaire.
              Un prix fixe peut être annoncé à l'avance. Appelez le{" "}
              <a className="underline font-semibold text-cyan-600 hover:text-amber-600" href="tel:+33749777621">07 49 77 76 21</a> pour un devis précis.
            </p>
          </details>

          <details className="p-4 bg-white border border-cyan-100 rounded-xl hover:shadow-md transition-shadow">
            <summary className="font-semibold cursor-pointer text-cyan-700 hover:text-cyan-800">
              Peut-on réserver un taxi à Antibes à l'avance ?
            </summary>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Oui, vous pouvez <strong>réserver un taxi à Antibes à l'avance</strong>, même plusieurs jours ou semaines avant votre déplacement.
              C'est particulièrement recommandé pour les transferts aéroport ou les trajets importants. Réservez au{" "}
              <a className="underline font-semibold text-cyan-600 hover:text-amber-600" href="tel:+33749777621">07 49 77 76 21</a>{" "}
              ou via notre <Link href="/reservation" className="underline font-semibold text-cyan-600 hover:text-amber-600">page réservation</Link>.
            </p>
          </details>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2
            className={`text-4xl md:text-5xl font-light mb-6 text-balance ${outfit.className}`}
          >
            Réservez{" "}
            <span className="font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
              maintenant
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactez-nous pour une réservation ou un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 hover:from-amber-500 hover:via-gold-600 hover:to-orange-500 text-white shadow-lg text-base px-8 py-6 gap-2 rounded-xl"
            >
              <a href="tel:+33749777621" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Appelez-nous
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border border-amber-400 text-white hover:bg-amber-400 hover:text-black text-base px-8 py-6 bg-transparent rounded-xl"
            >
              <Link href="/reservation">
                Réserver en ligne
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </PageLayout>
    </>
  );
}
