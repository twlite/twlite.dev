import type { Metadata } from "next";
import ContentCard, { ContentCardProps } from "@/components/content-card";
import Shell from "@/components/layout/shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Wall of Fame",
  description:
    "People who gave me their time, support, and direction across software and open source.",
  path: "/wall-of-fame",
});

const people: ContentCardProps[] = [
  {
    title: "Santosh Bhandari",
    url: "https://santoshb.com.np",
    image: "https://github.com/bsantosh909.png",
    description:
      "Helped me think through my career choices since I was a teenager. Always supportive, to this day.",
  },
  {
    title: "Androz2091",
    url: "https://androz2091.fr",
    image: "https://github.com/androz2091.png",
    description:
      "The reason I got into open source. I learned a lot from his projects like Discord Player, discord-giveaways, and Atlantabot. Also the reason I use TypeScript today :D",
  },
];

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
