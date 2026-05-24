'use client';

import {
  type ComponentProps,
  type ComponentType,
  useRef,
  useState,
} from 'react';
import SiTypescript, {
  defaultColor as SiTypescriptHex,
} from '@icons-pack/react-simple-icons/icons/SiTypescript.mjs';
import SiJavascript, {
  defaultColor as SiJavascriptHex,
} from '@icons-pack/react-simple-icons/icons/SiJavascript.mjs';
import SiReact, {
  defaultColor as SiReactHex,
} from '@icons-pack/react-simple-icons/icons/SiReact.mjs';
import SiGnubash, {
  defaultColor as SiGnubashHex,
} from '@icons-pack/react-simple-icons/icons/SiGnubash.mjs';
import SiJson, {
  defaultColor as SiJsonHex,
} from '@icons-pack/react-simple-icons/icons/SiJson.mjs';
import SiYaml, {
  defaultColor as SiYamlHex,
} from '@icons-pack/react-simple-icons/icons/SiYaml.mjs';
import SiMarkdown, {
  defaultColor as SiMarkdownHex,
} from '@icons-pack/react-simple-icons/icons/SiMarkdown.mjs';
import SiCss, {
  defaultColor as SiCssHex,
} from '@icons-pack/react-simple-icons/icons/SiCss.mjs';
import SiHtml5, {
  defaultColor as SiHtml5Hex,
} from '@icons-pack/react-simple-icons/icons/SiHtml5.mjs';
import SiPrisma, {
  defaultColor as SiPrismaHex,
} from '@icons-pack/react-simple-icons/icons/SiPrisma.mjs';
import SiSqlite, {
  defaultColor as SiSqliteHex,
} from '@icons-pack/react-simple-icons/icons/SiSqlite.mjs';
import { Diff, PowerShell } from '@/components/icons';

type CodeBlockProps = ComponentProps<'pre'>;

interface LangInfo {
  label: string;
  Icon?: ComponentType<{ className?: string; color?: string }>;
  color?: string;
}

const LANG_MAP: Record<string, LangInfo> = {
  ts: { label: 'TypeScript', Icon: SiTypescript, color: SiTypescriptHex },
  tsx: { label: 'TSX', Icon: SiReact, color: SiReactHex },
  typescript: {
    label: 'TypeScript',
    Icon: SiTypescript,
    color: SiTypescriptHex,
  },
  js: { label: 'JavaScript', Icon: SiJavascript, color: SiJavascriptHex },
  javascript: {
    label: 'JavaScript',
    Icon: SiJavascript,
    color: SiJavascriptHex,
  },
  jsx: { label: 'JSX', Icon: SiReact, color: SiReactHex },
  bash: { label: 'Bash', Icon: SiGnubash, color: SiGnubashHex },
  sh: { label: 'Shell', Icon: SiGnubash, color: SiGnubashHex },
  powershell: { label: 'PowerShell', Icon: PowerShell, color: '#5391FE' },
  ps: { label: 'PowerShell', Icon: PowerShell, color: '#5391FE' },
  json: { label: 'JSON', Icon: SiJson, color: SiJsonHex },
  yaml: { label: 'YAML', Icon: SiYaml, color: SiYamlHex },
  yml: { label: 'YAML', Icon: SiYaml, color: SiYamlHex },
  mdx: { label: 'MDX', Icon: SiMarkdown, color: SiMarkdownHex },
  md: { label: 'Markdown', Icon: SiMarkdown, color: SiMarkdownHex },
  css: { label: 'CSS', Icon: SiCss, color: SiCssHex },
  html: { label: 'HTML', Icon: SiHtml5, color: SiHtml5Hex },
  sql: { label: 'SQL', Icon: SiSqlite, color: SiSqliteHex },
  prisma: { label: 'Prisma', Icon: SiPrisma, color: SiPrismaHex },
  diff: { label: 'Diff', Icon: Diff, color: '#E34F4F' },
  plaintext: { label: 'Text' },
  text: { label: 'Text' },
};

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function CodeBlock({
  children,
  className,
  ...props
}: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const lang =
    (props as Record<string, string | undefined>)['data-language'] ??
    className
      ?.split(' ')
      .find((c) => c.startsWith('language-'))
      ?.replace('language-', '');

  const info = lang ? (LANG_MAP[lang] ?? { label: lang }) : null;

  const copyCode = async () => {
    const text = preRef.current?.innerText.trimEnd();
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="code-block">
      <div className="code-block-header">
        {info && (
          <span className="code-block-lang">
            {info.Icon && (
              <info.Icon className="code-block-lang-icon" color={info.color} />
            )}
            {info.label}
          </span>
        )}
        <button
          type="button"
          className="code-block-copy"
          onClick={copyCode}
          aria-label={copied ? 'Code copied' : 'Copy code'}
        >
          {copied ? (
            <>
              <CheckIcon /> Copied
            </>
          ) : (
            <>
              <CopyIcon /> Copy
            </>
          )}
        </button>
      </div>
      <pre ref={preRef} className={className} {...props}>
        {children}
      </pre>
    </div>
  );
}
