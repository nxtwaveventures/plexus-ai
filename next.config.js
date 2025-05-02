/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Ensure trailing slash for consistent asset loading
    trailingSlash: true,
    // Configure asset loading for production
    assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
    // Configure base path
    basePath: '',
    experimental: {
        typedRoutes: true
    },
    // Ensure proper static export
    distDir: 'out',
    // Configure static export
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
            '/plexus-lifex': { page: '/plexus-lifex' },
            '/plexus-lifex/baa': { page: '/plexus-lifex/baa' },
            '/innovation': { page: '/innovation' },
            '/research': { page: '/research' },
            '/pitch-deck': { page: '/pitch-deck' },
        }
    }
};

module.exports = nextConfig; 