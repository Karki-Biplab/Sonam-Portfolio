
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  if (!project) return null;

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] } // Smooth but pronounced ease
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden rounded-lg shadow-lg bg-card"
    >
      <Link href={`/projects/${project.slug}`} passHref>
        <div className="cursor-pointer">
          <motion.div 
            className="relative w-full h-64 md:h-80"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-110"
              data-ai-hint={project.dataAiHint}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
          </motion.div>
          
          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-headline font-semibold text-card-foreground mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
            <Button variant="link" className="p-0 text-primary group-hover:text-accent">
              View Project <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
