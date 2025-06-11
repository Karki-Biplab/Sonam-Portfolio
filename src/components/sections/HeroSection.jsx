
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Container from '@/components/Container';
import { AnimatedLine } from '@/components/AnimatedText';
import { PERSONAL_INFO } from '@/data/content';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground py-20 pt-32 md:pt-20">
      <Container className="text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {PERSONAL_INFO.heroIntro.map((line, index) => (
            <AnimatedLine 
              key={index} 
              text={line} 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold mb-2 md:mb-4 text-primary"
              delay={index * 0.3}
            />
          ))}
        </motion.div>
        
        <motion.p 
          className="mt-6 md:mt-8 text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: PERSONAL_INFO.heroIntro.length * 0.3 + 0.2 }}
        >
          {PERSONAL_INFO.title}
        </motion.p>

        <motion.div
          className="mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: PERSONAL_INFO.heroIntro.length * 0.3 + 0.4 }}
        >
          <Link href="/#work" passHref> {/* This links to FeaturedProjectsSection which is now experiences */}
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-3 text-lg">
              View My Experience
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
