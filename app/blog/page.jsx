import { Suspense } from "react";
import { PageLayout } from "@/components/page-layout";
import { getAllPosts } from "@/lib/blog";
import { BlogPageClient } from "./blog-client";

const LANGUAGE_FILTER = "fr";

export const revalidate = 60;

export default function BlogPage({ searchParams }) {
  const posts = getAllPosts().filter((post) => post.language === LANGUAGE_FILTER);
  const selectedCategoryId = searchParams?.category || null;

  return (
    <PageLayout
      title="Blog & Actualités"
      subtitle="Conseils et actualités sur le transport sur la Côte d'Azur"
      backgroundImage="/blog-image.jpg"
    >
      <Suspense fallback={<div className="py-20 text-center">Chargement...</div>}>
        <BlogPageClient posts={posts} initialCategoryId={selectedCategoryId} />
      </Suspense>
    </PageLayout>
  );
}
