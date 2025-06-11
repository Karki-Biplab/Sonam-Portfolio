
'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react'; // Removed Twitter as it's not in new PERSONAL_INFO
import Container from '@/components/Container';
import { PERSONAL_INFO } from '@/data/content';

const socialLinks = [];
if (PERSONAL_INFO.socials.github) {
  socialLinks.push({ name: 'GitHub', icon: Github, href: PERSONAL_INFO.socials.github });
}
if (PERSONAL_INFO.socials.linkedin) {
  socialLinks.push({ name: 'LinkedIn', icon: Linkedin, href: PERSONAL_INFO.socials.linkedin });
}
if (PERSONAL_INFO.contactEmail) {
 socialLinks.push({ name: 'Email', icon: Mail, href: `mailto:${PERSONAL_INFO.contactEmail}` });
}


export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" passHref>
                <span
                  aria-label={link.name}
                  className="text-primary-foreground hover:text-accent transition-colors"
                >
                  <link.icon size={20} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
