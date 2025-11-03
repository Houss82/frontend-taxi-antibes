"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Phone, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (params.slug) {
      // Récupérer l'article
      fetch(`/api/blog/${params.slug}`)
        .then((res) => res.json())
        .then((data) => {
          setPost(data.post);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Erreur:", error);
          setLoading(false);
        });

      // Récupérer les articles similaires
      fetch("/api/blog")
        .then((res) => res.json())
        .then((data) => {
          const filtered = (data.posts || [])
            .filter((p) => p.slug !== params.slug)
            .slice(0, 3);
          setRelatedPosts(filtered);
        });
    }
  }, [params.slug]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        })
        .catch((error) => console.log("Erreur de partage:", error));
    } else {
      // Copier le lien
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié dans le presse-papier !");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center mt-16">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-700"></div>
          <p className="mt-4 text-gray-600">Chargement de l'article...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center ">
          <h1 className="text-4xl font-bold text-cyan-700 mb-4">
            Article non trouvé
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            L'article que vous recherchez n'existe pas ou a été supprimé.
          </p>
          <Link
            href="/blog"
            className="px-6 py-3 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 text-white rounded-lg font-semibold hover:shadow-lg transition-colors"
          >
            Retour au blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Article */}
      <article className="py-16 mt-10 md:mt-10">
        <div className="max-w-4xl mx-auto px-4">
          {/* En-tête */}
          <div className="mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 text-white rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="article-title">
            {post.title}
          </h1>

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
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-cyan-700 hover:text-amber-600 transition-colors"
            >
              <span>Partager</span>
            </button>
          </div>

          {/* Image principale */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority={true}
              quality={100}
            />
          </div>

          {/* Contenu */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Article Schema JSON-LD */}
          {post && (
            <Script
              id="article-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  headline: post.title,
                  image: `https://www.taxi-antibes.fr${post.image}`,
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
                      url: "https://www.taxi-antibes.fr/logo.png",
                    },
                  },
                  description: post.excerpt,
                  articleSection: post.category,
                  keywords: Array.isArray(post.keywords)
                    ? post.keywords.join(", ")
                    : post.keywords || "",
                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": `https://www.taxi-antibes.fr/blog/${post.slug}`,
                  },
                }),
              }}
            />
          )}

          {/* Mots-clés */}
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

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-cyan-700 to-cyan-900 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Besoin d'un{" "}
              <span className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent">
                taxi à Antibes
              </span>
              ?
            </h3>
            <p className="text-lg mb-6">
              Réservez dès maintenant votre course avec Taxi Antibes
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

      {/* Articles similaires */}
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
