import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"

const components = {
  Image,
  a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href && href.startsWith("/")) {
      return <Link href={href} {...props} />
    }

    if (href && (href.startsWith("http") || href.startsWith("mailto:"))) {
      return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    }

    return <a href={href} {...props} />
  },
  // Add more custom components as needed
}

interface MDXContentProps {
  source: string
}

export function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote source={source} components={components} />
}
