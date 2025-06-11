'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import Container from '@/components/Container';
import AnimatedSection from '@/components/AnimatedSection';
import { AnimatedLine } from '@/components/AnimatedText';
import { FEATURED_PROJECTS } from '@/data/content';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function FeaturedProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <AnimatedSection id="work" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <Container>
        <AnimatedLine 
            text="Selected Work" 
            className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold mb-12 md:mb-16 text-center text-primary-foreground"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <div className="text-center mt-12 md:mt-16">
          <Link href="/projects" passHref>
            <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-3 text-lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </Container>
    </AnimatedSection>
  );
}
