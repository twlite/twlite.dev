import Link from "next/link";
import {
  Discord,
  Email,
  GitHub,
  // Instagram,
  LinkedIn,
  Patreon,
  // TikTok,
} from "../icons";

const socialLinks = [
  { icon: <GitHub />, url: "https://github.com/twlite", name: "GitHub" },
  {
    icon: <LinkedIn />,
    url: "https://linkedin.com/in/twlite",
    name: "LinkedIn",
  },
  {
    icon: <Discord />,
    url: "https://discord.com/users/916316955772862475",
    name: "Discord",
  },
  // {
  //   icon: <Instagram />,
  //   url: "https://www.instagram.com/twilight.dev",
  //   name: "Instagram",
  // },
  // {
  //   icon: <TikTok />,
  //   url: "https://www.tiktok.com/@twilightdev",
  //   name: "TikTok",
  // },
  {
    icon: <Patreon />,
    url: "https://www.patreon.com/twlite",
    name: "Patreon",
  },
  {
    icon: <Email />,
    url: "mailto:hello@twilight.dev",
    name: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-wrap gap-3 border-t mt-4 pt-4 border-neutral-800">
      {socialLinks.map((link) => (
        <SocialLink
          key={link.url}
          icon={link.icon}
          url={link.url}
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
