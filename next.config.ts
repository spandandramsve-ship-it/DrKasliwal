import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Reviewer avatars returned by the Google Places API
    remotePatterns: [new URL("https://lh3.googleusercontent.com/**")],
  },
};

export default nextConfig;
