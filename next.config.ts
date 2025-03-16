import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enables static export for GitHub Pages
  images: {
    unoptimized: true,  // Required for static export
  },
  // Remove trailing slash for cleaner URLs
  trailingSlash: false,
};

export default nextConfig;
