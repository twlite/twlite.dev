/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'avatars.githubusercontent.com'
            },
            {
                hostname: 'github.com'
            }
        ]
    },
    typescript: {
        ignoreBuildErrors: true
    },
    poweredByHeader: false,
    optimizeFonts: true,
}

module.exports = nextConfig
