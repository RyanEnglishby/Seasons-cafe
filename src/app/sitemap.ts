import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site-config";

const ROUTES = ["", "/menu", "/our-story", "/reviews", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "/menu" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
