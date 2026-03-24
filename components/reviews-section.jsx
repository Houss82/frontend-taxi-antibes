"use client";

import { ExternalLink, Star } from "lucide-react";

/** Même lien que le footer (fiche Google Maps / GMB) */
const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/gAA4M31jtVcsY3Km9";

const GOOGLE_AVERAGE_RATING = 4.9;
const GOOGLE_REVIEW_COUNT = 129;

/**
 * Prénoms pour détecter l’ordre « Nom Prénom » (fiche Google FR).
 * Ajoutez un prénom (sans accent, tirets ni espaces) si un nouvel avis l’exige.
 */
const KNOWN_FIRST_NAMES = new Set([
  "eric",
  "claude",
  "jeanlouis",
  "jeanpierre",
  "jeanmarc",
  "jeanpaul",
  "jeanmichel",
  "jeanluc",
  "marie",
  "pierre",
  "patrick",
  "nicolas",
  "sophie",
  "isabelle",
  "laurent",
]);

function foldAscii(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-\s]/g, "");
}

/**
 * Affiche « Prénom N. » (prénom complet, initiale du nom + point).
 */
function formatAuthorPrivacy(googleName) {
  const segments = googleName.trim().split(/\s+/).filter(Boolean);
  if (segments.length === 0) return "";
  if (segments.length === 1) return segments[0];

  if (segments.length === 2) {
    const [a, b] = segments;
    const bKey = foldAscii(b);
    const aKey = foldAscii(a);
    if (KNOWN_FIRST_NAMES.has(bKey)) {
      return `${b} ${a[0].toUpperCase()}.`;
    }
    if (KNOWN_FIRST_NAMES.has(aKey)) {
      return `${a} ${b[0].toUpperCase()}.`;
    }
  }

  const lastName = segments[segments.length - 1];
  const firstParts = segments.slice(0, -1);
  const firstRaw = firstParts.join(" ");
  const firstDisplay =
    firstParts.length === 1 && firstRaw.length === 1
      ? `${firstRaw.toUpperCase()}.`
      : firstRaw;

  return `${firstDisplay} ${lastName[0].toUpperCase()}.`;
}

const reviews = [
  {
    id: 1,
    author: "J Gr",
    googleProfileReviews: 4,
    googleProfilePhotos: 0,
    rating: 5,
    timeAgo: "Il y a 9 semaines",
    visited: "Visité en janvier",
    text: "Un des meilleurs services de taxi à Antibes, je vous recommande sans hésiter !",
  },
  {
    id: 2,
    author: "Menant Éric",
    googleProfileReviews: 3,
    googleProfilePhotos: 0,
    rating: 5,
    timeAgo: "Il y a 10 semaines",
    visited: "Visité en janvier",
    text: "Je suis transporté à l'hôpital de Nice par les taxis médical d'Antibes, ils sont très bien toujours à l'heure et très agréables.",
  },
  {
    id: 3,
    author: "Jean-Louis Grosmaire",
    googleProfileReviews: 2,
    googleProfilePhotos: 0,
    rating: 5,
    timeAgo: "Il y a 14 semaines",
    visited: "Décembre — transfert Aéroport Nice → Antibes",
    text: "Le 18 décembre nous avons eu une excellent service de taxi depuis l'aéroport de Nice jusqu'à Antibes. Grande courtoisie. Parfait! JL,M et S",
  },
  {
    id: 4,
    author: "Claude Ichard",
    googleProfileReviews: 2,
    googleProfilePhotos: 0,
    rating: 5,
    timeAgo: "Il y a 16 semaines",
    visited: null,
    text: "Nous avons pendant 2 mois , periode tres stressante pour nous eu recours à ce groupement de taxis.,très professionnel, très attentifs à leurs patients malades, beaucoup d empathie et des fous rires..tous sont respectueux des horaires et de notre tranquillité. Un grand merci à eux.",
  },
];

function StarRow({ value, iconClass = "w-7 h-7" }) {
  const full = Math.floor(value);
  const fraction = Math.min(1, Math.max(0, value - full));
  const emptyStart = full + (fraction > 0 ? 1 : 0);
  return (
    <div className="flex items-center gap-0.5" aria-hidden>
      {Array.from({ length: full }).map((_, i) => (
        <Star
          key={`f-${i}`}
          className={`${iconClass} text-amber-400 fill-amber-400 shrink-0`}
        />
      ))}
      {fraction > 0 ? (
        <span className={`relative inline-block shrink-0 ${iconClass}`}>
          <Star
            className={`${iconClass} text-gray-200 fill-gray-100 absolute inset-0`}
          />
          <span
            className="absolute left-0 top-0 bottom-0 overflow-hidden"
            style={{ width: `${fraction * 100}%` }}
          >
            <Star className={`${iconClass} text-amber-400 fill-amber-400`} />
          </span>
        </span>
      ) : null}
      {Array.from({ length: 5 - emptyStart }).map((_, i) => (
        <Star
          key={`e-${i}`}
          className={`${iconClass} text-gray-200 fill-gray-100 shrink-0`}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const ratingLabel = GOOGLE_AVERAGE_RATING.toFixed(1).replace(".", ",");

  const cardThemes = [
    {
      bg: "from-cyan-50 to-sky-50",
      border: "border-cyan-200",
      accent: "text-cyan-700",
    },
    {
      bg: "from-amber-50 to-orange-50",
      border: "border-amber-200",
      accent: "text-amber-800",
    },
    {
      bg: "from-teal-50 to-cyan-50",
      border: "border-teal-200",
      accent: "text-teal-700",
    },
    {
      bg: "from-slate-50 to-cyan-50",
      border: "border-slate-200",
      accent: "text-slate-800",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50/90 via-white to-amber-50/80 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/25 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full border-2 border-cyan-200/60 mb-6 shadow-lg hover:shadow-xl transition-shadow">
            <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
            <span className="text-sm font-semibold text-gray-700">
              Avis clients (Google)
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
              Ce que disent nos clients
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
            <div
              className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-amber-200/50"
              aria-label={`Note moyenne ${ratingLabel} sur 5 sur Google`}
            >
              <StarRow value={GOOGLE_AVERAGE_RATING} />
              <div className="text-left ml-2">
                <p className="text-3xl font-bold text-gray-900 leading-none">
                  {ratingLabel}/5
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Note moyenne sur Google
                </p>
              </div>
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-cyan-200/50 hover:border-cyan-400 transition-colors text-left group"
            >
              <p className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                {GOOGLE_REVIEW_COUNT} avis sur Google
                <ExternalLink className="w-4 h-4 text-cyan-600 group-hover:text-cyan-800 shrink-0" />
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Voir la fiche et tous les avis clients
              </p>
            </a>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Extraits d&apos;avis laissés sur notre{" "}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-700 hover:text-cyan-900 underline font-semibold"
            >
              fiche Google ({GOOGLE_REVIEW_COUNT} avis, {ratingLabel}/5)
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {reviews.map((review, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <div
                key={review.id}
                className={`bg-gradient-to-br ${theme.bg} backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 ${theme.border} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${theme.bg} opacity-30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2`}
                />
                <div className="relative z-10">
                  <div className="mb-4">
                    <h3 className={`font-bold ${theme.accent} text-lg mb-1`}>
                      {formatAuthorPrivacy(review.author)}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">
                      {review.googleProfileReviews} avis (profil Google) •{" "}
                      {review.googleProfilePhotos} photo
                      {review.googleProfilePhotos === 1 ? "" : "s"}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-amber-400 fill-amber-400"
                          />
                        ))}
                      </div>
                      <span className="text-gray-500">{review.timeAgo}</span>
                    </div>
                    {review.visited ? (
                      <p className="text-xs text-gray-500 mt-1">
                        {review.visited}
                      </p>
                    ) : null}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {review.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 via-teal-600 to-amber-600 text-white font-bold rounded-2xl hover:from-cyan-700 hover:via-teal-700 hover:to-amber-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02]"
          >
            <Star className="w-6 h-6 fill-white text-white" />
            <span>
              Voir les {GOOGLE_REVIEW_COUNT} avis sur Google ({ratingLabel}
              /5)
            </span>
            <ExternalLink className="w-5 h-5" />
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Avis authentiques vérifiables sur notre fiche Google My Business.
          </p>
        </div>
      </div>
    </section>
  );
}
