/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ✅ Non-WWW -> WWW (301) - SEO : www.taxi-antibes.fr est la version canonique
      {
        source: "/:path*",
        has: [{ type: "host", value: "taxi-antibes.fr" }],
        destination: "https://www.taxi-antibes.fr/:path*",
        permanent: true, // 301 redirect
      },
      // Redirections blog existantes
      {
        source: '/blog-0',
        destination: '/blog',
        permanent: true, // 301 redirect
      },
      {
        source: '/blog-1',
        destination: '/blog',
        permanent: true, // 301 redirect
      },
      // Redirections services pour corriger les 404
      {
        source: '/services/transferts-aeroport',
        destination: '/services/taxi-aeroport-nice',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/transport-medical',
        destination: '/services/taxi-conventionne',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
