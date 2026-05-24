import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { absoluteUrl, ogImageUrl, site } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";

const interSans = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: "https://github.com/twlite.png",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: absoluteUrl("/"),
    siteName: site.name,
    type: "website",
    images: [
      {
        url: ogImageUrl(site.name, site.description),
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    creator: site.handle,
    images: [ogImageUrl(site.name, site.description)],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="https://github.com/twlite.png" />
      </head>
      <body
        className={`${interSans.className} antialiased bg-neutral-950 text-neutral-50 min-h-screen dark`}
      >
        <div className="px-6 py-8 max-w-150 mx-auto">
          <Navbar />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
