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
    }
};

module.exports = nextConfig; 