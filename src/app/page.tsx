import type { Metadata } from 'next';
import ContentLink from '@/components/content-link';
import Footer from '@/components/layout/footer';
import Shell from '@/components/layout/shell';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Kunjan Dhungana',
  description:
    'Software engineer from Nepal building developer tools, runtimes, and maintainable systems with TypeScript and Rust.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <Shell title="Kunjan Dhungana">
        <div className="space-y-8 text-sm leading-7 text-neutral-400">
          <p>
            Self-taught software engineer from Nepal and co-founder of{' '}
            <ContentLink url="https://neplextech.com" name="Neplex" />, an
            independent product studio building open-source developer tools and
            infrastructure. I work primarily with TypeScript, Rust, and Node.js.
          </p>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold text-neutral-100">Work</h2>

            <p>
              I am particularly interested in runtimes, developer experience,
              and systems that remain understandable as they grow.
            </p>

            <p>
              My work today focuses on developer tooling, JavaScript runtimes,
              and open-source infrastructure. Lately that has meant building{' '}
              <ContentLink url="https://yasumu.dev" name="Yasumu" />,
              contributing to various libraries, and experimenting with ideas
              that eventually become products.
            </p>

            <p>
              You can find more of my work on the{' '}
              <ContentLink url="/projects" name="projects page" />.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold text-neutral-100">
              Outside software
            </h2>

            <p>
              I am slowly learning piano. It gives me something unfamiliar to
              practice, and a useful reason to step away from code for a while.
            </p>
            <p>
              I also write occasionally, usually about software, open source, or
              some topic I wanted to think through in writing. You can read
              those posts on the <ContentLink url="/blogs" name="blogs page" />.
            </p>
          </section>

          <section className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-lg">
                <h2 className="font-medium text-neutral-100">Work with me</h2>

                <p className="mt-0.5 text-xs leading-5 text-neutral-400">
                  Book a call to discuss developer tooling, open source, product
                  engineering, or a potential collaboration.
                </p>
              </div>

              <a
                href="https://cal.com/twlite"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-md bg-neutral-100 px-4 py-2 text-xs font-semibold text-neutral-950 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Book a call
              </a>
            </div>
          </section>
        </div>
      </Shell>

      <Footer />
    </>
  );
}
