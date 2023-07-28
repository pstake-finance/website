/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["react-countup"]);

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ["react-countup"],
  swcMinify: false,
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
};

module.exports = nextConfig;
