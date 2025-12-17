import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  FileText,
  Heart,
  Phone,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";
import Image from "next/image";
import Script from "next/script";

const hospitalsAntibes = [
  {
    name: "Centre Hospitalier d'Antibes",
    city: "Antibes",
    description: "Urgences et consultations générales",
    speciality: "Médecine générale, urgences",
    website: "https://www.ch-antibes.fr/",
    phone: "04 92 91 70 00",
  },
  {
    name: "Polyclinique Oxford",
    city: "Antibes",
    description: "Chirurgie et consultations spécialisées",
    speciality: "Chirurgie, consultations",
    website: "https://www.polyclinique-oxford.fr/",
    phone: "04 92 91 70 00",
  },
];

const hospitalsNice = [
  {
    name: "CHU Pasteur 2",
    city: "Nice",
    description: "Hôpital universitaire, urgences, spécialités",
    speciality: "Médecine générale, urgences, spécialités",
    website: "https://www.chu-nice.fr/",
    phone: "04 92 03 77 77",
  },
  {
    name: "CHU Archet 1 & 2",
    city: "Nice",
    description: "Hôpital universitaire, spécialités médicales",
    speciality: "Spécialités médicales, chirurgie",
    website: "https://www.chu-nice.fr/",
    phone: "04 92 03 77 77",
  },
  {
    name: "Centre Antoine Lacassagne",
    city: "Nice",
    description: "Centre de cancérologie de référence",
    speciality: "Oncologie, radiothérapie, chimiothérapie",
    website: "https://www.centreantoinelacassagne.org/",
    phone: "04 92 03 15 15",
  },
  {
    name: "Hôpital Lenval",
    city: "Nice",
    description: "Hôpital pédiatrique de référence",
    speciality: "Pédiatrie, urgences pédiatriques",
    website: "https://www.lenval.org/",
    phone: "04 92 03 03 03",
  },
  {
    name: "Clinique Saint-Georges",
    city: "Nice",
    description: "Clinique privée, chirurgie, maternité",
    speciality: "Chirurgie, maternité, consultations",
    website: "https://www.clinique-saint-george.com/",
    phone: "04 92 11 11 11",
  },
  {
    name: "Clinique du Parc Impérial",
    city: "Nice",
    description: "Clinique privée, médecine et chirurgie",
    speciality: "Médecine, chirurgie, consultations",
    website: "https://www.clinique-parc-imperial.fr/",
    phone: "04 97 13 50 00",
  },
];

const hospitalsCannes = [
  {
    name: "Centre Hospitalier de Cannes",
    city: "Cannes",
    description: "Hôpital général, urgences, spécialités",
    speciality: "Urgences, maternité, chirurgie",
    website: "https://www.ch-cannes.fr/",
    phone: "04 92 69 69 00",
  },
  {
    name: "Clinique Oxford",
    city: "Cannes",
    description: "Chirurgie orthopédique et rééducation",
    speciality: "Orthopédie, prothèses, médecine du sport",
    website: "https://www.clinique-oxford.com/",
    phone: "04 93 43 88 88",
  },
];

const hospitalsMougins = [
  {
    name: "Clinique Arnault Tzanck",
    city: "Mougins",
    description: "Médecine polyvalente et consultations",
    speciality: "Médecine polyvalente, consultations",
    website: "https://www.tzanck.org/mougins/",
    phone: "04 93 75 66 66",
  },
  {
    name: "Clinique de l'Espérance",
    city: "Mougins",
    description: "Chirurgie et maternité",
    speciality: "Chirurgie, maternité",
    website: "https://www.clinique-esperance.fr/",
    phone: "04 93 75 77 77",
  },
];

const coverageAreas = [
  "✓ Centre-ville d'Antibes",
  "✓ Juan-les-Pins",
  "✓ Golfe-Juan",
  "✓ Cap d'Antibes",
  "✓ La Fontonne",
  "✓ Les Semboules",
  "✓ Les Terriers",
  "✓ Biot",
];

const services = [
  "Transport pour chimiothérapie et radiothérapie",
  "Trajets vers les centres de dialyse",
  "Consultations médicales et spécialistes",
  "Transport pour hospitalisation",
  "Examens médicaux (IRM, Scanner, Radio)",
  "Sorties d'hospitalisation",
  "Transport pour consultations régulières",
  "Accompagnement pour personnes à mobilité réduite",
];

// Revalidation pour le cache (1 heure)
export const revalidate = 3600;

export default function TaxiConventionnePage() {
  return (
    <>
      <Script id="local-business-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Taxi Conventionné CPAM Antibes",
          image: "/taxi-conventionne-nice-pasteur.jpeg",
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
          url: "https://www.taxi-antibes.fr/services/taxi-conventionne",
          openingHours: "Mo-Su 00:00-23:59",
          priceRange: "€€",
          serviceArea: {
            "@type": "City",
            name: "Antibes",
          },
        })}
      </Script>

      <PageLayout
        title="Taxi Conventionné CPAM Antibes"
        subtitle="Transport Médical Agréé - Prise en Charge CPAM - Service 7j/7"
        backgroundImage="/taxi-conventionne-cpam.jpeg"
      >
        <div className="min-h-screen bg-gray-50">
          {/* Section principale */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl text-cyan-600 mb-6 font-semibold">
                  Transport Médical et VSL sur Antibes et ses environs
                </h2>

                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    <strong>Taxi conventionné Antibes</strong> : Profitez d'un
                    service de transport médical fiable et reconnu à Antibes,
                    agréé par la CPAM pour tous vos déplacements médicaux. Notre{" "}
                    <strong>taxi agréé CPAM Antibes</strong> vous accompagne
                    pour vos rendez-vous à l'hôpital, en centre de soins ou chez
                    le spécialiste. Besoin d'un <strong>VSL Antibes</strong> ?
                    Notre équipe de chauffeurs professionnels est à votre
                    disposition avec des véhicules modernes et adaptés pour tous
                    vos besoins de transport sanitaire, avec prescription
                    médicale.
                  </p>

                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Avec notre <strong>taxi VSL à Antibes</strong>, bénéficiez
                    d'un accompagnement humain et ponctuel pour tous vos trajets
                    médicaux. Nous mettons un point d'honneur à assurer votre
                    confort, votre sécurité et la gestion administrative de
                    votre transport, pour que vous puissiez vous concentrer sur
                    votre santé.
                  </p>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    Notre flotte de <strong>taxis à Antibes</strong> est idéale
                    pour vos transports médicaux. Que ce soit pour des
                    consultations régulières ou des urgences, notre{" "}
                    <strong>service de taxi conventionné Antibes</strong>{" "}
                    s'adapte à vous.
                  </p>
                </div>
              </div>

              {/* Image principale */}
              <div className="relative w-full h-[300px] md:h-[500px] mb-12 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/taxi-antibes-l'archet-nice.jpeg"
                  alt="Taxi conventionné CPAM Antibes vers hôpitaux de Nice"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              </div>

              {/* Badges KPI */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl text-center border border-cyan-200">
                  <Heart className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-cyan-700">
                    Agréé CPAM
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Prise en charge
                  </div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl text-center border border-amber-200">
                  <Clock className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-amber-700">
                    7j/7 24h/24
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Disponibilité
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl text-center border border-green-200">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-700">
                    Véhicules adaptés
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Confort & sécurité
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl text-center border border-purple-200">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-700">
                    Chauffeurs formés
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Professionnels
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Services */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8 text-center">
                Nos Services de Transport Médical à Antibes
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

          {/* Zones couvertes */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8">
                Zones Couvertes autour d'Antibes
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Notre service de taxi conventionné couvre Antibes et ses
                environs :
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {coverageAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-4 bg-cyan-50 rounded-lg border border-cyan-200"
                  >
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Carte Google Maps */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8">
                Zone d'intervention à Antibes et environs
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Notre service de taxi conventionné intervient dans tout Antibes
                et ses alentours. Visualisez notre zone de couverture sur la
                carte ci-dessous :
              </p>
              <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46244.54478825284!2d7.1251!3d43.5804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c95aa85b2b91d9%3A0x91991dd2e1e21883!2sAntibes!5e0!3m2!1sfr!2sfr!4v1710799027951!5m2!1sfr!2sfr"
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
                  ℹ️ Nous intervenons principalement dans un rayon de 50km
                  autour d'Antibes, incluant Nice, Cannes, Monaco, Mougins et
                  les communes environnantes.
                </p>
              </div>
            </div>
          </section>

          {/* Taxi VSL Professionnel */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8">
                Taxi VSL Antibes - Un Service Médical Professionnel
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
                  <Stethoscope className="h-10 w-10 text-cyan-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-cyan-700">
                    Transport VSL Spécialisé
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Notre équipe de chauffeurs VSL qualifiés assure vos
                    transports médicaux dans le respect des normes sanitaires.
                    Agréés par la CPAM, nos véhicules sont équipés pour votre
                    confort et votre sécurité.
                  </p>
                </Card>
                <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                  <FileText className="h-10 w-10 text-amber-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-amber-700">
                    Agrément CPAM Antibes
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Bénéficiez d'une prise en charge optimale avec notre service
                    de taxi conventionné. Notre agrément CPAM vous garantit un
                    transport médical sans avance de frais.
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Pourquoi choisir */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-50 to-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8 text-center">
                Pourquoi Choisir Notre Taxi Conventionné à Antibes ?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 text-center bg-white hover:shadow-xl transition-all">
                  <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-cyan-700">
                    Prise en Charge CPAM
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Tiers payant et remboursement facilité
                  </p>
                </Card>
                <Card className="p-6 text-center bg-white hover:shadow-xl transition-all">
                  <Clock className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-cyan-700">
                    Disponibilité 7j/7
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Service continu pour vos besoins médicaux
                  </p>
                </Card>
                <Card className="p-6 text-center bg-white hover:shadow-xl transition-all">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-cyan-700">
                    Véhicules Adaptés
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Confort et sécurité garantis
                  </p>
                </Card>
                <Card className="p-6 text-center bg-white hover:shadow-xl transition-all">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-cyan-700">
                    Chauffeurs Expérimentés
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Formation aux transports médicaux
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Établissements Antibes */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8">
                Établissements de Santé Desservis à Antibes
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {hospitalsAntibes.map((hospital, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-white hover:shadow-lg transition-shadow border-cyan-100"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-cyan-700">
                      {hospital.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{hospital.city}</p>
                    <p className="text-gray-700 mb-2">{hospital.description}</p>
                    <p className="text-cyan-700 font-medium mb-3">
                      {hospital.speciality}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {hospital.website && (
                        <a
                          href={hospital.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-700 hover:text-cyan-600 underline text-sm"
                        >
                          Site officiel
                        </a>
                      )}
                      {hospital.phone && (
                        <a
                          href={`tel:${hospital.phone.replace(/\s+/g, "")}`}
                          className="text-cyan-700 hover:text-cyan-600 text-sm"
                        >
                          {hospital.phone}
                        </a>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Tableau établissements Nice, Cannes, Mougins */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8">
                Établissements de santé accessibles en taxi conventionné depuis
                Antibes – Nice, Cannes, Mougins
              </h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gradient-to-r from-cyan-600 to-blue-600">
                      <tr>
                        <th className="px-6 py-4 text-left text-white font-semibold">
                          Établissement
                        </th>
                        <th className="px-6 py-4 text-left text-white font-semibold">
                          Ville
                        </th>
                        <th className="px-6 py-4 text-left text-white font-semibold">
                          Spécialité
                        </th>
                        <th className="px-6 py-4 text-left text-white font-semibold">
                          Site web
                        </th>
                        <th className="px-6 py-4 text-left text-white font-semibold">
                          Téléphone
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {hospitalsNice.map((hospital, index) => (
                        <tr
                          key={`nice-${index}`}
                          className="hover:bg-cyan-50 transition-colors"
                        >
                          <td className="px-6 py-4 font-medium text-gray-900">
                            {hospital.name}
                          </td>
                          <td className="px-6 py-4 text-gray-700">
                            {hospital.city}
                          </td>
                          <td className="px-6 py-4 text-gray-700">
                            {hospital.speciality}
                          </td>
                          <td className="px-6 py-4">
                            <a
                              href={hospital.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cyan-600 hover:text-cyan-800 underline text-sm"
                            >
                              {hospital.website.replace(/https?:\/\//, "")}
                            </a>
                          </td>
                          <td className="px-6 py-4">
                            <a
                              href={`tel:${hospital.phone.replace(/\s+/g, "")}`}
                              className="text-cyan-600 hover:text-cyan-800 text-sm"
                            >
                              {hospital.phone}
                            </a>
                          </td>
                        </tr>
                      ))}
                      {hospitalsCannes.map((hospital, index) => (
                        <tr
                          key={`cannes-${index}`}
                          className="hover:bg-cyan-50 transition-colors"
                        >
                          <td className="px-6 py-4 font-medium text-gray-900">
                            {hospital.name}
                          </td>
                          <td className="px-6 py-4 text-gray-700">
                            {hospital.city}
                          </td>
                          <td className="px-6 py-4 text-gray-700">
                            {hospital.speciality}
                          </td>
                          <td className="px-6 py-4">
                            <a
                              href={hospital.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cyan-600 hover:text-cyan-800 underline text-sm"
                            >
                              {hospital.website.replace(/https?:\/\//, "")}
                            </a>
                          </td>
                          <td className="px-6 py-4">
                            <a
                              href={`tel:${hospital.phone.replace(/\s+/g, "")}`}
                              className="text-cyan-600 hover:text-cyan-800 text-sm"
                            >
                              {hospital.phone}
                            </a>
                          </td>
                        </tr>
                      ))}
                      {hospitalsMougins.map((hospital, index) => (
                        <tr
                          key={`mougins-${index}`}
                          className="hover:bg-cyan-50 transition-colors"
                        >
                          <td className="px-6 py-4 font-medium text-gray-900">
                            {hospital.name}
                          </td>
                          <td className="px-6 py-4 text-gray-700">
                            {hospital.city}
                          </td>
                          <td className="px-6 py-4 text-gray-700">
                            {hospital.speciality}
                          </td>
                          <td className="px-6 py-4">
                            <a
                              href={hospital.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cyan-600 hover:text-cyan-800 underline text-sm"
                            >
                              {hospital.website.replace(/https?:\/\//, "")}
                            </a>
                          </td>
                          <td className="px-6 py-4">
                            <a
                              href={`tel:${hospital.phone.replace(/\s+/g, "")}`}
                              className="text-cyan-600 hover:text-cyan-800 text-sm"
                            >
                              {hospital.phone}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Spécialités */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8">
                Spécialités de Transport Médical à Antibes
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-8 bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200">
                  <Heart className="h-10 w-10 text-rose-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-rose-700">
                    Transport pour Soins Oncologiques
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nous assurons vos transports réguliers pour les séances de
                    chimiothérapie et radiothérapie avec ponctualité et
                    bienveillance. Notre équipe est formée pour accompagner les
                    patients en traitement contre le cancer.
                  </p>
                </Card>
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                  <Stethoscope className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">
                    Transport Dialyse Spécialisé
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Service dédié aux patients dialysés avec des horaires
                    adaptés à vos séances. Nous connaissons les contraintes des
                    traitements de dialyse et adaptons nos services en
                    conséquence.
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Tarifs et remboursements */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-50 to-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8">
                Tarifs et Remboursements
              </h2>
              <Card className="p-8 bg-white border-cyan-200">
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  En tant que taxi conventionné à Antibes, nous pratiquons le
                  tiers payant avec la CPAM. Les tarifs sont réglementés et la
                  prise en charge est assurée à 100% avec une prescription
                  médicale valide.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Aucune avance de frais avec le tiers payant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Prise en charge à 100% selon conditions CPAM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Devis gratuit sur demande</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Facturation transparente</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                  <p className="text-sm text-gray-700">
                    💡 Pour bénéficier de la prise en charge CPAM, vous devez
                    disposer d'une{" "}
                    <a
                      href="https://www.ameli.fr/alpes-maritimes/assure/remboursements/rembourse/frais-transport"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-700 hover:text-cyan-800 underline font-semibold"
                    >
                      prescription médicale de transport (PMT)
                    </a>{" "}
                    délivrée par votre médecin traitant ou le médecin
                    hospitalier.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Engagements qualité */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8 text-center">
                Nos Engagements Qualité
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-white hover:shadow-xl transition-all text-center border-cyan-100">
                  <Clock className="h-10 w-10 text-cyan-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-cyan-700">
                    Ponctualité Garantie
                  </h3>
                  <p className="text-gray-700">
                    Nous respectons scrupuleusement les horaires de vos
                    rendez-vous médicaux.
                  </p>
                </Card>
                <Card className="p-6 bg-white hover:shadow-xl transition-all text-center border-cyan-100">
                  <Shield className="h-10 w-10 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-cyan-700">
                    Hygiène Irréprochable
                  </h3>
                  <p className="text-gray-700">
                    Désinfection quotidienne des véhicules selon les normes
                    sanitaires.
                  </p>
                </Card>
                <Card className="p-6 bg-white hover:shadow-xl transition-all text-center border-cyan-100">
                  <Users className="h-10 w-10 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-cyan-700">
                    Accompagnement Personnalisé
                  </h3>
                  <p className="text-gray-700">
                    Assistance adaptée à votre mobilité et vos besoins
                    spécifiques.
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8">
                Questions Fréquentes - Taxi Conventionné Antibes
              </h2>
              <div className="space-y-4">
                <details className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-lg font-semibold text-cyan-700 hover:bg-cyan-50 transition-colors">
                    <span>
                      Comment réserver un taxi conventionné à Antibes ?
                    </span>
                    <span className="text-cyan-500 group-open:rotate-180 transition-transform">
                      ⌄
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed bg-gray-50">
                    Appelez-nous directement au{" "}
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
                      formulaire de contact
                    </a>
                    . Nous vous confirmerons rapidement votre réservation.
                  </div>
                </details>

                <details className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-lg font-semibold text-cyan-700 hover:bg-cyan-50 transition-colors">
                    <span>Quels documents fournir ?</span>
                    <span className="text-cyan-500 group-open:rotate-180 transition-transform">
                      ⌄
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed bg-gray-50">
                    Préparez votre prescription médicale de transport (PMT),
                    votre carte Vitale et votre carte de mutuelle. Ces documents
                    sont nécessaires pour bénéficier de la prise en charge CPAM.
                  </div>
                </details>

                <details className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-lg font-semibold text-cyan-700 hover:bg-cyan-50 transition-colors">
                    <span>
                      Quelle est la différence entre un taxi conventionné et un
                      taxi standard à Antibes ?
                    </span>
                    <span className="text-cyan-500 group-open:rotate-180 transition-transform">
                      ⌄
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed bg-gray-50">
                    Un taxi conventionné CPAM comme le nôtre est spécifiquement
                    agréé pour le transport médical. Nous pratiquons le tiers
                    payant et assurons directement la gestion administrative
                    avec la CPAM, contrairement aux taxis standards. Nos
                    chauffeurs sont également formés aux spécificités du
                    transport de patients.
                  </div>
                </details>

                <details className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-lg font-semibold text-cyan-700 hover:bg-cyan-50 transition-colors">
                    <span>
                      Puis-je être accompagné lors de mon trajet médical ?
                    </span>
                    <span className="text-cyan-500 group-open:rotate-180 transition-transform">
                      ⌄
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed bg-gray-50">
                    Oui, un accompagnant est autorisé et même recommandé pour
                    certains patients. L'accompagnant peut voyager gratuitement
                    dans certains cas (enfant, personne âgée dépendante).
                    Précisez lors de la réservation si vous serez accompagné
                    pour adapter le véhicule.
                  </div>
                </details>

                <details className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-lg font-semibold text-cyan-700 hover:bg-cyan-50 transition-colors">
                    <span>
                      Vos véhicules sont-ils adaptés aux fauteuils roulants ?
                    </span>
                    <span className="text-cyan-500 group-open:rotate-180 transition-transform">
                      ⌄
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed bg-gray-50">
                    Oui, nos Mercedes Classe V peuvent accueillir des fauteuils
                    roulants pliants. Pour les fauteuils non pliants, nous
                    proposons des véhicules adaptés avec rampe d'accès. Précisez
                    vos besoins lors de la réservation pour garantir le véhicule
                    approprié.
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* Ressources utiles */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="bg-cyan-50 border border-cyan-100 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-cyan-900 mb-4">
                  Ressources utiles
                </h2>
                <p className="text-cyan-900 mb-4">
                  Pour en savoir plus sur les hôpitaux et centres médicaux de
                  Nice, consultez notre guide complet avec distances,
                  spécialités et informations pratiques.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/blog/hopitaux-centres-medicaux-nice-guide-complet"
                    className="inline-flex items-center gap-2 text-cyan-700 font-semibold underline hover:text-cyan-600 transition-colors"
                  >
                    📖 Guide complet : Hôpitaux et Centres Médicaux de Nice →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-700 to-cyan-600 text-white">
            <div className="container mx-auto px-6 max-w-6xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Besoin d'un Transport Médical Conventionné ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contactez-nous dès maintenant pour une réservation ou un devis
                personnalisé
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
