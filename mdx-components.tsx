import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"

// Define custom MDX components
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Use custom Image component
    img: (props) => {
      const { src, alt, width = 800, height = 500 } = props
      return (
        <Image src={src || ""} alt={alt || ""} width={Number(width)} height={Number(height)} className="rounded-md" />
      )
    },
    // Custom link component
    a: ({ href, children, ...props }) => {
      if (href && href.startsWith("/")) {
        return (
          <Link href={href} {...props}>
            {children}
          </Link>
        )
      }

      if (href && (href.startsWith("http") || href.startsWith("mailto:"))) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
          </a>
        )
      }

      return (
        <a href={href} {...props}>
          {children}
        </a>
      )
    },
    // Add more custom components as needed
    ...components,
  }
}
