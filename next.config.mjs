/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {

    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'nicestreamcms.eyewatch.me',
        pathname: '**',
    },
      {
        protocol: 'https',
        hostname: 'maa.pfg.mybluehost.me',
        pathname: '**',
    },
    ],
  },
};

export default nextConfig;
