/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['plexusai.in'],
    },
    basePath: process.env.NODE_ENV === 'production' ? '/plexus-ai' : '',
};

module.exports = nextConfig; 