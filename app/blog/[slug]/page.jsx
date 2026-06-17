import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ShareButton } from "@/components/share-button";
import { Button } from "@/components/ui/button";
import { getAllPostSlugs, getAllPosts, getPostBySlug } from "@/lib/blog";
import { Calendar, Clock, Phone, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export const revalidate = 3600;

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((relatedPost) => relatedPost.slug !== slug)
    .slice(0, 3);

  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `https://www.taxi-antibes.fr${post.image}`; // ✅ Version canonique avec www

  // Extraire les questions FAQ du contenu HTML
  const extractFAQFromContent = (htmlContent) => {
    const faqItems = [];
    if (!htmlContent) return faqItems;

    // Utiliser une regex pour extraire les questions et réponses des balises <details>
    // Pattern: <details>...<summary>question (peut contenir <span>)</summary>...<div>answer</div>...</details>
    const detailsRegex = /<details[^>]*>[\s\S]*?<summary[^>]*>([^<]*(?:<[^>]+>[^<]*<\/[^>]+>[^<]*)*)<\/summary>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>[\s\S]*?<\/details>/gi;
    let match;

    while ((match = detailsRegex.exec(htmlContent)) !== null) {
      // Nettoyer la question (supprimer les balises HTML comme <span>)
      let question = match[1]
        .replace(/<[^>]+>/g, '') // Supprimer les balises HTML
        .replace(/\s+/g, ' ') // Remplacer les espaces multiples par un seul
        .trim();

      // Nettoyer la réponse HTML pour obtenir le texte brut
      let answer = match[2]
        .replace(/<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/gi, '$2 ($1)') // Convertir les liens en texte avec URL
        .replace(/<[^>]+>/g, ' ') // Supprimer les autres balises HTML
        .replace(/\s+/g, ' ') // Remplacer les espaces multiples par un seul
        .trim();

      if (question && answer) {
        faqItems.push({ question, answer });
      }
    }

    return faqItems;
  };

  const faqItems = extractFAQFromContent(post.contentHtml);

  // Si aucune FAQ n'est trouvée dans le contenu, utiliser des questions par défaut
  const defaultFaqItems = [
    {
      question: "Le trajet est-il direct ?",
      answer:
        "Oui, nous vous déposons directement à destination sans changement ni marche supplémentaire.",
    },
    {
      question: "Pouvez-vous organiser une excursion d'une demi-journée ?",
      answer:
        "Oui, nous pouvons rester sur place et vous reconduire à l'heure souhaitée ou organiser un circuit personnalisé.",
    },
    {
      question: "Proposez-vous des sièges enfants ?",
      answer:
        "Oui, nous fournissons gratuitement des sièges adaptés sur simple demande lors de la réservation.",
    },
  ];

  const finalFaqItems = faqItems.length > 0 ? faqItems : defaultFaqItems;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author || "Taxi Antibes",
    },
    publisher: {
      "@type": "Organization",
      name: "Taxi Antibes",
      logo: {
        "@type": "ImageObject",
        url: "https://www.taxi-antibes.fr/logo.png", // ✅ Version canonique avec www
      },
    },
    description: post.excerpt,
    articleSection: post.category,
    keywords: Array.isArray(post.keywords)
      ? post.keywords.join(", ")
      : post.keywords || "",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.taxi-antibes.fr/blog/${post.slug}`, // ✅ Version canonique avec www
    },
  };

  const faqSchema =
    finalFaqItems.length > 0
      ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
          mainEntity: finalFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
        }
      : null;

  // Schema TaxiService spécifique pour les articles "taxi gare Antibes" et "taxi antibes numero"
  const taxiServiceSchema =
    post.slug === "taxi-gare-sncf-antibes-guide-complet" ||
    post.slug === "taxi-antibes-numero-officiel"
      ? {
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: "Taxi Antibes",
          telephone: "+33749777621",
          areaServed: [
            "Antibes",
            "Juan-les-Pins",
            "Cap d'Antibes",
            "Cannes",
            "Nice",
            "Monaco",
            "Sophia Antipolis",
          ],
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: "https://www.taxi-antibes.fr/reservation", // ✅ Version canonique avec www
            availableLanguage: ["fr"],
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Antibes",
            postalCode: "06600",
            addressCountry: "FR",
          },
        }
      : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <article className="py-16 mt-10 md:mt-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 text-white rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="article-title">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>5 min de lecture</span>
            </div>
            <ShareButton
              title={post.title}
              excerpt={post.excerpt}
              className="flex items-center gap-2 text-cyan-700 hover:text-amber-600 transition-colors"
            />
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              style={{ objectPosition: post.imagePosition }}
              priority
              quality={100}
            />
          </div>

          <div
            className="prose prose-xl max-w-none text-gray-700 leading-relaxed prose-headings:text-cyan-700 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-cyan-800 prose-a:text-cyan-600 hover:prose-a:text-amber-500"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <Script
            id="article-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                [
                  articleSchema,
                  ...(faqSchema ? [faqSchema] : []),
                  ...(taxiServiceSchema ? [taxiServiceSchema] : []),
                ]
              ),
            }}
          />

          {post.keywords && post.keywords.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-5 h-5 text-gray-500" />
                {post.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 p-8 bg-gradient-to-r from-cyan-700 to-cyan-900 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Besoin d'un{" "}
              <Link href="/" className="underline font-semibold hover:text-amber-300">
                taxi à Antibes
              </Link>
              ?
            </h3>
            <p className="text-lg mb-6">
              Réservez dès maintenant votre course avec{" "}
              <Link href="/" className="underline font-semibold hover:text-amber-300">
                Taxi Antibes
              </Link>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-cyan-700 hover:bg-white/90 rounded-xl"
              >
                <a href="tel:+33749777621" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Appeler maintenant
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-white text-cyan-700 hover:bg-white/10 hover:text-white rounded-xl"
              >
                <Link href="/reservation">Réserver en ligne</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-cyan-700 mb-8 text-center">
              Articles similaires
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-cyan-700 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
