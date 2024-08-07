/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nicestreamcms.eyewatch.me',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'nicestreamcms.eyewatch.me',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/webmail',
        destination: 'https://box5515.bluehost.com:2096/',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: 'https://nicestreamcms.eyewatch.me/graphql',
      },
    ];
  },
};

export default nextConfig;
