/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Ensure trailing slash for consistent asset loading
    trailingSlash: true,
    // Configure base path
    basePath: '',
    // Configure static export
    distDir: 'out',
    // Disable server components for static export
    experimental: {
        typedRoutes: true
    },
    // Optimize static assets
    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            // Ensure CSS is properly extracted
            config.optimization.splitChunks.cacheGroups.styles = {
                name: 'styles',
                test: /\.css$/,
                chunks: 'all',
                enforce: true,
            };
        }
        return config;
    },
    // Configure static pages
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
            '/plexus-lifex': { page: '/plexus-lifex' },
            '/plexus-lifex/baa': { page: '/plexus-lifex/baa' }
        };
    }
};

module.exports = nextConfig; 