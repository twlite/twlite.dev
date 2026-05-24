import type { MetadataRoute } from "next";
import { getAllPhotographs } from "@/lib/photographs";
import { getAllPostSummaries } from "@/lib/post-summaries";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blogs"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/projects"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/wall-of-fame"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/gallery"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const blogRoutes = getAllPostSummaries().map((post) => ({
    url: absoluteUrl(`/blogs/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const galleryRoutes = getAllPhotographs().map((photo) => ({
    url: absoluteUrl(`/gallery/${photo.slug}`),
    lastModified: new Date(photo.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes, ...galleryRoutes];
}
