/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    transpilePackages: ['@wisland/ui', '@wisland/utils', '@wisland/i18n'],
    basePath: '/next2',
}

module.exports = nextConfig
