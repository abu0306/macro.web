/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ['@wisland/ui', '@wisland/utils'],
  basePath: '/next1',
}

module.exports = nextConfig
