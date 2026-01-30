import { getPostBySlug } from "@/lib/blog";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article non trouvé | Taxi Antibes",
      description: "L'article que vous recherchez n'existe pas.",
    };
  }

  const baseUrl = "https://www.taxi-antibes.fr"; // ✅ Version canonique avec www
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `${baseUrl}${post.image}`;
  return {
    title: `${post.title} | Taxi Antibes`,
    description: post.excerpt || `Découvrez ${post.title.toLowerCase()}.`,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blog/${slug}`,
      siteName: "Taxi Antibes",
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

