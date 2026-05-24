import { getAllPosts } from '@/lib/posts';
import { site, absoluteUrl } from '@/lib/seo';

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const items = posts
    .map((post) => {
      const cats = post.tags
        .map((tag) => `<category term="${escapeXml(tag)}"/>`)
        .join('');
      return `<entry>
    <title>${escapeXml(post.title)}</title>
    <link href="${absoluteUrl(`/blogs/${post.slug}`)}"/>
    <id>${absoluteUrl(`/blogs/${post.slug}`)}</id>
    <published>${new Date(post.date).toISOString()}</published>
    <updated>${new Date(post.date).toISOString()}</updated>
    <summary type="html">${escapeXml(post.description)}</summary>
    <author>
      <name>${escapeXml(site.name)}</name>
    </author>
    ${cats}
  </entry>`;
    })
    .join('\n');

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(site.name)}</title>
  <subtitle>${escapeXml(site.description)}</subtitle>
  <link href="${absoluteUrl('/blogs/feed.xml')}" rel="self"/>
  <link href="${absoluteUrl('/blogs')}" rel="alternate"/>
  <updated>${new Date(posts[0]?.date ?? Date.now()).toISOString()}</updated>
  <id>${absoluteUrl('/blogs')}</id>
${items}
</feed>`.trim();

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}

function escapeXml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
