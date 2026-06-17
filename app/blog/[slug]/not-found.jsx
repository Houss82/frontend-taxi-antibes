import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import Link from "next/link";

export const metadata = {
  title: "Article non trouvé | Taxi Antibes",
  description: "L'article que vous recherchez n'existe pas ou a été supprimé.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/blog", // ✅ Relatif, metadataBase gère le domaine (www)
  },
};

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold mb-6">
          <span>404</span>
          <span>Article introuvable</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-700 mb-6">
          Nous ne trouvons pas cette page
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          L&apos;article que vous recherchez n&apos;est plus disponible ou son
          adresse a changé. Découvrez nos derniers guides et actualités sur le
          blog.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="px-6 py-3 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-400 text-white rounded-lg font-semibold hover:shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Retourner au blog
          </Link>
          <Link
            href="/"
            className="px-6 py-3 border border-cyan-700 text-cyan-700 rounded-lg font-semibold hover:bg-cyan-700/10 transition-colors"
          >
            Accueil Taxi Antibes
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

