# 🚖 Taxi Antibes - Frontend

Site web professionnel pour Taxi Antibes, optimisé pour le référencement SEO local sur les mots-clés "taxi antibes".

## 🚀 Fonctionnalités

- ✅ Site Next.js 15 sans TypeScript
- ✅ Design moderne et responsive avec Tailwind CSS
- ✅ SEO ultra-optimisé pour "taxi antibes"
- ✅ Schema.org markup pour le référencement local
- ✅ Métadonnées complètes (Open Graph, Twitter Cards)
- ✅ Formulaire de contact intégré avec le backend
- ✅ Pages optimisées :
  - Accueil avec contenu riche
  - Services détaillés
  - Tarifs transparents
  - Formulaire de contact
  - À propos de l'entreprise
- ✅ Sitemap.xml et robots.txt générés automatiquement
- ✅ Géolocalisation pour le SEO local (Antibes, 06600)
- ✅ Performance optimisée

## 📋 Prérequis

- Node.js 18+
- npm ou yarn

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Compiler pour la production
npm run build

# Lancer en production
npm start
```

## 🌐 Structure du projet

```
frontend/
├── app/
│   ├── components/          # Composants réutilisables
│   │   ├── Header.jsx       # En-tête avec navigation
│   │   ├── Footer.jsx       # Pied de page
│   │   └── CallToAction.jsx # CTA de réservation
│   ├── services/            # Page services
│   │   └── page.jsx
│   ├── tarifs/              # Page tarifs
│   │   └── page.jsx
│   ├── contact/             # Page contact
│   │   └── page.jsx
│   ├── a-propos/            # Page à propos
│   │   └── page.jsx
│   ├── layout.jsx           # Layout principal avec SEO
│   ├── page.jsx             # Page d'accueil
│   ├── globals.css          # Styles globaux
│   ├── sitemap.js           # Génération du sitemap
│   └── robots.js            # Configuration robots.txt
├── public/
│   └── robots.txt           # Robots.txt
├── next-seo.config.js       # Configuration SEO centralisée
└── package.json
```

## 🎨 Technologies utilisées

- **Next.js 15** - Framework React
- **Tailwind CSS 4** - Framework CSS
- **next-seo** - Gestion du SEO
- **React 19** - Bibliothèque UI

## 🔍 Optimisations SEO

### Mots-clés ciblés

- taxi antibes
- taxi juan les pins
- transfert aéroport nice antibes
- taxi gare antibes
- réservation taxi antibes
- taxi antibes 24h
- taxi côte d'azur

### Techniques SEO implémentées

1. **Métadonnées complètes** sur toutes les pages
2. **Schema.org** markup (TaxiService, LocalBusiness)
3. **Open Graph** pour les réseaux sociaux
4. **Géolocalisation** (lat/long Antibes)
5. **Sitemap XML** généré automatiquement
6. **Robots.txt** optimisé
7. **URLs sémantiques** et propres
8. **Contenu riche** avec mots-clés naturellement intégrés
9. **Structure Hn** optimisée
10. **Temps de chargement** optimisé

## 📱 Pages principales

### Accueil (/)

- Hero section impactante
- Présentation des services
- Zone de couverture
- Contenu SEO riche (1000+ mots)
- Appels à l'action multiples

### Services (/services)

- 8 services détaillés
- Descriptions complètes
- Contenu optimisé pour le SEO
- FAQ intégrée

### Tarifs (/tarifs)

- Grille tarifaire claire
- Prix fixes pour trajets populaires
- Transparence totale
- Devis gratuit

### Contact (/contact)

- Formulaire de réservation complet
- Coordonnées multiples
- Connexion avec le backend
- Informations de contact

### À Propos (/a-propos)

- Histoire de l'entreprise
- Valeurs et engagement
- Équipe de chauffeurs
- Témoignages clients

## 🔗 Connexion avec le Backend

Le formulaire de contact envoie les données au backend Node.js :

```
POST http://localhost:3001/api/contact
```

## 🚀 Déploiement

Le site est prêt pour un déploiement sur :

- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **VPS** avec Node.js

### Variables d'environnement à configurer

```env
NEXT_PUBLIC_API_URL=https://votre-backend.com
NEXT_PUBLIC_SITE_URL=https://www.taxi-antibes.fr
```

## 📊 Performance

- ⚡ Server-Side Rendering (SSR)
- 🎯 Static Generation pour les pages
- 📦 Code splitting automatique
- 🖼️ Images optimisées
- 🔄 Lazy loading
- 📱 Mobile-first design

## 🎯 Référencement Local

Le site est optimisé pour le référencement local :

- Coordonnées GPS d'Antibes
- Zone géographique (Alpes-Maritimes, 06)
- Villes couvertes (Antibes, Juan-les-Pins, Nice, Cannes...)
- Schema LocalBusiness
- Horaires d'ouverture 24h/24

## 📈 Prochaines améliorations possibles

- [ ] Système de réservation en temps réel
- [ ] Espace client
- [ ] Intégration Google Maps
- [ ] Chat en direct
- [ ] Blog SEO
- [ ] Multi-langue (EN, IT)
- [ ] Progressive Web App (PWA)

## 📞 Support

Pour toute question concernant le frontend :

- Email : dev@taxi-antibes.fr

---

Développé avec ❤️ pour Taxi Antibes - Service de Transport Premium sur la Côte d'Azur
