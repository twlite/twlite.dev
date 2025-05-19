import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import Link from 'next/link';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { MDXContent } from '@/components/mdx-components';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const { excerpt, title } = await getPostBySlug((await params).slug);

    return {
      title: `${title} | Twilight`,
      description: excerpt || '',
    };
  } catch (error) {
    return {
      title: 'Post Not Found',
    };
  }
}

// This approach uses a simple HTML rendering of the blog content
// and avoids MDX rendering issues
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const { content, date, readingTime, title } = await getPostBySlug(
      (
        await params
      ).slug
    );

    return (
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto max-w-3xl px-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            ← Back to all posts
          </Link>

          <article className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 h-4 w-4" />
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2 h-4 w-4" />
                {readingTime} min read
              </div>
            </div>

            <MDXContent source={content} />
          </article>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error rendering blog post:', error);
    notFound();
  }
}
