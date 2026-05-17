import type { Metadata } from "next";
import ContentLink from "@/components/content-link";
import Shell from "@/components/layout/shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Not Found",
  description: "The requested page could not be found.",
  path: "/404",
});

export default function NotFound() {
  return (
    <Shell title="Not Found">
      <p className="text-sm text-neutral-400">
        The page you are looking for does not exist.{" "}
        <ContentLink url="/" name="Go back" />?
      </p>
    </Shell>
  );
}
