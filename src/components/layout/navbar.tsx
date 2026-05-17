import Link from "next/link";
import NavbarLinks from "./navbar-links";

export default function Navbar() {
  return (
    <nav className="relative mb-6 flex items-center justify-between">
      <Link
        href="/"
        className="rounded-full ring-neutral-700 transition focus-visible:outline-none focus-visible:ring-2"
        aria-label="Home"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://github.com/twlite.png"
          alt="profile"
          className="size-8 rounded-full"
          loading="eager"
        />
      </Link>

      <NavbarLinks />
    </nav>
  );
}
