"use client";

import { useEffect, type ReactNode } from "react";

export function MediaKeyboardNav({
  prevSlug,
  nextSlug,
  children,
}: {
  prevSlug: string;
  nextSlug: string;
  children: ReactNode;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        window.location.href = "/gallery";
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        window.location.href = `/gallery/${prevSlug}`;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        window.location.href = `/gallery/${nextSlug}`;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlug, nextSlug]);

  return children;
}
