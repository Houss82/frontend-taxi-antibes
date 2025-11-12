import { PageLayout } from "@/components/page-layout";
import { getAllPosts } from "@/lib/blog";
import { BlogPageClient } from "./blog-client";

const LANGUAGE_FILTER = "fr";

export const revalidate = 60;

export default function BlogPage() {
  const posts = getAllPosts().filter((post) => post.language === LANGUAGE_FILTER);

  return (
    <PageLayout
      title="Blog & Actualités"
      subtitle="Conseils et actualités sur le transport sur la Côte d'Azur"
      backgroundImage="/blog-image.jpg"
    >
      <BlogPageClient posts={posts} />
    </PageLayout>
  );
}
