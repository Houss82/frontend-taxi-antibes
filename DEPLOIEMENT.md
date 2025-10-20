# 🚀 Guide de Déploiement Frontend - Taxi Antibes

## 📋 Prérequis

Votre backend est déjà déployé sur :

```
https://backend-taxi-antibes.vercel.app
```

## 🎯 Déploiement sur Vercel (Recommandé)

### Étape 1 : Configuration de l'environnement

Créez un fichier `.env.production` avec :

```env
NEXT_PUBLIC_API_URL=https://backend-taxi-antibes.vercel.app
```

### Étape 2 : Déploiement sur Vercel

#### Option A : Via GitHub (Recommandé)

1. **Créez un repo GitHub** (si pas encore fait) :

```bash
cd /Users/houssemmansour/dev-folder/project-cursor/taxi-Antibes/frontend
git init
git add .
git commit -m "Initial commit - Taxi Antibes frontend"
git branch -M main
git remote add origin https://github.com/votre-username/taxi-antibes-frontend.git
git push -u origin main
```

2. **Déployez sur Vercel** :
   - Allez sur https://vercel.com
   - Cliquez sur "New Project"
   - Importez votre repo GitHub
   - Vercel détectera automatiquement Next.js
   - Ajoutez la variable d'environnement :
     - Name: `NEXT_PUBLIC_API_URL`
     - Value: `https://backend-taxi-antibes.vercel.app`
   - Cliquez sur "Deploy"

#### Option B : Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Ajouter la variable d'environnement
vercel env add NEXT_PUBLIC_API_URL

# Puis entrez : https://backend-taxi-antibes.vercel.app

# Redéployer pour production
vercel --prod
```

### Étape 3 : Configuration DNS (optionnel)

Si vous avez un nom de domaine (ex: www.taxi-antibes.fr) :

1. Dans Vercel, allez dans Settings → Domains
2. Ajoutez votre domaine
3. Configurez les DNS chez votre registrar :
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

## 🧪 Tester le déploiement

Une fois déployé, testez :

```bash
# Votre frontend sera sur :
https://votre-app.vercel.app

# Testez le formulaire de réservation
# Les données doivent être envoyées au backend
```

## ✅ Checklist avant déploiement

- [x] Backend déployé et fonctionnel
- [ ] Variable d'environnement `NEXT_PUBLIC_API_URL` configurée
- [ ] Frontend compilé sans erreur (`npm run build`)
- [ ] Test du formulaire de réservation
- [ ] Image hero uploadée (`/public/luxury-black-car-driving-on-french-riviera-coastal.jpg`)

## 📊 Après le déploiement

### Configuration SEO recommandée :

1. **Google Search Console**

   - Ajoutez votre domaine
   - Soumettez le sitemap : `https://votre-domaine.fr/sitemap.xml`

2. **Google Analytics**

   - Déjà configuré avec @vercel/analytics

3. **Google My Business**
   - Créez votre fiche entreprise
   - Catégorie : Service de taxi
   - Ajoutez photos et informations

## 🔧 Variables d'environnement

Pour le déploiement, configurez dans Vercel :

```env
NEXT_PUBLIC_API_URL=https://backend-taxi-antibes.vercel.app
NEXT_PUBLIC_SITE_URL=https://www.taxi-antibes.fr
```

## 📱 Test de connexion Backend

Le formulaire envoie les données à :

```
POST https://backend-taxi-antibes.vercel.app/users/reservation
```

Données envoyées :

```json
{
  "nom": "string",
  "telephone": "string",
  "email": "string",
  "adresseDepart": "string",
  "adresseArrivee": "string",
  "date": "YYYY-MM-DD",
  "heure": "HH:MM",
  "nombrePassagers": "string",
  "nombreBagages": "string",
  "commentaires": "string"
}
```

## 🎉 Voilà !

Votre frontend sera déployé et connecté à votre backend ! 🚀

---

**Note :** Le fichier `.env.production` est déjà créé avec la bonne URL du backend.






