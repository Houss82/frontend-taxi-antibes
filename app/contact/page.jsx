"use client";

import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Award,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  Star,
} from "lucide-react";
import { useState } from "react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://backend-taxi-antibes.vercel.app";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    details: ["+33 6 23 36 05 01"],
    description: "Appelez-nous 24h/24 pour une réservation immédiate",
    action: "Appeler maintenant",
    link: "tel:+33623360501",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@taxi-antibes.fr", "reservation@taxi-antibes.fr"],
    description: "Envoyez-nous un email pour toute demande",
    action: "Envoyer un email",
  },
  {
    icon: MapPin,
    title: "Adresse",
    details: ["Antibes, 06600", "Côte d'Azur, France"],
    description: "Basés à Antibes, nous desservons toute la région",
    action: "Voir sur la carte",
  },
  {
    icon: Clock,
    title: "Horaires",
    details: ["24h/24 - 7j/7", "365 jours par an"],
    description: "Service disponible en permanence",
    action: "Réserver maintenant",
  },
];

const horaires = [
  { jour: "Lundi", heures: "24h/24" },
  { jour: "Mardi", heures: "24h/24" },
  { jour: "Mercredi", heures: "24h/24" },
  { jour: "Jeudi", heures: "24h/24" },
  { jour: "Vendredi", heures: "24h/24" },
  { jour: "Samedi", heures: "24h/24" },
  { jour: "Dimanche", heures: "24h/24" },
];

const temoignages = [
  {
    nom: "Marie L.",
    note: 5,
    commentaire:
      "Service impeccable ! Chauffeur ponctuel et véhicule très propre. Je recommande vivement.",
    date: "Il y a 2 jours",
  },
  {
    nom: "Jean-Pierre M.",
    note: 5,
    commentaire:
      "Excellent service pour l'aéroport. Suivi de vol en temps réel, très professionnel.",
    date: "Il y a 1 semaine",
  },
  {
    nom: "Sophie D.",
    note: 5,
    commentaire:
      "Véhicule de luxe magnifique, chauffeur en uniforme. Service digne d'un palace !",
    date: "Il y a 2 semaines",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch(`${API_URL}/users/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.result) {
        setMessage({
          type: "success",
          text: "Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.",
        });
        setFormData({
          nom: "",
          email: "",
          telephone: "",
          sujet: "",
          message: "",
        });
      } else {
        setMessage({
          type: "error",
          text: "Erreur lors de l'envoi. Veuillez réessayer ou nous appeler directement.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Erreur de connexion. Veuillez vérifier votre connexion internet ou nous appeler.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout
      title="Contact"
      subtitle="Nous sommes à votre écoute 24h/24 pour tous vos besoins de transport"
      backgroundImage="/contact.jpg"
    >
      {/* Informations de Contact */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-balance font-serif">
              Nos{" "}
              <span className="font-semibold">coordonnées taxi Antibes</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Plusieurs façons de contacter taxi Antibes selon vos préférences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border-border bg-card rounded-xl text-center group"
              >
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <div key={idx} className="text-primary font-medium">
                      {detail}
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 font-light">
                  {info.description}
                </p>
                {info.link ? (
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-secondary"
                  >
                    <a href={info.link}>{info.action}</a>
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-secondary"
                  >
                    {info.action}
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de Contact */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light mb-4 text-balance font-serif">
                Envoyez-nous un{" "}
                <span className="font-semibold">message taxi Antibes</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Utilisez le formulaire ci-dessous pour toute question ou demande
                taxi Antibes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Formulaire */}
              <Card className="p-8 bg-card border-border rounded-xl">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Nom complet *
                      </label>
                      <Input
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className="bg-background border-border"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Téléphone</label>
                      <Input
                        name="telephone"
                        type="tel"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="06 XX XX XX XX"
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="bg-background border-border"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Sujet *</label>
                    <select
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                      required
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="reservation">Réservation</option>
                      <option value="devis">Demande de devis</option>
                      <option value="information">Information générale</option>
                      <option value="reclamation">Réclamation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      rows={5}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground resize-none"
                      required
                    />
                  </div>

                  {message.text && (
                    <div
                      className={`p-4 rounded-lg flex items-center gap-3 ${
                        message.type === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      <CheckCircle className="h-5 w-5" />
                      {message.text}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground hover:bg-secondary text-base py-6 rounded-xl gap-2"
                  >
                    {loading ? (
                      <>
                        <Clock className="h-5 w-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </Card>

              {/* Informations supplémentaires */}
              <div className="space-y-6">
                {/* Horaires */}
                <Card className="p-6 bg-card border-border rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Horaires d'ouverture
                  </h3>
                  <div className="space-y-2">
                    {horaires.map((horaire, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-1"
                      >
                        <span className="font-medium">{horaire.jour}</span>
                        <span className="text-primary">{horaire.heures}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Statistiques */}
                <Card className="p-6 bg-card border-border rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Nos chiffres
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        24/7
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Disponibilité
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        15min
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Temps de réponse
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        100%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Clients satisfaits
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">5★</div>
                      <div className="text-sm text-muted-foreground">
                        Note moyenne
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-balance font-serif">
              Ce que disent nos{" "}
              <span className="font-semibold">clients taxi Antibes</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Découvrez les avis de nos clients satisfaits taxi Antibes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {temoignages.map((temoignage, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border rounded-xl"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(temoignage.note)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 font-light italic">
                  "{temoignage.commentaire}"
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{temoignage.nom}</span>
                  <span className="text-sm text-muted-foreground">
                    {temoignage.date}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance font-serif">
            Prêt à <span className="font-semibold">réserver</span> ?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactez-nous dès maintenant pour une réservation ou un devis
            personnalisé
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
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black text-base px-8 py-6 bg-transparent rounded-xl"
            >
              <a
                href="https://maps.app.goo.gl/ZvawMHedMtxisBiQ7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MapPin className="h-5 w-5" />
                Voir sur Google
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
