// app/page.jsx (SERVER) — pas de "use client"
import { BookingSection } from "@/components/booking-section";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ServicesSection } from "@/components/services-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Oleo_Script, Poppins } from "next/font/google";
import Image from "next/image";

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

// ✅ Force le rendu statique (SSG) pour de meilleures performances SEO
export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* ✅ HERO SECTION SSR - H1/H2 inclus dans le HTML initial */}
      <section className="relative bg-black overflow-hidden mt-10 sm:mt-0 md:mt-0">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[70vh] md:min-h-[80vh]">
            {/* Colonne texte SSR - visible dans la source HTML */}
            <div className="text-center md:text-left space-y-6">
              {/* Badge moderne */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-600/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-gold-600/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                </span>
                <span className="text-sm font-medium text-white/90">
                  Disponible 24h/24 • 7j/7
                </span>
              </div>

              {/* ✅ H1 unique - SEO principal avec effet gradient moderne */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight text-balance leading-tight">
                <span
                  className={`bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 inline-block bg-clip-text text-transparent ${oleoScript.className}`}
                >
                  Taxi Antibes
                </span>
                <br />
                <span className="font-light text-white">
                  Transferts Aéroport Nice
                </span>
              </h1>

              {/* ✅ H2 descriptif - visible côté serveur avec style moderne */}
              <h2 className="text-xl sm:text-2xl md:text-3xl text-cyan-100/90 mb-3 sm:mb-5 font-light flex items-center gap-3 justify-center md:justify-start">
                <span className="hidden md:inline-block w-12 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-gold-400"></span>
                Tous transports sur la Côte d'Azur
                <span className="hidden md:inline-block w-12 h-[2px] bg-gradient-to-r from-gold-400 via-cyan-400 to-transparent"></span>
              </h2>

              {/* ✅ Texte descriptif SEO - pas de display:none avec icônes */}
              <p className="text-base sm:text-lg text-cyan-700 mb-8 sm:mb-10 max-w-2xl md:max-w-none mx-auto md:mx-0 font-light leading-relaxed bg-white p-6 rounded-2xl border border-cyan-100 shadow-lg">
                Service de{" "}
                <strong className="text-gold-600">
                  taxi officiel à Antibes
                </strong>
                . Transferts aéroport Nice, courses locales, Juan-les-Pins,
                Cannes, Monaco.
                <span className="block mt-3 text-cyan-600">
                  ✓ Réservation 24h/24 • ✓ Chauffeurs pros • ✓ Tarifs
                  transparents
                </span>
              </p>

              <nav
                aria-label="Actions principales"
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-gold-500 to-gold-600 hover:bg-cyan-500 text-white font-semibold text-base px-8 py-6 gap-2 rounded-xl shadow-lg shadow-white/40 hover:shadow-lg hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-105"
                >
                  <a href="/reservation" className="flex items-center gap-2">
                    Réserver maintenant
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-400/50 text-white hover:bg-cyan-400/10 hover:border-cyan-400 backdrop-blur-sm bg-white/5 text-base px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <a href="/tarifs" className="flex items-center gap-2">
                    Voir nos tarifs
                  </a>
                </Button>
              </nav>
            </div>

            {/* Colonne image avec Next/Image optimisé et effets modernes */}
            <div className="relative w-full h-[40vh] md:h-[70vh] lg:h-[70vh] group">
              {/* Effet de glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 via-cyan-500 to-gold-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Container image avec bordure */}
              <div className="relative h-full rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-gold-400/30 transition-all duration-500 shadow-2xl">
                <Image
                  src="/van-aéro copie.jpeg"
                  alt="Taxi Antibes - Véhicule premium pour transferts aéroport Nice"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay gradient subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>

                {/* Badge de qualité flottant */}
                <div className="absolute top-6 right-6 bg-gradient-to-br from-gold-500 to-gold-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm flex items-center gap-2">
                  <span className="text-yellow-200">★</span>
                  Service Premium
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
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
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">
                    ✈️
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
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">
                    🚕
                  </div>
                  <h4 className="font-bold text-2xl text-gold-700">
                    Courses Côte d'Azur
                  </h4>
                </div>

                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform">
                    <span className="text-gold-500 font-bold mt-0.5 text-xl">
                      ✓
                    </span>
                    <span>Antibes ⇄ Cannes, Monaco, Nice</span>
                  </li>
                  <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform">
                    <span className="text-gold-500 font-bold mt-0.5 text-xl">
                      ✓
                    </span>
                    <span>Déplacements professionnels et événements</span>
                  </li>
                  <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform">
                    <span className="text-gold-500 font-bold mt-0.5 text-xl">
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
        <div className="container mx-auto px-6 max-w-7xl">
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

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Colonne 1 - Service de qualité */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-cyan-100">
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

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl border-2 border-cyan-200">
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
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gold-100">
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

              <div className="bg-gradient-to-br from-gold-50 to-orange-50 p-6 rounded-2xl border-2 border-gold-200 mb-6">
                <h5 className="font-bold text-xl bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent mb-4 flex items-center gap-2">
                  <span className="text-2xl">📍</span> Destinations Populaires
                </h5>
                <div className="grid grid-cols-2 gap-4 text-base text-gray-700">
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
          <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-2xl border border-gray-200">
            <h4
              className={`text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-700 ${poppins.className}`}
            >
              Questions Fréquentes
            </h4>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🕐</div>
                <h5 className="font-bold text-xl text-cyan-700 mb-3">
                  Quels sont vos horaires ?
                </h5>
                <p className="text-base text-gray-600 leading-relaxed">
                  Notre service de <strong>taxi Antibes</strong> est disponible
                  <strong className="text-cyan-600"> 24h/24 et 7j/7</strong>, y
                  compris jours fériés et week-ends.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">💳</div>
                <h5 className="font-bold text-xl text-cyan-700 mb-3">
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
                <div className="text-4xl mb-4">📱</div>
                <h5 className="font-bold text-xl text-cyan-700 mb-3">
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
        </div>
      </section>

      <BookingSection />

      {/* Section CTA supplémentaire */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-light mb-6 text-balance"
            style={{ fontFamily: "Marcellus, serif" }}
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
              <a href="tel:+33623360501" className="flex items-center gap-2">
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
    </main>
  );
}
