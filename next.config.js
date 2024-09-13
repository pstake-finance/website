/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  images: {
    domains: ["raw.githubusercontent.com"],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/tokensale",
        destination:
          "https://blog.pstake.finance/2021/12/13/pstake-tokenomics/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
