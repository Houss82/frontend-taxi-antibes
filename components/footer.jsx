import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-light mb-4 tracking-wider font-serif">
              TAXI{" "}
              <span className="font-semibold bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                ANTIBES
              </span>
            </h3>
            <p className="text-white/80 font-light leading-relaxed">
              Votre service de transport premium sur la Côte d'Azur
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
              Services
            </h4>
            <ul className="space-y-2 text-white/80 font-light">
              <li>Transferts aéroport</li>
              <li>Courses locales</li>
              <li>Mise à disposition</li>
              <li>Événements</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
              Zones desservies
            </h4>
            <ul className="space-y-2 text-white/80 font-light">
              <li>Antibes</li>
              <li>Nice</li>
              <li>Cannes</li>
              <li>Monaco</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/80 font-light">
                <Phone className="h-4 w-4 text-orange-300" />
                <span>+33 6 XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-2 text-white/80 font-light">
                <Mail className="h-4 w-4 text-orange-300" />
                <span>contact@taxiantibes.fr</span>
              </li>
              <li className="flex items-center gap-2 text-white/80 font-light">
                <MapPin className="h-4 w-4 text-orange-300" />
                <span>Antibes, 06600</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-600/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm font-light">
            © 2025 Taxi Antibes. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-white/60 font-light">
            <a href="#" className="hover:text-gold-600 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-gold-600 transition-colors">
              Confidentialité
            </a>
            <a href="#" className="hover:text-gold-600 transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
