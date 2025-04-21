/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['plexusai.in'],
    },
    basePath: '',
    trailingSlash: true,
    // Remove headers and rewrites since they're not needed for static export
    // Ensure asset prefix starts with a slash for proper font loading
    assetPrefix: '/',
};

module.exports = nextConfig; 