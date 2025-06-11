
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Container from '@/components/Container';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/content';

const navItems = [
  { name: 'Experience', href: '/#work' }, // Changed from Work to Experience
  { name: 'Archive', href: '/projects' }, // Path remains /projects, but content is experiences
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const initials = PERSONAL_INFO.name.split(' ').map(n => n[0]).join('');

  // Text color logic for light theme
  // When header is transparent (top of page, light hero), text should be dark (primary or foreground)
  // When header is scrolled/mobile menu open (primary bg), text should be light (primary-foreground)
  const dynamicTextColorClass = isScrolled || isMobileMenuOpen ? 'text-primary-foreground' : 'text-primary';
  const dynamicHoverTextColorClass = isScrolled || isMobileMenuOpen ? 'hover:text-accent' : 'hover:text-accent';


  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-primary shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Container className="py-3">
        <div className="flex items-center justify-between">
          <Link href="/" passHref>
            <motion.div
              className={`text-2xl font-headline font-bold cursor-pointer ${dynamicTextColorClass}`}
              whileHover={{ scale: 1.05 }}
            >
              {initials}
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <motion.span
                  className={`font-medium cursor-pointer ${dynamicTextColorClass} ${dynamicHoverTextColorClass}`}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
             <Link href="/#contact" passHref>
                <Button 
                    className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                    size="sm"
                >
                    Let's Talk
                </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className={`${dynamicTextColorClass} ${dynamicHoverTextColorClass}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-primary absolute top-full left-0 right-0 shadow-lg pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <nav className="flex flex-col items-center space-y-4 pt-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <span
                  className="font-medium text-primary-foreground hover:text-accent cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)} 
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <Link href="/#contact" passHref>
                <Button 
                    className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 w-3/4"
                    size="sm"
                    onClick={() => setIsMobileMenuOpen(false)} 
                >
                    Let's Talk
                </Button>
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
