import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  Luggage,
  MapPin,
  Phone,
  Plane,
  Shield,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Script from "next/script";

const destinations = [
  {
    destination: "Antibes",
    duration: "20-25 min",
    price: "À partir de 45€",
    description: "Transfert direct vers Antibes centre-ville",
  },
  {
    destination: "Juan-les-Pins",
    duration: "25-30 min",
    price: "À partir de 50€",
    description: "Desserte complète de Juan-les-Pins",
  },
  {
    destination: "Cannes",
    duration: "35-40 min",
    price: "À partir de 70€",
    description: "Transfert vers Cannes et la Croisette",
  },
  {
    destination: "Monaco",
    duration: "30-35 min",
    price: "À partir de 90€",
    description: "Service premium vers Monaco",
  },
  {
    destination: "Nice Centre",
    duration: "15-20 min",
    price: "À partir de 35€",
    description: "Transfert rapide vers Nice centre",
  },
  {
    destination: "Saint-Tropez",
    duration: "1h15-1h30",
    price: "À partir de 280€",
    description: "Longue distance vers Saint-Tropez",
  },
];

const services = [
  "Suivi de vol en temps réel",
  "Attente gratuite en cas de retard",
  "Accueil avec panneau nominatif",
  "Assistance bagages complète",
  "WiFi gratuit dans tous les véhicules",
  "Eau et rafraîchissements offerts",
  "Service 24h/24 et 7j/7",
  "Réservation en ligne ou par téléphone",
];

const terminals = [
  {
    name: "Terminal 1",
    description: "Vols internationaux et européens",
    airlines: "Air France, Lufthansa, British Airways, etc.",
  },
  {
    name: "Terminal 2",
    description: "Vols internationaux et long-courriers",
    airlines: "Emirates, Qatar Airways, Turkish Airlines, etc.",
  },
];

const advantages = [
  {
    icon: Clock,
    title: "Ponctualité Garantie",
    description:
      "Arrivée en avance pour éviter tout stress, surtout pour les départs. Nous connaissons parfaitement les temps de trajet selon l'heure et la saison.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Plane,
    title: "Suivi de Vol",
    description:
      "Suivi en temps réel de votre vol pour ajuster automatiquement les horaires. Aucune attente inutile, même en cas de retard.",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    icon: Shield,
    title: "Sécurité & Confort",
    description:
      "Véhicules Mercedes récents, chauffeurs professionnels certifiés et expérimentés. Votre sécurité et votre confort sont nos priorités.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Luggage,
    title: "Assistance Bagages",
    description:
      "Aide au chargement et déchargement de vos bagages. Nos véhicules sont spacieux pour accueillir tous vos bagages confortablement.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

// Revalidation pour le cache (1 heure)
export const revalidate = 3600;

export default function TaxiAeroportNicePage() {
  return (
    <>
      <Script id="local-business-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: "Taxi Aéroport Nice - Taxi Antibes",
          image: "/aeroport-nice-depart-t2-2.jpeg",
          telephone: "+33749777621",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Antibes",
            addressRegion: "PACA",
            addressCountry: "FR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "43.5804",
            longitude: "7.1251",
          },
          areaServed: {
            "@type": "Airport",
            name: "Aéroport Nice Côte d'Azur",
            iataCode: "NCE",
          },
          url: "https://www.taxi-antibes.fr/services/taxi-aeroport-nice",
          openingHours: "Mo-Su 00:00-23:59",
          priceRange: "€€",
        })}
      </Script>

      <PageLayout
        title="Taxi Aéroport Nice Côte d'Azur"
        subtitle="Transferts Porte-à-Porte - Suivi de Vol - Service Premium 24/7"
        backgroundImage="/aeroport-nice-depart-t2-2.jpeg"
      >
        <div className="min-h-screen bg-gray-50">
          {/* Section principale */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl text-cyan-600 mb-6 font-semibold">
                  Transferts Porte-à-Porte avec Suivi de Vol en Temps Réel
                </h2>

                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    <strong>Taxi Aéroport Nice</strong> : Profitez d'un service
                    de transfert premium depuis et vers l'aéroport Nice Côte
                    d'Azur. Notre <strong>taxi Antibes</strong> vous accompagne
                    pour tous vos déplacements aéroport avec un service
                    personnalisé, ponctuel et confortable. Que vous partiez en
                    voyage d'affaires ou en vacances, notre équipe de chauffeurs
                    professionnels est à votre disposition 24h/24 et 7j/7.
                  </p>

                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Avec notre <strong>service taxi aéroport Nice</strong>,
                    bénéficiez d'un transfert sans stress avec suivi de vol en
                    temps réel, accueil personnalisé avec panneau nominatif et
                    assistance complète pour vos bagages. Nous mettons un point
                    d'honneur à assurer votre ponctualité et votre confort pour
                    que vous puissiez voyager en toute sérénité.
                  </p>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    Notre flotte de <strong>véhicules Mercedes</strong> est
                    idéale pour vos transferts aéroport. Que ce soit pour un
                    départ ou une arrivée, notre{" "}
                    <strong>service taxi aéroport</strong> s'adapte à vos
                    besoins et à vos horaires de vol.
                  </p>
                </div>
              </div>

              {/* Image principale */}
              <div className="relative w-full h-[300px] md:h-[500px] mb-12 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/aeroport-nice-depart-t1.jpeg"
                  alt="Taxi Aéroport Nice Côte d'Azur depuis Antibes"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              </div>

              {/* Badges KPI */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl text-center border border-blue-200">
                  <Plane className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-700">
                    Suivi de Vol
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Temps réel</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl text-center border border-amber-200">
                  <Clock className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-amber-700">
                    24h/24 7j/7
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Disponibilité
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl text-center border border-green-200">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-700">
                    Véhicules Premium
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Mercedes récents
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl text-center border border-purple-200">
                  <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-700">
                    Service Premium
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Confort garanti
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Services */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8 text-center">
                Nos Services de Transfert Aéroport
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-white hover:shadow-xl transition-all duration-300 border-cyan-100 rounded-xl"
                  >
                    <CheckCircle2 className="h-6 w-6 text-cyan-600 mb-3" />
                    <p className="text-gray-700 font-medium">{service}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Terminaux */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8">
                Terminaux Desservis - Aéroport Nice Côte d'Azur
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {terminals.map((terminal, index) => (
                  <Card
                    key={index}
                    className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
                        <Plane className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-cyan-700">
                        {terminal.name}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-3 text-lg">
                      {terminal.description}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Compagnies aériennes :</strong>{" "}
                      {terminal.airlines}
                    </p>
                  </Card>
                ))}
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <p className="text-gray-700">
                  <strong>💡 Information importante :</strong> Nous connaissons
                  parfaitement les deux terminaux de l'aéroport Nice Côte
                  d'Azur. Lors de votre réservation, précisez votre terminal et
                  votre numéro de vol pour un service optimisé. Nous suivons
                  votre vol en temps réel et ajustons notre arrivée en cas de
                  retard ou d'avance.
                </p>
              </div>
            </div>
          </section>

          {/* Destinations populaires */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8 text-center">
                Destinations Populaires depuis l'Aéroport Nice
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.map((dest, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-white hover:shadow-xl transition-all border-cyan-100"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="h-6 w-6 text-cyan-600" />
                      <h3 className="text-xl font-bold text-cyan-700">
                        {dest.destination}
                      </h3>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{dest.duration}</span>
                      </div>
                      <div className="text-lg font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                        {dest.price}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{dest.description}</p>
                  </Card>
                ))}
              </div>
              <div className="mt-8 bg-cyan-50 p-6 rounded-xl border border-cyan-200">
                <p className="text-gray-700 text-center">
                  <strong>💡 Tarifs indicatifs :</strong> Les tarifs peuvent
                  varier selon la saison, l'heure et le nombre de passagers.
                  Contactez-nous pour un devis personnalisé et précis selon vos
                  besoins.
                </p>
              </div>
            </div>
          </section>

          {/* Carte Google Maps */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8">
                Zone d'Intervention - Aéroport Nice Côte d'Azur
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Notre service de taxi aéroport couvre l'aéroport Nice Côte
                d'Azur et toutes les destinations de la Côte d'Azur. Visualisez
                notre zone de couverture sur la carte ci-dessous :
              </p>
              <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.123456789!2d7.215833!3d43.665278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0106a852d21%3A0x40819a5fd970a00!2sA%C3%A9roport%20Nice%20C%C3%B4te%20d%27Azur!5e0!3m2!1sfr!2sfr!4v1234567890!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200">
                <p className="text-sm text-gray-700">
                  ℹ️ Nous intervenons depuis l'aéroport Nice Côte d'Azur vers
                  toutes les destinations de la Côte d'Azur : Antibes,
                  Juan-les-Pins, Cannes, Monaco, Nice, Saint-Tropez et bien
                  d'autres. Nous proposons également des transferts depuis votre
                  domicile vers l'aéroport.
                </p>
              </div>
            </div>
          </section>

          {/* Avantages */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-50 to-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8 text-center">
                Pourquoi Choisir Notre Taxi Aéroport Nice ?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {advantages.map((advantage, index) => {
                  const Icon = advantage.icon;
                  return (
                    <Card
                      key={index}
                      className={`p-8 ${advantage.bgColor} border-2 border-transparent hover:border-gray-200 transition-all`}
                    >
                      <Icon className={`h-10 w-10 ${advantage.color} mb-4`} />
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {advantage.description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Comment ça marche */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8 text-center">
                Comment Réserver Votre Transfert Aéroport ?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-8 text-center bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-700">
                    Réservez en Ligne ou par Téléphone
                  </h3>
                  <p className="text-gray-700">
                    Appelez-nous au{" "}
                    <a
                      href="tel:+33749777621"
                      className="text-cyan-600 hover:text-cyan-800 underline font-semibold"
                    >
                      07 49 77 76 21
                    </a>{" "}
                    ou utilisez notre{" "}
                    <a
                      href="/reservation"
                      className="text-cyan-600 hover:text-cyan-800 underline"
                    >
                      formulaire de réservation
                    </a>
                    . Précisez votre numéro de vol et votre terminal.
                  </p>
                </Card>
                <Card className="p-8 text-center bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-amber-700">
                    Confirmation et Suivi de Vol
                  </h3>
                  <p className="text-gray-700">
                    Nous confirmons votre réservation et suivons votre vol en
                    temps réel. En cas de retard ou d'avance, nous ajustons
                    automatiquement notre arrivée.
                  </p>
                </Card>
                <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-green-700">
                    Accueil et Transfert
                  </h3>
                  <p className="text-gray-700">
                    Votre chauffeur vous attend avec un panneau nominatif. Il
                    vous aide avec vos bagages et vous conduit confortablement
                    vers votre destination.
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Véhicules */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8 text-center">
                Notre Flotte de Véhicules Premium
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-white hover:shadow-xl transition-all border-cyan-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-700">
                    Mercedes Classe E
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Capacité :</strong> 1-3 passagers
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Bagages :</strong> 2-3 valises
                  </p>
                  <p className="text-gray-600 text-sm">
                    Confort supérieur, silence et espace pour vos bagages.
                  </p>
                </Card>
                <Card className="p-6 bg-white hover:shadow-xl transition-all border-cyan-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-700">
                    Mercedes GLC
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Capacité :</strong> 1-4 passagers
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Bagages :</strong> 3-4 valises
                  </p>
                  <p className="text-gray-600 text-sm">
                    SUV haut de gamme, entrée facile et espace généreux.
                  </p>
                </Card>
                <Card className="p-6 bg-white hover:shadow-xl transition-all border-cyan-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-700">
                    Mercedes Classe V
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Capacité :</strong> 1-7 passagers
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Bagages :</strong> 5-8 valises
                  </p>
                  <p className="text-gray-600 text-sm">
                    Idéal pour les familles nombreuses et les groupes avec
                    beaucoup de bagages.
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8">
                Questions Fréquentes - Taxi Aéroport Nice
              </h2>
              <div className="space-y-4">
                <details className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-lg font-semibold text-cyan-700 hover:bg-cyan-50 transition-colors">
                    <span>Comment réserver un taxi pour l'aéroport Nice ?</span>
                    <span className="text-cyan-500 group-open:rotate-180 transition-transform">
                      ⌄
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed bg-gray-50">
                    Vous pouvez réserver de plusieurs façons : par téléphone au{" "}
                    <a
                      href="tel:+33749777621"
                      className="text-cyan-600 hover:text-cyan-800 underline font-semibold"
                    >
                      07 49 77 76 21
                    </a>
                    , via notre{" "}
                    <a
                      href="/reservation"
                      className="text-cyan-600 hover:text-cyan-800 underline"
                    >
                      formulaire en ligne
                    </a>
                    , ou par email. Précisez votre numéro de vol, votre terminal
                    et votre heure d'arrivée ou de départ.
                  </div>
                </details>

                <details className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-lg font-semibold text-cyan-700 hover:bg-cyan-50 transition-colors">
                    <span>Que se passe-t-il si mon vol est en retard ?</span>
                    <span className="text-cyan-500 group-open:rotate-180 transition-transform">
                      ⌄
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed bg-gray-50">
                    Nous suivons votre vol en temps réel grâce à votre numéro de
                    vol. En cas de retard, nous ajustons automatiquement notre
                    heure d'arrivée. Aucun frais supplémentaire n'est appliqué
                    pour les retards de vol. Pour les départs, nous vous
                    conseillons de partir avec une marge de sécurité.
                  </div>
                </details>

                <details className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-lg font-semibold text-cyan-700 hover:bg-cyan-50 transition-colors">
                    <span>
                      Combien de bagages puis-je emporter dans le taxi ?
                    </span>
                    <span className="text-cyan-500 group-open:rotate-180 transition-transform">
                      ⌄
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed bg-gray-50">
                    La capacité dépend du véhicule choisi. Nos Mercedes Classe E
                    peuvent accueillir 2-3 valises, les GLC 3-4 valises, et les
                    Classe V jusqu'à 8 valises. Précisez le nombre de bagages
                    lors de la réservation pour garantir le véhicule approprié.
                  </div>
                </details>

                <details className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-lg font-semibold text-cyan-700 hover:bg-cyan-50 transition-colors">
                    <span>
                      Proposez-vous des tarifs fixes pour les transferts
                      aéroport ?
                    </span>
                    <span className="text-cyan-500 group-open:rotate-180 transition-transform">
                      ⌄
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed bg-gray-50">
                    Oui, nous proposons des tarifs fixes pour les principales
                    destinations depuis l'aéroport Nice. Le tarif est garanti
                    lors de la réservation et ne change pas selon le trafic ou
                    l'itinéraire. Consultez notre{" "}
                    <a
                      href="/tarifs"
                      className="text-cyan-600 hover:text-cyan-800 underline"
                    >
                      page tarifs
                    </a>{" "}
                    pour plus de détails.
                  </div>
                </details>

                <details className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-lg font-semibold text-cyan-700 hover:bg-cyan-50 transition-colors">
                    <span>
                      Puis-je réserver un taxi pour plusieurs passagers ?
                    </span>
                    <span className="text-cyan-500 group-open:rotate-180 transition-transform">
                      ⌄
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed bg-gray-50">
                    Absolument ! Nos Mercedes Classe V peuvent accueillir
                    jusqu'à 7 passagers avec leurs bagages. Précisez le nombre
                    de passagers lors de la réservation pour que nous puissions
                    vous proposer le véhicule adapté.
                  </div>
                </details>

                <details className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-lg font-semibold text-cyan-700 hover:bg-cyan-50 transition-colors">
                    <span>
                      Acceptez-vous les paiements par carte bancaire ?
                    </span>
                    <span className="text-cyan-500 group-open:rotate-180 transition-transform">
                      ⌄
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed bg-gray-50">
                    Oui, nous acceptons les paiements par carte bancaire,
                    espèces et virement bancaire. Pour les entreprises, nous
                    proposons également la facturation avec paiement différé.
                    Tous nos véhicules sont équipés de terminaux de paiement
                    sans contact.
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-800 to-cyan-500 text-white">
            <div className="container mx-auto px-6 max-w-6xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Réservez Votre Transfert Aéroport Nice dès Maintenant
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Service disponible 24h/24 et 7j/7. Réservez en ligne ou par
                téléphone pour un transfert confortable et ponctuel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-cyan-700 hover:bg-gray-100 shadow-lg transition-all duration-300 text-lg px-8 py-6 gap-2 rounded-xl"
                >
                  <a
                    href="tel:+33749777621"
                    className="flex items-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Appeler maintenant
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-cyan-700 text-lg px-8 py-6 bg-transparent rounded-xl"
                >
                  <a href="/reservation">Réserver en ligne</a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </PageLayout>
    </>
  );
}
