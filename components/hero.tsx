"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FiArrowRight } from "react-icons/fi"
import { FaGithub, FaTwitter, FaDiscord, FaLinkedin, FaPatreon } from "react-icons/fa"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:order-2 flex-shrink-0">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="https://github.com/twlite.png" alt="Twilight" fill className="object-cover" priority />
            </div>
          </div>

          <div className="md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I&apos;m <span className="animated-gradient-text">Twilight</span>
              <br />
              Software Developer
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4">
              I build modern web applications with a focus on performance, accessibility, and user experience.
            </p>
            <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="#projects">
                  View Projects <FiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-6 justify-center md:justify-start">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/twlite" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://twitter.com/hellotwlite"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://discord.com/users/916316955772862475"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                >
                  <FaDiscord className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/twlite"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.patreon.com/twlite"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Patreon"
                >
                  <FaPatreon className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
