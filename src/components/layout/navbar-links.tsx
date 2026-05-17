"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/wall-of-fame", label: "Wall of Fame" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blogs", label: "Blogs" },
];

function NavLink({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`text-sm transition-colors ${active ? "text-neutral-100" : "text-neutral-400 hover:text-neutral-200"}`}
    >
      {children}
    </Link>
  );
}

export default function NavbarLinks() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden items-center gap-4 sm:flex">
        {links.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </div>

      <button
        type="button"
        className="flex size-8 items-center justify-center rounded border border-neutral-800 text-neutral-300 transition hover:border-neutral-600 hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600 sm:hidden"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Toggle navigation"
      >
        <span className="flex w-4 flex-col gap-1">
          <span className="h-px w-full bg-current" />
          <span className="h-px w-full bg-current" />
          <span className="h-px w-full bg-current" />
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-20 flex min-w-40 flex-col gap-3 rounded-md border border-neutral-800 bg-neutral-950 p-3 shadow-xl sm:hidden">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
