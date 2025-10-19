import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[60vh] sm:h-[80vh] md:h-screen flex items-center justify-center overflow-hidden mt-10 sm:mt-0 md:mt-0">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 ">
        <img
          src="/luxury-black-car-driving-on-french-riviera-coastal.jpg"
          alt="Taxi Antibes"
          className="w-full h-full object-cover object-top sm:object-center md:object-center transform translate-y-8 sm:translate-y-0 md:translate-y-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white mb-4 sm:mb-6 tracking-tight text-balance">
          <span className="font-semibold">Taxi Antibes</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 mb-4 sm:mb-6 font-light font-serif px-2">
          Transferts aéroport Nice et taxi Antibes officiel sur la Côte d'Azur
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-2">
          Service de taxi Antibes premium à Antibes pour l'aéroport de Nice,
          Juan-les-Pins et toute la Côte d'Azur. Élégance, ponctualité et
          confort pour tous vos déplacements taxi Antibes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-secondary hover:text-white text-base px-8 py-6 gap-2 rounded-xl"
          >
            <a href="/reservation" className="flex items-center gap-2">
              Réserver maintenant
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black text-base px-8 py-6 bg-transparent rounded-xl"
          >
            <a href="/tarifs">Nos tarifs</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 ">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
