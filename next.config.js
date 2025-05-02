/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Ensure trailing slash for consistent asset loading
    trailingSlash: true,
    // Configure asset loading for production
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://plexusai.in' : '',
    // Configure base path
    basePath: '',
    experimental: {
        typedRoutes: true,
        // Enable static page generation
        staticPageGenerationTimeout: 120,
        // Enable CSS optimization
        optimizeCss: true,
        // Enable scroll restoration
        scrollRestoration: true
    },
    // Optimize static assets
    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            config.output.filename = '[name].[contenthash].js';
            config.output.chunkFilename = '[name].[contenthash].js';
            // Ensure CSS is properly extracted
            config.optimization.splitChunks.cacheGroups.styles = {
                name: 'styles',
                test: /\.css$/,
                chunks: 'all',
                enforce: true,
            };
            // Optimize static assets
            config.optimization.moduleIds = 'deterministic';
            config.optimization.runtimeChunk = 'single';
            config.optimization.splitChunks = {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                            return `npm.${packageName.replace('@', '')}`;
                        },
                    },
                },
            };
        }
        return config;
    },
    // Configure static generation
    generateStaticParams: async () => {
        return {
            '/plexus-lifex': {},
            '/plexus-lifex/baa': {},
        };
    },
    // Ensure proper static file generation
    generateBuildId: async () => {
        return `build-${Date.now()}`;
    }
};

module.exports = nextConfig; 