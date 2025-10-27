"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Activer le chargement
    setLoading(true);

    // Récupérer les articles depuis l'API
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        // Filtrer les articles en français uniquement
        const allPosts = data.posts || [];
        const filteredByLanguage = allPosts.filter(
          (post) => post.language === "fr"
        );

        setPosts(filteredByLanguage);
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Erreur:", error);
        setLoading(false);
      });
  }, []);

  const allCategoriesText = "Tous";
  const categories = [
    allCategoriesText,
    ...new Set(posts.map((post) => post.category)),
  ];

  const filteredPosts =
    selectedCategory === "Tous"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {loading ? (
        <div className="min-h-screen bg-gray-50 mt-16">
          {/* Hero Section Skeleton */}
          <section className="relative h-[40vh] overflow-hidden bg-gray-200">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300/90 to-gray-400/90"></div>
            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              <div className="text-white max-w-4xl">
                <div className="h-16 bg-gray-300 rounded mb-4 animate-pulse"></div>
                <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          </section>

          {/* Articles Skeleton */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <div className="h-48 bg-gray-200 animate-pulse"></div>
                    <div className="p-6">
                      <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                      <div className="h-6 bg-gray-200 rounded mb-3 animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded mb-2 animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded mb-2 animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded mb-4 animate-pulse"></div>
                      <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <section className="relative h-[40vh] overflow-hidden">
            <Image
              src="/bg-image.png"
              alt="Blog Taxi Antibes"
              fill
              className="object-cover"
              priority={true}
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-700/30 to-cyan-900/90"></div>
            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              <div className="text-white max-w-4xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  Blog & Actualités
                </h1>
                <p className="text-xl md:text-2xl">
                  Conseils et actualités sur le transport sur la Côte d'Azur
                </p>
              </div>
            </div>
          </section>

          {/* Filtres par catégorie */}
          <section className="py-8 bg-white border-b">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-cyan-700 text-center mb-6">
                Articles & Guides Pratiques
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Liste des articles */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              {loading ? (
                <div className="text-center py-20">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-700"></div>
                  <p className="mt-4 text-gray-600">
                    Chargement des articles...
                  </p>
                </div>
              ) : filteredPosts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-xl text-cyan-700">
                    Aucun article disponible pour le moment.
                  </p>
                  <p className="text-gray-500 mt-2">
                    Revenez bientôt pour découvrir nos actualités !
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <article
                      key={post.slug}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-4 py-2 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 text-white rounded-full text-sm font-semibold">
                              {post.category}
                            </span>
                          </div>
                        </div>
                      </Link>

                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>5 min</span>
                          </div>
                        </div>

                        <Link href={`/blog/${post.slug}`}>
                          <h2 className="text-2xl font-bold mb-3 text-cyan-700 hover:text-amber-600 transition-colors line-clamp-2">
                            {post.title}
                          </h2>
                        </Link>

                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>{post.author}</span>
                          </div>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent font-semibold hover:underline"
                          >
                            Lire plus →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 md:py-32 bg-gradient-to-b from-cyan-50/30 to-white">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance text-cyan-700">
                Besoin d'un taxi à Antibes ?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Réservez votre course dès maintenant
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border border-cyan-700 text-cyan-700 hover:bg-cyan-700/10 hover:text-white text-base px-8 py-6 rounded-xl"
                >
                  <a
                    href="tel:+33749777621"
                    className="flex items-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Appeler maintenant
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 hover:from-amber-500 hover:via-gold-600 hover:to-orange-500 text-white shadow-lg text-base px-8 py-6 gap-2 rounded-xl"
                >
                  <a href="/reservation">Réserver en ligne</a>
                </Button>
              </div>
            </div>
          </section>

          <Footer />
        </>
      )}
    </div>
  );
}
