/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'cdn.pixabay.com'],
  },
}

module.exports = nextConfig
