import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/robotic-joint-replacement",
    "/knee",
    "/hip",
    "/arthroscopy",
    "/about",
    "/patient-guide",
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
