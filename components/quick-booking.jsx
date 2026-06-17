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

const FORMSPREE_URL = "https://formspree.io/f/mdkpzwka";
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
      const vehiculeType =
        formData.typeVehicule === "glc"
          ? "Mercedes GLC/Classe E"
          : "Van Premium";

      const formspreeData = {
        _subject: `Réservation rapide - ${formData.nom}`,
        nom: formData.nom,
        telephone: `+33 ${formData.telephone}`,
        email: formData.email || "Non renseigné",
        adresseDepart: formData.adresseDepart,
        adresseArrivee: formData.adresseArrivee,
        date: formData.date,
        heure: formData.heure,
        nombrePassagers: formData.nombrePassagers,
        nombreBagages: formData.nombreBagages,
        typeVehicule: vehiculeType,
        commentaires: `Réservation rapide - Véhicule: ${vehiculeType}`,
      };

      // Préparer les données pour MongoDB (backend)
      const mongoData = {
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
        commentaires: `Réservation rapide - Véhicule: ${vehiculeType}`,
      };

      console.log("Envoi des données:", { formspreeData, mongoData });

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
        // Envoi à MongoDB (backend)
        fetch(`${API_URL}/users/reservation`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mongoData),
        }),
      ]);

      // Traiter la réponse MongoDB (code existant conservé)
      let mongoResult = null;
      if (mongoResponse.status === "fulfilled") {
        try {
          mongoResult = await mongoResponse.value.json();
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

      console.log("Réponse Formspree:", formspreeResult);
      console.log("Réponse MongoDB:", mongoResult);

      // La validation reste sur MongoDB uniquement (code existant conservé)
      if (mongoResult?.result) {
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
          mongoResult?.error ||
          mongoResponse.reason?.message ||
          "Erreur lors de l'envoi de la réservation";
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
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-balance text-cyan-700">
            Réservez votre{" "}
            <span className="font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
              course taxi Antibes
            </span>
          </h2>
          <p className="text-cyan-700 text-lg leading-relaxed">
            Réservation taxi Antibes simple et rapide en quelques clics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Section gauche - Avantages */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cyan-100">
              <h3 className="text-2xl font-bold mb-6 text-cyan-700 flex items-center">
                <CheckCircle className="w-6 h-6 text-cyan-700 mr-3" />
                Pourquoi choisir notre service ?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4 p-4 bg-cyan-700/5 rounded-xl">
                  <div className="w-12 h-12 bg-cyan-700/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-cyan-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-700">
                      Service 24h/24
                    </h4>
                    <p className="text-sm text-cyan-700">
                      Disponible tous les jours de l'année pour vos déplacements
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 p-4 bg-cyan-700/5 rounded-xl">
                  <div className="w-12 h-12 bg-cyan-700/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-cyan-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-700">
                      Paiement flexible
                    </h4>
                    <p className="text-sm text-cyan-700">
                      Espèces, carte bancaire, virement - selon vos préférences
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 p-4 bg-cyan-700/5 rounded-xl">
                  <div className="w-12 h-12 bg-cyan-700/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-cyan-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-700">
                      Confirmation immédiate
                    </h4>
                    <p className="text-sm text-cyan-700">
                      Recevez une confirmation par SMS et email
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Sélection du véhicule */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-cyan-700 flex items-center">
                <Car className="w-5 h-5 text-cyan-700 mr-3" />
                Choisissez votre véhicule
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <label
                  className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all ${
                    formData.typeVehicule === "glc"
                      ? "border-cyan-700 bg-cyan-700/10"
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
                    <div className="w-16 h-16 bg-cyan-700/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Car className="w-8 h-8 text-cyan-700" />
                    </div>
                    <h4 className="font-bold text-cyan-700">
                      Mercedes GLC/ classe E
                    </h4>
                    <p className="text-sm text-cyan-700">1-4 passagers</p>
                    <p className="text-xs text-cyan-700 font-semibold mt-1">
                      Berline
                    </p>
                  </div>
                </label>

                <label
                  className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all ${
                    formData.typeVehicule === "van"
                      ? "border-cyan-700 bg-cyan-700/10"
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
                    <div className="w-16 h-16 bg-cyan-700/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Car className="w-8 h-8 text-cyan-700" />
                    </div>
                    <h4 className="font-bold text-cyan-700">Van Premium</h4>
                    <p className="text-sm text-cyan-700">5-8 passagers</p>
                    <p className="text-xs text-cyan-700 font-semibold mt-1">
                      +15% tarif
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Section droite - Formulaire */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-cyan-100">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-cyan-700/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-cyan-700" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-700 mb-4">
                  Réservation confirmée !
                </h3>
                <p className="text-cyan-700 mb-6">
                  Votre demande a été envoyée avec succès. Nous vous
                  contacterons rapidement pour confirmer les détails.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700/80 transition-colors"
                >
                  Nouvelle réservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-cyan-700 font-semibold text-sm">
                      Nom complet *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-700" />
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                        className="w-full pl-12 pr-4 py-3 border border-cyan-700 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-cyan-700 font-semibold text-sm">
                      Téléphone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-700" />
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="06 XX XX XX XX"
                        required
                        className="w-full pl-12 pr-4 py-3 border border-cyan-700 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2 lg:col-span-1">
                    <label className="text-cyan-700 font-semibold text-sm">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-700" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className="w-full pl-12 pr-4 py-3 border border-cyan-700 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-cyan-700 font-semibold text-sm">
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
                        className="w-full px-4 py-3 border border-cyan-700 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-cyan-700 font-semibold text-sm">
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
                        className="w-full px-4 py-3 border border-cyan-700 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-cyan-700 font-semibold text-sm">
                        Date de départ
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-700" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-cyan-700 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-cyan-700 font-semibold text-sm">
                        Heure de départ
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-700" />
                        <input
                          type="time"
                          name="heure"
                          value={formData.heure}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-cyan-700 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-transparent outline-none"
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
                      ? "bg-cyan-700 cursor-not-allowed"
                      : "bg-cyan-700 hover:bg-cyan-700/80 hover:scale-105"
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
                  <p className="text-sm text-cyan-700">
                    Besoin d'un formulaire plus détaillé ?{" "}
                    <a
                      href="/reservation"
                      className="text-cyan-700 hover:underline"
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
