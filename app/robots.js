export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
        crawlDelay: 10,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: "https://www.taxi-antibes.fr/sitemap.xml",
    host: "https://www.taxi-antibes.fr",
  };
}
