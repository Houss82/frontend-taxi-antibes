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
            className="text-2xl font-bold tracking-wider font-serif transition-colors text-black"
          >
            TAXI{" "}
            <span className="font-bold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
              ANTIBES
            </span>
          </a>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/services"
              className="text-lg font-light text-black hover:text-gold-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              Services
            </a>
            <a
              href="/tarifs"
              className="text-lg font-light text-black hover:text-gold-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              Tarifs
            </a>
            <a
              href="/reservation"
              className="text-lg font-light text-black hover:text-gold-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              Réservation
            </a>
            <a
              href="/contact"
              className="text-lg font-light text-black hover:text-gold-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              Contact
            </a>
          </div>

          {/* Bouton Appeler desktop */}
          <div className="hidden md:block">
            <Button
              asChild
              className="gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 hover:from-amber-500 hover:via-gold-600 hover:to-orange-500 shadow-lg transition-all duration-300"
            >
              <a href="tel:+33623360501" className="flex items-center gap-2">
                <Phone className="h-4 w-10 text-white" />
                <span className="hidden sm:inline text-white text-xl">
                  Appeler
                </span>
              </a>
            </Button>
          </div>

          {/* Menu burger mobile */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              asChild
              className="gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 hover:from-amber-500 hover:via-gold-600 hover:to-orange-500 shadow-lg transition-all duration-300"
            >
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
                className="text-sm font-light text-black hover:text-gold-600 transition-all duration-300 py-2 hover:translate-x-2"
                onClick={closeMenu}
              >
                Services
              </a>
              <a
                href="/tarifs"
                className="text-sm font-light text-black hover:text-gold-600 transition-all duration-300 py-2 hover:translate-x-2"
                onClick={closeMenu}
              >
                Tarifs
              </a>
              <a
                href="/reservation"
                className="text-sm font-light text-black hover:text-gold-600 transition-all duration-300 py-2 hover:translate-x-2"
                onClick={closeMenu}
              >
                Réservation
              </a>
              <a
                href="/contact"
                className="text-sm font-light text-black hover:text-gold-600 transition-all duration-300 py-2 hover:translate-x-2"
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
