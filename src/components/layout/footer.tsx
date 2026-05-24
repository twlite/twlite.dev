import Link from "next/link";
import { socialLinks } from "@/lib/socials";
import {
  Discord,
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  Patreon,
  TikTok,
  Twitter,
} from "../icons";

const iconMap: Record<string, React.ReactNode> = {
  github: <GitHub />,
  linkedin: <LinkedIn />,
  discord: <Discord />,
  instagram: <Instagram />,
  tiktok: <TikTok />,
  patreon: <Patreon />,
  email: <Email />,
  twitter: <Twitter />,
};

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-center gap-3 border-t mt-4 pt-4 border-neutral-800">
      {socialLinks.map((link) => (
        <SocialLink
          key={link.key}
          icon={iconMap[link.key]}
          url={link.source}
          name={link.name}
        />
      ))}
    </footer>
  );
}

function SocialLink({
  icon,
  url,
  name,
}: {
  icon: React.ReactNode;
  url: string;
  name: string;
}) {
  return (
    <Link
      href={url}
      className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-neutral-200"
      rel="noreferrer noopener"
    >
      {icon} {name}
    </Link>
  );
}
