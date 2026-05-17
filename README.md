# Personal Website

Source code for [twlite.dev](https://twlite.dev), my personal website and blog.

## Overview

This is a Next.js site for:

- Short personal profile and links
- Blog posts written in MDX
- Project and wall-of-fame pages
- A generated photograph gallery
- SEO metadata, sitemap, robots, and dynamic Open Graph images

## Content

Blog posts live in `src/content/blog`. They are compiled at build/dev startup into generated TypeScript modules under `src/generated`, so page rendering does not read markdown files at request time.

Photographs live in `public/photographs`. The gallery is also generated into `src/generated/photographs.ts` at build/dev startup.

## Photograph Metadata

Photos can contain sensitive EXIF metadata such as location and device information. Before publishing new photographs, strip metadata:

```bash
pnpm photos:erase-metadata
```

The script uses `sharp` and overwrites files in `public/photographs`.

## Commands

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm photos:erase-metadata
```

## Notes

This project uses Next.js 16. Read the local Next docs in `node_modules/next/dist/docs/` before making framework-level changes.
