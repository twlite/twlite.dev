import {
  allPostSummaries,
  postSummariesBySlug,
} from "@/generated/blog-post-summaries";

export interface PostSummary {
  slug: string;
  title: string;
  date: string;
  description: string;
  readingTime: string;
  tags: string[];
}

export const getAllPostSummaries = (): PostSummary[] => {
  return [...allPostSummaries];
};

export const getPostSummaryBySlug = (slug: string): PostSummary | null => {
  return postSummariesBySlug[slug] ?? null;
};
