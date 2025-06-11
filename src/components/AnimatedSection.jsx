
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AnimatedSection({ children, className, threshold = 0.1, delay = 0, duration = 0.8, once = true, ...props }) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 75, 
      scale: 0.9, 
      rotateX: -20 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0,
      transition: { 
        duration, 
        delay, 
        ease: [0.6, 0.01, 0.05, 0.95] // A custom cubic bezier for a more dynamic feel - corrected value
      } 
    },
  };

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      style={{ perspective: '1000px' }} // Add perspective for 3D rotation
      {...props}
    >
      {children}
    </motion.section>
  );
}
