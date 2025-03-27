const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/JUNKI007.github.io' : '',
  assetPrefix: isProd ? '/JUNKI007.github.io/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
