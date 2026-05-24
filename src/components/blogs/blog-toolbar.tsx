'use client';
import Link from 'next/link';
import { useState } from 'react';
import {
  CopyIcon,
  CheckIcon,
  MarkdownIcon,
  JsonIcon,
  RssIcon,
} from '@/components/icons';

function ToolbarLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      title={label}
      aria-label={label}
      className="rounded border border-neutral-800 p-1.5 text-neutral-400 transition hover:border-neutral-600 hover:text-neutral-100"
    >
      {icon}
    </Link>
  );
}

function ToolbarButton({
  onClick,
  icon,
  label,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      className="rounded border border-neutral-800 p-1.5 text-neutral-400 transition hover:border-neutral-600 hover:text-neutral-100"
    >
      {icon}
    </button>
  );
}

export default function BlogToolbar({
  content,
  slug,
}: {
  content: string;
  slug: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyMarkdown = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center gap-1.5">
      <ToolbarButton
        onClick={copyMarkdown}
        icon={copied ? <CheckIcon /> : <CopyIcon />}
        label={copied ? 'Copied' : 'Copy markdown'}
      />
      <ToolbarLink
        href={`/blogs/${slug}/markdown`}
        icon={<MarkdownIcon />}
        label="View markdown"
      />
      <ToolbarLink
        href={`/blogs/${slug}/json`}
        icon={<JsonIcon />}
        label="View JSON"
      />
      <ToolbarLink href="/blogs/feed.xml" icon={<RssIcon />} label="RSS feed" />
    </div>
  );
}
