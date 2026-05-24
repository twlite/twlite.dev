import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPhotographs } from "@/lib/photographs";
import { absoluteUrl, site } from "@/lib/seo";
import Shell from "@/components/layout/shell";
import { MediaKeyboardNav } from "@/components/gallery/media-keyboard-nav";

interface Props {
  params: Promise<{ slug: string }>;
}

const photographs = getAllPhotographs();

export async function generateStaticParams() {
  return photographs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const photo = photographs.find((p) => p.slug === slug);
  if (!photo) return {};

  const url = absoluteUrl(`/gallery/${photo.slug}`);

  return {
    title: photo.title,
    description: `${photo.title} — Photograph by Kunjan Dhungana.`,
    alternates: { canonical: url },
    openGraph: {
      title: photo.title,
      description: `Photograph: ${photo.title}`,
      url,
      siteName: site.name,
      type: "website",
      images: [
        {
          url: absoluteUrl(photo.src),
          width: photo.width,
          height: photo.height,
          alt: photo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: photo.title,
      description: `Photograph: ${photo.title}`,
      creator: site.handle,
      images: [absoluteUrl(photo.src)],
    },
  };
}

export default async function GalleryMediaPage({ params }: Props) {
  const { slug } = await params;
  const currentIndex = photographs.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) notFound();

  const photo = photographs[currentIndex];

  return (
    <Shell title={photo.title}>
      <p className="mb-4 text-sm text-neutral-400">
        <Link
          href="/gallery"
          className="underline decoration-neutral-700 underline-offset-2 transition hover:decoration-neutral-400"
        >
          &larr; Back to gallery
        </Link>
      </p>

      <MediaViewer
        src={photo.src}
        alt={photo.title}
        prevSlug={
          photographs[(currentIndex - 1 + photographs.length) % photographs.length].slug
        }
        nextSlug={photographs[(currentIndex + 1) % photographs.length].slug}
      />
    </Shell>
  );
}

function MediaViewer({
  src,
  alt,
  prevSlug,
  nextSlug,
}: {
  src: string;
  alt: string;
  prevSlug: string;
  nextSlug: string;
}) {
  return (
    <MediaKeyboardNav prevSlug={prevSlug} nextSlug={nextSlug}>
      <div className="group relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full rounded-sm object-contain"
        />

        <Link
          href={`/gallery/${prevSlug}`}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded border border-neutral-700 bg-neutral-900/80 p-2 text-neutral-300 opacity-0 transition hover:border-neutral-500 hover:text-neutral-50 group-hover:opacity-100 max-sm:opacity-100 sm:opacity-0"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>

        <Link
          href={`/gallery/${nextSlug}`}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded border border-neutral-700 bg-neutral-900/80 p-2 text-neutral-300 opacity-0 transition hover:border-neutral-500 hover:text-neutral-50 group-hover:opacity-100 max-sm:opacity-100 sm:opacity-0"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      </div>
    </MediaKeyboardNav>
  );
}
