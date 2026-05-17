import type { Metadata } from "next";
import GalleryGrid from "@/components/gallery/gallery-grid";
import Shell from "@/components/layout/shell";
import { getAllPhotographs } from "@/lib/photographs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Gallery",
  description: "Photographs by Kunjan Dhungana.",
  path: "/gallery",
});

export default function GalleryPage() {
  const photographs = getAllPhotographs();

  return (
    <Shell title="Gallery">
      <p className="mb-4 text-sm text-neutral-400">
        Photographs I want to keep around.
      </p>
      {photographs.length > 0 ? (
        <GalleryGrid photographs={photographs} />
      ) : (
        <p className="text-sm text-neutral-400">No photographs yet.</p>
      )}
    </Shell>
  );
}
