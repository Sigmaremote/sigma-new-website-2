'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeroTitle, Subhead, Body } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { routes } from '@/lib/routes';
import AnnouncementBar from '@/components/AnnouncementBar';
import { pressReleases } from '@/data/pressReleases';
import { formatPressDate } from '@/lib/formatDate';

export default function HeroCopy() {
  const latest = pressReleases[0]; // assume array is already newest-first
  const formattedDate = latest ? formatPressDate(latest.publishedAt) : '';

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  return (
    <section aria-labelledby="hero-heading" className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8 md:pt-16">
        {/* Dynamic announcement bar - hidden on mobile */}
        <div className="hidden md:block">
          <AnnouncementBar darkSurface={false} showViewAll />
        </div>

        {/* Mobile news pill - Clean & Simple */}
        {latest && (
          <div className="md:hidden mb-6 flex flex-col items-center">
            <Link
              href="/press/stablecoin-payroll-415b-crypto-market"
              className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 w-full max-w-sm"
            >
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
                <span className="text-red-600 font-medium text-xs">NEWS</span>
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-gray-900 font-medium text-sm leading-tight truncate">
                  {latest.title}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  {formattedDate} • {latest.region}
                </p>
              </div>
              
              <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        )}

        <div className="mx-auto max-w-4xl py-8 pb-2 text-center sm:py-10 sm:pb-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <HeroTitle id="hero-heading" className="text-black leading-[1.1] tracking-tight text-[32px] md:text-6xl">
              Sigma helps you hire, pay
              <br className="hidden sm:block" /> and retain anyone
            </HeroTitle>
          </motion.div>

          <motion.div
            className="mx-auto mt-5 max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Subhead className="leading-relaxed max-w-prose mt-3 text-[15px] leading-6 text-foreground/80 md:text-lg md:leading-7">
                Easily hire and pay your global workforce. We handle W-8BEN forms, local
                payments, and provide USD Wallets &amp; health benefits for your staff.
                <br /><br />
                Make onboarding, payments, retention, and compliance painless with Sigma.
              </Subhead>
            </motion.div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Button 
                variant="primary" 
                size="lg" 
                href="https://cal.com/globalpayroll/demo-25"
              >
                Get a Free Payroll Setup <span aria-hidden="true" className="ml-2">→</span>
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Button 
                variant="ghost" 
                size="lg" 
                href="https://onboarding.sigmaremote.com/?_gl=1*8gdxz9*_ga*MzI0NjE3NjQ2LjE3NjA4NzA0MDc.*_ga_YJ5CRJLVDM*czE3NjEzOTIxMjgkbzYkZzAkdDE3NjEzOTIxMjgkajYwJGwwJGgw*_ga_R8C5N354BT*czE3NjEzOTIxMjgkbzYkZzAkdDE3NjEzOTIxMjgkajYwJGwwJGgw"
              >
                Create Account
              </Button>
            </motion.div>
          </motion.div>

          {/* Product Hunt badges */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Image
              src="/landing-page-images/ProductHuntBadge.svg"
              alt="Product Hunt Badge"
              width={180}
              height={60}
              className="h-12 w-auto"
              quality={95}
              sizes="(max-width: 640px) 90px, 180px"
            />
            <Image
              src="/landing-page-images/producthuntbadge2.svg"
              alt="Product Hunt Badge 2"
              width={180}
              height={60}
              className="h-12 w-auto"
              quality={95}
              sizes="(max-width: 640px) 90px, 180px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
