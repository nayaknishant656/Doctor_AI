/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add these for better hot reloading
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300,
      }
    }
    return config
  },
}

module.exports = nextConfig