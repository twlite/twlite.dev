import { allPosts, postsBySlug } from "@/generated/blog-posts";

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  readingTime: string;
  tags: string[];
}

export const getAllPosts = (): Post[] => {
  return [...allPosts];
};

export const getPostBySlug = (slug: string): Post | null => {
  return postsBySlug[slug] ?? null;
};
