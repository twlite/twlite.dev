import React from "react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SafeTweet } from "./tweet-wrapper";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { JetBrains_Mono } from "next/font/google";
import CodeBlock from "./code-block";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Heading({
  level,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}) {
  const tag = `h${level}`;
  return React.createElement(
    tag,
    props,
    props.id ? (
      <a href={`#${props.id}`} className="no-underline">
        {children}
      </a>
    ) : (
      children
    ),
  );
}

const components = {
  a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href && href.startsWith("/")) {
      return <Link href={href} {...props} />;
    }

    if (href && (href.startsWith("http") || href.startsWith("mailto:"))) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
      );
    }

    return <a href={href} {...props} />;
  },
  h1: (props: React.ComponentProps<"h1">) => (
    <Heading level={1} {...props} className="mt-8 mb-3" />
  ),
  h2: (props: React.ComponentProps<"h1">) => (
    <Heading level={2} {...props} className="mt-6 mb-2" />
  ),
  h3: (props: React.ComponentProps<"h1">) => (
    <Heading level={3} {...props} className="mt-4 mb-2" />
  ),
  h4: (props: React.ComponentProps<"h1">) => (
    <Heading level={4} {...props} className="mt-3 mb-1" />
  ),
  h5: (props: React.ComponentProps<"h1">) => (
    <Heading level={5} {...props} className="mt-3 mb-1" />
  ),
  h6: (props: React.ComponentProps<"h1">) => (
    <Heading level={6} {...props} className="mt-3 mb-1" />
  ),
  code: (props: React.ComponentProps<"code">) => (
    <code {...props} className={`${jetBrainsMono.className}`} />
  ),
  pre: (props: React.ComponentProps<"pre">) => <CodeBlock {...props} />,
  table: (props: React.ComponentProps<"table">) => (
    <div className="overflow-x-auto my-4">
      <table
        {...props}
        className="min-w-full border-collapse border border-border"
      />
    </div>
  ),
  thead: (props: React.ComponentProps<"thead">) => <thead {...props} />,
  tbody: (props: React.ComponentProps<"tbody">) => <tbody {...props} />,
  tr: (props: React.ComponentProps<"tr">) => <tr {...props} />,
  th: (props: React.ComponentProps<"th">) => (
    <th
      {...props}
      className="px-3 py-2 text-left text-sm font-medium text-foreground bg-muted border border-border"
    />
  ),
  td: (props: React.ComponentProps<"td">) => (
    <td
      {...props}
      className="px-3 py-2 text-sm text-foreground border border-border"
    />
  ),
  Tweet: SafeTweet,
};

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <article className="blog-content">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypePrettyCode,
                {
                  theme: {
                    dark: "github-dark",
                    light: "catppuccin-macchiato",
                  },
                  keepBackground: true,
                } as Options,
              ],
            ],
          },
        }}
      />
    </article>
  );
}
