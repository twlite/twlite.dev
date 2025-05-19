"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { FaCalendarAlt, FaClock } from "react-icons/fa"

interface MDXBlogContentProps {
  title: string
  date: string
  readingTime: string
  children: React.ReactNode
}

export default function MDXBlogContent({ title, date, readingTime, children }: MDXBlogContentProps) {
  const [formattedDate, setFormattedDate] = useState("")

  useEffect(() => {
    setFormattedDate(
      new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    )
  }, [date])

  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
        <div className="flex items-center">
          <FaCalendarAlt className="mr-2 h-4 w-4" />
          {formattedDate}
        </div>
        <div className="flex items-center">
          <FaClock className="mr-2 h-4 w-4" />
          {readingTime} min read
        </div>
      </div>

      <div className="mdx-content">{children}</div>
    </article>
  )
}
