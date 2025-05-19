import React from 'react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';

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
    <a href={`#${props.id}`} className="no-underline">
      {children}
    </a>
  );
}

const components = {
  a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href && href.startsWith('/')) {
      return <Link href={href} {...props} />;
    }

    if (href && (href.startsWith('http') || href.startsWith('mailto:'))) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
      );
    }

    return <a href={href} {...props} />;
  },
  h1: (props: React.ComponentProps<'h1'>) => <Heading level={1} {...props} />,
  h2: (props: React.ComponentProps<'h1'>) => <Heading level={2} {...props} />,
  h3: (props: React.ComponentProps<'h1'>) => <Heading level={3} {...props} />,
  h4: (props: React.ComponentProps<'h1'>) => <Heading level={4} {...props} />,
  h5: (props: React.ComponentProps<'h1'>) => <Heading level={5} {...props} />,
  h6: (props: React.ComponentProps<'h1'>) => <Heading level={6} {...props} />,
};

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: {
                  dark: 'github-dark',
                  light: 'catppuccin-macchiato',
                },
                keepBackground: true,
              } as Options,
            ],
          ],
        },
      }}
    />
  );
}
