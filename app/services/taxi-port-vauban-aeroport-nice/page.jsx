import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Anchor,
  Briefcase,
  CheckCircle2,
  Clock,
  Luggage,
  MapPin,
  Phone,
  Plane,
  Shield,
  ShipWheel,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const revalidate = 3600;

export const metadata = {
  title: "Taxi Port Vauban Antibes vers Aéroport Nice | Transfert privé 24h/24",
  description:
    "Réservez un taxi entre le Port Vauban à Antibes et l'aéroport Nice Côte d'Azur. Dépose pontons, yachts, hôtels, bagages, suivi de vol et service premium 24h/24.",
  alternates: {
    canonical: "/services/taxi-port-vauban-aeroport-nice",
  },
};

const highlights = [
  {
    icon: Plane,
    title: "Aéroport Nice T1/T2",
    text: "Transfert direct depuis ou vers les terminaux avec suivi de vol.",
  },
  {
    icon: Anchor,
    title: "Port Vauban",
    text: "Dépose pratique près des pontons, restaurants, capitainerie et quais.",
  },
  {
    icon: Luggage,
    title: "Bagages & équipage",
    text: "Véhicules adaptés aux valises, sacs cabine et trajets yacht crew.",
  },
  {
    icon: Clock,
    title: "Service 24h/24",
    text: "Prise en charge tôt le matin, tard le soir ou sur réservation.",
  },
];

const useCases = [
  "Arrivée à l'aéroport de Nice et transfert direct vers un yacht au Port Vauban",
  "Départ depuis le port pour un vol tôt le matin à Nice Côte d'Azur",
  "Dépose restaurant, hôtel ou capitainerie avant un embarquement",
  "Transport de clients, équipages, visiteurs internationaux ou familles avec bagages",
];

export default function TaxiPortVaubanAeroportNicePage() {
  return (
    <>
      <Script
        id="port-vauban-aeroport-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Taxi Antibes Riviera - Port Vauban vers Aéroport Nice",
            legalName: "JO Services 06",
            url: "https://www.taxi-antibes.fr/services/taxi-port-vauban-aeroport-nice",
            telephone: "+33749777621",
            image:
              "https://www.taxi-antibes.fr/taxi-antibes-port-vauban-van.jpeg",
            areaServed: [
              { "@type": "Place", name: "Port Vauban Antibes" },
              { "@type": "Airport", name: "Aéroport Nice Côte d'Azur" },
              { "@type": "City", name: "Antibes" },
              { "@type": "City", name: "Juan-les-Pins" },
            ],
            openingHours: "Mo-Su 00:00-23:59",
            priceRange: "€€",
            sameAs: ["https://maps.app.goo.gl/gAA4M31jtVcsY3Km9"],
          }),
        }}
      />

      <PageLayout
        title="Taxi Port Vauban ⇄ Aéroport Nice"
        subtitle="Transfert privé premium depuis les pontons, yachts et hôtels du Port Vauban"
        backgroundImage="/taxi-antibes-port-vauban-3.jpeg"
      >
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 border border-cyan-100 mb-6">
                  <ShipWheel className="h-4 w-4" />
                  Service transfert port + aéroport
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-cyan-800 leading-tight mb-6">
                  Réservez votre taxi entre le Port Vauban et l'aéroport de Nice
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-5">
                  Vous arrivez à l'aéroport Nice Côte d'Azur pour rejoindre un
                  yacht, un hôtel ou un restaurant au{" "}
                  <strong>Port Vauban d'Antibes</strong> ? Taxi Antibes Riviera
                  assure un transfert porte-à-porte, avec prise en charge des
                  bagages, suivi de vol et dépose au point le plus pratique.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Cette page est dédiée à la réservation du trajet{" "}
                  <strong>Port Vauban ⇄ Aéroport Nice</strong>. Pour les
                  informations touristiques sur le port, consultez notre{" "}
                  <Link
                    href="/blog/taxi-antibes-port-vauban-guide-2026"
                    className="text-cyan-700 underline font-semibold hover:text-amber-700"
                  >
                    guide complet du Port Vauban
                  </Link>
                  .
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
                      <span>Appeler 07 49 77 76 21</span>
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
              </div>

              <Card className="p-6 rounded-3xl shadow-xl border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-amber-50">
                <div className="relative h-72 rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/taxi-antibes-port-vauban-van.jpeg"
                    alt="Taxi Antibes au Port Vauban pour transfert vers l'aéroport Nice"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 480px"
                    priority
                  />
                </div>
                <ul className="space-y-3 text-gray-700">
                  {useCases.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item) => (
                <Card
                  key={item.title}
                  className="p-6 rounded-2xl bg-white border-cyan-100 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 text-white flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-800 mb-6">
              Un transfert pensé pour les voyageurs du Port Vauban
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Le Port Vauban attire une clientèle variée : propriétaires de
                bateaux, équipages, visiteurs internationaux, familles en
                vacances, professionnels du nautisme et clients des restaurants
                du port. Le besoin est souvent simple : arriver à l'heure, être
                déposé au bon accès et ne pas perdre de temps avec le
                stationnement.
              </p>
              <p>
                Pour un départ vers l'aéroport de Nice, nous conseillons de
                prévoir une marge selon l'horaire du vol, le terminal, le nombre
                de bagages et la circulation sur l'A8. Pour une arrivée, le
                suivi de vol permet d'adapter la prise en charge en cas de
                retard.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <Card className="p-6 rounded-2xl border-cyan-100">
                <MapPin className="h-8 w-8 text-cyan-700 mb-3" />
                <h3 className="font-bold text-xl text-cyan-800 mb-2">
                  Déposes au port
                </h3>
                <p className="text-gray-700">
                  Capitainerie, restaurants, quais, pontons, hôtels proches et
                  accès pratiques selon votre destination.
                </p>
              </Card>
              <Card className="p-6 rounded-2xl border-cyan-100">
                <Briefcase className="h-8 w-8 text-cyan-700 mb-3" />
                <h3 className="font-bold text-xl text-cyan-800 mb-2">
                  Clients & équipages
                </h3>
                <p className="text-gray-700">
                  Transport discret pour équipage, visiteurs, rendez-vous
                  professionnels ou arrivée sur yacht.
                </p>
              </Card>
              <Card className="p-6 rounded-2xl border-cyan-100">
                <Shield className="h-8 w-8 text-cyan-700 mb-3" />
                <h3 className="font-bold text-xl text-cyan-800 mb-2">
                  Devis clair
                </h3>
                <p className="text-gray-700">
                  Prix annoncé avant le départ selon horaire, véhicule, bagages
                  et point exact de prise en charge.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-cyan-950 text-white">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Besoin d'un transfert Port Vauban ⇄ Aéroport Nice ?
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
              Appelez-nous avec votre terminal, heure de vol, nombre de
              passagers et nombre de bagages. Nous vous confirmons le véhicule
              adapté et l'horaire conseillé.
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
                <Link href="/">Retour à l'accueil Taxi Antibes</Link>
              </Button>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
