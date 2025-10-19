"use client";

import { useEffect } from "react";

export function HydrationFix() {
  useEffect(() => {
    // Supprimer l'attribut cz-shortcut-listen immédiatement et de manière répétée
    const removeColorZillaAttribute = () => {
      if (document.body && document.body.hasAttribute("cz-shortcut-listen")) {
        document.body.removeAttribute("cz-shortcut-listen");
      }
    };

    // Supprimer immédiatement
    removeColorZillaAttribute();

    // Supprimer de manière répétée pour être sûr
    const interval = setInterval(removeColorZillaAttribute, 10);

    // Observer les changements d'attributs pour supprimer l'attribut s'il est rajouté
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "cz-shortcut-listen"
        ) {
          document.body.removeAttribute("cz-shortcut-listen");
        }
      });
    });

    if (document.body) {
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["cz-shortcut-listen"],
      });
    }

    // Nettoyer l'observer et l'interval au démontage
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return null;
}
