"use client";

// Ce composant regroupe tous les éléments qui DOIVENT être côté client
// (Analytics, HydrationFix, etc.) pour éviter de forcer un bailout SSR
import { HydrationFix } from "@/components/hydration-fix";
import { Analytics } from "@vercel/analytics/next";

export default function ClientProviders() {
  return (
    <>
      {/* Fix d'hydratation pour ColorZilla */}
      <HydrationFix />

      {/* Analytics Vercel */}
      <Analytics />

      {/* Tu peux ajouter ici d'autres composants client :
          - WhatsApp button flottant
          - GTM/Google Ads (chargés après interaction)
          - Autres scripts tiers
      */}
    </>
  );
}
