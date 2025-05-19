"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FaCode, FaDatabase, FaGlobe, FaLayerGroup, FaPalette, FaServer } from "react-icons/fa"

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaPalette className="h-6 w-6" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: <FaServer className="h-6 w-6" />,
    skills: ["Node.js", "Express", "NestJS", "REST APIs", "GraphQL"],
  },
  {
    title: "Languages",
    icon: <FaCode className="h-6 w-6" />,
    skills: ["JavaScript", "TypeScript", "Python", "Go", "Rust"],
  },
  {
    title: "Databases",
    icon: <FaDatabase className="h-6 w-6" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Supabase"],
  },
  {
    title: "DevOps",
    icon: <FaLayerGroup className="h-6 w-6" />,
    skills: ["Docker", "GitHub Actions", "CI/CD", "AWS", "Vercel"],
  },
  {
    title: "Other",
    icon: <FaGlobe className="h-6 w-6" />,
    skills: ["Git", "Agile", "Testing", "UI/UX", "Performance Optimization"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-2 mb-10">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="text-muted-foreground">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full gradient-card">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
