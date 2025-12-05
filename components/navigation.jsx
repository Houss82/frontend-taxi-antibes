"use client";

import { sectorData, sectorSlugs } from "@/app/secteurs/[slug]/data";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Building2,
  ChevronDown,
  Heart,
  MapPin,
  Menu,
  Navigation as NavigationIcon,
  Phone,
  Plane,
  Waves,
  X,
} from "lucide-react";
import { Outfit } from "next/font/google";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Mapping des icônes et couleurs pour chaque secteur
const sectorIcons = {
  monaco: { icon: MapPin, color: "text-amber-600", bgColor: "bg-amber-50" },
  cannes: { icon: Waves, color: "text-orange-500", bgColor: "bg-orange-50" },
  nice: { icon: Building2, color: "text-gold-600", bgColor: "bg-gold-50" },
  "juan-les-pins": {
    icon: Waves,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  "sophia-antipolis": {
    icon: Briefcase,
    color: "text-gold-600",
    bgColor: "bg-gold-50",
  },
  "aeroport-nice": {
    icon: Plane,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
};

// Génération dynamique des secteurs depuis data.js
// Si un secteur est supprimé de data.js, il disparaîtra automatiquement de la navbar
const mainSectors = sectorSlugs
  .filter((slug) => sectorData[slug]) // S'assurer que le secteur existe dans sectorData
  .map((slug) => {
    const sector = sectorData[slug];
    const iconConfig = sectorIcons[slug] || {
      icon: MapPin,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
    };
    return {
      slug,
      name: sector.cityName,
      icon: iconConfig.icon,
      color: iconConfig.color,
      bgColor: iconConfig.bgColor,
    };
  });

export function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  // Sur la page d'accueil, on commence transparent, sinon on commence avec le fond
  const [isScrolled, setIsScrolled] = useState(!isHomePage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const [isSectorsMobileOpen, setIsSectorsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const sectorsMenuRef = useRef(null);
  const servicesMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSectorsMobileOpen(false);
    setIsServicesMobileOpen(false);
  };

  const toggleSectorsMenu = () => {
    setIsSectorsOpen(!isSectorsOpen);
    setIsServicesOpen(false);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsSectorsOpen(false);
  };

  // Gérer la transparence de la navbar au scroll
  useEffect(() => {
    // Si on n'est pas sur la page d'accueil, toujours avoir le fond
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Fermer les menus quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sectorsMenuRef.current &&
        !sectorsMenuRef.current.contains(event.target)
      ) {
        setIsSectorsOpen(false);
      }
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
    };

    if (isSectorsOpen || isServicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSectorsOpen, isServicesOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-white/95 backdrop-blur-md border-b border-black/20 shadow-sm"
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className={`flex items-center gap-2 md:gap-3 text-base md:text-2xl font-bold tracking-wider transition-colors ${
              isScrolled ? "text-black" : "text-white"
            } ${outfit.className}`}
          >
            <Image
              src="/logo.png"
              alt="Taxi Antibes Logo"
              width={80}
              height={80}
              className="object-contain w-12 h-12 md:w-20 md:h-20 -my-4 -mx-2 md:-my-4 md:-mx-2"
              priority
            />
            <span>
              TAXI{" "}
              <span className="font-bold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                ANTIBES
              </span>
            </span>
          </a>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-8">
            {/* Menu déroulant Services */}
            <div className="relative" ref={servicesMenuRef}>
              <button
                onClick={toggleServicesMenu}
                className={`text-lg font-bold transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-1 ${
                  isScrolled
                    ? "text-black hover:text-gold-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border-2 border-cyan-200 py-3 z-50 transition-all duration-200 ease-in-out"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #ffffff, #cfe2e8, #e0f2fe)",
                  }}
                >
                  {/* Header avec gradient */}
                  <div className="px-4 pb-2 mb-2 border-b border-cyan-200/50">
            <a
              href="/services"
                      className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-800 hover:text-cyan-600 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-200 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <Briefcase className="h-4 w-4 text-cyan-600 group-hover:scale-110 transition-transform" />
                      <span>Tous les services</span>
                    </a>
                  </div>
                  {/* Liste des services */}
                  <div className="space-y-1 px-2">
                    <a
                      href="/services/taxi-aeroport-nice"
                      className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg transition-all duration-200 group hover:shadow-md hover:scale-[1.02] bg-blue-50 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="p-1.5 rounded-lg bg-blue-50 group-hover:bg-white transition-colors">
                        <Plane className="h-4 w-4 text-blue-600 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="flex-1 group-hover:font-semibold transition-all">
                        Taxi Aéroport Nice
                      </span>
                      <ChevronDown className="h-3 w-3 text-gray-400 group-hover:text-cyan-600 -rotate-90 transition-all" />
                    </a>
                    <a
                      href="/services/taxi-conventionne"
                      className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg transition-all duration-200 group hover:shadow-md hover:scale-[1.02] bg-rose-50 hover:bg-gradient-to-r hover:from-rose-100 hover:to-rose-200"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="p-1.5 rounded-lg bg-rose-50 group-hover:bg-white transition-colors">
                        <Heart className="h-4 w-4 text-rose-600 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="flex-1 group-hover:font-semibold transition-all">
                        Taxi Conventionné CPAM
                      </span>
                      <ChevronDown className="h-3 w-3 text-gray-400 group-hover:text-cyan-600 -rotate-90 transition-all" />
                    </a>
                  </div>
                </div>
              )}
            </div>
            {/* Menu déroulant Nos secteurs */}
            <div className="relative" ref={sectorsMenuRef}>
              <button
                onClick={toggleSectorsMenu}
                className={`text-lg font-bold transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-1 ${
                  isScrolled
                    ? "text-black hover:text-gold-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Nos secteurs
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isSectorsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isSectorsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border-2 border-amber-200 py-3 z-50 transition-all duration-200 ease-in-out"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #ffffff, #fef3c7, #fef9e7)",
                  }}
                >
                  {/* Header avec gradient */}
                  <div className="px-4 pb-2 mb-2 border-b border-amber-200/50">
                    <a
                      href="/secteurs"
                      className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-800 hover:text-gold-600 rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-gold-50 transition-all duration-200 group"
                      onClick={() => setIsSectorsOpen(false)}
                    >
                      <NavigationIcon className="h-4 w-4 text-gold-600 group-hover:scale-110 transition-transform" />
                      <span>Tous les secteurs</span>
                    </a>
                  </div>
                  {/* Liste des secteurs avec icônes */}
                  <div className="space-y-1 px-2">
                    {mainSectors.map((sector) => {
                      const Icon = sector.icon;
                      // Déterminer les classes hover selon le secteur
                      const hoverClasses =
                        sector.bgColor === "bg-amber-50"
                          ? "hover:bg-gradient-to-r hover:from-amber-100 hover:to-amber-200"
                          : sector.bgColor === "bg-orange-50"
                          ? "hover:bg-gradient-to-r hover:from-orange-100 hover:to-orange-200"
                          : "hover:bg-gradient-to-r hover:from-gold-100 hover:to-gold-200";
                      return (
                        <a
                          key={sector.slug}
                          href={`/secteurs/${sector.slug}`}
                          className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg transition-all duration-200 group hover:shadow-md hover:scale-[1.02] ${sector.bgColor} ${hoverClasses}`}
                          onClick={() => setIsSectorsOpen(false)}
                        >
                          <div
                            className={`p-1.5 rounded-lg ${sector.bgColor} group-hover:bg-white transition-colors`}
                          >
                            <Icon
                              className={`h-4 w-4 ${sector.color} group-hover:scale-110 transition-transform`}
                            />
                          </div>
                          <span className="flex-1 group-hover:font-semibold transition-all">
                            {sector.name}
                          </span>
                          <ChevronDown className="h-3 w-3 text-gray-400 group-hover:text-gold-600 -rotate-90 transition-all" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <a
              href="/tarifs"
              className={`text-lg font-bold transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                isScrolled
                  ? "text-black hover:text-gold-600"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Tarifs
            </a>
            <a
              href="/blog"
              className={`text-lg font-bold transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                isScrolled
                  ? "text-black hover:text-gold-600"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Blog
            </a>
            <a
              href="/reservation"
              className={`text-lg font-bold transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                isScrolled
                  ? "text-black hover:text-gold-600"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Réservation
            </a>
            <a
              href="/contact"
              className={`text-lg font-bold transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                isScrolled
                  ? "text-black hover:text-gold-600"
                  : "text-white/80 hover:text-white"
              }`}
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
              <a href="tel:+33749777621" className="flex items-center gap-2">
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
              <a href="tel:+33749777621" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
              </a>
            </Button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? "text-black" : "text-white"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? "text-black" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-black/20">
            <div className="flex flex-col gap-4 pt-4">
              {/* Menu déroulant mobile Services */}
              <div>
                <button
                  onClick={() =>
                    setIsServicesMobileOpen(!isServicesMobileOpen)
                  }
                  className="w-full flex items-center justify-between text-sm font-light text-black hover:text-gold-600 transition-all duration-300 py-2 hover:translate-x-2"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isServicesMobileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isServicesMobileOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-cyan-300 pl-4 bg-gradient-to-r from-cyan-50/50 to-blue-50/50 rounded-r-lg py-2 pr-2">
              <a
                href="/services"
                      className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-cyan-600 transition-colors py-2 px-2 rounded-lg hover:bg-white"
                      onClick={closeMenu}
                    >
                      <Briefcase className="h-4 w-4 text-cyan-600" />
                      <span>Tous les services</span>
                    </a>
                    <a
                      href="/services/taxi-aeroport-nice"
                      className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-cyan-600 transition-all py-2 px-2 rounded-lg hover:bg-white bg-blue-50"
                      onClick={closeMenu}
                    >
                      <div className="p-1.5 rounded-lg bg-blue-50">
                        <Plane className="h-4 w-4 text-blue-600" />
                      </div>
                      <span>Taxi Aéroport Nice</span>
                    </a>
                    <a
                      href="/services/taxi-conventionne"
                      className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-cyan-600 transition-all py-2 px-2 rounded-lg hover:bg-white bg-rose-50"
                onClick={closeMenu}
              >
                      <div className="p-1.5 rounded-lg bg-rose-50">
                        <Heart className="h-4 w-4 text-rose-600" />
                      </div>
                      <span>Taxi Conventionné CPAM</span>
              </a>
                  </div>
                )}
              </div>
              {/* Menu déroulant mobile Nos secteurs */}
              <div>
                <button
                  onClick={() => setIsSectorsMobileOpen(!isSectorsMobileOpen)}
                  className="w-full flex items-center justify-between text-sm font-light text-black hover:text-gold-600 transition-all duration-300 py-2 hover:translate-x-2"
                >
                  <span>Nos secteurs</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isSectorsMobileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isSectorsMobileOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-amber-300 pl-4 bg-gradient-to-r from-amber-50/50 to-gold-50/50 rounded-r-lg py-2 pr-2">
                    <a
                      href="/secteurs"
                      className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-gold-600 transition-colors py-2 px-2 rounded-lg hover:bg-white"
                      onClick={closeMenu}
                    >
                      <NavigationIcon className="h-4 w-4 text-gold-600" />
                      <span>Tous les secteurs</span>
                    </a>
                    {mainSectors.map((sector) => {
                      const Icon = sector.icon;
                      return (
                        <a
                          key={sector.slug}
                          href={`/secteurs/${sector.slug}`}
                          className={`flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-gold-600 transition-all py-2 px-2 rounded-lg hover:bg-white ${sector.bgColor}`}
                          onClick={closeMenu}
                        >
                          <div className={`p-1.5 rounded-lg ${sector.bgColor}`}>
                            <Icon className={`h-4 w-4 ${sector.color}`} />
                          </div>
                          <span>{sector.name}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
              <a
                href="/tarifs"
                className="text-sm font-light text-black hover:text-gold-600 transition-all duration-300 py-2 hover:translate-x-2"
                onClick={closeMenu}
              >
                Tarifs
              </a>
              <a
                href="/blog"
                className="text-sm font-light text-black hover:text-gold-600 transition-all duration-300 py-2 hover:translate-x-2"
                onClick={closeMenu}
              >
                Blog
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
