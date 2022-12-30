/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  future: { webpack5: true }
}

module.exports = nextConfig

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    // env: {
      //   NEXT_PUBLIC_DEVELOPMENT_URL: process.env.NEXT_PUBLIC_DEVELOPMENT_URL
      // }
    },
  }

  module.exports = {
    // reactStrictMode=true,
    images: {
      domains: ['rickandmortyapi.com', 'https://rickandmortyapi.com', 'inmatown.com', 'www.inmatown.com', 'https://37.44.247.84', '37.44.247.84',' http://greenboat.online', 'greenboat.online', 'localhost', 'pyrtajam.com'],
    },
  }