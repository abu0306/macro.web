const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ['@wisland/ui', '@wisland/utils', '@wisland/i18n'],
  basePath: '/next1',
  webpack: (config) => {
    config.resolve.alias['@wisland/ui'] = path.resolve(__dirname, '../../packages/ui/src');
    config.resolve.alias['@wisland/utils'] = path.resolve(__dirname, '../../packages/utils/src');
    config.resolve.alias['@wisland/i18n'] = path.resolve(__dirname, '../../packages/i18n');
    return config;
  },
}

module.exports = nextConfig
