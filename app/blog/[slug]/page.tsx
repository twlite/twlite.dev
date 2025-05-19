import { notFound } from "next/navigation"
import { getAllPosts } from "@/lib/blog"
import Footer from "@/components/footer"
import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
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

// This approach uses a simple HTML rendering of the blog content
// and avoids MDX rendering issues
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContent)
    const stats = readingTime(content)
    const readingTimeMinutes = Math.ceil(stats.minutes).toString()

    // Convert MDX to HTML (simplified approach)
    // This is a placeholder for actual MDX-to-HTML conversion
    const htmlContent = content
      .replace(/^---[\s\S]*?---/m, "") // Remove frontmatter
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>') // Format code blocks
      .replace(/#{1}\s+(.*)/g, "<h1>$1</h1>") // h1
      .replace(/#{2}\s+(.*)/g, "<h2>$1</h2>") // h2
      .replace(/#{3}\s+(.*)/g, "<h3>$1</h3>") // h3
      .replace(/#{4}\s+(.*)/g, "<h4>$1</h4>") // h4
      .replace(/#{5}\s+(.*)/g, "<h5>$1</h5>") // h5
      .replace(/#{6}\s+(.*)/g, "<h6>$1</h6>") // h6
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold
      .replace(/\*(.*?)\*/g, "<em>$1</em>") // Italic
      .replace(/\[(.*?)\]$$(.*?)$$/g, '<a href="$2">$1</a>') // Links
      .replace(/^\s*-\s+(.*)/gm, "<li>$1</li>") // List items
      .replace(/<li>(.*?)<\/li>/g, "<ul><li>$1</li></ul>") // Wrap list items
      .replace(/<\/ul>\s*<ul>/g, "") // Fix multiple lists
      .split("\n\n")
      .map((p) => (p.trim().startsWith("<") ? p : `<p>${p}</p>`))
      .join("\n") // Paragraphs

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

            <div className="mdx-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </article>
        </div>
        <Footer />
      </main>
    )
  } catch (error) {
    console.error("Error rendering blog post:", error)
    notFound()
  }
}
