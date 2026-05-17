import Link from "next/link";
import NavbarLinks from "./navbar-links";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mb-4">
      <Link href="/">
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
