import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/blog";
import { Car, CheckCircle, MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { sectorData, sectorSlugs } from "./data";

export async function generateStaticParams() {
  return sectorSlugs.map((slug) => ({ slug }));
}

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = sectorData[slug];

  if (!data) {
    return {};
  }

  const title = `${data.hero.title} | Taxi Antibes`;
  const description =
    data.introduction[0]?.slice(0, 155) ??
    `Taxi Antibes - Chauffeur privé ${data.cityName}.`;
  const canonical = `https://www.taxi-antibes.fr/secteurs/${data.slug}`;

  return {
    title,
    description,
    keywords: [
      `taxi ${data.cityName.toLowerCase()}`,
      `chauffeur privé ${data.cityName.toLowerCase()}`,
      `transfert ${data.cityName.toLowerCase()}`,
      "taxi antibes",
    ],
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images: [
        {
          url: `https://www.taxi-antibes.fr${data.hero.image}`,
          width: 1200,
          height: 630,
          alt: `Taxi ${data.cityName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://www.taxi-antibes.fr${data.hero.image}`],
    },
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function SecteurPage({ params }) {
  const { slug } = await params;
  const data = sectorData[slug];

  if (!data) {
    notFound();
  }

  const allPosts = getAllPosts();
  const keyword = data.cityName.toLowerCase();
  const relatedPosts = allPosts
    .filter((post) => {
      const slugMatch = post.slug?.toLowerCase().includes(data.slug);
      const titleMatch = post.title?.toLowerCase().includes(keyword);
      const excerptMatch = post.excerpt?.toLowerCase().includes(keyword);
      return slugMatch || titleMatch || excerptMatch;
    })
    .slice(0, 3);
  const fallbackPosts =
    relatedPosts.length > 0 ? relatedPosts : allPosts.slice(0, 3);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const breadcrumbItems = [
    { name: "Secteurs", url: "/secteurs", title: "Secteurs desservis" },
    {
      name: data.cityName,
      url: `/secteurs/${data.slug}`,
      title: `Taxi ${data.cityName}`,
    },
  ];

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.localBusiness.name,
    image: data.localBusiness.image,
    telephone: data.localBusiness.telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality: data.localBusiness.locality,
      addressRegion: data.localBusiness.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.localBusiness.latitude,
      longitude: data.localBusiness.longitude,
    },
    url: data.localBusiness.url,
    openingHours: "Mo-Su 00:00-23:59",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="bg-white border-b mt-10 sm:mt-0">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav aria-label="Fil d'Ariane" className="text-sm text-gray-600">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-cyan-700">
                  Accueil
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/secteurs" className="hover:text-cyan-700">
                  Secteurs
                </Link>
              </li>
              <li>/</li>
              <li className="text-cyan-700 font-semibold">
                {data.cityName}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <main className="pb-20">
        <section className="max-w-6xl mx-auto px-6 pt-12">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-amber-100 rounded-full text-cyan-700 font-semibold text-sm mb-6 shadow-md">
                <MapPin className="w-4 h-4" />
                <span>Guide Local Antibes</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                {data.hero.title}
                <span className="block bg-gradient-to-r from-cyan-600 via-amber-500 to-orange-500 bg-clip-text text-transparent mt-2">
                  {data.hero.highlight}
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-cyan-700 font-bold mb-6">
                {data.hero.subtitle}
              </h2>

              {data.introduction.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-700 leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
              {data.homepageLink && (
                <p className="text-lg text-gray-700 leading-relaxed">
                  {data.homepageLink.before}
                  <Link
                    href={data.homepageLink.href}
                    className="text-cyan-700 font-semibold hover:text-cyan-600 transition-colors"
                  >
                    {data.homepageLink.linkText}
                  </Link>
                  {data.homepageLink.after}
                </p>
              )}
            </div>
            <div className="relative h-72 sm:h-96 rounded-3xl shadow-2xl border-2 border-cyan-200 transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <Image
                  src={data.hero.image}
                  alt={data.hero.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-6 right-6 bg-gradient-to-br from-cyan-600 to-cyan-800 text-white px-6 py-4 rounded-2xl shadow-2xl border-2 border-white/20 z-10">
                <p className="text-xs text-white/80 uppercase tracking-wider font-semibold mb-1">
                  Disponible
                </p>
                <p className="text-2xl font-black">24h/24 – 7j/7</p>
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-3 shadow-2xl border-2 border-cyan-300 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Note</div>
                    <div className="text-lg font-black text-gray-900">4,9/5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-10">
          {data.secondaryIntro.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-gray-700 leading-relaxed mb-4"
            >
              {paragraph}
            </p>
          ))}
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <div className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl shadow-2xl border-2 border-cyan-100 p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-100 to-amber-100 rounded-bl-full opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-xl flex items-center justify-center shadow-lg">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
                  {data.servicesTitle}
                </h2>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg">
                {data.services.map((service, index) => (
                  <li
                    key={index}
                    className="group flex items-start gap-3 bg-white/80 backdrop-blur-sm border-2 border-cyan-100 rounded-2xl px-5 py-4 shadow-md hover:shadow-xl hover:border-cyan-300 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Secteur couvert
          </h2>
          <p className="text-gray-700 mb-4">{data.coverageDescription}</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.coverageAreas.map((area) => (
              <div
                key={area}
                className="group bg-white border-2 border-gray-200 rounded-xl px-5 py-4 text-gray-700 shadow-md hover:shadow-xl hover:border-cyan-300 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Zone d&apos;intervention
          </h2>
          <p className="text-gray-700 mb-4">{data.map.description}</p>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <iframe
              src={data.map.embedUrl}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-5 mt-4 text-cyan-900">
            ℹ️ {data.map.info}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <div className="grid md:grid-cols-2 gap-6">
            {data.infoCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6"
              >
                <h3 className="text-2xl font-semibold text-cyan-700 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <div className="bg-cyan-50 rounded-3xl border border-cyan-100 p-8">
            <h2 className="text-3xl font-bold text-cyan-900 mb-6">
              Pourquoi choisir Taxi Antibes ?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.sellingPoints.map((point, index) => (
                <div key={index} className="bg-white rounded-2xl p-5 shadow">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-cyan-900">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {data.hospitals && data.hospitals.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 mt-14">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {data.hospitalsTitle}
              </h2>
              <div className="space-y-4">
                {data.hospitals.map((hospital, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {hospital.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{hospital.city}</p>
                    {hospital.description && (
                      <p className="text-gray-700 mb-2">{hospital.description}</p>
                    )}
                    {hospital.speciality && (
                      <p className="text-cyan-700 font-medium mb-3">
                        {hospital.speciality}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-4">
                      {hospital.website && (
                        <a
                          href={hospital.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-700 hover:text-cyan-600 underline text-sm"
                        >
                          Site officiel
                        </a>
                      )}
                      {hospital.phone && (
                        <a
                          href={`tel:${hospital.phone.replace(/\s+/g, "")}`}
                          className="text-cyan-700 hover:text-cyan-600 text-sm"
                        >
                          {hospital.phone}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {data.establishments && data.establishments.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 mt-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {data.establishmentsTitle}
            </h2>
            <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-cyan-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Établissement
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Ville
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Spécialité
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Site web
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Téléphone
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.establishments.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3 text-gray-700 font-medium">
                        {item.name}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{item.city}</td>
                      <td className="px-4 py-3 text-gray-600">
                        {item.speciality}
                      </td>
                      <td className="px-4 py-3">
                        {item.website ? (
                          <a
                            href={item.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-700 hover:text-cyan-600 underline"
                          >
                            Site officiel
                          </a>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {item.phone ? (
                          <a
                            href={`tel:${item.phone.replace(/\s+/g, "")}`}
                            className="text-cyan-700 hover:text-cyan-600"
                          >
                            {item.phone}
                          </a>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              {data.faq.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {data.resource && (
          <section className="max-w-6xl mx-auto px-6 mt-14">
            <div className="bg-cyan-50 border border-cyan-100 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-cyan-900 mb-4">
                Ressources utiles
              </h2>
              {data.resource.description && (
                <p className="text-cyan-900 mb-3">{data.resource.description}</p>
              )}
              {Array.isArray(data.resource.links) &&
                data.resource.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {data.resource.links.map((link, index) => (
                      <a
                        key={`${link.url}-${index}`}
                        href={link.url}
                        className="inline-flex items-center gap-2 text-cyan-700 font-semibold underline"
                        target={link.target || "_self"}
                        rel={link.rel || undefined}
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
            </div>
          </section>
        )}

        {fallbackPosts.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 mt-14">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  À lire aussi pour organiser votre trajet {data.cityName}
                </h2>
                <p className="text-gray-600 mt-2 max-w-2xl">
                  Guides pratiques, recommandations aéroport et articles dédiés
                  aux déplacements Antibes ↔ {data.cityName}. Des ressources
                  complémentaires pour préparer votre transfert avec Taxi
                  Antibes.
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-700 text-cyan-700 font-semibold hover:bg-cyan-700 hover:text-white transition-colors"
              >
                Tous nos articles
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {fallbackPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                    />
                    {post.category && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-cyan-700 text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    )}
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-sm text-gray-500">
                      {formatDate(post.date)}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-cyan-700 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-cyan-700 font-semibold hover:underline"
                    >
                      Lire l&apos;article
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Spécialités de transport
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.specialties.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6"
              >
                <h3 className="text-xl font-semibold text-cyan-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tarifs & remboursement
            </h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              {data.pricing.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-cyan-700 text-xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Nos engagements qualité
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.commitments.map((commitment, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
              >
                <h3 className="text-xl font-semibold text-cyan-700 mb-2">
                  {commitment.title}
                </h3>
                <p className="text-gray-700">{commitment.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-16">
          <div className="bg-gradient-to-br from-cyan-700 to-cyan-900 text-white rounded-3xl shadow-2xl p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Prêt à réserver votre chauffeur ?
                </h2>
                <p className="text-lg text-cyan-100">
                  Contactez-nous par téléphone ou via le formulaire. Notre
                  équipe vous répond rapidement avec un devis sur mesure.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+33749777621"
                  className="flex-1 text-center px-6 py-4 bg-white text-cyan-700 rounded-xl font-semibold hover:bg-cyan-50 transition-colors"
                >
                  📞 07 49 77 76 21
                </a>
                <Link
                  href="/reservation"
                  className="flex-1 text-center px-6 py-4 border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-cyan-700 transition-colors"
                >
                  Réservation en ligne
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-12">
          <Script
            id="local-business-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusinessJson),
            }}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

