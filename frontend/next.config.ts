/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // ✅ Required for Docker
    experimental: {
        appDir: true
    }
};

module.exports = nextConfig;


