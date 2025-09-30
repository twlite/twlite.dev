import createMDX from '@next/mdx';
import { NextConfig } from 'next';

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['github.com'],
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    mdxRs: false,
  },
  redirects: async () => {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/8UWUzM6JSY',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/twlite',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/hellotwlite',
        permanent: true,
      },
      {
        source: '/patreon',
        destination: 'https://patreon.com/twlite',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/twlite',
        permanent: true,
      },
      {
        source: '/tiktok',
        destination: 'https://www.tiktok.com/@twilightdev',
        permanent: true,
      },
    ];
  },
} satisfies NextConfig;

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
