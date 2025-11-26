import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import Image from "next/image";
import Link from "next/link";

const sectors = [
  {
    slug: "monaco",
    name: "Monaco",
    description:
      "Taxi Antibes vers Monaco : transferts aéroport, port Hercule, hôtels 5 étoiles et événements premium.",
    image: "/taxi-antibes-vers-Monaco.jpeg",
  },
  {
    slug: "cannes",
    name: "Cannes",
    description:
      "Taxi Antibes vers Cannes : Festival, Palais des Festivals, hôtels de luxe et congrès professionnels.",
    image: "/services.webp",
  },
  {
    slug: "nice",
    name: "Nice",
    description:
      "Taxi Antibes vers Nice : aéroport, gare, centre-ville, hôpitaux et longues distances.",
    image: "/taxi-nice-glc.jpeg",
  },
  {
    slug: "juan-les-pins",
    name: "Juan-les-Pins",
    description:
      "Taxi à Juan-les-Pins : plages, festivals, port de plaisance et déplacements locaux.",
    image: "/confort-maximum.jpeg",
  },
  {
    slug: "sophia-antipolis",
    name: "Sophia Antipolis",
    description:
      "Taxi vers Sophia Antipolis : technopole, entreprises, centres de R&D et déplacements professionnels.",
    image: "/premium copie.jpeg",
  },
  {
    slug: "aeroport-nice",
    name: "Aéroport Nice",
    description:
      "Transferts aéroport Nice Côte d'Azur : Terminal 1 & 2, suivi de vol et accueil personnalisé.",
    image: "/van-aéro copie.jpeg",
  },
  {
    slug: "frejus",
    name: "Fréjus",
    description:
      "Taxi Antibes vers Fréjus : patrimoine romain, plages, port de plaisance et Centre Hospitalier Intercommunal.",
    image: "/taxi-antibes-Cannes.jpg",
  },
];

export default function SecteursPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="bg-white border-b mt-10 sm:mt-0">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav aria-label="Fil d'Ariane" className="text-sm text-gray-600">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-cyan-700">
                  Accueil
                </Link>
              </li>
              <li>/</li>
              <li className="text-cyan-700 font-semibold">Nos secteurs</li>
            </ol>
          </nav>
        </div>
      </div>

      <main className="py-16">
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[2fr,3fr] gap-12 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-amber-100 text-cyan-700 font-semibold text-sm mb-4">
                Taxi Antibes - Côte d&apos;Azur
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Nos secteurs desservis
                <span className="block bg-gradient-to-r from-cyan-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Monaco, Cannes, Nice, Fréjus, Juan-les-Pins & plus
                </span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Notre équipe de chauffeurs privés opère sur toute la Côte
                d&apos;Azur avec un service premium 24/7. Découvrez nos pages
                dédiées pour Monaco, Cannes, Nice, Fréjus, Juan-les-Pins, Sophia
                Antipolis et l&apos;aéroport de Nice, et accédez à des
                informations détaillées sur les transferts, les établissements de
                santé desservis et nos engagements qualité.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Besoin d&apos;un chauffeur pour un évènement, un transfert
                aéroport ou un accompagnement médical ? Nous proposons des
                solutions sur mesure pour chaque trajet, avec facturation
                transparente et assistance administrative sur demande.
              </p>
            </div>
            <div className="relative h-80 lg:h-full min-h-[320px]">
              <Image
                src="/van-aéro copie.jpeg"
                alt="Chauffeur privé Taxi Antibes"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Disponibilité
                </p>
                <p className="text-2xl font-semibold bg-gradient-to-r from-cyan-600 to-amber-500 bg-clip-text text-transparent">
                  24/7
                </p>
                <p className="text-sm text-gray-600">
                  Réduction des temps d&apos;attente dans les secteurs
                  touristiques.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choisissez votre secteur
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Accédez à une page détaillée pour découvrir les services
              disponibles, les établissements couverts et les conseils pratiques
              pour organiser vos trajets dans chaque ville.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <Link
                key={sector.slug}
                href={`/secteurs/${sector.slug}`}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={sector.image}
                    alt={`Taxi privé à ${sector.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Taxi {sector.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  <span className="text-cyan-700 font-semibold">
                    Découvrir le secteur →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-20">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Un réseau de chauffeurs experts de la Côte d&apos;Azur
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nous intervenons chaque jour depuis l&apos;aéroport Nice Côte
                  d&apos;Azur, la gare de Nice-Ville, le port de Monaco, le
                  Palais des Festivals à Cannes ou encore le port Vauban
                  d&apos;Antibes. Notre objectif : vous assurer ponctualité,
                  confort et discrétion pour chaque déplacement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En réservant via Taxi Antibes, vous bénéficiez d&apos;un
                  interlocuteur unique pour planifier vos transferts
                  multi-destinations, d&apos;une assistance 24/7 via téléphone
                  ou WhatsApp et d&apos;une flotte de véhicules récents
                  parfaitement entretenus.
                </p>
              </div>
              <div className="bg-cyan-50 rounded-2xl p-8 border border-cyan-100">
                <h3 className="text-2xl font-semibold text-cyan-700 mb-4">
                  Services inclus
                </h3>
                <ul className="space-y-3 text-cyan-900">
                  <li>✓ Accueil personnalisé avec pancarte nominative</li>
                  <li>✓ Suivi de vol et ajustement automatique des horaires</li>
                  <li>✓ Assistance bagages et accompagnement VIP</li>
                  <li>✓ Facturation claire et devis sous 1h</li>
                  <li>
                    ✓ Options siège bébé, rehausseur et rafraîchissements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-20">
          <div className="bg-gradient-to-br from-cyan-700 to-cyan-900 text-white rounded-3xl shadow-2xl p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Besoin d&apos;un trajet personnalisé ?
                </h2>
                <p className="text-lg text-cyan-100">
                  Nous organisons vos transferts simples ou aller-retour, vos
                  excursions privatives et vos déplacements médicaux sur
                  demande.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+33749777621"
                  className="flex-1 text-center px-6 py-4 bg-white text-cyan-700 rounded-xl font-semibold hover:bg-cyan-50 transition-colors"
                >
                  📞 07 49 77 76 21
                </a>
                <Link
                  href="/reservation"
                  className="flex-1 text-center px-6 py-4 border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-cyan-700 transition-colors"
                >
                  Réserver en ligne
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

