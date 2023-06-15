/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: '@import "styles/variables.scss";'
  },
  trailingSlash: true
}

module.exports = nextConfig
