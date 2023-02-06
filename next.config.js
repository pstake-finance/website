/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = nextTranslate({
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
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
});

module.exports = nextConfig;
