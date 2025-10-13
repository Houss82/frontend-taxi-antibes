export default function sitemap() {
  const baseUrl = "https://www.taxi-antibes.fr";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];
}
