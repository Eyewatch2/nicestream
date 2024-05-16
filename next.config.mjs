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
};

export default nextConfig;
