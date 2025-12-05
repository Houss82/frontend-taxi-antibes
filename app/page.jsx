// app/page.jsx (SERVER) — pas de "use client"
import { BookingSection } from "@/components/booking-section";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ServicesSection } from "@/components/services-section";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Car,
  Clock,
  CreditCard,
  Phone,
  Plane,
  Smartphone,
} from "lucide-react";
import { Oleo_Script, Outfit, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

// Import de la police Oleo Script
const oleoScript = Oleo_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Import de la police Poppins
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

// Import de la police Outfit
const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// ✅ Force le rendu statique (SSG) pour de meilleures performances SEO
export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* ✅ HERO SECTION SSR - H1/H2 inclus dans le HTML initial */}
      <section className="relative h-screen md:h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-20">
        {/* Image mobile - optimisée pour mobile */}
        <Image
          src="/taxi-antibes-mobile.png"
          alt="Taxi Antibes Mercedes pour transferts aéroport Nice"
          fill
          className="md:hidden"
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
        {/* Image desktop */}
        <Image
          src="/taxi-antibes-accueil.png"
          alt="Taxi Antibes Mercedes pour transferts aéroport Nice"
          fill
          className="hidden md:block object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-4 sm:px-6 pt-0 pb-8 md:pt-0 md:py-0 flex flex-col items-center justify-center h-full md:mt-0">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-3 md:mb-6 leading-tight text-balance mt-0 md:mt-0">
            <span
              className={`bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 inline-block bg-clip-text text-transparent ${oleoScript.className}`}
            >
              Taxi Antibes
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 text-white font-semibold">
            Taxi Aéroport Nice
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl mb-4 text-white/90 font-semibold">
            Tous transports sur la Côte d'Azur
          </p>

          {/* Texte descriptif SEO */}
          <div className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto font-light leading-relaxed bg-white/10 md:backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/20 shadow-lg">
            <p className="mb-3">
              Service de{" "}
              <strong className="text-cyan-400 font-semibold">
                taxi officiel à Antibes
              </strong>
              .{" "}
              <Link
                href="/services"
                className="text-white hover:text-amber-300 underline"
              >
                Transferts aéroport Nice
              </Link>
              , courses locales, Juan-les-Pins, Cannes, Monaco.
            </p>
            <p className="text-white/90">
              ✓{" "}
              <Link
                href="/reservation"
                className="hover:text-amber-300 underline"
              >
                Réservation 24h/24
              </Link>{" "}
              • ✓ Chauffeurs pros • ✓{" "}
              <Link href="/tarifs" className="hover:text-amber-300 underline">
                Tarifs transparents
              </Link>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/reservation"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base sm:text-lg font-medium bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 hover:from-amber-500 hover:via-gold-600 hover:to-orange-500 shadow-lg text-white px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300"
            >
              Réserver maintenant
            </a>
            <a
              href="/tarifs"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base sm:text-lg font-medium border-2 border-cyan-400 text-white hover:bg-cyan-400/10 px-6 sm:px-8 py-4 sm:py-6 bg-transparent transition-all duration-300"
            >
              Consulter les tarifs
            </a>
          </div>
        </div>
      </section>

      {/* ✅ Bloc texte SEO riche - contenu local */}
      <section className="py-24 bg-gradient-to-b from-cyan-50/30 via-white to-gold-50/30 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* En-tête centré avec design moderne */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-cyan-100 to-gold-100 rounded-full border border-cyan-300/30">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-bold text-cyan-700 uppercase tracking-wider">
                Transport Premium
              </span>
            </div>
            <div className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Taxi Antibes
              </span>
              <br />
              <span className="text-gray-700">
                Votre partenaire de confiance
              </span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-cyan-600 via-gold-500 to-amber-500 bg-clip-text text-transparent font-extrabold">
                  sur la Côte d'Azur
                </span>
                <span className="absolute bottom-2 left-0 right-0 h-4 bg-gold-400/30 -rotate-1 z-0 rounded-sm"></span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent to-cyan-500 rounded-full"></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 via-gold-500 to-amber-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
              <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Contenu avec design amélioré */}
          <div className="space-y-10 text-lg leading-relaxed">
            {/* Premier paragraphe avec fond coloré */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <p className="text-gray-800 mb-0 leading-relaxed text-lg">
                <strong className="font-bold text-cyan-600 text-xl">
                  Taxi Antibes
                </strong>{" "}
                assure tous vos déplacements entre{" "}
                <strong className="font-bold text-cyan-600 text-lg">
                  Antibes
                </strong>
                ,{" "}
                <strong className="font-bold text-cyan-600 text-lg">
                  Juan-les-Pins
                </strong>
                ,{" "}
                <strong className="font-bold text-cyan-600 text-lg">
                  Cannes
                </strong>
                ,{" "}
                <strong className="font-bold text-cyan-600 text-lg">
                  Nice
                </strong>{" "}
                et{" "}
                <strong className="font-bold text-cyan-600 text-lg">
                  Monaco
                </strong>
                . Spécialiste du{" "}
                <Link
                  href="/tarifs"
                  className="inline-flex items-center gap-1 text-cyan-600 font-bold hover:text-amber-600 transition-all duration-200 relative group text-xl"
                >
                  <span className="relative">
                    transfert vers l'aéroport Nice Côte d'Azur
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  </span>
                </Link>
                , nous proposons un{" "}
                <strong className="font-bold text-gold-600 text-xl">
                  service premium
                </strong>
                , ponctuel et disponible 24h/24 et 7j/7.
              </p>
            </div>

            {/* Deuxième paragraphe avec bordure accent */}
            <div className="relative pl-6 border-l-4 border-cyan-500 bg-gradient-to-r from-cyan-50/50 to-transparent py-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed text-lg">
                Nos{" "}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-cyan-600 font-bold hover:text-amber-600 transition-all duration-200 relative group text-xl"
                >
                  <span className="relative">
                    chauffeurs professionnels
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  </span>
                </Link>{" "}
                assurent vos{" "}
                <strong className="font-bold text-cyan-600 text-lg">
                  courses locales
                </strong>
                ,{" "}
                <strong className="font-bold text-cyan-600 text-lg">
                  transferts longue distance
                </strong>
                , et{" "}
                <strong className="font-bold text-cyan-600 text-lg">
                  déplacements d'affaires
                </strong>{" "}
                dans des véhicules tout confort. Réservez facilement{" "}
                <Link
                  href="/reservation"
                  className="inline-flex items-center gap-1 text-cyan-600 font-bold hover:text-amber-600 transition-all duration-200 relative group text-xl"
                >
                  <span className="relative">
                    en ligne
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  </span>
                </Link>{" "}
                ou contactez-nous par téléphone pour un devis rapide et
                transparent.
              </p>
            </div>

            {/* Troisième paragraphe avec design premium */}
            <div className="bg-gradient-to-r from-cyan-50/50 via-white to-gold-50/50 border-2 border-cyan-300/30 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl -ml-16 -mb-16"></div>
              <p className="text-gray-800 mb-0 leading-relaxed text-lg relative z-10">
                Que vous partiez de{" "}
                <strong className="font-bold text-cyan-600 text-lg">
                  Cap d'Antibes
                </strong>
                ,{" "}
                <strong className="font-bold text-cyan-600 text-lg">
                  Vallauris
                </strong>
                ,{" "}
                <strong className="font-bold text-cyan-600 text-lg">
                  Biot
                </strong>{" "}
                ou{" "}
                <strong className="font-bold text-cyan-600 text-lg">
                  Sophia Antipolis
                </strong>
                ,{" "}
                <strong className="font-bold text-gold-600 text-xl">
                  Taxi Antibes est à votre service
                </strong>{" "}
                pour des trajets sûrs, rapides et confortables sur toute la{" "}
                <strong className="font-bold text-cyan-600 text-lg">
                  Côte d'Azur
                </strong>
                .
              </p>
            </div>
          </div>

          {/* Séparateur décoratif amélioré */}
          <div className="mt-16 pt-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
              </div>
              <span className="text-base font-bold text-gray-700 bg-white/80 px-6 py-2 rounded-full border border-gray-200 shadow-sm">
                Service disponible 24h/24 - 7j/7
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Section SEO courte - texte visible pour les crawlers avec design moderne */}
      <section className="relative bg-gradient-to-b from-white via-cyan-50/30 to-white py-16 md:py-24 overflow-hidden">
        {/* Motif décoratif en arrière-plan */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          {/* En-tête de section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-gold-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-cyan-700">
                Trajets populaires
              </span>
            </div>
            <h3
              className={`text-5xl md:text-5xl font-bold mb-4 text-cyan-700 ${poppins.className}`}
            >
              Vos trajets en taxi depuis Antibes
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des destinations variées avec un service premium adapté à vos
              besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Card Transferts Aéroport */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-cyan-100 hover:border-cyan-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-transparent rounded-bl-full opacity-50"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Plane className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="font-bold text-2xl text-cyan-700">
                    Transferts Aéroport
                  </h4>
                </div>

                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform">
                    <span className="text-cyan-500 font-bold mt-0.5 text-xl">
                      ✓
                    </span>
                    <span>Antibes ⇄ Aéroport Nice Côte d'Azur (T1/T2)</span>
                  </li>
                  <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform">
                    <span className="text-cyan-500 font-bold mt-0.5 text-xl">
                      ✓
                    </span>
                    <span>Juan-les-Pins ⇄ Aéroport Nice</span>
                  </li>
                  <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform">
                    <span className="text-cyan-500 font-bold mt-0.5 text-xl">
                      ✓
                    </span>
                    <span>
                      Service 24h/24, vols tôt le matin ou tard le soir
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Courses Côte d'Azur */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gold-100 hover:border-gold-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-100 to-transparent rounded-bl-full opacity-50"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Car className="h-7 w-7 text-cyan-700" />
                  </div>
                  <h4 className="font-bold text-2xl text-cyan-700">
                    Courses Côte d'Azur
                  </h4>
                </div>

                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform">
                    <span className="text-cyan-500 font-bold mt-0.5 text-xl">
                      ✓
                    </span>
                    <span>Antibes ⇄ Cannes, Monaco, Nice</span>
                  </li>
                  <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform">
                    <span className="text-cyan-500 font-bold mt-0.5 text-xl">
                      ✓
                    </span>
                    <span>Déplacements professionnels et événements</span>
                  </li>
                  <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform">
                    <span className="text-cyan-500 font-bold mt-0.5 text-xl">
                      ✓
                    </span>
                    <span>Excursions touristiques sur mesure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* ✅ Section contenu SEO riche - mots-clés stratégiques */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Titre principal de la section */}
          <div className="text-center mb-16">
            <h3
              className={`text-4xl md:text-5xl font-bold mb-6 text-cyan-700 ${poppins.className}`}
            >
              Pourquoi choisir Taxi Antibes ?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un service premium de confiance pour tous vos déplacements sur la
              Côte d'Azur
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Colonne 1 - Service de qualité */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-cyan-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
                  🚖
                </div>
                <h4 className="text-3xl font-bold text-cyan-700">
                  Service de Qualité
                </h4>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-cyan-600">Taxi Antibes</strong> est
                votre partenaire de confiance pour tous vos déplacements dans
                les Alpes-Maritimes. Que vous ayez besoin d'un{" "}
                <strong className="text-cyan-600">
                  transfert vers l'aéroport Nice Côte d'Azur
                </strong>
                , d'une course locale à Juan-les-Pins, ou d'un transport vers
                Cannes, Monaco ou Nice, notre{" "}
                <strong className="text-cyan-600">
                  service de taxi professionnel
                </strong>{" "}
                est disponible 24 heures sur 24, 7 jours sur 7.
              </p>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 sm:p-6 rounded-2xl border-2 border-cyan-200">
                <h5 className="font-bold text-xl text-cyan-700 mb-4 flex items-center gap-2">
                  <span className="text-2xl">✓</span> Nos Garanties
                </h5>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold text-xl mt-1">
                      •
                    </span>
                    <span>
                      <strong>Disponibilité 24/7</strong> - Réservation à toute
                      heure
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold text-xl mt-1">
                      •
                    </span>
                    <span>
                      <strong>Tarifs fixes</strong> - Aucune mauvaise surprise
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold text-xl mt-1">
                      •
                    </span>
                    <span>
                      <strong>Chauffeurs pros</strong> - Courtois et
                      expérimentés
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold text-xl mt-1">
                      •
                    </span>
                    <span>
                      <strong>Véhicules premium</strong> - Confort maximal
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Colonne 2 - Transferts aéroport */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gold-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
                  ✈️
                </div>
                <h4 className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                  Transferts Aéroport
                </h4>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Le{" "}
                <strong className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                  transfert aéroport Nice
                </strong>{" "}
                est notre spécialité. Depuis Antibes, Juan-les-Pins ou les
                communes environnantes, nous vous conduisons directement aux
                terminaux 1 et 2 de l'aéroport Nice Côte d'Azur. Suivi de vol en
                temps réel, accueil personnalisé et aide aux bagages inclus.
              </p>

              <div className="bg-gradient-to-br from-gold-50 to-orange-50 p-4 md:p-6 rounded-2xl border-2 border-gold-200 mb-6">
                <h5 className="font-bold text-xl bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent mb-4 flex items-center gap-2">
                  <span className="text-2xl">📍</span> Destinations Populaires
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-gray-700">
                  <div>
                    <p className="font-bold text-cyan-600 mb-2 text-lg">
                      De/Vers Antibes :
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-500">→</span> Aéroport Nice
                        (20 min)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-500">→</span> Cannes (15 min)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-500">→</span> Monaco (30 min)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-500">→</span> Nice centre (25
                        min)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent mb-2 text-lg">
                      Services Locaux :
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-gold-500">→</span> Juan-les-Pins
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gold-500">→</span> Sophia
                        Antipolis
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gold-500">→</span> Vallauris
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gold-500">→</span> Valbonne
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section FAQ avec cards améliorées */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-200">
            <h4
              className={`text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-700 ${poppins.className}`}
            >
              Questions Fréquentes
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h5 className="font-bold text-xl text-cyan-700 mb-3 text-center">
                  Quels sont vos horaires ?
                </h5>
                <p className="text-base text-gray-600 leading-relaxed">
                  Notre service de <strong>taxi Antibes</strong> est disponible
                  <strong className="text-cyan-600"> 24h/24 et 7j/7</strong>, y
                  compris jours fériés et week-ends.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <CreditCard className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h5 className="font-bold text-xl text-cyan-700 mb-3 text-center">
                  Quels modes de paiement ?
                </h5>
                <p className="text-base text-gray-600 leading-relaxed">
                  Nous acceptons les{" "}
                  <strong className="text-cyan-600">
                    espèces, cartes bancaires et virements
                  </strong>
                  . Facture disponible pour les professionnels.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h5 className="font-bold text-xl text-cyan-700 mb-3 text-center">
                  Comment réserver ?
                </h5>
                <p className="text-base text-gray-600 leading-relaxed">
                  Réservation par téléphone, formulaire en ligne, ou sur notre
                  page{" "}
                  <a
                    href="/reservation"
                    className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent font-bold hover:underline"
                  >
                    réservation
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* ✅ Schema JSON-LD pour FAQ (Google rich snippets) - optimisé avec next/script */}
          <Script
            id="faq-schema"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Quels sont vos horaires ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Notre service de taxi à Antibes est disponible 24h/24 et 7j/7, y compris les jours fériés et les week-ends.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quels modes de paiement acceptez-vous ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Nous acceptons les espèces, cartes bancaires et virements. Une facture est disponible pour les professionnels.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Comment réserver un taxi à Antibes ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Vous pouvez réserver en ligne via notre formulaire de réservation, par téléphone au 07 49 77 76 21, ou par WhatsApp, 24h/24.",
                    },
                  },
                ],
              }),
            }}
          />
        </div>
      </section>

      <BookingSection />

      {/* Section CTA supplémentaire */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2
            className={`text-4xl md:text-5xl font-light mb-6 text-balance ${outfit.className}`}
          >
            Besoin d'un{" "}
            <span className="font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
              devis taxi Antibes personnalisé
            </span>{" "}
            ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactez taxi Antibes pour un devis gratuit et personnalisé selon
            vos besoins
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 hover:from-amber-500 hover:via-gold-600 hover:to-orange-500 shadow-lg transition-all duration-300 text-base px-8 py-6 gap-2 rounded-xl"
            >
              <a href="tel:+33749777621" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Appeler nous
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border border-amber-400 text-white hover:bg-amber-400 hover:text-black text-base px-8 py-6 bg-transparent rounded-xl"
            >
              <a href="/services" className="flex items-center gap-2">
                Voir nos services
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Bouton WhatsApp flottant - Mobile uniquement */}
      <a
        href="https://wa.me/33749777621?text=Bonjour,%20je%20souhaite%20réserver%20un%20taxi%20à%20Antibes"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden group"
        aria-label="Contacter Taxi Antibes sur WhatsApp"
      >
        <div className="relative">
          {/* Effet de glow animé */}
          <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 animate-pulse"></div>

          {/* Bouton principal */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-green-500/50">
            <Phone className="h-8 w-8 text-white" />
          </div>
        </div>
      </a>
    </main>
  );
}
