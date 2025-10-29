"use client";

import { useState } from "react";
import QuickBooking from "./quick-booking";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://backend-taxi-antibes.vercel.app";
const FORMSPREE_URL = "https://formspree.io/f/mdkpzwka";

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

      // Préparer les données pour Formspree (email)
      const formspreeData = {
        _subject: `Nouvelle réservation - ${formData.nom}`,
        nom: formData.nom,
        telephone: formData.telephone,
        email: formData.email || "Non renseigné",
        adresseDepart: formData.depart,
        adresseArrivee: formData.destination,
        date: date,
        heure: heure,
        nombrePassagers: formData.passagers,
        nombreBagages: "0",
        commentaires: formData.commentaires || "Aucun commentaire",
      };

      // Envoyer aux deux services en parallèle
      const [formspreeResponse, mongoResponse] = await Promise.allSettled([
        // Envoi à Formspree (email)
        fetch(FORMSPREE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formspreeData),
        }),
        // Envoi à MongoDB (backend) - CODE EXISTANT CONSERVÉ
        fetch(`${API_URL}/users/reservation`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reservationData),
        }),
      ]);

      // Traiter la réponse MongoDB (code existant conservé)
      let mongoData = null;
      if (mongoResponse.status === "fulfilled") {
        try {
          mongoData = await mongoResponse.value.json();
        } catch (e) {
          console.error("Erreur parsing MongoDB:", e);
        }
      } else {
        console.error("Erreur MongoDB:", mongoResponse.reason);
      }

      // Traiter la réponse Formspree
      let formspreeResult = null;
      if (formspreeResponse.status === "fulfilled") {
        try {
          formspreeResult = await formspreeResponse.value.json();
        } catch (e) {
          console.error("Erreur parsing Formspree:", e);
        }
      }

      console.log("Réponse MongoDB:", mongoData);
      console.log("Réponse Formspree:", formspreeResult);

      // La validation reste sur MongoDB uniquement (code existant conservé)
      if (mongoData?.result) {
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
              <div className="text-3xl font-semibold mb-2 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm text-cyan-700 font-light">
                Service disponible
              </div>
            </div>
            <div>
              <div className="text-3xl font-semibold mb-2 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                15 min
              </div>
              <div className="text-sm text-cyan-700 font-light">
                Temps de réponse moyen
              </div>
            </div>
            <div>
              <div className="text-3xl font-semibold mb-2 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-sm text-cyan-700 font-light">
                Clients satisfaits
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
