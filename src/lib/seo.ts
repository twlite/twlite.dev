import type { Metadata } from "next";

export const site = {
  name: "Kunjan Dhungana",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Self-taught software engineer from Nepal writing about TypeScript, runtimes, developer tooling, and maintainable systems.",
  handle: "@hellotwlite",
};

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

export const ogImageUrl = (title: string, description: string) => {
  const url = new URL("/api/og", site.url);
  url.searchParams.set("title", title);
  url.searchParams.set("description", description);
  return url.toString();
};

export const createPageMetadata = ({
  title,
  description = site.description,
  path = "/",
  type = "website",
}: {
  title: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
}): Metadata => {
  const url = absoluteUrl(path);
  const image = ogImageUrl(title, description);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: site.handle,
      images: [image],
    },
  };
};
