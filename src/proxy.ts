import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept") || "";

  if (!accept.includes("text/markdown")) {
    return NextResponse.next();
  }

  const slug = request.nextUrl.pathname.match(/^\/blogs\/([^/]+)$/)?.[1];

  if (!slug) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL(`/blogs/${slug}/markdown`, request.url));
}

export const config = {
  matcher: "/blogs/:slug",
};
