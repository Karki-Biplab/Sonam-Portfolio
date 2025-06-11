'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Container from '@/components/Container';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground py-20 pt-32 md:pt-20">
      <Container className="text-center">
        <AlertTriangle className="mx-auto h-16 w-16 text-accent mb-6" />
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary mb-4">404</h1>
        <p className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8">Page Not Found</p>
        <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
          Oops! The page you're looking for doesn't seem to exist. It might have been moved, deleted, or maybe you mistyped the URL.
        </p>
        <Link href="/" passHref>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 text-lg">
            Go Back Home
          </Button>
        </Link>
      </Container>
    </div>
  );
}
