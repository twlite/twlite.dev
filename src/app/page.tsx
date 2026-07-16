import type { Metadata } from 'next';
import ContentLink from '@/components/content-link';
import Footer from '@/components/layout/footer';
import Shell from '@/components/layout/shell';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Kunjan Dhungana',
  description:
    'Software engineer from Nepal working on TypeScript, runtimes, developer tooling, maintainable systems, and learning piano on the side.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <Shell title="Kunjan Dhungana">
        <div className="space-y-5 text-sm leading-7 text-neutral-400">
          <p>
            Self-taught software engineer from Nepal. Co-founder of{' '}
            <ContentLink url="https://neplextech.com" name="Neplex" />, a
            product studio building open source developer tools and
            infrastructure.
          </p>

          <div className="rounded-lg border border-neutral-700 bg-neutral-900/70 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-neutral-100">
                  Have something to discuss?
                </p>
                <p className="mt-0.5 text-xs leading-5 text-neutral-400">
                  Schedule a call about developer tooling, open source, Neplex,
                  or potential collaborations.
                </p>
              </div>

              <a
                href="https://cal.com/twlite"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-md bg-neutral-100 px-4 py-2 text-xs font-semibold text-neutral-950 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Book a call
              </a>
            </div>
          </div>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold text-neutral-100">Work</h2>
            <p>
              I work mostly in TypeScript, Rust, and Node.js. I am interested in
              runtimes, developer tooling, and systems that stay maintainable as
              they grow. Recently that has meant working on{' '}
              <ContentLink url="https://commandkit.dev" name="CommandKit" />, a
              meta-framework for Discord.js bots, and{' '}
              <ContentLink url="https://yasumu.dev" name="Yasumu" />, an API
              testing tool with an embedded Deno runtime inside a native desktop
              app. See the <ContentLink url="/projects" name="projects" /> page
              for more.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold text-neutral-100">
              Side Quest
            </h2>
            <p>
              I am learning piano slowly, mostly to understand music with the
              same patience I try to bring to software. It is a useful break
              from staring at compilers and runtime behavior all day.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="rounded border border-neutral-800 bg-neutral-900/70 px-2 py-1 text-xs text-neutral-300">
                #LearningPiano
              </span>
              <span className="rounded border border-neutral-800 bg-neutral-900/70 px-2 py-1 text-xs text-neutral-300">
                #SlowPractice
              </span>
            </div>
          </section>

          {/* <section className="space-y-3">
            <h2 className="text-sm font-semibold text-neutral-100">
              Featured Song
            </h2>
            <p>
              I have been listening to{' '}
              <ContentLink
                url="https://music.youtube.com/watch?v=PgI2n7hTuXs"
                name="Bachau by Albatross"
              />{' '}
              on repeat — Albatross is my favorite band, and their sound has
              been a constant in my everyday listening.
            </p>
            <div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/PgI2n7hTuXs"
                title="Bachau by Albatross"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-neutral-800 px-3 py-2.5 text-xs text-neutral-500">
                <span className="font-medium text-neutral-300">
                  Bachau · Albatross
                </span>
                <div className="flex items-center gap-2">
                  <span>#EverydayListen</span>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </Shell>
      <Footer />
    </>
  );
}
