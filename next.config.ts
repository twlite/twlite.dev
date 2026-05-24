import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { withStaticBlogPosts } from "./scripts/static-blog-posts.mjs";
import { withStaticPhotographs } from "./scripts/static-photographs.mjs";
import { redirectsConfig } from "./src/lib/socials";

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  redirects: async () => redirectsConfig,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkOptions: [],
    rehypeOptions: [],
  },
});

export default withMDX(withStaticPhotographs(withStaticBlogPosts(nextConfig)));
