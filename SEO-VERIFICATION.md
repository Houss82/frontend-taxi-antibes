# 🎯 Guide de Vérification SEO - Taxi Antibes

## ✅ Modifications effectuées

### 1. **Architecture SSR/SSG optimale**

- ✅ `app/layout.jsx` : composant serveur avec `generateMetadata()`
- ✅ `app/page.jsx` : composant serveur avec H1/H2 SSR + `export const dynamic = "force-static"`
- ✅ `app/ClientProviders.jsx` : isolation des composants client (Analytics, HydrationFix)

### 2. **Métadonnées SEO complètes**

- ✅ Title, description, keywords optimisés
- ✅ Open Graph (Facebook) et Twitter Cards
- ✅ Canonical URL
- ✅ Métadonnées géographiques (geo.region, geo.position)
- ✅ Robots (index, follow)

### 3. **Schema.org JSON-LD amélioré**

- ✅ Type: `TaxiService`
- ✅ ID unique avec `@id`
- ✅ Coordonnées GPS précises
- ✅ Zones desservies (structured data)
- ✅ Action de réservation (`ReserveAction`)

### 4. **Contenu SEO-friendly**

- ✅ **H1 unique** : "Taxi Antibes – Transferts Aéroport Nice 24/7"
- ✅ **H2 descriptif** : "Service premium sur toute la Côte d'Azur"
- ✅ Texte riche avec mots-clés naturels
- ✅ Section trajets populaires (H3, H4) avec contenu utile
- ✅ Images Next/Image optimisées avec ALT descriptifs
- ✅ Aucun contenu caché (display:none)

---

## 🧪 Comment vérifier que tout fonctionne ?

### Test 1 : View Source (HTML initial)

```bash
# Lancer le serveur de dev
npm run dev

# Dans ton navigateur :
# 1. Ouvre http://localhost:3000
# 2. Clic droit → "Afficher le code source de la page"
# 3. Cherche (Ctrl+F) :
#    - <h1> : tu dois voir "Taxi Antibes"
#    - <h2> : tu dois voir "Service premium"
#    - "application/ld+json" : tu dois voir le JSON-LD TaxiService
#    - <title> : tu dois voir le titre complet
```

**✅ BON signe** : Tu vois H1, H2, le texte descriptif et le JSON-LD directement dans la source HTML.

**❌ MAUVAIS signe** : Si tu vois seulement `<div id="__next"></div>` sans contenu → problème de SSR.

---

### Test 2 : Next.js Build & Export

```bash
# Construis le site en production
npm run build

# Vérifie les routes générées
# Tu devrais voir :
# ○ / (Static) ou ● / (SSG)
```

**✅ BON signe** : La page d'accueil est marquée `○` (Static) ou `●` (SSG).

**❌ MAUVAIS signe** : Si marquée `λ` (Lambda/SSR dynamique) → force-static ne fonctionne pas.

---

### Test 3 : Screaming Frog SEO Spider

1. **Télécharge** [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) (gratuit jusqu'à 500 URLs)
2. **Configure** : Mode → Spider → Render → JavaScript (activer)
3. **Crawl** ton site : `http://localhost:3000` ou ton URL de production
4. **Vérifications** :
   - **Onglet "Internal"** → Ta page d'accueil doit être indexable (Status 200)
   - **Onglet "Page Titles"** → Doit afficher le titre complet
   - **Onglet "Meta Description"** → Doit afficher la description
   - **Onglet "H1"** → Doit afficher "Taxi Antibes – Transferts Aéroport Nice 24/7"
   - **Onglet "H2"** → Doit afficher "Service premium sur toute la Côte d'Azur"
   - **Onglet "Structured Data"** → Doit détecter le JSON-LD TaxiService

---

### Test 4 : Google Rich Results Test

```bash
# Une fois déployé en production :
# 1. Va sur https://search.google.com/test/rich-results
# 2. Entre l'URL : https://taxi-antibes.fr
# 3. Clique sur "Tester l'URL"
```

**✅ BON signe** : Google détecte le LocalBusiness/TaxiService avec toutes les infos.

---

### Test 5 : PageSpeed Insights

```bash
# URL : https://pagespeed.web.dev/
# Entre ton URL de production
```

**Vérifie** :

- **SEO Score** : doit être > 90/100
- **Accessibilité** : > 90/100
- **Best Practices** : > 90/100

---

## 📊 Checklist finale SEO

| Critère                                           | Status |
| ------------------------------------------------- | ------ |
| ✅ H1 unique présent dans la source HTML          | ✓      |
| ✅ H2 descriptif visible                          | ✓      |
| ✅ Meta title < 60 caractères                     | ✓      |
| ✅ Meta description < 160 caractères              | ✓      |
| ✅ Canonical URL défini                           | ✓      |
| ✅ Open Graph complet                             | ✓      |
| ✅ JSON-LD Schema.org                             | ✓      |
| ✅ Images avec ALT descriptifs                    | ✓      |
| ✅ Pas de contenu caché (display:none)            | ✓      |
| ✅ Texte riche avec mots-clés                     | ✓      |
| ✅ Structure sémantique (nav, main, section)      | ✓      |
| ✅ Liens internes (réservation, tarifs, services) | ✓      |

---

## 🚀 Déploiement

Après déploiement sur Vercel/Netlify :

1. **Vérifier la source HTML** en production
2. **Crawler avec Screaming Frog**
3. **Soumettre le sitemap** à Google Search Console
   ```
   https://taxi-antibes.fr/sitemap.xml
   ```
4. **Demander une indexation** dans GSC pour la page d'accueil

---

## 💡 Points clés pour maintenir le SEO

### ✅ À FAIRE

- Garder `app/page.jsx` et `app/layout.jsx` en **composants serveur** (sans "use client")
- Toujours utiliser `generateMetadata()` pour les meta tags
- Utiliser `next/image` pour toutes les images
- Ajouter des ALT descriptifs sur les images
- Maintenir un H1 unique par page

### ❌ À ÉVITER

- ❌ Ne JAMAIS envelopper `{children}` dans un provider client dans layout.jsx
- ❌ Ne PAS utiliser plusieurs H1 sur la même page
- ❌ Ne PAS cacher du contenu avec `display:none` pour le SEO
- ❌ Ne PAS charger tout le contenu en JavaScript côté client

---

## 📞 En cas de problème

Si le contenu n'apparaît pas dans la source HTML :

1. Vérifie qu'il n'y a pas de `"use client"` dans `app/page.jsx`
2. Vérifie que `ClientProviders` est bien **à côté** de `{children}`, pas autour
3. Essaye `npm run build` et vérifie que la route est bien Static

Si les meta tags ne s'affichent pas :

1. Vérifie que `generateMetadata()` retourne bien un objet
2. Vérifie qu'il n'y a pas d'erreur dans la console serveur
3. Essaye de vider le cache du navigateur (Ctrl+Shift+R)

---

## 🎉 Résultat attendu

Quand tu fais **clic droit → Afficher le code source**, tu dois voir quelque chose comme :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <title>
      Taxi Antibes - Transferts Aéroport Nice 24/7 | Service Premium Côte d'Azur
    </title>
    <meta
      name="description"
      content="Service de taxi officiel à Antibes. Transferts aéroport Nice..."
    />
    <link rel="canonical" href="https://taxi-antibes.fr" />
    <script type="application/ld+json">
      {"@context":"https://schema.org","@type":"TaxiService",...}
    </script>
  </head>
  <body>
    <main>
      <section>
        <h1>Taxi Antibes – Transferts Aéroport Nice 24/7</h1>
        <h2>Service premium sur toute la Côte d'Azur</h2>
        <p>Service de taxi officiel à Antibes...</p>
      </section>
    </main>
  </body>
</html>
```

Tout est **dans le HTML initial**, pas chargé en JavaScript !

---

Bon référencement ! 🚀🎯
