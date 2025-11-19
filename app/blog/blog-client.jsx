"use client";

import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Phone,
  Car,
  Compass,
  Building2,
  Heart,
  BookOpen,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import blogCategories, {
  getCategoryIdFromArticleCategory,
  getCategoryById,
} from "@/lib/blogCategories";

export function BlogPageClient({ posts: initialPosts = [], initialCategoryId = null }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    initialCategoryId || null
  );

  // Synchroniser avec l'URL
  useEffect(() => {
    const categoryFromUrl = searchParams?.get("category");
    if (categoryFromUrl && categoryFromUrl !== selectedCategoryId) {
      setSelectedCategoryId(categoryFromUrl);
    } else if (!categoryFromUrl && selectedCategoryId) {
      setSelectedCategoryId(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const posts = useMemo(
    () =>
      Array.isArray(initialPosts)
        ? initialPosts.map((post) => ({
            ...post,
            category: post.category || "Actualités",
            author: post.author || "Taxi Antibes",
          }))
        : [],
    [initialPosts]
  );

  const selectedCategory = selectedCategoryId
    ? getCategoryById(selectedCategoryId)
    : null;

  // Filtrer les articles selon la catégorie sélectionnée
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) {
      return posts;
    }
    return posts.filter((post) => {
      const postCategoryId = getCategoryIdFromArticleCategory(post.category);
      return postCategoryId === selectedCategoryId;
    });
  }, [posts, selectedCategory, selectedCategoryId]);

  const displayedPosts = selectedCategory ? filteredPosts : filteredPosts;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Mapping des icônes
  const iconMap = {
    Car: Car,
    Compass: Compass,
    Building2: Building2,
    Heart: Heart,
    BookOpen: BookOpen,
  };

  const handleCategoryClick = (categoryId) => {
    if (categoryId === selectedCategoryId) {
      // Si la catégorie est déjà sélectionnée, on la désélectionne
      router.push("/blog");
      setSelectedCategoryId(null);
    } else {
      // Sinon, on sélectionne la nouvelle catégorie
      router.push(`/blog?category=${categoryId}`);
      setSelectedCategoryId(categoryId);
    }
  };

  return (
    <>
      {/* Section Catégories */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-cyan-700 mb-4">
              Explorez nos catégories
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez nos articles organisés par thématiques pour trouver
              rapidement l&apos;information dont vous avez besoin.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogCategories.map((category) => {
              const isActive = selectedCategoryId === category.id;
              const categoryPosts = posts.filter((post) => {
                const postCategoryId = getCategoryIdFromArticleCategory(
                  post.category
                );
                return postCategoryId === category.id;
              });
              const postCount = categoryPosts.length;

              const IconComponent = iconMap[category.icon] || Car;

              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`block w-full text-left rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-2 ${
                    isActive
                      ? `${category.color.bg} ${category.color.border} border-2`
                      : `bg-white ${category.color.border} hover:${category.color.hover}`
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`${category.color.iconBg} ${category.color.iconColor} p-3 rounded-xl flex-shrink-0`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3
                          className={`text-xl font-bold ${
                            isActive ? category.color.text : "text-gray-900"
                          }`}
                        >
                          {category.label}
                        </h3>
                        {postCount > 0 && (
                          <span
                            className={`px-2 py-1 ${category.color.bg} ${category.color.text} rounded-full text-xs font-semibold ml-2 flex-shrink-0`}
                          >
                            {postCount}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          {selectedCategory && (
            <div className="mt-6 text-center">
              <button
                onClick={() => handleCategoryClick(selectedCategoryId)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Voir tous les articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Section Articles */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-cyan-700 mb-4">
              {selectedCategory
                ? `Articles : ${selectedCategory.label}`
                : "Dernières publications"}
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {selectedCategory
                ? `Découvrez tous nos articles dans la catégorie "${selectedCategory.label}".`
                : "Retrouvez nos articles dédiés aux transferts aéroport de Nice, aux trajets vers Monaco, Cannes ou Antibes et à nos services conventionnés."}
            </p>
          </div>
        </div>
      </section>

      {/* Liste des Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {displayedPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-cyan-700">
                Aucun article disponible pour le moment.
              </p>
              <p className="text-gray-500 mt-2">
                Revenez bientôt pour découvrir nos actualités&nbsp;!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPosts.map((post) => {
                const postCategoryId = getCategoryIdFromArticleCategory(
                  post.category
                );
                const postCategory = postCategoryId
                  ? getCategoryById(postCategoryId)
                  : null;

                return (
                  <article
                    key={post.slug}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative">
                      <Link href={`/blog/${post.slug}`} prefetch>
                        <div className="relative h-64 overflow-hidden group">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            style={{ objectPosition: post.imagePosition }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                            priority={post.slug === displayedPosts[0]?.slug}
                          />
                        </div>
                      </Link>
                      {postCategory && (
                        <Link
                          href={`/blog?category=${postCategory.id}`}
                          className="absolute top-4 left-4 z-10"
                        >
                          <span
                            className={`px-3 py-1 ${postCategory.color.bg} ${postCategory.color.text} rounded-full text-xs font-semibold uppercase tracking-wide hover:opacity-80 transition-opacity border ${postCategory.color.border}`}
                          >
                            {postCategory.label}
                          </span>
                        </Link>
                      )}
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          5 min
                        </span>
                      </div>
                      <Link href={`/blog/${post.slug}`} prefetch>
                        <h2 className="text-2xl font-bold text-cyan-700 leading-tight hover:text-amber-600 transition-colors">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <Link
                          href={`/blog/${post.slug}`}
                          prefetch
                          className="bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 bg-clip-text text-transparent font-semibold hover:underline"
                        >
                          Lire plus →
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gradient-to-b from-cyan-50/30 to-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance text-cyan-700">
            Besoin d&apos;un taxi à Antibes&nbsp;?
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
              <a href="tel:+33749777621" className="flex items-center gap-2">
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
    </>
  );
}
