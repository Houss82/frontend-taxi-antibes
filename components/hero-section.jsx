import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-black overflow-hidden mt-10 sm:mt-0 md:mt-0">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[70vh] md:min-h-[80vh]">
          {/* Colonne texte */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6 tracking-tight text-balance">
              <span className="font-semibold text-gold-600">Taxi Antibes</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 mb-3 sm:mb-5 font-light font-serif">
              Transferts aéroport Nice et taxi Antibes officiel sur la Côte
              d'Azur
            </h2>
            <div className="hidden md:block h-1 w-16 bg-gold-600/80 rounded mb-6" />
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl md:max-w-none mx-auto md:mx-0 font-light leading-relaxed">
              Service de taxi Antibes premium à Antibes pour l'aéroport de Nice,
              Juan-les-Pins et toute la Côte d'Azur. Élégance, ponctualité et
              confort pour tous vos déplacements taxi Antibes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
                className="border border-gold-600 text-white hover:bg-gold-600 hover:text-black text-base px-8 py-6 bg-transparent rounded-xl"
              >
                <a href="/tarifs">Nos tarifs</a>
              </Button>
            </div>
          </div>

          {/* Colonne image */}
          <div className="relative w-full h-[40vh] md:h-[70vh] lg:h-[70vh] rounded-4xl overflow-hidden mt-10">
            <img
              src="/van-aéro copie.jpeg"
              alt="Taxi Antibes"
              className="w-full h-full object-cover"
              style={{ borderRadius: "1rem" }}
            />
          </div>
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
