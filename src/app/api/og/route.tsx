import { ImageResponse } from "next/og";
import { site } from "@/lib/seo";

export const runtime = "edge";

const size = {
  width: 1200,
  height: 630,
};

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || site.name;
  const description = searchParams.get("description") || site.description;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0a",
        color: "#fafafa",
        padding: "70px",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
          fontSize: 28,
          color: "#a3a3a3",
        }}
      >
        Twilight
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            fontSize: 72,
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: 0,
            maxWidth: 960,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 30,
            lineHeight: 1.35,
            color: "#c7c7c7",
            maxWidth: 900,
          }}
        >
          {description}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #262626",
          paddingTop: 24,
          fontSize: 24,
          color: "#a3a3a3",
        }}
      >
        <span>{new URL(site.url).hostname}</span>
        <span>TypeScript · Tooling · Systems</span>
      </div>
    </div>,
    size,
  );
}
