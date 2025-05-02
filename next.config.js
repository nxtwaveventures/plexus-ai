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
        typedRoutes: true
    },
    // Add version query parameter to bust cache
    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            config.output.filename = '[name].[contenthash].js';
            config.output.chunkFilename = '[name].[contenthash].js';
        }
        return config;
    },
};

module.exports = nextConfig; 