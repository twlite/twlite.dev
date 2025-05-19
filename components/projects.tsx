"use client"

import { motion } from "framer-motion"
import { pinnedRepositories } from "@/lib/pinned-repos"
import ProjectCard from "./project-card"

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2 mb-10">
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="text-muted-foreground">A selection of my recent projects and open source contributions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pinnedRepositories.map((repo) => (
              <ProjectCard key={repo.id} repository={repo} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
