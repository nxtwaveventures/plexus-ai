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
    // Add rewrites for static paths
    async rewrites() {
        return [
            {
                source: '/plexus-lifex/baa',
                destination: '/plexus-lifex/baa/index.html'
            }
        ];
    }
};

module.exports = nextConfig; 