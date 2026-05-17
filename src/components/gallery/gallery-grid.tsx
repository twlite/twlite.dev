"use client";

import { useEffect, useState } from "react";
import type { Photograph } from "@/lib/photographs";

export default function GalleryGrid({
  photographs,
}: {
  photographs: Photograph[];
}) {
  const [selected, setSelected] = useState<Photograph | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const markImageLoaded = (src: string) => {
    setLoadedImages((current) => {
      if (current[src]) {
        return current;
      }

      return {
        ...current,
        [src]: true,
      };
    });
  };

  useEffect(() => {
    if (!selected) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
        return;
      }

      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
        return;
      }

      event.preventDefault();

      setSelected((current) => {
        if (!current) {
          return current;
        }

        const currentIndex = photographs.findIndex(
          (photograph) => photograph.src === current.src,
        );

        if (currentIndex === -1) {
          return current;
        }

        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex =
          (currentIndex + direction + photographs.length) % photographs.length;

        return photographs[nextIndex];
      });
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [photographs, selected]);

  return (
    <>
      <div className="columns-2 gap-3 sm:columns-3">
        {photographs.map((photograph) => (
          <button
            key={photograph.src}
            type="button"
            onClick={() => setSelected(photograph)}
            className="relative mb-3 block w-full overflow-hidden rounded-sm border border-neutral-800 bg-neutral-900 text-left transition hover:border-neutral-600"
            style={{ aspectRatio: `${photograph.width} / ${photograph.height}` }}
          >
            {!loadedImages[photograph.src] && (
              <span className="gallery-image-skeleton" aria-hidden="true" />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photograph.src}
              alt={photograph.title}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
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
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded border border-neutral-700 bg-neutral-900/90 px-2 py-1 text-xs text-neutral-300 transition hover:border-neutral-500 hover:text-neutral-50"
            onClick={() => setSelected(null)}
          >
            Close
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={selected.src}
            alt={selected.title}
            className="max-h-[88vh] max-w-[92vw] rounded-sm object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
