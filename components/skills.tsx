'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  FaCode,
  FaDatabase,
  FaGlobe,
  FaLayerGroup,
  FaPalette,
  FaServer,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaAws,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiGo,
  SiRust,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiSupabase,
  SiGithubactions,
  SiVercel,
} from 'react-icons/si';
import { BiLogoHtml5 } from 'react-icons/bi';
import { TbApi } from 'react-icons/tb';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FaPalette className="h-6 w-6" />,
    skills: [
      { name: 'React', icon: <FaReact className="fill-teal-500" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="fill-white" /> },
      {
        name: 'TypeScript',
        icon: <SiTypescript className="fill-blue-500" />,
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="fill-teal-500" />,
      },
      { name: 'HTML/CSS', icon: <BiLogoHtml5 className="fill-orange-500" /> },
    ],
  },
  {
    title: 'Backend',
    icon: <FaServer className="h-6 w-6" />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="fill-green-600" /> },
      { name: 'Express', icon: <SiExpress className="fill-white" /> },
      { name: 'NestJS', icon: <SiNestjs className="fill-red-500" /> },
      { name: 'REST APIs', icon: <TbApi className="stroke-blue-400" /> },
      { name: 'GraphQL', icon: <SiGraphql className="fill-pink-500" /> },
    ],
  },
  {
    title: 'Languages',
    icon: <FaCode className="h-6 w-6" />,
    skills: [
      { name: 'JavaScript', icon: <FaCode className="fill-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="fill-blue-500" /> },
      { name: 'Python', icon: <FaPython className="fill-blue-400" /> },
      { name: 'Go', icon: <SiGo className="fill-cyan-500" /> },
      { name: 'Rust', icon: <SiRust className="fill-orange-600" /> },
    ],
  },
  {
    title: 'Databases',
    icon: <FaDatabase className="h-6 w-6" />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="fill-green-500" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="fill-blue-400" /> },
      { name: 'MySQL', icon: <SiMysql className="fill-orange-400" /> },
      { name: 'Redis', icon: <SiRedis className="fill-red-500" /> },
      { name: 'Supabase', icon: <SiSupabase className="fill-emerald-500" /> },
    ],
  },
  {
    title: 'DevOps',
    icon: <FaLayerGroup className="h-6 w-6" />,
    skills: [
      { name: 'Docker', icon: <FaDocker className="fill-blue-400" /> },
      { name: 'GitHub Actions', icon: <SiGithubactions className="fill-gray-100" /> },
      { name: 'CI/CD', icon: <FaCode className="fill-green-400" /> },
      { name: 'AWS', icon: <FaAws className="fill-orange-400" /> },
      { name: 'Vercel', icon: <SiVercel className="fill-white" /> },
    ],
  },
  {
    title: 'Other',
    icon: <FaGlobe className="h-6 w-6" />,
    skills: [
      { name: 'Git', icon: <FaGitAlt className="fill-orange-500" /> },
      { name: 'Agile', icon: <FaCode className="fill-blue-400" /> },
      { name: 'Testing', icon: <FaCode className="fill-green-400" /> },
      { name: 'UI/UX', icon: <FaPalette className="fill-purple-400" /> },
      { name: 'Performance Optimization', icon: <FaCode className="fill-yellow-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-2 mb-10">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="text-muted-foreground">
            Technologies and tools I work with
          </p>
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
                      <li
                        key={skill.name}
                        className="text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-4 h-4">{skill.icon}</span>
                        {skill.name}
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
  );
}
