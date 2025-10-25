import { Card } from "@/components/ui/card";
import { Clock, MapPin, Shield, Star } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Taxi pour l'aéroport de Nice",
    description:
      "Transferts aéroport Nice depuis Antibes, Juan-les-Pins, Cannes. Service porte-à-porte avec suivi de vol en temps réel.",
  },
  {
    icon: Clock,
    title: "Disponibilité 24/7",
    description:
      "À votre service jour et nuit, 7 jours sur 7. Réservation instantanée ou planifiée.",
  },
  {
    icon: Shield,
    title: "Sécurité garantie",
    description:
      "Chauffeurs professionnels expérimentés et véhicules premium régulièrement entretenus.",
  },
  {
    icon: Star,
    title: "Service premium",
    description:
      "Eau fraîche, WiFi, chargeurs, journaux. Votre confort est notre priorité.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="pt-8 pb-24 md:pt-12 md:pb-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-balance text-black">
            Nos{" "}
            <span className="font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
              services de taxi Antibes
            </span>
          </h2>
          <p className="text-black/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Transferts aéroport Nice, courses locales taxi Antibes à Antibes et
            service premium taxi Antibes sur toute la Côte d'Azur
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-shadow border-gold-600/30 bg-black rounded-3xl"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-black/80 rounded-3xl flex items-center justify-center border border-gold-600">
                  <service.icon className="h-6 w-6 text-gold-600" />
                </div>
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
  );
}
