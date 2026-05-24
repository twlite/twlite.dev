import type { Metadata } from "next";
import Shell from "@/components/layout/shell";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXContent } from "@/components/blogs/mdx-components";
import { CalendarIcon, ClockIcon } from "@/components/icons";
import { use } from "react";
import BlogToolbar from "@/components/blogs/blog-toolbar";
import { absoluteUrl, createPageMetadata, site } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return createPageMetadata({
      title: "Blog post not found",
      description: site.description,
      path: "/blogs",
    });
  }

  return {
    ...createPageMetadata({
      title: post.title,
      description: post.description,
      path: `/blogs/${post.slug}`,
      type: "article",
    }),
    openGraph: {
      title: post.title,
      description: post.description,
      url: absoluteUrl(`/blogs/${post.slug}`),
      siteName: site.name,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      tags: post.tags,
      images: [
        {
          url: absoluteUrl(`/blogs/${post.slug}/opengraph-image`),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: site.handle,
      images: [absoluteUrl(`/blogs/${post.slug}/opengraph-image`)],
    },
  };
}

export default function BlogContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <Shell title={post.title}>
      <p className="mb-5 text-sm leading-6 text-neutral-400">
        {post.description}
      </p>
      <div className="mb-8 flex flex-col gap-3 border-b border-neutral-800 pb-5 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="flex items-center gap-2">
            <CalendarIcon />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon />
            {post.readingTime} min read
          </div>
        </div>
        <BlogToolbar content={post.content} slug={post.slug} />
      </div>

      <MDXContent source={post.content} />
    </Shell>
  );
}
