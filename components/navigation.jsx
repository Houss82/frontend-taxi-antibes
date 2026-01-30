"use client";

import { sectorData, sectorSlugs } from "@/app/secteurs/[slug]/data";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
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
  BookOpen,
  Euro,
  Calendar,
  Car,
  Home,
} from "lucide-react";
import { Outfit } from "next/font/google";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

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
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const sectorsMenuRef = useRef(null);
  const servicesMenuRef = useRef(null);

  // Icônes pour chaque élément de navigation
  const getIcon = (label) => {
    const iconMap = {
      Accueil: Home,
      Services: Briefcase,
      "Nos secteurs": NavigationIcon,
      Tarifs: Euro,
      Blog: BookOpen,
      Contact: Phone,
      Réservation: Calendar,
    };
    return iconMap[label] || Briefcase;
  };

  // Navigation items pour le menu mobile
  const navItems = [
    { label: "Services", href: "/services", submenu: [
      { label: "Tous les services", href: "/services" },
      { label: "Taxi Aéroport Nice", href: "/services/taxi-aeroport-nice" },
      { label: "Taxi Conventionné CPAM", href: "/services/taxi-conventionne" },
    ]},
    { label: "Nos secteurs", href: "/secteurs", submenu: [
      { label: "Tous les secteurs", href: "/secteurs" },
      ...mainSectors.map(sector => ({ label: sector.name, href: `/secteurs/${sector.slug}` })),
    ]},
    { label: "Tarifs", href: "/tarifs" },
    { label: "Blog", href: "/blog" },
    { label: "Réservation", href: "/reservation" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setOpenSubmenu(null);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSectorsMobileOpen(false);
    setIsServicesMobileOpen(false);
    setOpenSubmenu(null);
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

  // Fermer le menu quand on change de page
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  // Menu mobile rendu via portail pour éviter les problèmes de positionnement
  const mobileMenu = (
    <AnimatePresence mode="wait">
      {isMenuOpen && (
        <>
          {/* Overlay avec effet de flou */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            onClick={closeMenu}
          />

          {/* Menu principal */}
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden fixed top-0 right-0 bottom-0 w-full max-w-md z-[70] bg-gradient-to-br from-white to-gray-50 border-l border-gray-200 shadow-2xl flex flex-col pt-16"
          >
            <motion.nav
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex-1 overflow-y-auto px-6 py-6 space-y-1"
            >
              {/* Logo et titre en haut avec bouton fermer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200"
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src="/logo.png"
                    alt="Taxi Antibes Logo"
                    width={48}
                    height={48}
                    className="object-contain w-12 h-12"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      TAXI ANTIBES
                    </h2>
                    <p className="text-xs text-gray-600 font-light">Riviera</p>
                  </div>
                </div>

                {/* Bouton fermer dans le menu */}
                <motion.button
                  onClick={closeMenu}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Fermer le menu"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-gray-600" />
                </motion.button>
              </motion.div>

              {/* Menu items avec icônes */}
              <div className="space-y-2">
                {navItems.map((item, index) => {
                  const Icon = getIcon(item.label);
                  const hasSubmenu = item.submenu && item.submenu.length > 0;
                  const isSubmenuOpen = openSubmenu === item.href;

                  if (hasSubmenu) {
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      >
                        <div className="space-y-1">
                          <button
                            onClick={() =>
                              setOpenSubmenu(
                                isSubmenuOpen ? null : item.href
                              )
                            }
                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 text-gray-800 hover:text-cyan-600 font-medium transition-all duration-300 group"
                          >
                            <div className="flex items-center space-x-4">
                              <Icon className="w-5 h-5 text-cyan-600 group-hover:scale-110 transition-transform" />
                              <span>{item.label.toUpperCase()}</span>
                            </div>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                isSubmenuOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {isSubmenuOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-8 space-y-1 mt-1">
                                  {item.submenu.map((subItem) => (
                                    <a
                                      key={subItem.href}
                                      href={subItem.href}
                                      className="block px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-cyan-600 transition-colors text-sm"
                                      onClick={closeMenu}
                                    >
                                      {subItem.label}
                                    </a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <a
                        href={item.href}
                        className="flex items-center space-x-4 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 text-gray-800 hover:text-cyan-600 font-medium transition-all duration-300 group"
                        onClick={closeMenu}
                      >
                        <Icon className="w-5 h-5 text-cyan-600 group-hover:scale-110 transition-transform" />
                        <span>{item.label.toUpperCase()}</span>
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            </motion.nav>

            {/* Bouton Réserver fixe en bas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 1.0 }}
              className="px-6 py-4 border-t border-gray-200 bg-white"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="/reservation"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 hover:from-amber-500 hover:via-gold-600 hover:to-orange-500 text-white text-center py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={closeMenu}
                >
                  <Car className="w-5 h-5" />
                  RÉSERVER
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

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
            <div className={`flex flex-col ${isScrolled ? "text-black" : "text-white"}`}>
              <span>
                TAXI{" "}
                <span className="font-bold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                  ANTIBES
                </span>
              </span>
              <span className="text-[0.65rem] md:text-xs font-light -mt-1 opacity-80 transition-opacity">
                Riviera
              </span>
            </div>
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
      </div>
      {typeof window !== "undefined" && createPortal(mobileMenu, document.body)}
    </nav>
  );
}
