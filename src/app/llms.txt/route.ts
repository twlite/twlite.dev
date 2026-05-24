import { getAllPostSummaries } from "@/lib/post-summaries";
import { getAllPhotographs } from "@/lib/photographs";
import { site } from "@/lib/seo";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPostSummaries().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const photographs = getAllPhotographs();

  const lines: string[] = [
    `# ${site.name}`,
    "",
    site.description,
    "",
    "## Pages",
    "",
    "- [Home](/) — Landing page with work, side quest, and featured song",
    "- [Blogs](/blogs) — Writing on TypeScript, runtimes, developer tooling, and maintainable systems",
    "- [Projects](/projects) — Open source projects and tools",
    "- [Gallery](/gallery) — Photographs",
    "- [Wall of Fame](/wall-of-fame) — Achievements and milestones",
    "",
    "## Blog Posts",
    "",
  ];

  for (const post of posts) {
    lines.push(`- [${post.title}](/blogs/${post.slug}) — ${post.description}`);
  }

  lines.push("", "## Gallery", "");

  for (const photo of photographs) {
    lines.push(`- [${photo.title}](/gallery/${photo.slug})`);
  }

  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
