/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;
