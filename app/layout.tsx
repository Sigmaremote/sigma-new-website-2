import './globals.css';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Header from './_components/header/Header';
import Footer from './_components/footer/Footer';
import GlobalTeamCTA from '../components/shared/GlobalTeamCTA';

export const metadata: Metadata = {
  title: 'SigmaRemote',
  description: 'Global payroll made simple.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={cn(
        // Enforce Satoshi globally
        'font-satoshi antialiased min-h-screen bg-white text-black overflow-x-hidden'
      )}>
        <Header />
        <main className="min-h-[60vh] overflow-x-hidden">{children}</main>
        <GlobalTeamCTA />
        <Footer />
      </body>
    </html>
  );
}
