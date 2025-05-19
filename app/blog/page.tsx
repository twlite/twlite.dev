import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import Footer from '@/components/footer';
import { Suspense } from 'react';
import BlogLoading from './loading';

export const metadata = {
  title: 'Blog | Twilight',
  description:
    'Read my latest articles and thoughts on web development, programming, and technology.',
};

export default async function BlogPage() {
  return (
    <Suspense fallback={<BlogLoading />}>
      <BlogContent />
    </Suspense>
  );
}

async function BlogContent() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="space-y-4 mb-10">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-muted-foreground">
            My thoughts, ideas, and experiences in web development and
            technology.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">
              No blog posts found. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block transition-transform hover:-translate-y-1"
              >
                <Card className="h-full gradient-card">
                  <CardHeader>
                    <h2 className="text-2xl font-semibold">{post.title}</h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center">
                        <FaClock className="mr-2 h-4 w-4" />
                        {post.readingTime} min read
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
