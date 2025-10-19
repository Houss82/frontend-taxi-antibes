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
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance font-serif">
            Besoin d'un{" "}
            <span className="font-semibold">
              devis taxi Antibes personnalisé
            </span>{" "}
            ?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactez taxi Antibes pour un devis gratuit et personnalisé selon
            vos besoins
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-secondary hover:text-white text-base px-8 py-6 gap-2 rounded-xl"
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
              className="border-white text-white hover:bg-white hover:text-black text-base px-8 py-6 bg-transparent rounded-xl"
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
