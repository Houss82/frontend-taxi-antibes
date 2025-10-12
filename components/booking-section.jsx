"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users } from "lucide-react";

export function BookingSection() {
  return (
    <section id="reservation" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-balance font-serif">
              Réservez votre <span className="font-semibold">course</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Réservation simple et rapide en quelques clics
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card border-border rounded-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-secondary" />
                    Point de départ
                  </label>
                  <Input
                    placeholder="Adresse de départ"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-secondary" />
                    Destination
                  </label>
                  <Input
                    placeholder="Adresse d'arrivée"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-secondary" />
                    Date et heure
                  </label>
                  <Input
                    type="datetime-local"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4 text-secondary" />
                    Nombre de passagers
                  </label>
                  <Input
                    type="number"
                    placeholder="1-8"
                    min="1"
                    max="8"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Informations complémentaires
                </label>
                <Input
                  placeholder="Numéro de vol, bagages spéciaux, etc."
                  className="bg-background border-border"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-secondary text-base py-6 rounded-xl"
              >
                Obtenir un devis gratuit
              </Button>
            </form>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-semibold mb-2">24/7</div>
              <div className="text-sm text-muted-foreground font-light">
                Service disponible
              </div>
            </div>
            <div>
              <div className="text-3xl font-semibold mb-2">15 min</div>
              <div className="text-sm text-muted-foreground font-light">
                Temps de réponse moyen
              </div>
            </div>
            <div>
              <div className="text-3xl font-semibold mb-2">100%</div>
              <div className="text-sm text-muted-foreground font-light">
                Clients satisfaits
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
