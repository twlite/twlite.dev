"use client";

import { useState } from "react";
import Link from "next/link";
import type { Photograph } from "@/lib/photographs";

export default function GalleryGrid({
  photographs,
}: {
  photographs: Photograph[];
}) {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const markImageLoaded = (src: string) => {
    setLoadedImages((current) => {
      if (current[src]) return current;
      return { ...current, [src]: true };
    });
  };

  return (
    <div className="columns-2 gap-3 sm:columns-3">
      {photographs.map((photograph) => (
        <Link
          key={photograph.src}
          href={`/gallery/${photograph.slug}`}
          className="relative mb-3 block w-full overflow-hidden rounded-sm border border-neutral-800 bg-neutral-900 text-left transition hover:border-neutral-600"
        >
          {!loadedImages[photograph.src] && (
            <span className="gallery-image-skeleton" aria-hidden="true" />
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photograph.src}
            alt={photograph.title}
            className={`w-full transition-opacity duration-300 ${
              loadedImages[photograph.src] ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            width={photograph.width}
            height={photograph.height}
            ref={(image) => {
              if (image?.complete && image.naturalWidth > 0) {
                markImageLoaded(photograph.src);
              }
            }}
            onLoad={() => markImageLoaded(photograph.src)}
            onError={() => markImageLoaded(photograph.src)}
          />
        </Link>
      ))}
    </div>
  );
}
