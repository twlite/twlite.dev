"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I&apos;m a passionate software developer with expertise in building modern web applications. I
                specialize in JavaScript/TypeScript, React, and Node.js ecosystems.
              </p>
              <p className="text-muted-foreground">
                With a strong focus on creating clean, efficient, and maintainable code, I strive to deliver exceptional
                user experiences through thoughtful design and robust implementation.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I enjoy contributing to open-source projects and sharing my knowledge with the developer community. When
                I&apos;m not coding, you can find me exploring new technologies, writing technical articles, or
                collaborating on innovative projects.
              </p>
              <p className="text-muted-foreground">
                I&apos;m always open to new opportunities and collaborations. Feel free to reach out if you&apos;d like
                to work together!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
