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
                            // Get the package name
                            const match = module.context?.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
                            if (!match) return 'vendor';
                            const packageName = match[1];
                            return `npm.${packageName.replace('@', '')}`;
                        },
                    },
                },
            };
        }
        return config;
    }
};

module.exports = nextConfig; 