"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-light tracking-wider font-serif">
            TAXI <span className="font-semibold">ANTIBES</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-light hover:text-secondary transition-colors"
            >
              Services
            </a>
            <a
              href="#tarifs"
              className="text-sm font-light hover:text-secondary transition-colors"
            >
              Tarifs
            </a>
            <a
              href="#reservation"
              className="text-sm font-light hover:text-secondary transition-colors"
            >
              Réservation
            </a>
            <a
              href="#contact"
              className="text-sm font-light hover:text-secondary transition-colors"
            >
              Contact
            </a>
          </div>

          <Button className="bg-primary text-primary-foreground hover:bg-secondary gap-2 rounded-xl">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Appeler</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
