
'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';
import AnimatedSection from '@/components/AnimatedSection';
import { AnimatedLine } from '@/components/AnimatedText';
import { PERSONAL_INFO, SKILLS_TOOLS, EDUCATION, CERTIFICATIONS, CONTACT_DETAILS_ITEMS } from '@/data/content';
import Image from 'next/image';
import { Briefcase, Users, Zap, Award, GraduationCap, Mail, Phone, MapPin } from 'lucide-react'; // Added icons
import Link from 'next/link';

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-16 md:py-24 bg-background text-foreground">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column: Image */}
          <motion.div 
            className="relative w-full h-80 md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl lg:col-span-1 order-1 lg:order-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image 
              src="/next.svg"
              alt={PERSONAL_INFO.name} 
              layout="fill" 
              objectFit="cover"
              className="transform transition-transform duration-500 hover:scale-105"
              data-ai-hint="portrait professional"
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-2 order-2 lg:order-none">
            <AnimatedLine 
              text="About Me" 
              className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold mb-6 text-primary"
            />
            <motion.p 
              className="text-lg text-muted-foreground mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {PERSONAL_INFO.about}
            </motion.p>

            {/* Contact Details Mini */}
            <div className="mb-12">
              <h3 className="text-2xl font-headline font-semibold mb-4 text-primary">Get in Touch</h3>
              <div className="space-y-3">
                {CONTACT_DETAILS_ITEMS.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0 text-accent" />
                    <Link href={item.href} target={item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? '_self' : '_blank'} rel="noopener noreferrer">
                      <span>{item.text}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Skills & Tools */}
            <div className="mb-12">
              <h3 className="text-2xl font-headline font-semibold mb-6 text-primary">Skills & Tools</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {SKILLS_TOOLS.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <skill.icon className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-12">
              <h3 className="text-2xl font-headline font-semibold mb-6 text-primary">Education</h3>
              <div className="space-y-6">
                {EDUCATION.map((edu, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <edu.icon className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-md text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground/80">Graduated: {edu.year}</p>
                      {edu.details && <p className="text-sm text-muted-foreground/80 mt-1">{edu.details}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-headline font-semibold mb-6 text-primary">Certifications</h3>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <cert.icon className="h-7 w-7 text-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-md text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
