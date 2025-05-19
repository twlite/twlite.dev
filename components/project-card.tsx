'use client';

import type React from 'react';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Repository } from '@/lib/pinned-repos';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiRust,
  SiJavascript,
  SiPython,
  SiGo,
  SiCplusplus,
} from 'react-icons/si';

interface ProjectCardProps {
  repository: Repository;
}

export default function ProjectCard({ repository }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * 5;
    const rotateYValue = ((centerX - x) / centerX) * 5;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const getLanguageIcon = (language: string) => {
    switch (language) {
      case 'TypeScript':
        return <SiTypescript className="h-4 w-4 text-blue-500" />;
      case 'Rust':
        return <SiRust className="h-4 w-4 text-orange-500" />;
      case 'JavaScript':
        return <SiJavascript className="h-4 w-4 text-yellow-400" />;
      case 'Python':
        return <SiPython className="h-4 w-4 text-blue-600" />;
      case 'Go':
        return <SiGo className="h-4 w-4 text-blue-400" />;
      default:
        return <SiCplusplus className="h-4 w-4 text-purple-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        ref={cardRef}
        className="gradient-card h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        <Card className="h-full flex flex-col overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                {getLanguageIcon(repository.language)}
                <h3 className="font-semibold text-lg">{repository.name}</h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <FaStar className="h-3.5 w-3.5 mr-1 text-yellow-400" />
                  {repository.stargazers_count}+
                </div>
                <div className="flex items-center">
                  <FaCodeBranch className="h-3.5 w-3.5 mr-1 text-gray-400" />
                  {repository.forks_count}+
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground text-sm mb-4">
              {repository.description || 'No description provided'}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary" className="flex items-center gap-1">
                {repository.language}
              </Badge>
            </div>
          </CardContent>
          <CardFooter className="pt-2">
            <div className="flex gap-2 w-full">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <Link
                  href={repository.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-4 w-4 mr-2" />
                  Code
                </Link>
              </Button>
              <Button variant="default" size="sm" className="flex-1" asChild>
                <Link
                  href={repository.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="h-3.5 w-3.5 mr-2" />
                  Website
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  );
}
