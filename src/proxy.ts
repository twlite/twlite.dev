import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const accept = request.headers.get("accept") || "";

  const isMarkdown = accept.includes("text/markdown");
  const isJSON = accept.includes("application/json");

  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    return NextResponse.redirect(
      new URL(`/blogs/${blogMatch[1]}`, request.url),
    );
  }

  if (!isMarkdown && !isJSON) {
    return NextResponse.next();
  }

  const slug = pathname.match(/^\/blogs\/([^/]+)$/)?.[1];

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
  matcher: ["/blog/:slug", "/blogs/:slug"],
};
