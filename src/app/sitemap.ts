import type { MetadataRoute } from "next";
import { featuredProjects } from "@/content/projects";
import { nav, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...nav.map((n) => n.href), ...featuredProjects.map((p) => `/projects/${p.id}`)];
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
