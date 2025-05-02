/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    trailingSlash: true,
    distDir: 'out',
    experimental: {
        typedRoutes: true
    },
    basePath: '',
    assetPrefix: '',
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
            '/plexus-lifex': { page: '/plexus-lifex' },
            '/plexus-lifex/baa': { page: '/plexus-lifex/baa' },
            '/plexus-lifex/baa/': { page: '/plexus-lifex/baa' },
        };
    },
    rewrites: async () => {
        return [
            {
                source: '/plexus-lifex/baa',
                destination: '/plexus-lifex/baa/',
            },
        ];
    }
};

module.exports = nextConfig; 