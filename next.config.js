/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to'],
  },
  webpack(config, { dev }) {
    if (!dev) {
      config.devtool = 'source-map';
    }
    return config;
  },
};

module.exports = nextConfig;
