/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    images: {
        unoptimized: true,
    },
    // Ensure trailing slash for consistent asset loading
    trailingSlash: true,
    // Configure base path
    basePath: '',
    // Adjust experimental settings
    experimental: {
        typedRoutes: true
    }
};

module.exports = nextConfig; 