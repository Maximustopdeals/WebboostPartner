import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.webboostpartner.nl",
          },
        ],
        destination: "https://webboostpartner.nl/:path*",
        permanent: true, // 301 redirect - goed voor SEO
      },
    ];
  },
};

export default nextConfig;
