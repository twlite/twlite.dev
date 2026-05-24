import type { Metadata } from "next";
import ContentCard from "@/components/content-card";
import Shell from "@/components/layout/shell";
import { people } from "@/lib/wall-of-fame";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Wall of Fame",
  description:
    "People who gave me their time, support, and direction across software and open source.",
  path: "/wall-of-fame",
});

export default function WallOfFame() {
  return (
    <Shell title="Wall of Fame">
      <p className="text-sm text-neutral-400 mb-2">
        People who gave me their time when they had no reason to. I
        wouldn&apos;t be building the same things without them.
      </p>
      <div className="flex flex-col">
        {people.map((person, index) => (
          <ContentCard key={index} {...person} />
        ))}
      </div>
    </Shell>
  );
}
