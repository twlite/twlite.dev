import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept") || "";

  const isMarkdown = accept.includes("text/markdown");
  const isJSON = accept.includes("application/json");

  if (!isMarkdown && !isJSON) {
    return NextResponse.next();
  }

  const slug = request.nextUrl.pathname.match(/^\/blogs\/([^/]+)$/)?.[1];

  if (!slug) {
    return NextResponse.next();
  }

  const dest = isMarkdown
    ? `/blogs/${slug}/markdown`
    : isJSON
      ? `/blogs/${slug}/json`
      : `/blogs/${slug}`;

  return NextResponse.rewrite(new URL(dest, request.url));
}

export const config = {
  matcher: "/blogs/:slug",
};
