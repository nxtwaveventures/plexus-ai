/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Enable static exports
    images: {
        unoptimized: true, // Required for static export
    },
    basePath: '',  // Update this if you're not using a custom domain
    assetPrefix: '',  // Update this if you're not using a custom domain
}

export default nextConfig 