/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'img.freepik.com'],
  },
  experimental: {
    turbo: {
      enabled: false,
    },
  },
};

export default nextConfig;
