import Image from 'next/image';
import { JetBrainsMono } from '@/lib/font';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { RiDiscordLine, RiTwitterXLine, RiPatreonLine } from 'react-icons/ri';
import { IconLink } from '@/components/IconLink';
import { twMerge } from 'tailwind-merge';
import { TypeWriter } from '@/components/Typewriter';
import { Nav } from '@/components/Nav';

export default function Home() {
  return (
    <div
      className={twMerge(
        'h-screen text-text select-none',
        'bg-background',
        JetBrainsMono.className
      )}
    >
      <Nav />
      <main className="grid place-items-center h-2/3">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          <div>
            <h1 className="text-2xl lg:text-5xl font-bold text-primary text-center lg:text-start">
              twlite
            </h1>
            <TypeWriter
              className="text-xl lg:text-xl"
              text="Software Engineer"
            />
            <div className="flex items-center justify-center lg:justify-start gap-4 lg:mt-16 mt-8">
              <IconLink
                href="mailto:hello@twlite.dev"
                className="hover:text-accent"
              >
                <FiMail />
              </IconLink>
              <IconLink
                href="https://github.com/twlite"
                className="hover:text-slate-500"
              >
                <FiGithub />
              </IconLink>
              <IconLink
                href="https://www.linkedin.com/in/twlite"
                className="hover:text-blue-700"
              >
                <FiLinkedin />
              </IconLink>
              <IconLink
                href="https://twitter.com/hellotwlite"
                className="hover:text-gray-500"
              >
                <RiTwitterXLine />
              </IconLink>
              <IconLink
                href="https://discord.com/users/916316955772862475"
                className="hover:text-indigo-600"
              >
                <RiDiscordLine />
              </IconLink>
              <IconLink
                href="https://www.patreon.com/twlite"
                className="hover:text-primary"
              >
                <RiPatreonLine />
              </IconLink>
            </div>
          </div>
          <Image
            src="https://github.com/twlite.png"
            alt="twlite"
            width={300}
            height={300}
            className="rounded-full h-[200px] w-[200px] lg:h-[300px] lg:w-[300px]"
            draggable={false}
          />
        </div>
      </main>
    </div>
  );
}
