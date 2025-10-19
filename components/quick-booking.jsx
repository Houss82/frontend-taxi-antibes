"use client";

import {
  Car,
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://backend-taxi-antibes.vercel.app";

export default function QuickBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    adresseDepart: "",
    adresseArrivee: "",
    date: "",
    heure: "",
    typeVehicule: "glc",
    nombrePassagers: "1",
    nombreBagages: "0",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    try {
      const reservationData = {
        nom: formData.nom,
        indicatifPays: "+33",
        telephone: formData.telephone,
        email: formData.email,
        adresseDepart: formData.adresseDepart,
        adresseArrivee: formData.adresseArrivee,
        date: formData.date,
        heure: formData.heure,
        nombrePassagers: formData.nombrePassagers,
        nombreBagages: formData.nombreBagages,
        commentaires: `Réservation rapide - Véhicule: ${
          formData.typeVehicule === "glc" ? "Mercedes GLC" : "Van Premium"
        }`,
      };

      console.log("Envoi des données:", reservationData);

      const response = await fetch(`${API_URL}/users/reservation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      const data = await response.json();
      console.log("Réponse du serveur:", data);

      if (data.result) {
        setIsSubmitted(true);
        setFormData({
          nom: "",
          telephone: "",
          email: "",
          adresseDepart: "",
          adresseArrivee: "",
          date: "",
          heure: "",
          typeVehicule: "glc",
          nombrePassagers: "1",
          nombreBagages: "0",
        });
      } else {
        const errorMessage =
          data.error || "Erreur lors de l'envoi de la réservation";
        alert(`Erreur: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Erreur:", error);
      const errorMessage =
        error.message || "Erreur lors de l'envoi de la réservation";
      alert(`Erreur: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="reservation"
      className="py-16 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-balance font-serif">
            Réservez votre{" "}
            <span className="font-semibold">course taxi Antibes</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Réservation taxi Antibes simple et rapide en quelques clics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Section gauche - Avantages */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-black flex items-center">
                <CheckCircle className="w-6 h-6 text-primary mr-3" />
                Pourquoi choisir notre service ?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4 p-4 bg-primary/5 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Service 24h/24
                    </h4>
                    <p className="text-sm text-gray-600">
                      Disponible tous les jours de l'année pour vos déplacements
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 p-4 bg-primary/5 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Paiement flexible
                    </h4>
                    <p className="text-sm text-gray-600">
                      Espèces, carte bancaire, virement - selon vos préférences
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 p-4 bg-primary/5 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Confirmation immédiate
                    </h4>
                    <p className="text-sm text-gray-600">
                      Recevez une confirmation par SMS et email
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Sélection du véhicule */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-black flex items-center">
                <Car className="w-5 h-5 text-primary mr-3" />
                Choisissez votre véhicule
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <label
                  className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all ${
                    formData.typeVehicule === "glc"
                      ? "border-primary bg-primary/10"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="typeVehicule"
                    value="glc"
                    checked={formData.typeVehicule === "glc"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Car className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold text-gray-800">
                      Mercedes GLC/ classe E
                    </h4>
                    <p className="text-sm text-gray-600">1-4 passagers</p>
                    <p className="text-xs text-primary font-semibold mt-1">
                      Berline
                    </p>
                  </div>
                </label>

                <label
                  className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all ${
                    formData.typeVehicule === "van"
                      ? "border-primary bg-primary/10"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="typeVehicule"
                    value="van"
                    checked={formData.typeVehicule === "van"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Car className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold text-gray-800">Van Premium</h4>
                    <p className="text-sm text-gray-600">5-8 passagers</p>
                    <p className="text-xs text-primary font-semibold mt-1">
                      +15% tarif
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Section droite - Formulaire */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  Réservation confirmée !
                </h3>
                <p className="text-gray-600 mb-6">
                  Votre demande a été envoyée avec succès. Nous vous
                  contacterons rapidement pour confirmer les détails.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primaryDark transition-colors"
                >
                  Nouvelle réservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-gray-700 font-semibold text-sm">
                      Nom complet *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-700 font-semibold text-sm">
                      Téléphone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="06 XX XX XX XX"
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2 lg:col-span-1">
                    <label className="text-gray-700 font-semibold text-sm">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-gray-700 font-semibold text-sm">
                      Adresse de départ *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="adresseDepart"
                        value={formData.adresseDepart}
                        onChange={handleChange}
                        placeholder="Adresse de départ"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-700 font-semibold text-sm">
                      Destination *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="adresseArrivee"
                        value={formData.adresseArrivee}
                        onChange={handleChange}
                        placeholder="Adresse d'arrivée"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-gray-700 font-semibold text-sm">
                        Date de départ
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-gray-700 font-semibold text-sm">
                        Heure de départ
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="time"
                          name="heure"
                          value={formData.heure}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary hover:bg-primaryDark hover:scale-105"
                  } text-white shadow-lg flex items-center justify-center space-x-3`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Réserver maintenant</span>
                    </>
                  )}
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Besoin d'un formulaire plus détaillé ?{" "}
                    <a
                      href="/reservation"
                      className="text-primary hover:underline"
                    >
                      Cliquez ici
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
