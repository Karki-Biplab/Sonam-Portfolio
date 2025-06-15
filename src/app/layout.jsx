
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import { SpeedInsights } from "@vercel/speed-insights/next"
// import { Analytics } from "@vercel/analytics/react"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/content';


export const metadata = {
  title: `Personal Canvas | ${PERSONAL_INFO.name}`,
  description: `Portfolio of ${PERSONAL_INFO.name}, ${PERSONAL_INFO.title}.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Button
          asChild
          variant="default" 
          size="lg" 
          className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg px-4 py-2 h-auto bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Download size={20} className="mr-2" />
            Resume
          </Link>
        </Button>
        <Toaster />
        {/* <SpeedInsights />
        <Analytics /> */}
      </body>
    </html>
  );
}
