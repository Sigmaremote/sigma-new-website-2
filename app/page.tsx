import { Metadata } from 'next';
import { buildJsonLd, generateMetadata as generateSEOMetadata } from '@/lib/seo';
import HeroCopy from './_components/sections/HeroCopy';
import HeroVisual from './_components/sections/HeroVisual';
import BusinessFeatures from './_components/sections/BusinessFeatures';
import ScaleWorkforce from './_components/sections/ScaleWorkforce';
import FinancialComplianceHubs from './_components/sections/FinancialComplianceHubs';
import GlobalReach from './_components/sections/GlobalReach';
import TestimonialsCarousel from './_components/sections/TestimonialsCarousel';
import CTAShowcase from './_components/sections/CTAShowcase';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sigma - end-to-end global payroll platform',
  description: 'Hire and pay contractors and employees in 160+ countries with USD wallets, transparent FX, and compliance when you need it.',
  url: '/',
  type: 'website',
  keywords: [
    'global payroll',
    'contractor payments',
    'USD wallets',
    'international hiring',
    'W-8BEN forms',
    'compliance',
    'FX rates',
    'stablecoin payments',
    'USDC',
    'USDT',
    'global workforce',
    'remote work',
    'payroll platform',
    'SigmaRemote',
  ],
});

const faqData = [
  {
    q: 'How fast is onboarding?',
    a: 'Most teams are onboarded within 24 hours. We handle all the compliance paperwork and setup so you can start hiring immediately.',
  },
  {
    q: 'Do you support USD wallets?',
    a: 'Yes! Our USD wallets are FDIC-insured through Wells Fargo and allow you to keep your money in USD while paying globally.',
  },
  {
    q: 'Do you support stablecoins?',
    a: 'Absolutely. You can pay with USDC and USDT for instant, low-cost transfers to 160+ countries.',
  },
  {
    q: 'How do you handle compliance?',
    a: 'We provide EOR, AOR, and CoR services as needed. Our platform automatically handles tax filings, employment law compliance, and reporting.',
  },
  {
    q: 'What makes Sigma cheaper?',
    a: 'Transparent 2% platform fee with no hidden FX spreads, faster onboarding, and no monthly minimums. Most competitors charge 3-5% with hidden fees.',
  },
];

export default function HomePage() {
  const jsonLd = buildJsonLd({
    type: 'home',
    title: 'Sigma - end-to-end global payroll platform',
    description: 'Hire and pay contractors and employees in 160+ countries with USD wallets, transparent FX, and compliance when you need it.',
    url: 'https://sigmaremote.com/',
    faq: faqData,
    breadcrumbs: [
      { name: 'Home', url: 'https://sigmaremote.com/' },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white">
        <div className="py-16 lg:py-24">
          <HeroCopy />
        </div>
        <div className="py-16 lg:py-24">
          <HeroVisual />
        </div>
        <div className="py-16 lg:py-24">
          <BusinessFeatures />
        </div>
        <div className="py-16 lg:py-24">
          <ScaleWorkforce />
        </div>
        <div className="py-16 lg:py-24">
          <FinancialComplianceHubs />
        </div>
        <div className="py-16 lg:py-24">
          <GlobalReach />
        </div>
        <div className="py-16 lg:py-24">
          <TestimonialsCarousel />
        </div>
        <div className="py-16 lg:py-24">
          <CTAShowcase title="Let's build your Global Team with Sigma" />
        </div>
      </div>
    </>
  );
}
