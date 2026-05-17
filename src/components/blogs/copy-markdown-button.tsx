"use client";

import { useState } from "react";

export default function CopyMarkdownButton({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);

  const copyMarkdown = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={copyMarkdown}
      className="rounded border border-neutral-800 px-2 py-1 text-xs font-medium text-neutral-400 transition hover:border-neutral-600 hover:text-neutral-100"
    >
      {copied ? "Copied" : "Copy markdown"}
    </button>
  );
}
