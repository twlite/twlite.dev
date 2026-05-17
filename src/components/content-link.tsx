import Link from "next/link";

export default function ContentLink({
  url,
  name,
}: {
  url: string;
  name: string;
}) {
  return (
    <Link
      href={url}
      rel="noreferrer noopener"
      className="text-neutral-50 font-medium underline hover:text-neutral-200"
    >
      {name}
    </Link>
  );
}
