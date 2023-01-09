/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');

const nextConfig = nextTranslate({
  reactStrictMode: false,
})

module.exports = nextConfig