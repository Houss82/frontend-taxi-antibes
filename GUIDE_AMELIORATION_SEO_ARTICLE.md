# Guide : Amélioration SEO et Visuelle des Articles de Blog

Ce guide récapitule toutes les améliorations apportées pour optimiser les articles de blog en termes de SEO et de visuel.

## 📋 Table des matières

1. [Structure SEO de l'article](#structure-seo)
2. [Styles CSS pour les titres](#styles-titres)
3. [Containers visuels](#containers-visuels)
4. [Metadata dynamiques](#metadata-dynamiques)
5. [Schema JSON-LD](#schema-json-ld)
6. [Configuration Markdown](#configuration-markdown)

---

## 1. Structure SEO de l'article {#structure-seo}

### ✅ Points essentiels

- **1 seul H1** par page (dans le composant React, pas dans le Markdown)
- **H2 optimisés** avec mots-clés SEO dans les titres
- **Hiérarchie correcte** : H1 → H2 → H3 → H4
- **Contenu long** : minimum 2000 mots recommandé
- **Liens internes** : 10-15 liens vers pages importantes du site

### Structure recommandée dans le Markdown

```markdown
---
title: "Titre Optimisé avec Mots-Clés SEO"
date: "YYYY-MM-DD"
excerpt: "Description optimisée avec mots-clés (150-160 caractères)"
image: "/image-article.jpg"
category: "Catégorie"
author: "Nom Auteur"
language: "fr"
keywords: ["mot-clé principal", "mot-clé secondaire", "variation mot-clé"]
---

[Introduction sans H1 - le H1 est dans le composant React]

## H2 avec Mots-Clés SEO Optimisés

### H3 Sous-section

## Autre H2 avec Mots-Clés
```

---

## 2. Styles CSS pour les titres {#styles-titres}

### Fichier : `globals.css`

Ajouter ces styles dans la section `.prose` :

```css
/* Style pour le titre principal de l'article de blog */
.article-title {
  font-size: 2.5rem !important;
  line-height: 1.2 !important;
  font-weight: 700 !important;
  color: #0b4f6c !important;
  margin-top: 0 !important;
  margin-bottom: 1.5rem !important;
  padding: 1.5rem 1.5rem !important;
  padding-left: 1.25rem !important;
  background: linear-gradient(
    to right,
    rgba(11, 79, 108, 0.08) 0%,
    rgba(11, 79, 108, 0.03) 50%,
    transparent 100%
  ) !important;
  border-left: 5px solid #0b4f6c !important;
  border-bottom: 3px solid rgba(11, 79, 108, 0.2) !important;
  border-radius: 0.75rem !important;
  letter-spacing: -0.02em !important;
  box-shadow: 0 4px 12px rgba(11, 79, 108, 0.1) !important;
}

.prose h1 {
  @apply text-4xl font-bold text-gray-900 mt-8 mb-4;
  color: #0b4f6c !important;
  font-size: 2.5rem !important;
  line-height: 1.2 !important;
  margin-top: 2.5rem !important;
  margin-bottom: 1.5rem !important;
  padding-left: 1rem !important;
  padding-bottom: 0.75rem !important;
  border-bottom: 3px solid #0b4f6c !important;
  letter-spacing: -0.02em !important;
}

.prose h2 {
  @apply text-3xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-[#0B4F6C]/20;
  color: #0b4f6c !important;
  font-size: 2rem !important;
  font-weight: 700 !important;
  line-height: 1.3 !important;
  margin-top: 2.5rem !important;
  margin-bottom: 1.25rem !important;
  padding: 1rem 1.25rem !important;
  padding-left: 1rem !important;
  border-left: 4px solid #0b4f6c !important;
  border-bottom: 2px solid rgba(11, 79, 108, 0.15) !important;
  background: linear-gradient(
    to right,
    rgba(11, 79, 108, 0.05) 0%,
    transparent 100%
  ) !important;
  border-radius: 0.5rem !important;
  letter-spacing: -0.01em !important;
}

.prose h3 {
  @apply text-2xl font-semibold text-gray-800 mt-6 mb-3;
  color: #0b4f6c !important;
  font-size: 1.5rem !important;
  font-weight: 600 !important;
  line-height: 1.4 !important;
  margin-top: 2rem !important;
  margin-bottom: 1rem !important;
  padding-left: 0.75rem !important;
  padding-bottom: 0.5rem !important;
  border-bottom: 2px solid rgba(11, 79, 108, 0.1) !important;
  letter-spacing: -0.005em !important;
}

.prose h4 {
  @apply text-xl font-semibold text-gray-800 mt-4 mb-2;
  color: #0a4459 !important;
  font-size: 1.25rem !important;
  font-weight: 600 !important;
  line-height: 1.5 !important;
  margin-top: 1.5rem !important;
  margin-bottom: 0.75rem !important;
  padding-left: 0.75rem !important;
}

@media (min-width: 768px) {
  .article-title {
    font-size: 3rem !important;
    padding: 2rem 2rem !important;
    padding-left: 1.5rem !important;
  }
}

@media (max-width: 768px) {
  .article-title {
    font-size: 1.875rem !important;
    padding: 1.25rem 1rem !important;
    padding-left: 1rem !important;
  }

  .prose h1 {
    font-size: 2rem !important;
    margin-top: 2rem !important;
    padding-left: 0.75rem !important;
  }

  .prose h2 {
    font-size: 1.75rem !important;
    padding: 0.75rem 1rem !important;
    padding-left: 0.75rem !important;
    margin-top: 2rem !important;
  }

  .prose h3 {
    font-size: 1.375rem !important;
    margin-top: 1.5rem !important;
    padding-left: 0.5rem !important;
  }

  .prose h4 {
    font-size: 1.125rem !important;
    padding-left: 0.5rem !important;
  }
}
```

---

## 3. Containers visuels {#containers-visuels}

### Fichier : `globals.css`

Ajouter ces styles pour les containers avec backgrounds :

```css
/* Containers avec backgrounds légers pour structurer l'article */
.content-box,
.prose .content-box {
  background: #e8f4f8 !important;
  border: 1px solid #cfe2e8 !important;
  border-radius: 0.75rem !important;
  padding: 1.25rem 1.5rem !important;
  margin: 1.5rem 0 !important;
  border-left: 4px solid #0b4f6c !important;
  box-shadow: 0 2px 8px rgba(11, 79, 108, 0.08) !important;
}

.info-box,
.prose .info-box {
  background: linear-gradient(to right, #dbeafe 0%, #eff6ff 100%) !important;
  border: 1px solid #93c5fd !important;
  border-radius: 0.75rem !important;
  padding: 1.25rem 1.5rem !important;
  margin: 1.5rem 0 !important;
  border-left: 4px solid #0b4f6c !important;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12) !important;
}

.section-box,
.prose .section-box {
  background: #f1f5f9 !important;
  border: 1px solid #cbd5e1 !important;
  border-radius: 0.875rem !important;
  padding: 1.5rem 2rem !important;
  margin: 2rem 0 !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06) !important;
}

.highlight-box,
.prose .highlight-box {
  background: linear-gradient(135deg, #fde68a 0%, #fef3c7 100%) !important;
  border: 1px solid #f59e0b !important;
  border-radius: 0.75rem !important;
  padding: 1.25rem 1.5rem !important;
  margin: 1.5rem 0 !important;
  box-shadow: 0 3px 10px rgba(245, 158, 11, 0.15) !important;
}

.info-list,
.prose .info-list {
  background: #e2e8f0 !important;
  border-left: 4px solid #0b4f6c !important;
  border-radius: 0.5rem !important;
  padding: 1rem 1.5rem !important;
  margin: 1.25rem 0 !important;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05) !important;
}
```

### Utilisation dans le Markdown

```markdown
<div class="content-box">
Contenu important avec fond bleu clair
</div>

<div class="info-box">
Information importante avec fond bleu dégradé
</div>

<div class="section-box">
Section complète avec fond gris clair
</div>

<div class="highlight-box">
Point important à mettre en évidence
</div>

<div class="info-list">
- Liste avec fond spécial
- Item 2
</div>
```

---

## 4. Metadata dynamiques {#metadata-dynamiques}

### Fichier : `src/app/blog/[slug]/layout.jsx`

Créer ce fichier pour générer les metadata dynamiques :

```jsx
import { getPostBySlug } from "@/lib/blog";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article non trouvé | Votre Site",
      description: "L'article que vous recherchez n'existe pas.",
    };
  }

  const baseUrl = "https://www.votre-site.fr";
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `${baseUrl}${post.image}`;
  const keywordsStr = Array.isArray(post.keywords)
    ? post.keywords.join(", ")
    : post.keywords || "";

  return {
    title: `${post.title} | Votre Site`,
    description: post.excerpt || `Découvrez ${post.title.toLowerCase()}.`,
    keywords: keywordsStr,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blog/${slug}`,
      siteName: "Votre Site",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "fr_FR",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
      languages: {
        "fr-FR": `${baseUrl}/blog/${slug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "article:published_time": post.date,
      "article:author": post.author,
      "article:section": post.category,
    },
  };
}

export default function BlogPostLayout({ children }) {
  return children;
}
```

---

## 5. Schema JSON-LD {#schema-json-ld}

### Fichier : `src/app/blog/[slug]/page.jsx`

Ajouter dans le composant après le contenu :

```jsx
{
  /* Article Schema JSON-LD */
}
{
  post && (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          image: `https://www.votre-site.fr${post.image}`,
          datePublished: post.date,
          dateModified: post.date,
          author: {
            "@type": "Organization",
            name: post.author,
          },
          publisher: {
            "@type": "Organization",
            name: "Votre Site",
            logo: {
              "@type": "ImageObject",
              url: "https://www.votre-site.fr/logo.png",
            },
          },
          description: post.excerpt,
          articleSection: post.category,
          keywords: Array.isArray(post.keywords)
            ? post.keywords.join(", ")
            : post.keywords || "",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://www.votre-site.fr/blog/${post.slug}`,
          },
        }),
      }}
    />
  );
}

{
  /* FAQ Schema JSON-LD (optionnel) */
}
{
  post.slug === "votre-article-slug" && (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Votre question ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Votre réponse.",
              },
            },
            // Ajouter d'autres questions...
          ],
        }),
      }}
    />
  );
}
```

---

## 6. Configuration Markdown {#configuration-markdown}

### Support du HTML brut

### Fichier : `src/lib/blog.js`

Modifier la fonction `getPostBySlug` :

```javascript
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

// Dans getPostBySlug :
const processedContent = await remark()
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeStringify, { allowDangerousHtml: true })
  .process(content);
const contentHtml = processedContent.toString();
```

### Packages nécessaires

```bash
npm install rehype-raw remark-rehype rehype-stringify
```

---

## 7. Styles supplémentaires {#styles-supplementaires}

### Sommaire, Badges, Callouts, CTA, FAQ

Ajouter dans `globals.css` :

```css
/* Sommaire (TOC) */
.toc {
  margin: 1rem 0 1.25rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  background: #f8fafc;
}

.toc summary {
  cursor: pointer;
  font-weight: 600;
}

.toc ol {
  margin: 0.5rem 0 0;
  padding-left: 1.25rem;
}

.toc a {
  text-decoration: none;
  color: #0b4f6c;
}

/* Badges KPI */
.kpi-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0 1.25rem;
}

.badge {
  display: inline-block;
  padding: 0.35rem 0.6rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.9rem;
}

.badge.success {
  background: #e8f7ec;
  color: #1b7f3a;
  border: 1px solid #cdebd6;
}

.badge.info {
  background: #eaf5ff;
  color: #0b4f6c;
  border: 1px solid #d6e9ff;
}

.badge.neutral {
  background: #f4f4f5;
  color: #27272a;
  border: 1px solid #e4e4e7;
}

.badge.accent {
  background: #fff1f2;
  color: #9f1239;
  border: 1px solid #ffe4e6;
}

/* Callouts */
.callout {
  border-radius: 0.75rem;
  padding: 0.9rem 1rem;
  margin: 1rem 0;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}

.callout.info {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.callout.warn {
  background: #fffbeb;
  border-color: #fde68a;
}

.callout.tip {
  background: #f0fdf4;
  border-color: #bbf7d0;
}

/* Grille cartes avantages */
.grid-cards {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0.75rem 0 1rem;
}

@media (min-width: 768px) {
  .grid-cards {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.grid-cards .card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 0.9rem;
  line-height: 1.4;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.grid-cards .card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

/* CTA */
.cta {
  text-align: center;
  margin: 1.25rem 0 1.5rem;
}

.cta-button,
.prose .cta-button {
  display: inline-block !important;
  background: #0b4f6c !important;
  color: #ffffff !important;
  font-weight: 700 !important;
  padding: 0.8rem 1.1rem !important;
  border-radius: 0.75rem !important;
  text-decoration: none !important;
  border: none !important;
}

.cta-button:hover,
.prose .cta-button:hover {
  opacity: 0.95 !important;
  background: #0a4459 !important;
  color: #ffffff !important;
}

.cta-sub,
.prose .cta-sub {
  margin-top: 0.35rem !important;
  font-size: 0.95rem !important;
  color: #475569 !important;
}

/* FAQ accordéon */
.faq {
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  margin: 0.6rem 0;
  background: #fff;
}

.faq summary {
  cursor: pointer;
  font-weight: 600;
}

.faq[open] {
  background: #f8fafc;
}
```

---

## 8. Sitemap {#sitemap}

### Fichier : `src/app/sitemap.jsx`

S'assurer que les articles sont dans le sitemap :

```jsx
import { getAllPosts } from "@/lib/blog";

export default function sitemap() {
  const baseUrl = "https://www.votre-site.fr";
  const currentDate = new Date().toISOString();

  // Récupérer tous les articles de blog
  const blogPosts = getAllPosts();
  const blogUrls = blogPosts
    .filter((post) => post.language === "fr")
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date).toISOString() : currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  return [
    // ... autres URLs
    ...blogUrls,
  ];
}
```

---

## 9. Checklist d'application {#checklist}

### Étape par étape pour appliquer à un autre projet :

1. **Styles CSS**

   - [ ] Copier les styles `.article-title` dans `globals.css`
   - [ ] Copier les styles `.prose h1, h2, h3, h4` dans `globals.css`
   - [ ] Copier les styles containers (`.content-box`, `.info-box`, etc.)
   - [ ] Copier les styles sommaire, badges, callouts, CTA, FAQ

2. **Configuration Markdown**

   - [ ] Installer `rehype-raw`, `remark-rehype`, `rehype-stringify`
   - [ ] Modifier `src/lib/blog.js` pour supporter le HTML brut

3. **Metadata dynamiques**

   - [ ] Créer `src/app/blog/[slug]/layout.jsx` avec `generateMetadata`
   - [ ] Adapter l'URL de base (`baseUrl`)

4. **Schema JSON-LD**

   - [ ] Ajouter Article Schema dans `page.jsx`
   - [ ] Ajouter FAQ Schema si nécessaire
   - [ ] Adapter les URLs et noms d'organisation

5. **Composant React**

   - [ ] Utiliser la classe `article-title` pour le H1
   - [ ] Ajouter les Scripts JSON-LD

6. **Sitemap**

   - [ ] Vérifier que les articles sont dans le sitemap
   - [ ] Adapter l'URL de base

7. **Test**
   - [ ] Vérifier que le HTML brut fonctionne dans les articles
   - [ ] Vérifier que les styles s'appliquent correctement
   - [ ] Vérifier les metadata dans le code source
   - [ ] Tester le sitemap

---

## 10. Exemple de structure d'article {#exemple}

```markdown
---
title: "Titre Optimisé avec Mots-Clés Principaux"
date: "2025-01-20"
excerpt: "Description optimisée avec mots-clés (150-160 caractères)"
image: "/article-image.jpg"
category: "Catégorie"
author: "Auteur"
language: "fr"
keywords: ["mot-clé principal", "variation 1", "variation 2"]
---

[Introduction sans H1]

<!-- SOMMAIRE -->
<details class="toc">
  <summary>🧭 Sommaire rapide</summary>
  <ol>
    <li><a href="#section-1">Section 1</a></li>
    <li><a href="#section-2">Section 2</a></li>
  </ol>
</details>

<!-- BADGES KPI -->
<div class="kpi-strip">
  <span class="badge success">✅ Badge 1</span>
  <span class="badge info">🕒 Badge 2</span>
</div>

<!-- CALL OUT -->
<div class="callout info">
  <strong>À retenir :</strong> Information importante.
</div>

## H2 avec Mots-Clés SEO Optimisés

<div class="content-box">
Contenu avec fond bleu clair
</div>

### H3 Sous-section

<div class="info-box">
Information importante
</div>

## Autre H2

<div class="section-box">
Section complète
</div>

<div class="cta">
  <a class="cta-button" href="/page">📲 Action</a>
  <p class="cta-sub">Informations complémentaires</p>
</div>

## FAQ

<details class="faq">
  <summary>Question ?</summary>
  Réponse...
</details>
```

---

## 🎨 Personnalisation des couleurs

Adapter les couleurs dans tous les styles CSS :

- `#0b4f6c` → Votre couleur principale
- `#0a4459` → Votre couleur principale foncée
- `#7B287D` → Votre couleur secondaire (si applicable)

---

## ✅ Checklist SEO finale

Avant publication, vérifier :

- [ ] 1 seul H1 par page
- [ ] H2 optimisés avec mots-clés
- [ ] Contenu minimum 2000 mots
- [ ] 10-15 liens internes
- [ ] Metadata complètes (title, description, keywords)
- [ ] Schema JSON-LD (Article + FAQ si applicable)
- [ ] Image avec alt text
- [ ] Article dans le sitemap
- [ ] Robots.txt permet l'indexation
- [ ] URL canonique définie

---

## 📝 Notes importantes

1. **Pas de H1 dans le Markdown** : Le H1 est dans le composant React
2. **HTML brut supporté** : Utiliser `rehype-raw` pour les containers
3. **Couleurs adaptables** : Remplacer `#0b4f6c` par votre couleur principale
4. **URLs à adapter** : Remplacer `taxi-conventionne-antibes.fr` par votre domaine
5. **Responsive** : Tous les styles incluent des media queries

---

**Date de création :** 2025-01-20  
**Version :** 1.0
