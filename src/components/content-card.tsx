import Link from "next/link";

export interface ContentCardProps {
  title: string;
  description: string;
  url: string;
  image?: string | null;
  meta?: string;
}

export default function ContentCard(content: ContentCardProps) {
  const isExternal = /^https?:\/\//.test(content.url);

  return (
    <div className="flex items-start justify-between gap-4 border-b border-neutral-800 py-5 last:border-0">
      <div className="flex flex-col gap-1">
        <Link
          href={content.url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-sm font-medium text-neutral-50 underline underline-offset-4 hover:text-neutral-300"
        >
          {content.title}
        </Link>
        {content.meta && (
          <p className="text-xs text-neutral-500">{content.meta}</p>
        )}
        <p className="text-sm text-neutral-400">{content.description}</p>
      </div>
      {content.image && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={content.image}
          alt={content.title}
          className="rounded-sm shrink-0 size-12"
        />
      )}
    </div>
  );
}
