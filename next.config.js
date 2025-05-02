/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    trailingSlash: true,
    distDir: '.next',
    experimental: {
        typedRoutes: true
    },
    basePath: '',
    assetPrefix: '',
}

module.exports = nextConfig; 