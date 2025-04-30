/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Ensure trailing slash for consistent asset loading
    trailingSlash: true,
    // Configure asset loading for production
    assetPrefix: '',
    // Configure base path
    basePath: '',
    experimental: {
        typedRoutes: true
    }
};

module.exports = nextConfig; 