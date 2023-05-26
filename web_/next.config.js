/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

const withSvgr = require("next-svgr");
module.exports = withSvgr();

module.exports = nextConfig
