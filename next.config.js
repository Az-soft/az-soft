/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/az-soft',
  assetPrefix: '/az-soft/',
  images: {
    unoptimized: true
  },
  trailingSlash: true
}

module.exports = nextConfig 