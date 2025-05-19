import { notFound } from "next/navigation"
import { getAllPosts } from "@/lib/blog"
import Footer from "@/components/footer"
import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import readingTime from "reading-time"
import { FaCalendarAlt, FaClock } from "react-icons/fa"

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data } = matter(fileContent)

    return {
      title: `${data.title} | Twilight Blog`,
      description: data.excerpt || "",
    }
  } catch (error) {
    return {
      title: "Post Not Found",
    }
  }
}

// This is a static approach that pre-renders the MDX content at build time
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContent)
    const stats = readingTime(content)
    const readingTimeMinutes = Math.ceil(stats.minutes).toString()

    // Pre-render the MDX content to HTML
    const mdxSource = await serialize(content)

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
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 h-4 w-4" />
                {new Date(data.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2 h-4 w-4" />
                {readingTimeMinutes} min read
              </div>
            </div>

            <div className="mdx-content">
              <MDXRemote {...mdxSource} />
            </div>
          </article>
        </div>
        <Footer />
      </main>
    )
  } catch (error) {
    notFound()
  }
}
