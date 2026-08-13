import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  FileText,
  Luggage,
  MapPin,
  Phone,
  Stethoscope,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const revalidate = 3600;

export const metadata = {
  title: "Taxi Antibes → Hôpital Pasteur Nice | Conventionné CPAM",
  description:
    "Réservez un taxi conventionné entre Antibes et l'Hôpital Pasteur à Nice. Prise en charge locale, infos à fournir, dépose Nice Est et service 24h/24.",
  alternates: {
    canonical: "/services/taxi-conventionne-pasteur-nice",
  },
  openGraph: {
    title: "Taxi Antibes → Hôpital Pasteur Nice | Conventionné CPAM",
    description:
      "Transport médical Antibes → Pasteur : réservation, zones de départ, accompagnant et dépose au bon bâtiment.",
    url: "https://www.taxi-antibes.fr/services/taxi-conventionne-pasteur-nice",
    siteName: "Taxi Antibes Riviera",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.taxi-antibes.fr/taxi-conventionne-nice-pasteur.jpeg",
        width: 1200,
        height: 630,
        alt: "Taxi conventionné Antibes vers l'Hôpital Pasteur à Nice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Antibes → Hôpital Pasteur Nice | Conventionné CPAM",
    description:
      "Réservez un transfert médical Antibes → Hôpital Pasteur. Service 24h/24.",
    images: ["https://www.taxi-antibes.fr/taxi-conventionne-nice-pasteur.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const pickupZones = [
  "Antibes centre-ville et Vieil Antibes",
  "Gare SNCF d'Antibes",
  "Juan-les-Pins",
  "Cap d'Antibes",
  "Port Vauban",
  "Domicile, EHPAD ou résidence sur Antibes et environs",
];

const bookingInfos = [
  "Adresse exacte de départ",
  "Heure de convocation (pas seulement l'heure de consultation)",
  "Bâtiment / service / entrée indiqués sur le courrier",
  "Nombre de passagers et besoin d'accompagnant",
  "Prescription médicale de transport si disponible",
  "Besoin éventuel d'un retour après le rendez-vous",
];

const faqItems = [
  {
    q: "Comment réserver un taxi Antibes vers Pasteur ?",
    a: (
      <>
        Appelez le{" "}
        <a href="tel:+33749777621" className="underline font-semibold">
          07 49 77 76 21
        </a>{" "}
        ou utilisez la{" "}
        <Link href="/reservation" className="underline font-semibold text-cyan-700">
          réservation en ligne
        </Link>
        . Indiquez le départ, l&apos;heure de convocation et le service Pasteur
        concerné.
      </>
    ),
  },
  {
    q: "Quelle différence avec la page taxi conventionné CPAM ?",
    a: (
      <>
        La page{" "}
        <Link
          href="/services/taxi-conventionne"
          className="underline font-semibold text-cyan-700"
        >
          taxi conventionné CPAM
        </Link>{" "}
        explique le cadre général (prescription, prise en charge). Cette page
        sert à organiser concrètement le trajet <strong>vers Pasteur</strong>.
      </>
    ),
  },
  {
    q: "Faut-il préciser le bâtiment à Pasteur ?",
    a: "Oui. Pasteur est un grand site hospitalier. Le courrier de convocation indique en général le service, le bâtiment ou l'entrée. Communiquez ces éléments à la réservation pour une dépose plus précise.",
  },
  {
    q: "Quels véhicules sont utilisés ?",
    a: "Selon le nombre de passagers, les bagages et le confort demandé : berline ou break Mercedes, ou van pour un groupe. Précisez si vous avez un fauteuil roulant pliant.",
  },
  {
    q: "Peut-on organiser un aller-retour le même jour ?",
    a: "Oui. Signalez dès la réservation si le retour est fixe ou si l'horaire de fin de rendez-vous est imprévisible : nous adaptons l'organisation du retour.",
  },
  {
    q: "Où trouver plus d'informations sur le trajet médical ?",
    a: (
      <>
        Consultez le{" "}
        <Link
          href="/blog/vsl-taxi-medical-antibes-hopital-pasteur-nice"
          className="underline font-semibold text-cyan-700"
        >
          guide Antibes → Pasteur
        </Link>{" "}
        pour les accès et la préparation du rendez-vous, et le{" "}
        <Link
          href="/blog/hopitaux-centres-medicaux-nice-guide-complet"
          className="underline font-semibold text-cyan-700"
        >
          guide des hôpitaux de Nice
        </Link>{" "}
        pour situer Pasteur parmi les autres établissements.
      </>
    ),
  },
];

export default function TaxiConventionnePasteurNicePage() {
  return (
    <>
      <Script
        id="pasteur-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "TaxiService",
                "@id": "https://www.taxi-antibes.fr/#business",
                name: "Taxi Antibes Riviera",
                url: "https://www.taxi-antibes.fr/",
                telephone: "+33749777621",
                image:
                  "https://www.taxi-antibes.fr/taxi-conventionne-nice-pasteur.jpeg",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Antibes",
                  postalCode: "06600",
                  addressRegion: "Provence-Alpes-Côte d'Azur",
                  addressCountry: "FR",
                },
                areaServed: [
                  "Antibes",
                  "Juan-les-Pins",
                  "Cap d'Antibes",
                  "Nice",
                ],
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
                priceRange: "€€",
              },
              {
                "@type": "Service",
                "@id":
                  "https://www.taxi-antibes.fr/services/taxi-conventionne-pasteur-nice#service",
                name: "Taxi conventionné Antibes vers Hôpital Pasteur Nice",
                serviceType:
                  "Transport médical assis Antibes – Hôpital Pasteur Nice",
                provider: { "@id": "https://www.taxi-antibes.fr/#business" },
                areaServed: [
                  { "@type": "City", name: "Antibes" },
                  {
                    "@type": "Hospital",
                    name: "CHU Pasteur 2",
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: "30 Voie Romaine",
                      addressLocality: "Nice",
                      postalCode: "06000",
                      addressCountry: "FR",
                    },
                  },
                ],
                url: "https://www.taxi-antibes.fr/services/taxi-conventionne-pasteur-nice",
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Accueil",
                    item: "https://www.taxi-antibes.fr/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://www.taxi-antibes.fr/services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Taxi conventionné Pasteur Nice",
                    item: "https://www.taxi-antibes.fr/services/taxi-conventionne-pasteur-nice",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Comment réserver un taxi Antibes vers Pasteur ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Appelez le 07 49 77 76 21 ou utilisez la réservation en ligne. Indiquez le départ, l'heure de convocation et le service Pasteur concerné.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Faut-il préciser le bâtiment à Pasteur ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Oui. Pasteur est un grand site hospitalier. Communiquez le service, le bâtiment ou l'entrée indiqués sur la convocation.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Peut-on organiser un aller-retour le même jour ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Oui. Signalez dès la réservation si le retour est fixe ou si l'horaire de fin de rendez-vous est imprévisible.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <PageLayout
        title="Taxi Antibes → Hôpital Pasteur Nice"
        subtitle="Réservation d'un transfert médical vers Pasteur (Nice Est) — service 24h/24"
        backgroundImage="/taxi-conventionne-nice-pasteur.jpeg"
      >
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 border border-cyan-100 mb-6">
                  <Stethoscope className="h-4 w-4" />
                  Transport médical · Nice Est
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-5">
                  Réserver un taxi entre Antibes et l&apos;Hôpital Pasteur
                </h2>

                <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                  <p>
                    Vous avez une convocation au{" "}
                    <strong>CHU Pasteur</strong> (Nice Est) et partez
                    d&apos;Antibes, Juan-les-Pins ou du Cap d&apos;Antibes ?
                    Cette page sert à{" "}
                    <strong>organiser la réservation</strong> : point de départ,
                    informations à transmettre, prise en charge et retour.
                  </p>
                  <p>
                    Pour le cadre CPAM et la prescription médicale, consultez la
                    page{" "}
                    <Link
                      href="/services/taxi-conventionne"
                      className="text-cyan-700 underline font-semibold"
                    >
                      taxi conventionné CPAM Antibes
                    </Link>
                    . Pour préparer l&apos;accès au site et le déroulé du trajet,
                    voir le{" "}
                    <Link
                      href="/blog/vsl-taxi-medical-antibes-hopital-pasteur-nice"
                      className="text-cyan-700 underline font-semibold"
                    >
                      guide Antibes → Pasteur
                    </Link>
                    .
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 hover:from-amber-500 hover:via-gold-600 hover:to-orange-500 text-white shadow-lg text-base px-8 py-6 gap-2 rounded-xl"
                  >
                    <a
                      href="tel:+33749777621"
                      className="inline-flex items-center justify-center gap-2 leading-none"
                    >
                      <Phone className="h-5 w-5 shrink-0" />
                      <span>07 49 77 76 21</span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white text-base px-8 py-6 rounded-xl"
                  >
                    <Link href="/reservation">Réserver en ligne</Link>
                  </Button>
                </div>

                <p className="text-sm text-gray-600 border-l-4 border-cyan-500 pl-4 py-3 bg-cyan-50/60 rounded-r">
                  Durée de route indicative : environ 30 à 45 minutes selon
                  l&apos;heure et le point de départ. Ce n&apos;est pas un délai
                  garanti : une marge avant la convocation est recommandée.
                </p>
              </div>

              <Card className="p-6 rounded-3xl shadow-xl border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-amber-50">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/pasteur-nice-2025.png"
                    alt="Bâtiment de l'Hôpital Pasteur à Nice, destination d'un taxi médical depuis Antibes"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 480px"
                    priority
                  />
                </div>
                <h3 className="text-lg font-bold text-cyan-800 mb-3">
                  Destination
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>
                    <strong>Établissement :</strong> CHU Pasteur 2
                  </li>
                  <li>
                    <strong>Adresse :</strong> 30 Voie Romaine, 06000 Nice
                  </li>
                  <li>
                    <strong>Zone :</strong> Nice Est / Pasteur
                  </li>
                  <li>
                    <strong>Tél. CHU :</strong>{" "}
                    <a href="tel:0492037777" className="underline">
                      04 92 03 77 77
                    </a>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-bold text-cyan-800 mb-8">
              Zones de départ desservies
            </h2>
            <p className="text-gray-700 text-lg mb-6 max-w-3xl">
              Le chauffeur part de votre adresse à Antibes ou dans le secteur.
              Les demandes les plus fréquentes :
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pickupZones.map((zone) => (
                <Card
                  key={zone}
                  className="p-5 rounded-2xl bg-white border-cyan-100 flex gap-3 items-start"
                >
                  <MapPin className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{zone}</span>
                </Card>
              ))}
            </div>
            <p className="text-gray-600 mt-6 text-sm">
              Voir aussi{" "}
              <Link
                href="/blog/taxi-antibes-centre-ville-guide-2026"
                className="text-cyan-700 underline"
              >
                taxi centre-ville
              </Link>
              ,{" "}
              <Link
                href="/blog/taxi-gare-sncf-antibes-guide-complet"
                className="text-cyan-700 underline"
              >
                taxi gare Antibes
              </Link>{" "}
              et{" "}
              <Link href="/" className="text-cyan-700 underline">
                l&apos;accueil Taxi Antibes
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-bold text-cyan-800 mb-8">
              Comment se passe la prise en charge ?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 rounded-2xl border-cyan-100">
                <Clock className="h-8 w-8 text-cyan-700 mb-3" />
                <h3 className="font-bold text-xl text-cyan-800 mb-2">
                  1. Horaire calé sur la convocation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Nous partons de l&apos;heure indiquée sur votre courrier, avec
                  une marge pour la circulation et l&apos;accès au bâtiment.
                </p>
              </Card>
              <Card className="p-6 rounded-2xl border-cyan-100">
                <Users className="h-8 w-8 text-cyan-700 mb-3" />
                <h3 className="font-bold text-xl text-cyan-800 mb-2">
                  2. Accueil à domicile
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Prise en charge à l&apos;adresse convenue, aide aux bagages si
                  besoin, place pour un accompagnant lorsque c&apos;est prévu.
                </p>
              </Card>
              <Card className="p-6 rounded-2xl border-cyan-100">
                <MapPin className="h-8 w-8 text-cyan-700 mb-3" />
                <h3 className="font-bold text-xl text-cyan-800 mb-2">
                  3. Dépose au plus près
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Arrivée côté Nice Est avec dépose orientée selon le service
                  communiqué (entrée patients / bâtiment).
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-cyan-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold text-cyan-800 mb-6">
                  Informations à fournir pour réserver
                </h2>
                <ul className="space-y-3">
                  {bookingInfos.map((item) => (
                    <li key={item} className="flex gap-3 text-gray-800">
                      <CheckCircle2 className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 mt-6 leading-relaxed">
                  La prise en charge CPAM dépend de votre prescription et des
                  règles de l&apos;Assurance Maladie. Les modalités sont
                  détaillées sur la page{" "}
                  <Link
                    href="/services/taxi-conventionne"
                    className="text-cyan-700 underline font-semibold"
                  >
                    taxi conventionné
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-cyan-800 mb-6">
                  Véhicules, passagers et bagages
                </h2>
                <Card className="p-6 rounded-2xl bg-white border-cyan-100 mb-4">
                  <Luggage className="h-7 w-7 text-cyan-700 mb-3" />
                  <h3 className="font-bold text-lg text-cyan-800 mb-2">
                    Confort et espace
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Berline ou break pour 1 à 3 passagers ; van pour un groupe
                    ou des bagages volumineux. Précisez un fauteuil pliant ou du
                    matériel médical portable.
                  </p>
                </Card>
                <Card className="p-6 rounded-2xl bg-white border-cyan-100">
                  <FileText className="h-7 w-7 text-cyan-700 mb-3" />
                  <h3 className="font-bold text-lg text-cyan-800 mb-2">
                    Documents utiles
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Carte vitale, convocation, ordonnances et, le cas échéant,
                    prescription de transport. Gardez-les accessibles le jour du
                    rendez-vous.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-cyan-800 mb-8 text-center">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-lg font-semibold text-cyan-700">
                    {item.q}
                    <span className="text-cyan-500 group-open:rotate-180">
                      ⌄
                    </span>
                  </summary>
                  <div className="px-5 pb-5 bg-gray-50 text-gray-700 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl font-bold text-cyan-800 mb-4">
              Pages utiles
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/" className="text-cyan-700 underline">
                  Accueil Taxi Antibes
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="text-cyan-700 underline">
                  Réservation en ligne
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-cyan-700 underline">
                  Tarifs taxi Antibes
                </Link>
              </li>
              <li>
                <Link
                  href="/services/taxi-conventionne"
                  className="text-cyan-700 underline"
                >
                  Taxi conventionné CPAM
                </Link>
              </li>
              <li>
                <Link
                  href="/services/taxi-aeroport-nice"
                  className="text-cyan-700 underline"
                >
                  Taxi aéroport Nice
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/vsl-taxi-medical-antibes-hopital-pasteur-nice"
                  className="text-cyan-700 underline"
                >
                  Guide trajet Antibes → Pasteur
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-cyan-950 text-white">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Réserver votre trajet Antibes → Pasteur
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
              Indiquez votre adresse de départ, l&apos;heure de convocation et
              le service à Pasteur. Nous confirmons la prise en charge et
              l&apos;organisation du retour si besoin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 hover:from-amber-500 hover:via-gold-600 hover:to-orange-500 text-white shadow-lg text-base px-8 py-6 rounded-xl"
              >
                <a
                  href="tel:+33749777621"
                  className="inline-flex items-center justify-center gap-2 leading-none"
                >
                  <Phone className="h-5 w-5 shrink-0" />
                  <span>Appeler maintenant</span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-white text-cyan-950 hover:bg-amber-400 hover:border-amber-400 hover:text-white text-base px-8 py-6 rounded-xl shadow-lg"
              >
                <Link href="/reservation">Réserver en ligne</Link>
              </Button>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
