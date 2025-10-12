import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-light mb-4 tracking-wider font-serif">
              TAXI <span className="font-semibold">ANTIBES</span>
            </h3>
            <p className="text-primary-foreground/80 font-light leading-relaxed">
              Votre service de transport premium sur la Côte d'Azur
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80 font-light">
              <li>Transferts aéroport</li>
              <li>Courses locales</li>
              <li>Mise à disposition</li>
              <li>Événements</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Zones desservies</h4>
            <ul className="space-y-2 text-primary-foreground/80 font-light">
              <li>Antibes</li>
              <li>Nice</li>
              <li>Cannes</li>
              <li>Monaco</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/80 font-light">
                <Phone className="h-4 w-4" />
                <span>+33 6 XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80 font-light">
                <Mail className="h-4 w-4" />
                <span>contact@taxiantibes.fr</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80 font-light">
                <MapPin className="h-4 w-4" />
                <span>Antibes, 06600</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm font-light">
            © 2025 Taxi Antibes. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60 font-light">
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              Confidentialité
            </a>
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
