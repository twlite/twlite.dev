import type { Metadata } from "next";
import ContentCard, { ContentCardProps } from "@/components/content-card";
import Shell from "@/components/layout/shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "My projects across API tooling, Discord.js infrastructure, webviews, compilers, and developer utilities.",
  path: "/projects",
});

const projects: ContentCardProps[] = [
  {
    title: "Yasumu",
    url: "https://yasumu.dev",
    image: "https://github.com/yasumu-org.png",
    description:
      "Yasumu is a modern, free and open-source API laboratory for designing and testing API workflows.",
  },
  {
    title: "CommandKit",
    url: "https://commandkit.dev",
    image: "https://github.com/commandkit.png",
    description:
      "The discord.js meta-framework with features such as AI-powered command handler, analytics, feature flags, and more",
  },
  {
    title: "@webviewjs/webview",
    url: "https://github.com/webviewjs/webview",
    image: "https://github.com/webviewjs.png",
    description: "Robust cross-platform webview library for Node/Deno/Bun",
  },
  {
    title: "Discord Player",
    url: "https://discord-player.js.org",
    image: null,
    description:
      "Discord Player is a robust framework for developing Discord Music bots using JavaScript and TypeScript.",
  },
  {
    title: "@neplex/vectorizer",
    url: "https://github.com/neplextech/vectorizer",
    image: null,
    description: "Fast Node.js library to convert raster images to svg",
  },
  {
    title: "ecmacraft",
    url: "https://github.com/twlite/ecmacraft",
    image: null,
    description:
      "EcmaCraft is a polyglot Minecraft plugin platform that lets you author Spigot plugin logic in TypeScript, while running through a Java host plugin powered by GraalVM JavaScript.",
  },
  {
    title: "canvacord",
    url: "https://canvacord.neplex.dev",
    image: null,
    description:
      "Canvacord allows you to easily generate custom images using React and tailwindcss-like syntax.",
  },
  {
    title: "kitmap",
    url: "https://github.com/twlite/kitmap",
    image: null,
    description:
      "A cross-platform CLI for tracking keyboard usage and generating beautiful heatmaps and statistics, built with Rust and React.",
  },
  {
    title: '"use macro"',
    url: "https://github.com/neplextech/use-macro",
    image: null,
    description:
      'Execute functions at compile-time and inline the result directly into your code using "use macro" directive.',
  },
  {
    title: "js-operator-overloading",
    url: "https://github.com/twlite/js-operator-overloading",
    image: null,
    description:
      "A simple transformer built with babel that allows overloading JavaScript operators at compile-time.",
  },
  {
    title: "nextjs-use-cache-directive",
    url: "https://github.com/twlite/nextjs-use-cache-directive",
    image: null,
    description:
      'A simple re-implementation of the "use cache" directive of Next.js that can run in any Node.js application.',
  },
  {
    title: "simple-piano",
    url: "https://github.com/twlite/simple-piano",
    image: null,
    description: "A super simple piano written in C.",
  },
  {
    title: "ytmpx",
    url: "https://github.com/twlite/ytmpx",
    image: null,
    description: "Discord RPC for YouTube Music",
  },
  {
    title: "youtube-sr",
    url: "https://github.com/twlite/youtube-sr",
    image: null,
    description: "A dead-simple YouTube metadata scraper",
  },
  {
    title: "neosearch",
    url: "https://github.com/twlite/neosearch",
    image: null,
    description: "Search on different platforms using bangs !",
  },
  {
    title: "soundcloud-scraper",
    url: "https://github.com/twlite/soundcloud-scraper",
    image: null,
    description:
      "Get metadata and download tracks from SoundCloud using JavaScript",
  },
  {
    title: "tiktok-search",
    url: "https://github.com/twlite/tiktok-search",
    image: null,
    description: "Simple module to fetch data from TikTok",
  },
  {
    title: "camb-dict",
    url: "https://github.com/twlite/camb-dict",
    image: null,
    description: "A simple cambridge dictionary scraper",
  },
];

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
