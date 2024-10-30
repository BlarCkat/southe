import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pexels.com',
        port: '',
        pathname: '',
      },
    ],
  },
}

export default nextConfig;
