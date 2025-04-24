/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Ensure trailing slash for consistent asset loading
    trailingSlash: true,
    // Configure asset loading
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://plexusai.in' : '',
    // Configure base path
    basePath: '',
    // Disable image optimization since we're using unoptimized images
    experimental: {
        images: {
            allowFutureImage: true,
        },
    },
};

module.exports = nextConfig; 