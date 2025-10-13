"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users } from "lucide-react";
import { useState } from "react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://backend-taxi-antibes.vercel.app";

export function BookingSection() {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    depart: "",
    destination: "",
    dateHeure: "",
    passagers: "1",
    commentaires: "",
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
      // Séparer date et heure
      const dateTime = new Date(formData.dateHeure);
      const date = dateTime.toISOString().split("T")[0];
      const heure = dateTime.toTimeString().split(" ")[0].substring(0, 5);

      const reservationData = {
        nom: formData.nom,
        telephone: formData.telephone,
        email: formData.email,
        adresseDepart: formData.depart,
        adresseArrivee: formData.destination,
        date: date,
        heure: heure,
        nombrePassagers: formData.passagers,
        nombreBagages: "0",
        commentaires: formData.commentaires,
      };

      const response = await fetch(`${API_URL}/users/reservation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      const data = await response.json();

      if (data.result) {
        setMessage({
          type: "success",
          text: "Réservation envoyée avec succès ! Nous vous contacterons rapidement.",
        });
        setFormData({
          nom: "",
          telephone: "",
          email: "",
          depart: "",
          destination: "",
          dateHeure: "",
          passagers: "1",
          commentaires: "",
        });
      } else {
        setMessage({
          type: "error",
          text: "Erreur lors de l'envoi. Veuillez réessayer.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Erreur de connexion. Veuillez vérifier votre connexion internet.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reservation" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-balance font-serif">
              Réservez votre <span className="font-semibold">course</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Réservation simple et rapide en quelques clics
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card border-border rounded-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
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
                  <label className="text-sm font-medium flex items-center gap-2">
                    Téléphone *
                  </label>
                  <Input
                    name="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="06 XX XX XX XX"
                    className="bg-background border-border"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  Email *
                </label>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-secondary" />
                    Point de départ *
                  </label>
                  <Input
                    name="depart"
                    value={formData.depart}
                    onChange={handleChange}
                    placeholder="Adresse de départ"
                    className="bg-background border-border"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-secondary" />
                    Destination *
                  </label>
                  <Input
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Adresse d'arrivée"
                    className="bg-background border-border"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-secondary" />
                    Date et heure *
                  </label>
                  <Input
                    name="dateHeure"
                    type="datetime-local"
                    value={formData.dateHeure}
                    onChange={handleChange}
                    className="bg-background border-border"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4 text-secondary" />
                    Nombre de passagers *
                  </label>
                  <Input
                    name="passagers"
                    type="number"
                    placeholder="1-8"
                    min="1"
                    max="8"
                    value={formData.passagers}
                    onChange={handleChange}
                    className="bg-background border-border"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Informations complémentaires
                </label>
                <Input
                  name="commentaires"
                  value={formData.commentaires}
                  onChange={handleChange}
                  placeholder="Numéro de vol, bagages spéciaux, etc."
                  className="bg-background border-border"
                />
              </div>

              {message.text && (
                <div
                  className={`p-4 rounded-lg ${
                    message.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground hover:bg-secondary text-base py-6 rounded-xl"
              >
                {loading ? "Envoi en cours..." : "Obtenir un devis gratuit"}
              </Button>
            </form>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-semibold mb-2">24/7</div>
              <div className="text-sm text-muted-foreground font-light">
                Service disponible
              </div>
            </div>
            <div>
              <div className="text-3xl font-semibold mb-2">15 min</div>
              <div className="text-sm text-muted-foreground font-light">
                Temps de réponse moyen
              </div>
            </div>
            <div>
              <div className="text-3xl font-semibold mb-2">100%</div>
              <div className="text-sm text-muted-foreground font-light">
                Clients satisfaits
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
