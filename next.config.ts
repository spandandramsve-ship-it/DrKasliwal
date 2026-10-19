import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Reviewer avatars returned by the Google Places API
    remotePatterns: [new URL("https://lh3.googleusercontent.com/**")],
  },
  async redirects() {
    return [
      // 1. Robotic Joint Replacement redirects
      { source: "/robotic-joint-replacement-nashik", destination: "/robotic-joint-replacement", permanent: true },
      { source: "/velys-robotic-surgery", destination: "/robotic-joint-replacement", permanent: true },
      { source: "/revision-joint-replacement-nashik", destination: "/robotic-joint-replacement", permanent: true },

      // 2. Knee Pillar redirects
      { source: "/robotic-knee-replacement-nashik", destination: "/knee", permanent: true },
      { source: "/robotic-partial-knee-replacement-nashik", destination: "/knee", permanent: true },
      { source: "/knee-specialist-nashik", destination: "/knee", permanent: true },
      { source: "/knee-arthritis-treatment-nashik", destination: "/knee", permanent: true },
      { source: "/do-i-need-knee-replacement", destination: "/knee", permanent: true },
      { source: "/robotic-knee-replacement-cost-nashik", destination: "/knee", permanent: true },

      // 3. Hip Pillar redirects
      { source: "/hip-specialist-nashik", destination: "/hip", permanent: true },
      { source: "/robotic-hip-replacement-nashik", destination: "/hip", permanent: true },
      { source: "/avn-hip-treatment-nashik", destination: "/hip", permanent: true },

      // 4. Arthroscopy Pillar redirects
      { source: "/knee-arthroscopy-nashik", destination: "/arthroscopy", permanent: true },
      { source: "/acl-reconstruction-nashik", destination: "/arthroscopy", permanent: true },
      { source: "/meniscus-tear-treatment-nashik", destination: "/arthroscopy", permanent: true },
      { source: "/pcl-cartilage-surgery-nashik", destination: "/arthroscopy", permanent: true },
      { source: "/shoulder-arthroscopy-nashik", destination: "/arthroscopy", permanent: true },
      { source: "/orthopaedic-trauma-care-nashik", destination: "/arthroscopy", permanent: true },

      // 5. About Us Pillar redirects (NMC compliance: patient stories removed to about)
      { source: "/dr-vishal-kasliwal", destination: "/about", permanent: true },
      { source: "/surgical-philosophy", destination: "/about", permanent: true },
      { source: "/hospital", destination: "/about", permanent: true },
      { source: "/patient-stories", destination: "/about", permanent: true },

      // 6. Patient Guide sub-routes
      { source: "/patient-guide/:slug+", destination: "/patient-guide", permanent: true },
    ];
  },
};

export default nextConfig;
