import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building,
  Clock,
  Coffee,
  MapPin,
  Newspaper,
  Phone,
  Plane,
  Shield,
  Star,
  Users,
  Wifi,
} from "lucide-react";
import { metadata } from "./metadata";

export { metadata };

const services = [
  {
    icon: Plane,
    title: "Transferts Aéroport Nice",
    description:
      "Service taxi Antibes porte-à-porte depuis et vers l'aéroport de Nice. Suivi de vol en temps réel, attente gratuite en cas de retard.",
    features: [
      "Suivi de vol",
      "Attente gratuite",
      "Bagages inclus",
      "WiFi gratuit",
    ],
    price: "À partir de 45€",
  },
  {
    icon: MapPin,
    title: "Courses Locales",
    description:
      "Déplacements taxi Antibes dans Antibes, Juan-les-Pins, Cannes et toute la Côte d'Azur. Service rapide et fiable.",
    features: [
      "Zone étendue",
      "Réservation instantanée",
      "Chauffeurs locaux",
      "Tarifs transparents",
    ],
    price: "À partir de 15€",
  },
  {
    icon: Building,
    title: "Transferts d'Entreprise",
    description:
      "Service taxi Antibes professionnel pour vos déplacements d'affaires. Véhicules haut de gamme et chauffeurs en uniforme.",
    features: [
      "Véhicules premium",
      "Chauffeurs en uniforme",
      "Facturation simplifiée",
      "Service 24/7",
    ],
    price: "Sur devis",
  },
  {
    icon: Users,
    title: "Événements & Mariages",
    description:
      "Transport de luxe taxi Antibes pour vos événements spéciaux. Flotte de véhicules premium pour tous vos invités.",
    features: [
      "Véhicules de luxe",
      "Décoration florale",
      "Champagne offert",
      "Service personnalisé",
    ],
    price: "Sur devis",
  },
];

const additionalServices = [
  {
    icon: Clock,
    title: "Disponibilité 24/7",
    description:
      "À votre service jour et nuit, 7 jours sur 7, 365 jours par an.",
  },
  {
    icon: Shield,
    title: "Sécurité Garantie",
    description:
      "Chauffeurs professionnels expérimentés et véhicules régulièrement entretenus.",
  },
  {
    icon: Star,
    title: "Service Premium",
    description:
      "Eau fraîche, WiFi, chargeurs, journaux. Votre confort est notre priorité.",
  },
  {
    icon: Wifi,
    title: "WiFi Gratuit",
    description:
      "Connexion internet gratuite dans tous nos véhicules pour rester connecté.",
  },
  {
    icon: Coffee,
    title: "Boissons Gratuites",
    description: "Eau, café et rafraîchissements offerts pour votre confort.",
  },
  {
    icon: Newspaper,
    title: "Presse Quotidienne",
    description: "Journaux et magazines disponibles pour votre information.",
  },
];

export default function ServicesPage() {
  return (
    <PageLayout
      title="Nos Services"
      subtitle="Transferts aéroport Nice, courses locales et service premium sur la Côte d'Azur"
      backgroundImage="/services.webp"
    >
      {/* Services Principaux */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-light mb-4 text-balance text-black"
              style={{ fontFamily: "Marcellus, serif" }}
            >
              Nos{" "}
              <span className="font-semibold text-gold-600">
                services de taxi Antibes
              </span>
            </h2>
            <p className="text-black/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de services de transport premium
              taxi Antibes à Antibes et sur toute la Côte d'Azur
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 border-gold-600/30 bg-black rounded-xl group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-black/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gold-600">
                    <service.icon className="h-8 w-8 text-gold-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed mb-4 font-light">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="text-lg font-semibold text-gold-600">
                      {service.price}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Additionnels */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-balance font-serif text-black">
              Pourquoi choisir{" "}
              <span className="font-semibold text-gold-600">taxi Antibes</span>
            </h2>
            <p className="text-black/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Des services supplémentaires taxi Antibes qui font la différence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow border-gold-600/30 bg-black rounded-xl text-center"
              >
                <div className="w-12 h-12 bg-black/80 rounded-lg flex items-center justify-center mx-auto mb-4 border border-gold-600">
                  <service.icon className="h-6 w-6 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-white/80 leading-relaxed font-light">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance font-serif">
            Prêt à <span className="font-semibold text-gold-600">réserver</span>{" "}
            ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactez-nous dès maintenant pour une réservation ou un devis
            personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="gold"
              className="text-base px-8 py-6 gap-2 rounded-xl"
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
              className="border border-gold-600 text-white hover:bg-gold-600 hover:text-black text-base px-8 py-6 bg-transparent rounded-xl"
            >
              <a href="/tarifs">Voir les tarifs</a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
