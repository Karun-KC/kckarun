/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/kckarun',
  assetPrefix: '/kckarun/',
  trailingSlash: true,
}

module.exports = nextConfig
