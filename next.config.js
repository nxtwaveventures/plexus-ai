/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    trailingSlash: true,
    distDir: 'out',
    basePath: '',
    assetPrefix: '',
    experimental: {
        typedRoutes: true
    },
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
            '/plexus-lifex': { page: '/plexus-lifex' },
            '/plexus-lifex/baa': { page: '/plexus-lifex/baa' },
            '/plexus-lifex/baa/': { page: '/plexus-lifex/baa' }
        };
    }
};

module.exports = nextConfig; 