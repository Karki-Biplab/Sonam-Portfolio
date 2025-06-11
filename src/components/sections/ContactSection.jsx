
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Container from '@/components/Container';
import AnimatedSection from '@/components/AnimatedSection';
import { AnimatedLine } from '@/components/AnimatedText';
import { PERSONAL_INFO } from '@/data/content';
import { useToast } from "@/hooks/use-toast";
import { useState } from 'react';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a frontend-only app, so we'll simulate form submission.
    toast({
      title: "Message Sent (Simulated)",
      description: "Thank you for your message! I'll get back to you soon. (This is a demo, no email was actually sent.)",
      variant: "default", // 'default' variant should work with light/dark themes
    });
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    // For light theme, primary bg is dark blue, primary-foreground is light text. This works.
    <AnimatedSection id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <Container>
        <AnimatedLine 
            text="Let's Talk" 
            className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold mb-6 text-center text-primary-foreground" 
        />
        <motion.p 
          className="text-lg text-center max-w-xl mx-auto mb-12 text-primary-foreground/80"
          initial={{ opacity:0, y: 20 }}
          animate={{ opacity:1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Have a project in mind or just want to say hi? Fill out the form below or email me at <a href={`mailto:${PERSONAL_INFO.contactEmail}`} className="font-semibold text-accent hover:underline">{PERSONAL_INFO.contactEmail}</a>.
        </motion.p>

        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-lg mx-auto space-y-6"
          initial={{ opacity:0, y: 50 }}
          animate={{ opacity:1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary-foreground/90 mb-1">Full Name</label>
            <Input 
              type="text" 
              name="name" 
              id="name" 
              required 
              className="bg-background text-foreground border-border placeholder:text-muted-foreground focus:ring-accent focus:border-accent" 
              // Adjusted classes for light theme: input fields are on primary bg, so should have light text on dark inputs, or dark text on light inputs.
              // The input fields themselves are on `bg-primary text-primary-foreground`. So their internal BG should be contrasting.
              // Let's make input fields use standard background/foreground from the theme.
              // className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-accent focus:border-accent" 
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary-foreground/90 mb-1">Email Address</label>
            <Input 
              type="email" 
              name="email" 
              id="email" 
              required 
              className="bg-background text-foreground border-border placeholder:text-muted-foreground focus:ring-accent focus:border-accent"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary-foreground/90 mb-1">Message</label>
            <Textarea 
              name="message" 
              id="message" 
              rows="4" 
              required 
              className="bg-background text-foreground border-border placeholder:text-muted-foreground focus:ring-accent focus:border-accent min-h-[120px]"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg rounded-md">
            Send Message
          </Button>
        </motion.form>
      </Container>
    </AnimatedSection>
  );
}
