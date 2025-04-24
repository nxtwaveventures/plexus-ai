/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/plexus-ai' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/plexus-ai' : '',
};

module.exports = nextConfig; 