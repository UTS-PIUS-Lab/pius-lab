/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pius-lab',
  images: { unoptimized: true },
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      type: 'asset/resource',
      generator: { filename: 'static/videos/[hash][ext]' },
    });
    return config;
  },
}
module.exports = nextConfig
