"use client";

import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Phone, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function TaxiAntibesNumeroPage() {
  return (
    <PageLayout
      title="Taxi Antibes Numéro – 07 49 77 76 21"
      subtitle="Appelez immédiatement votre taxi à Antibes"
      backgroundImage="/tax-antibes-numero.jpeg"
    >
      {/* Bloc SEO principal - Numéro */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-cyan-600 via-cyan-700 to-cyan-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Numéro Taxi Antibes – Réservation immédiate
            </h2>
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <a 
                href="tel:+33749777621" 
                className="text-amber-400 hover:text-amber-500 transition-colors duration-200 inline-block"
              >
                📞 07 49 77 76 21
              </a>
            </div>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Appelez maintenant votre taxi à Antibes.
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium">Réponse immédiate – 24h/24 – 7j/7</span>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 hover:from-amber-500 hover:via-gold-600 hover:to-orange-500 text-white shadow-xl text-xl px-10 py-7 gap-3 rounded-xl"
            >
              <a href="tel:+33749777621" className="flex items-center gap-3 justify-center">
                <Phone className="h-6 w-6" />
                Appeler maintenant
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contenu SEO - Numéro de taxi */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className={`text-3xl md:text-4xl font-light mb-6 text-cyan-700 ${outfit.className}`}>
                Numéro de taxi à Antibes : 07 49 77 76 21
              </h2>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
                Vous cherchez le <strong>numéro de taxi à Antibes</strong> ? Appelez directement le{" "}
                <a href="tel:+33749777621" className="font-bold text-cyan-600 hover:text-amber-600 underline text-2xl">
                  07 49 77 76 21
                </a>{" "}
                pour une réservation immédiate. Notre <strong>taxi à Antibes</strong> est disponible{" "}
                <strong>24h/24 et 7j/7</strong>, avec réponse immédiate et prise en charge rapide dans toute la région.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Le <strong>numéro taxi Antibes</strong> que vous pouvez appeler est le{" "}
                <strong>07 49 77 76 21</strong>. Ce numéro vous permet de{" "}
                <strong>contacter directement votre taxi à Antibes</strong> pour une réservation immédiate ou à l'avance. 
                Que vous ayez besoin d'un <strong>téléphone taxi Antibes</strong> pour une course locale, un transfert aéroport Nice, 
                ou un déplacement vers Monaco, Cannes ou toute autre destination de la Côte d'Azur, notre équipe vous répond en quelques secondes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Appeler taxi Antibes</strong> au <strong>07 49 77 76 21</strong> vous garantit un service professionnel, 
                ponctuel et fiable. Nos chauffeurs locaux connaissent parfaitement Antibes, Juan-les-Pins et toute la région, 
                vous assurant le meilleur itinéraire pour votre trajet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages d'appeler le numéro */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-light mb-12 text-center text-cyan-700 ${outfit.className}`}>
              Pourquoi appeler le numéro de taxi à Antibes ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white border-cyan-100 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-700">
                  Réponse immédiate
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pas d'attente, pas de répondeur. Notre équipe vous répond directement au <strong>07 49 77 76 21</strong>.
                </p>
              </Card>
              <Card className="p-6 bg-white border-cyan-100 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-700">
                  Disponible 24h/24
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Le <strong>numéro taxi Antibes</strong> est joignable en permanence, même la nuit, les week-ends et jours fériés.
                </p>
              </Card>
              <Card className="p-6 bg-white border-cyan-100 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-700">
                  Réservation simple
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Un simple appel au <strong>téléphone taxi Antibes</strong> suffit pour réserver votre course immédiatement ou à l'avance.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Numéro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-light mb-8 text-center text-cyan-700 ${outfit.className}`}>
              Questions fréquentes – Numéro taxi Antibes
            </h2>
            <div className="space-y-6">
              <Card className="p-6 bg-white border-cyan-100 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-cyan-700 flex items-center gap-2">
                  <span className="text-2xl">❓</span>
                  Quel est le numéro de taxi à Antibes ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Le <strong>numéro de taxi à Antibes</strong> est le{" "}
                  <a href="tel:+33749777621" className="font-bold text-cyan-600 hover:text-amber-600 underline text-xl">
                    07 49 77 76 21
                  </a>
                  . Appelez ce numéro pour une réservation immédiate, 24h/24 et 7j/7.
                </p>
              </Card>
              <Card className="p-6 bg-white border-cyan-100 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-cyan-700 flex items-center gap-2">
                  <span className="text-2xl">❓</span>
                  Peut-on appeler le numéro taxi Antibes la nuit ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oui, le <strong>téléphone taxi Antibes</strong> au{" "}
                  <a href="tel:+33749777621" className="font-bold text-cyan-600 hover:text-amber-600 underline">
                    07 49 77 76 21
                  </a>{" "}
                  est joignable <strong>24h/24 et 7j/7</strong>, y compris la nuit, les week-ends et les jours fériés.
                </p>
              </Card>
              <Card className="p-6 bg-white border-cyan-100 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-cyan-700 flex items-center gap-2">
                  <span className="text-2xl">❓</span>
                  Comment réserver avec le numéro taxi Antibes ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pour réserver, <strong>appelez taxi Antibes</strong> au{" "}
                  <a href="tel:+33749777621" className="font-bold text-cyan-600 hover:text-amber-600 underline">
                    07 49 77 76 21
                  </a>
                  . Indiquez votre point de départ, destination, date et heure. Notre équipe vous confirme immédiatement votre réservation.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lien vers contact */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 bg-white border-cyan-100 rounded-2xl shadow-xl">
              <h2 className={`text-2xl md:text-3xl font-light mb-4 text-cyan-700 ${outfit.className}`}>
                Besoin d'autres moyens de contact ?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                En plus du <strong>numéro de taxi à Antibes</strong>, vous pouvez également nous contacter par email ou via notre formulaire de contact.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white text-lg px-8 py-6 gap-2 rounded-xl"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Voir toutes les coordonnées
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-3xl md:text-4xl font-light mb-6 text-balance ${outfit.className}`}>
            Appelez maintenant le <span className="font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">numéro taxi Antibes</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            <strong>07 49 77 76 21</strong> – Réponse immédiate, disponible 24h/24
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 hover:from-amber-500 hover:via-gold-600 hover:to-orange-500 text-white shadow-lg text-xl px-10 py-7 gap-3 rounded-xl"
          >
            <a href="tel:+33749777621" className="flex items-center gap-3">
              <Phone className="h-6 w-6" />
              Appeler le 07 49 77 76 21
            </a>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
