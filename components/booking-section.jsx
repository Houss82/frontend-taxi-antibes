"use client";

import { useState } from "react";
import QuickBooking from "./quick-booking";

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
        <QuickBooking />
        <div className="max-w-4xl mx-auto">
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
