import type { Metadata } from "next";
import ContentCard from "@/components/content-card";
import Shell from "@/components/layout/shell";
import { projects } from "@/lib/projects";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "My projects across API tooling, Discord.js infrastructure, webviews, compilers, and developer utilities.",
  path: "/projects",
});

export default function WallOfFame() {
  return (
    <Shell title="Projects">
      <p className="text-sm text-neutral-400 mb-2">
        These are some of the projects I&apos;ve worked on.
      </p>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ContentCard key={index} {...project} />
        ))}
      </div>
    </Shell>
  );
}
