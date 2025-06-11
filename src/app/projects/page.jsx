'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';
import { ARCHIVE_PROJECTS, PERSONAL_INFO } from '@/data/content';
import { AnimatedLine } from '@/components/AnimatedText';
import AnimatedSection from '@/components/AnimatedSection';

export default function ProjectsArchivePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  return (
    <div className="bg-background text-foreground py-20 pt-32 md:pt-24 min-h-screen">
      <Container>
        <AnimatedSection threshold={0.05}>
          <AnimatedLine 
              text="Project Archive" 
              className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold mb-6 text-center text-primary"
          />
          <motion.p 
            className="text-lg text-center max-w-xl mx-auto mb-12 md:mb-16 text-muted-foreground"
            initial={{ opacity:0, y: 20 }}
            animate={{ opacity:1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A collection of my past work and experiments. Explore the variety of projects I've had the pleasure to work on.
          </motion.p>
        
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {ARCHIVE_PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatedSection>
      </Container>
    </div>
  );
}
