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
    // Disable server components for static export
    experimental: {
        typedRoutes: true
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
        }
        return config;
    }
};

module.exports = nextConfig; 