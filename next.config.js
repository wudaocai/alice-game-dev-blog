/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/alice-game-dev-blog',
  assetPrefix: '/alice-game-dev-blog',
}

module.exports = nextConfig