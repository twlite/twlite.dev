"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm transition-colors ${active ? "text-neutral-200" : "text-neutral-400 hover:text-neutral-200"}`}
    >
      {children}
    </Link>
  );
}

export default function NavbarLinks() {
  return (
    <div className="flex items-center gap-4">
      <NavLink href="/wall-of-fame">Wall of Fame</NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/blogs">Blogs</NavLink>
    </div>
  );
}
