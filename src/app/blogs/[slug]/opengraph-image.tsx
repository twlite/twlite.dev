import { ImageResponse } from 'next/og';
import { getPostSummaryBySlug } from '@/lib/post-summaries';
import { site } from '@/lib/seo';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostSummaryBySlug(slug);
  const title = post?.title || 'Blog';
  const description = post?.description || site.description;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#0a0a0a',
        color: '#fafafa',
        padding: '70px',
        fontFamily: 'Inter, Arial, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: 26,
          color: '#a3a3a3',
        }}
      >
        <span>{site.name}</span>
        <span>{post ? `${post.readingTime} min read` : 'Blog'}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            fontSize: 68,
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: 0,
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.35,
            color: '#c7c7c7',
            maxWidth: 900,
          }}
        >
          {description}
        </div>
      </div>
      <div
        style={{
          borderTop: '1px solid #262626',
          paddingTop: 24,
          fontSize: 24,
          color: '#a3a3a3',
        }}
      >
        {post
          ? new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          : 'twlite.dev'}
      </div>
    </div>,
    size,
  );
}
