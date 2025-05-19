import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import Footer from "@/components/footer"
import Link from "next/link"
import MDXBlogContent from "@/components/mdx-blog-content"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Twilight Blog`,
    description: post.excerpt,
  }
}

// This is an alternative approach that renders the MDX content as HTML
// It's a fallback in case the dynamic import approach doesn't work
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Read the MDX file directly
  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContent)
  const stats = readingTime(content)
  const readingTimeMinutes = Math.ceil(stats.minutes).toString()

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto max-w-3xl px-4">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          ← Back to all posts
        </Link>

        <MDXBlogContent title={data.title} date={data.date} readingTime={readingTimeMinutes}>
          {/* We'll use a client component to render the MDX content */}
          {/* This is a placeholder for the actual MDX content */}
          <div dangerouslySetInnerHTML={{ __html: "<p>Loading content...</p>" }} />
        </MDXBlogContent>
      </div>
      <Footer />
    </main>
  )
}
