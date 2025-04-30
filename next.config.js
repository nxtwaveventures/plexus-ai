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
};

module.exports = nextConfig; 