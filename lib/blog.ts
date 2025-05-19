import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import { cache } from "react"
import readingTime from "reading-time"

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  readingTime: string
}

const postsDirectory = path.join(process.cwd(), "content/blog")

// Use React cache to avoid redundant file operations
export const getAllPosts = cache(async (): Promise<Post[]> => {
  try {
    const fileNames = await fs.readdir(postsDirectory)

    const allPostsData = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map(async (fileName) => {
          const slug = fileName.replace(/\.mdx$/, "")
          const fullPath = path.join(postsDirectory, fileName)
          const fileContents = await fs.readFile(fullPath, "utf8")

          const { data, content } = matter(fileContents)
          const stats = readingTime(content)

          return {
            slug,
            title: data.title,
            date: data.date,
            excerpt: data.excerpt || "",
            content,
            readingTime: Math.ceil(stats.minutes).toString(),
          }
        }),
    )

    // Sort posts by date
    return allPostsData.sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any))
  } catch (error) {
    console.error("Error getting all posts:", error)
    return []
  }
})

export const getPostBySlug = cache(async (slug: string): Promise<Post | null> => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = await fs.readFile(fullPath, "utf8")

    const { data, content } = matter(fileContents)
    const stats = readingTime(content)

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt || "",
      content,
      readingTime: Math.ceil(stats.minutes).toString(),
    }
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error)
    return null
  }
})
