
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Container from '@/components/Container';
// PERSONAL_INFO will be passed as a prop
import { ArrowLeft, ExternalLink, Building, UserCircle, CalendarDays } from 'lucide-react'; // Added icons
import { AnimatedLine } from '@/components/AnimatedText';

export default function ProjectDetailClientPage({ project, personalInfo }) {
  // The `if (!project)` check is handled by the server wrapper which calls notFound()

  const detailsFormatted = project.details?.split('\n').map((line, index) => (
    line.trim() ? <p key={index} className="leading-relaxed mb-2">{line.trim()}</p> : null
  )).filter(Boolean);


  return (
    <div className="bg-background text-foreground py-20 pt-32 md:pt-24 min-h-screen">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <Link href="/projects" passHref>
              <Button variant="outline" className="text-primary hover:bg-primary/10 border-primary/50">
                <ArrowLeft size={18} className="mr-2" />
                Back to Archive
              </Button>
            </Link>
          </div>

          <AnimatedLine 
            text={project.title} 
            className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold mb-2 text-primary"
          />
           {project.company && (
            <motion.p
              className="text-xl text-muted-foreground mb-6 font-medium"
              initial={{ opacity: 0, y:10 }}
              animate={{ opacity: 1, y:0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Building size={20} className="inline mr-2 mb-1" />{project.company}
            </motion.p>
          )}
          <motion.p 
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y:10 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {project.description}
          </motion.p>

          <motion.div 
            className="relative w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-xl mb-12" // Reduced height slightly
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              data-ai-hint={project.dataAiHint}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, x:-20 }} animate={{ opacity: 1, x:0 }} transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-card p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center"><Building size={16} className="mr-2 text-accent"/>Company / Client</h3>
              <p className="text-lg text-card-foreground">{project.client || personalInfo.name}</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x:-20 }} animate={{ opacity: 1, x:0 }} transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-card p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center"><UserCircle size={16} className="mr-2 text-accent"/>Role</h3>
              <p className="text-lg text-card-foreground">{project.role || 'Contributor'}</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x:-20 }} animate={{ opacity: 1, x:0 }} transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-card p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center"><CalendarDays size={16} className="mr-2 text-accent"/>Year / Duration</h3>
              <p className="text-lg text-card-foreground">{project.year}</p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y:0 }} transition={{ delay: 0.7, duration: 0.5 }}
            className="prose prose-lg max-w-none text-foreground bg-card p-6 sm:p-8 rounded-lg shadow-sm" // Added card styling
          >
            <h2 className="text-2xl font-headline font-semibold mb-4 text-primary">Details & Responsibilities</h2>
            <div>{detailsFormatted.length > 0 ? detailsFormatted : <p>Detailed information is not available for this experience.</p>}</div>
          </motion.div>

          {project.liveUrl && project.liveUrl !== '#' && (
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y:0 }} transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" passHref>
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-3 text-lg">
                  View Related Link <ExternalLink size={18} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </div>
  );
}
