export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.taxi-antibes.fr/sitemap.xml", // ✅ Version canonique avec www
  };
}
