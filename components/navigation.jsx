"use client";

import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-light tracking-wider font-serif hover:text-gold-600 transition-colors text-black"
          >
            TAXI <span className="font-semibold text-gold-600">ANTIBES</span>
          </a>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/services"
              className="text-sm font-light hover:text-gold-600 transition-colors text-black"
            >
              Services
            </a>
            <a
              href="/tarifs"
              className="text-sm font-light hover:text-gold-600 transition-colors text-black"
            >
              Tarifs
            </a>
            <a
              href="/reservation"
              className="text-sm font-light hover:text-gold-600 transition-colors text-black"
            >
              Réservation
            </a>
            <a
              href="/contact"
              className="text-sm font-light hover:text-gold-600 transition-colors text-black"
            >
              Contact
            </a>
          </div>

          {/* Bouton Appeler desktop */}
          <div className="hidden md:block">
            <Button asChild variant="gold" className="gap-2 rounded-xl">
              <a href="tel:+33623360501" className="flex items-center gap-2">
                <Phone className="h-4 w-10 text-white" />
                <span className="hidden sm:inline text-white text-lg">
                  Appeler
                </span>
              </a>
            </Button>
          </div>

          {/* Menu burger mobile */}
          <div className="md:hidden flex items-center gap-4">
            <Button asChild variant="gold" className="gap-2 rounded-xl">
              <a href="tel:+33623360501" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
              </a>
            </Button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-black/20">
            <div className="flex flex-col gap-4 pt-4">
              <a
                href="/services"
                className="text-sm font-light hover:text-gold-600 transition-colors py-2 text-black"
                onClick={closeMenu}
              >
                Services
              </a>
              <a
                href="/tarifs"
                className="text-sm font-light hover:text-gold-600 transition-colors py-2 text-black"
                onClick={closeMenu}
              >
                Tarifs
              </a>
              <a
                href="/reservation"
                className="text-sm font-light hover:text-gold-600 transition-colors py-2 text-black"
                onClick={closeMenu}
              >
                Réservation
              </a>
              <a
                href="/contact"
                className="text-sm font-light hover:text-gold-600 transition-colors py-2 text-black"
                onClick={closeMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
