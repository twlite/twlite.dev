import type { Metadata } from "next";
import ContentLink from "@/components/content-link";
import Footer from "@/components/layout/footer";
import Shell from "@/components/layout/shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Kunjan Dhungana",
  description:
    "Software engineer from Nepal working on TypeScript, runtimes, developer tooling, and maintainable systems.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Shell title="Kunjan Dhungana">
        <p className="text-sm text-neutral-400">
          Self-taught software engineer from Nepal. Co-founder of{" "}
          <ContentLink url="https://neplextech.com" name="Neplex" />, a product
          studio building open source developer tools and infrastructure.
          <br />
          <br />I work on{" "}
          <ContentLink url="https://commandkit.dev" name="CommandKit" />, a
          meta-framework for Discord.js bots with file-system routing and
          compiler directives, and{" "}
          <ContentLink url="https://yasumu.dev" name="Yasumu" />, an API testing
          tool with an embedded Deno runtime inside a native desktop app. See{" "}
          <ContentLink url="/projects" name="projects" /> page for more details.
          <br />
          <br />I work mostly in TypeScript, Rust, and Node.js. Interested in
          runtimes, developer tooling, and systems that stay maintainable as
          they grow.
        </p>
      </Shell>
      <Footer />
    </>
  );
}
