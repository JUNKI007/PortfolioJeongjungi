/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/JUNKI007.github.io',
  assetPrefix: '/JUNKI007.github.io/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
