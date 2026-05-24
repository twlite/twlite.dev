import Link from "next/link";
import { withUtm } from "@/lib/utm";

export default function ContentLink({
  url,
  name,
}: {
  url: string;
  name: string;
}) {
  return (
    <Link
      href={withUtm(url)}
      rel="noreferrer noopener"
      className="text-neutral-50 font-medium underline hover:text-neutral-200"
    >
      {name}
    </Link>
  );
}
