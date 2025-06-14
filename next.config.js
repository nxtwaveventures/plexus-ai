/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    distDir: '.next',
    experimental: {
        typedRoutes: true
    },
    assetPrefix: '',
}

module.exports = nextConfig; 