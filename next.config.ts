import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  distDir: 'build',

  /* config options here */
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'humidorhub.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
