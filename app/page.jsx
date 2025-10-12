import { BookingSection } from "@/components/booking-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <BookingSection />
      <Footer />
    </main>
  );
}
