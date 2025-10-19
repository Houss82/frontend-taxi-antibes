import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Bus,
  Calculator,
  Car as CarIcon,
  Crown,
  MapPin,
  Phone,
  Plane,
  Car as PremiumCarIcon,
} from "lucide-react";
import { metadata } from "./metadata";

export { metadata };

const basePrices = {
  destinations: [
    {
      name: "Antibes",
      day: "76 €",
      night: "",
      fixed: true,
    },
    {
      name: "Auron",
      day: "230 - 250 €",
      night: "290 - 310 €",
      fixed: false,
    },
    {
      name: "Beaulieu-sur-Mer",
      day: "55 - 60 €",
      night: "65 - 90 €",
      fixed: false,
    },
    {
      name: "Cannes",
      day: "89 €",
      night: "",
      fixed: true,
    },
    {
      name: "Fréjus",
      day: "180 - 200 €",
      night: "200 - 220 €",
      fixed: false,
    },
    {
      name: "Grasse",
      day: "92 - 100 €",
      night: "120 - 130 €",
      fixed: false,
    },
    {
      name: "Juan-les-Pins",
      day: "60 - 70 €",
      night: "70 - 80 €",
      fixed: false,
    },
    {
      name: "Menton",
      day: "100 - 110 €",
      night: "120 - 140 €",
      fixed: false,
    },
    {
      name: "Monaco",
      day: "99 €",
      night: "",
      fixed: true,
    },
    {
      name: "Mougins",
      day: "75 - 82 €",
      night: "90 - 95 €",
      fixed: false,
    },
    {
      name: "Nice Ouest",
      day: "12 - 18 €",
      night: "17 - 25 €",
      fixed: false,
    },
    {
      name: "Nice Centre",
      day: "36 €",
      night: "",
      fixed: true,
    },
    {
      name: "Nice Est",
      day: "40 - 44 €",
      night: "45 - 51 €",
      fixed: false,
    },
    {
      name: "Opio",
      day: "75 - 82 €",
      night: "90 - 95 €",
      fixed: false,
    },
    {
      name: "Sanremo",
      day: "190 - 210 €",
      night: "220 - 230 €",
      fixed: false,
    },
    {
      name: "Sophia Antipolis",
      day: "60 - 65 €",
      night: "70 - 80 €",
      fixed: false,
    },
    {
      name: "Cap Ferrat",
      day: "60 - 65 €",
      night: "70 - 78 €",
      fixed: false,
    },
    {
      name: "Saint-Paul-de-Vence",
      day: "55 - 60 €",
      night: "65 - 70 €",
      fixed: false,
    },
    {
      name: "Saint-Tropez",
      day: "280 - 310 €",
      night: "340 - 360 €",
      fixed: false,
    },
    {
      name: "Valbonne",
      day: "75 - 80 €",
      night: "85 - 90 €",
      fixed: false,
    },
    {
      name: "Villefranche-sur-Mer",
      day: "55 - 60 €",
      night: "65 - 90 €",
      fixed: false,
    },
  ],
  supplements: [
    { name: "Tarif minimum", price: "8,00 €" },
    { name: "Bagage supplémentaire", price: "2,00 €" },
    { name: "5ème personne", price: "4,00 €" },
    { name: "Supplément neige", price: "10%" },
    {
      name: "Péage autoroute",
      price: "Uniquement avec le client",
    },
  ],
  perKm: [
    {
      type: "Retour à vide",
      day: "2,58 €/km",
      night: "3,30 €/km",
    },
    {
      type: "Retour chargé",
      rateA: "1,29 €/km",
      rateB: "1,65 €/km",
    },
  ],
};

// Calculer les prix Classe V (+15%)
const calculateClassVPrices = (price) => {
  if (!price || price === "") return "";
  if (price.includes("-")) {
    const [min, max] = price.split(" - ");
    const minNum = parseFloat(min.replace("€", "").trim());
    const maxNum = parseFloat(max.replace("€", "").trim());
    const newMin = Math.round(minNum * 1.15);
    const newMax = Math.round(maxNum * 1.15);
    return `${newMin} - ${newMax} €`;
  } else {
    const num = parseFloat(price.replace("€", "").trim());
    const newPrice = Math.round(num * 1.15);
    return `${newPrice} €`;
  }
};

const tarifs = [
  {
    title: "Berline Standard (Classe GLC/E)",
    icon: Plane,
    description: "Véhicules berline confortables pour tous vos déplacements",
    destinations: basePrices.destinations,
    supplements: basePrices.supplements,
    perKm: basePrices.perKm,
    image: "/imageGLC copie.png",
  },
  {
    title: "Van Premium (Classe V)",
    icon: MapPin,
    description: "Véhicules haut de gamme avec supplément de 15%",
    destinations: basePrices.destinations.map((dest) => ({
      ...dest,
      day: calculateClassVPrices(dest.day),
      night: calculateClassVPrices(dest.night),
    })),
    supplements: basePrices.supplements,
    perKm: basePrices.perKm,
    image: "/image-van copie.png",
  },
];

const vehicules = [
  {
    name: "Berline Standard",
    capacity: "1-4 passagers",
    price: "Tarif de base",
    features: ["Climatisation", "WiFi", "Eau fraîche", "Chargement USB"],
    icon: CarIcon,
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Berline Premium",
    capacity: "1-4 passagers",
    price: "+20%",
    features: [
      "Véhicule haut de gamme",
      "Cuir",
      "Espace bagages",
      "Confort supérieur",
    ],
    icon: PremiumCarIcon,
    color: "bg-silver-100 text-silver-600",
  },
  {
    name: "Van 8 places",
    capacity: "5-8 passagers",
    price: "+50%",
    features: [
      "Espace généreux",
      "Bagages nombreux",
      "Idéal familles",
      "Accessible PMR",
    ],
    icon: Bus,
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Voiture de Luxe",
    capacity: "1-4 passagers",
    price: "+100%",
    features: [
      "Marque premium",
      "Chauffeur en uniforme",
      "Eau fraîche",
      "Service VIP",
    ],
    icon: Crown,
    color: "bg-gold-100 text-gold-600",
  },
];

const suppléments = [
  { service: "Attente supplémentaire", price: "15€/30 min" },
  { service: "Supplément nuit (22h-6h)", price: "+20%" },
  { service: "Supplément dimanche", price: "+15%" },
  { service: "Supplément jour férié", price: "+25%" },
  { service: "Supplément bagages (5+)", price: "5€/bagage" },
  { service: "Supplément animal", price: "10€" },
];

export default function TarifsPage() {
  return (
    <PageLayout
      title="Nos Tarifs"
      subtitle="Tarifs transparents et compétitifs pour tous vos déplacements sur la Côte d'Azur"
      backgroundImage="/tarif.jpg"
    >
      {/* Tarifs Principaux */}
      <section className="py-24  md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-balance font-serif">
              Nos <span className="font-semibold">tarifs taxi Antibes</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Des tarifs transparents et compétitifs taxi Antibes pour tous vos
              déplacements vers et depuis l'aéroport de Nice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tarifs.map((tarif, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 border-border bg-card rounded-xl"
              >
                <div className="text-center mb-6">
                  {tarif.image ? (
                    <div className="flex items-center justify-center mx-auto mb-4">
                      <img
                        src={tarif.image}
                        alt={tarif.title}
                        className="h-40 w-40 object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <tarif.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold mb-2">{tarif.title}</h3>
                  <p className="text-muted-foreground font-light">
                    {tarif.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {tarif.destinations.map((dest, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-2 border-b border-border/50"
                    >
                      <div>
                        <div className="font-medium">{dest.name}</div>
                        {dest.fixed && (
                          <div className="text-xs text-muted-foreground">
                            Tarif fixe
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        {dest.day && (
                          <div className="font-semibold text-primary text-sm">
                            Jour: {dest.day}
                          </div>
                        )}
                        {dest.night && (
                          <div className="font-semibold text-primary text-sm">
                            Nuit: {dest.night}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold mb-3">Suppléments :</h4>
                  {tarif.supplements.map((supp, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center text-sm text-muted-foreground"
                    >
                      <span>{supp.name}</span>
                      <span className="font-semibold text-primary">
                        {supp.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="font-semibold mb-3">Tarifs au km :</h4>
                  {tarif.perKm.map((km, idx) => (
                    <div
                      key={idx}
                      className="text-sm text-muted-foreground mb-2"
                    >
                      <div className="flex justify-between">
                        <span>{km.type}</span>
                        <div className="text-right">
                          {km.day && <div>{km.day}</div>}
                          {km.night && <div>{km.night}</div>}
                          {km.rateA && <div>{km.rateA}</div>}
                          {km.rateB && <div>{km.rateB}</div>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types de Véhicules */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-balance font-serif">
              Nos <span className="font-semibold">véhicules taxi Antibes</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Une flotte variée taxi Antibes pour s'adapter à tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicules.map((vehicule, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border-border bg-card rounded-xl text-center group"
              >
                <div
                  className={`w-16 h-16 ${vehicule.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <vehicule.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{vehicule.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {vehicule.capacity}
                </p>
                <div className="text-lg font-semibold text-primary mb-4">
                  {vehicule.price}
                </div>
                <div className="space-y-2">
                  {vehicule.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground">
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Suppléments */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-4 text-balance font-serif">
                <span className="font-semibold">Suppléments</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Tarifs des services supplémentaires
              </p>
            </div>

            <Card className="p-8 bg-card border-border rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {suppléments.map((supplément, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-border/50"
                  >
                    <span className="font-medium">{supplément.service}</span>
                    <span className="text-primary font-semibold">
                      {supplément.price}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="mt-8 p-6 bg-muted/50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Devis Gratuit</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Pour un devis personnalisé ou des trajets spécifiques,
                contactez-nous directement.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-secondary">
                <Phone className="h-4 w-4 mr-2" />
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance font-serif">
            Réservez <span className="font-semibold">maintenant</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactez-nous pour une réservation ou un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-secondary hover:text-white text-base px-8 py-6 gap-2 rounded-xl"
            >
              <a href="tel:+33623360501" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Appeler nous
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black text-base px-8 py-6 bg-transparent rounded-xl"
            >
              Réserver en ligne
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
