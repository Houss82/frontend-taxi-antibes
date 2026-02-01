"use client";

import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Award,
  CheckCircle,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Send,
  Star,
} from "lucide-react";
import { Outfit } from "next/font/google";
import { useState } from "react";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const FORMSPREE_URL = "https://formspree.io/f/mdkpzwka";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    details: ["07 49 77 76 21"],
    description: "Appelez-nous 24h/24 pour une réservation immédiate",
    action: "Appeler maintenant",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@taxi-antibes.fr", "taxiantibes2025@gmail.com"],
    description: "Envoyez-nous un email pour toute demande",
    action: "Envoyer un email",
    link: "mailto:contact@taxi-antibes.fr?subject=Demande%20de%20contact%20-%20Taxi%20Antibes",
  },
  {
    icon: MapPin,
    title: "Adresse",
    details: ["Antibes, 06600", "Côte d'Azur, France"],
    description: "Basés à Antibes, nous desservons toute la région",
    action: "Voir sur la carte",
    link: "https://maps.app.goo.gl/gAA4M31jtVcsY3Km9",
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
      // Préparer les données pour Formspree
      const formspreeData = {
        _subject: `Message de contact - ${formData.sujet || "Sans sujet"}`,
        _replyto: formData.email,
        nom: formData.nom,
        email: formData.email,
        telephone: formData.telephone || "Non renseigné",
        sujet: formData.sujet,
        message: formData.message,
      };

      console.log("Envoi du message de contact:", formspreeData);

      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formspreeData),
      });

      const data = await response.json();

      if (response.ok && (data.ok || data.success || data.next)) {
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
      console.error("Erreur:", error);
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
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-light mb-4 text-balance text-cyan-700 ${outfit.className}`}
            >
              Nos{" "}
              <span className="font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                coordonnées taxi Antibes
              </span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Plusieurs façons de contacter{" "}
              <Link href="/" className="underline font-semibold text-cyan-600 hover:text-amber-600">
                taxi Antibes
              </Link>{" "}
              selon vos préférences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-cyan-100 bg-white rounded-2xl text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-700">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent font-medium"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 font-light">
                  {info.description}
                </p>
                <Button
                  size="sm"
                  asChild
                  className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 hover:from-amber-500 hover:via-gold-600 hover:to-orange-500 text-white shadow-lg"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      {...(info.link.startsWith("http") && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className="flex items-center gap-2"
                    >
                      {info.action}
                      {info.link.startsWith("http") && (
                        <ExternalLink className="h-4 w-4" />
                      )}
                    </a>
                  ) : info.title === "Téléphone" ? (
                    <a
                      href={`tel:${info.details[0].replace(/\s/g, "")}`}
                      className="flex items-center gap-2"
                    >
                      {info.action}
                    </a>
                  ) : info.title === "Horaires" ? (
                    <a href="/reservation" className="flex items-center gap-2">
                      {info.action}
                    </a>
                  ) : (
                    <span>{info.action}</span>
                  )}
                </Button>
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
              <h2
                className={`text-4xl md:text-5xl font-light mb-4 text-balance text-cyan-700 ${outfit.className}`}
              >
                Envoyez-nous un{" "}
                <span className="font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                  message taxi Antibes
                </span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Utilisez le formulaire ci-dessous pour toute question ou demande
                taxi Antibes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Formulaire */}
              <Card className="p-8 bg-white border-cyan-100 rounded-2xl shadow-xl">
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
                    className="w-full bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 hover:from-amber-500 hover:via-gold-600 hover:to-orange-500 text-white shadow-lg text-base py-6 rounded-xl gap-2"
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
                <Card className="p-6 bg-white border-cyan-100 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-cyan-700">
                    <Clock className="h-5 w-5 text-cyan-600" />
                    Horaires d'ouverture
                  </h3>
                  <div className="space-y-2">
                    {horaires.map((horaire, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-1"
                      >
                        <span className="font-medium text-gray-700">
                          {horaire.jour}
                        </span>
                        <span className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent font-semibold">
                          {horaire.heures}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Statistiques */}
                <Card className="p-6 bg-white border-cyan-100 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-cyan-700">
                    <Award className="h-5 w-5 text-cyan-600" />
                    Nos chiffres
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                        24/7
                      </div>
                      <div className="text-sm text-gray-600">Disponibilité</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                        15min
                      </div>
                      <div className="text-sm text-gray-600">
                        Temps de réponse
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                        100%
                      </div>
                      <div className="text-sm text-gray-600">
                        Clients satisfaits
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                        4,9/5
                      </div>
                      <div className="text-sm text-gray-600">Note moyenne</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-light mb-4 text-balance text-cyan-700 ${outfit.className}`}
            >
              Ce que disent nos{" "}
              <span className="font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                clients taxi Antibes
              </span>
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
              Découvrez les avis de nos clients satisfaits taxi Antibes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {temoignages.map((temoignage, index) => (
              <Card
                key={index}
                className="p-6 bg-white border-cyan-100 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(temoignage.note)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 font-light italic">
                  "{temoignage.commentaire}"
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-cyan-700">
                    {temoignage.nom}
                  </span>
                  <span className="text-sm text-gray-500">
                    {temoignage.date}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2
            className={`text-4xl md:text-5xl font-light mb-6 text-balance ${outfit.className}`}
          >
            Prêt à{" "}
            <span className="font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
              réserver
            </span>{" "}
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
              className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 hover:from-amber-500 hover:via-gold-600 hover:to-orange-500 text-white shadow-lg text-base px-8 py-6 gap-2 rounded-xl"
            >
              <a href="tel:+33749777621" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Appeler maintenant
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-amber-400 text-white hover:bg-amber-400 hover:text-black text-base px-8 py-6 bg-transparent rounded-xl"
            >
              Réserver en ligne
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
