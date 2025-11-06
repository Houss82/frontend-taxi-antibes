"use client";

import { Share2 } from "lucide-react";
import { useCallback } from "react";

function classNames(...values) {
  return values.filter(Boolean).join(" ");
}

export function ShareButton({ title, excerpt, className }) {
  const handleShare = useCallback(async () => {
    const shareData = {
      title: title || "Taxi Antibes",
      text: excerpt || "",
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      if (navigator?.share) {
        await navigator.share(shareData);
      } else if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareData.url);
        alert("Lien copié dans le presse-papier !");
      } else {
        alert("Partage non disponible sur ce navigateur.");
      }
    } catch (error) {
      console.error("Erreur de partage:", error);
    }
  }, [excerpt, title]);

  return (
    <button
      type="button"
      onClick={handleShare}
      className={classNames(
        "flex items-center gap-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-700 rounded-lg px-2 py-1",
        className,
      )}
    >
      <Share2 className="w-5 h-5" />
      <span>Partager</span>
    </button>
  );
}

