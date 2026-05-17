"use client";

import { type ComponentProps, useRef, useState } from "react";

type CodeBlockProps = ComponentProps<"pre">;

export default function CodeBlock({
  children,
  className,
  ...props
}: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    const text = preRef.current?.innerText.trimEnd();

    if (!text) {
      return;
    }

    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="code-block">
      <button
        type="button"
        className="code-block-copy"
        onClick={copyCode}
        aria-label={copied ? "Code copied" : "Copy code"}
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <pre ref={preRef} className={className} {...props}>
        {children}
      </pre>
    </div>
  );
}
