import { BookingSection } from "@/components/booking-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { ServicesSection } from "@/components/services-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <BookingSection />

      {/* Section CTA supplémentaire */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-light mb-6 text-balance"
            style={{ fontFamily: "Marcellus, serif" }}
          >
            Besoin d'un{" "}
            <span className="font-semibold text-gold-600">
              devis taxi Antibes personnalisé
            </span>{" "}
            ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactez taxi Antibes pour un devis gratuit et personnalisé selon
            vos besoins
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="gold"
              className="text-base px-8 py-6 gap-2 rounded-xl"
            >
              <a href="tel:+33623360501" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Appeler nous
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border border-gold-600 text-white hover:bg-gold-600 hover:text-black text-base px-8 py-6 bg-transparent rounded-xl"
            >
              <a href="/services" className="flex items-center gap-2">
                Voir nos services
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
