import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { withStaticBlogPosts } from "./scripts/static-blog-posts.mjs";
import { withStaticPhotographs } from "./scripts/static-photographs.mjs";

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/twlite",
        permanent: false,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/hellotwlite",
        permanent: false,
      },
      {
        source: "/patreon",
        destination: "https://patreon.com/twlite",
        permanent: false,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/twlite",
        permanent: false,
      },
      {
        source: "/tiktok",
        destination: "https://www.tiktok.com/@twilightdev",
        permanent: false,
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkOptions: [],
    rehypeOptions: [],
  },
});

export default withMDX(withStaticPhotographs(withStaticBlogPosts(nextConfig)));
