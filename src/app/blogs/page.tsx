import type { Metadata } from "next";
import ContentCard, { ContentCardProps } from "@/components/content-card";
import Shell from "@/components/layout/shell";
import { getAllPostSummaries } from "@/lib/post-summaries";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description:
    "Technical writing about TypeScript, Next.js, runtimes, developer tooling, and systems design.",
  path: "/blogs",
});

const blogs: ContentCardProps[] = getAllPostSummaries().map((post) => ({
  title: post.title,
  url: `/blogs/${post.slug}`,
  image: null,
  description: post.description,
  meta: `${new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })} · ${post.readingTime} min read`,
}));

export default function Blog() {
  return (
    <Shell title="Blog">
      <p className="text-sm text-neutral-400 mb-2">
        These are some of my random thoughts
      </p>
      <div className="flex flex-col">
        {blogs.length > 0 ? (
          blogs.map((blog) => <ContentCard key={blog.url} {...blog} />)
        ) : (
          <p className="text-neutral-400">No blogs yet.</p>
        )}
      </div>
    </Shell>
  );
}
