'use client';

import HeroSection from '@/components/sections/HeroSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
