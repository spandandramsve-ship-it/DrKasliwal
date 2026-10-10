import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/robotic-joint-replacement-nashik",
    "/robotic-knee-replacement-nashik",
    "/robotic-partial-knee-replacement-nashik",
    "/robotic-hip-replacement-nashik",
    "/velys-robotic-surgery",
    "/knee-specialist-nashik",
    "/knee-arthritis-treatment-nashik",
    "/knee-arthroscopy-nashik",
    "/acl-reconstruction-nashik",
    "/meniscus-tear-treatment-nashik",
    "/pcl-cartilage-surgery-nashik",
    "/hip-specialist-nashik",
    "/avn-hip-treatment-nashik",
    "/shoulder-arthroscopy-nashik",
    "/revision-joint-replacement-nashik",
    "/orthopaedic-trauma-care-nashik",
    "/dr-vishal-kasliwal",
    "/surgical-philosophy",
    "/hospital",
    "/patient-stories",
    "/patient-guide",
    "/patient-guide/surgery-journey",
    "/do-i-need-knee-replacement",
    "/patient-guide/preparing-for-surgery",
    "/patient-guide/recovery-after-surgery",
    "/robotic-knee-replacement-cost-nashik",
    "/patient-guide/outstation-patients",
    "/faqs",
    "/knowledge-centre",
    "/knowledge-centre/knee",
    "/knowledge-centre/hip",
    "/knowledge-centre/robotics",
    "/contact",
    "/book-appointment",
    "/privacy-policy",
    "/terms",
    "/medical-disclaimer",
    "/sitemap",
    "/thank-you",
  ];

  const buildDate = new Date("2026-10-01T00:00:00.000Z");

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: buildDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/knowledge-centre/${article.category}/${article.slug}`,
    lastModified: article.publishedAt ? new Date(article.publishedAt) : buildDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...articleEntries];
}
