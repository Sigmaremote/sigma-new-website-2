"use client";
import Image from "next/image";
import Link from "next/link";
import { TrustBadge } from "../../../components/TrustBadge";
import { COMPARE_DATA } from "../_data/compare-data";

// Individual stat card components
function RemainingBudgetCard() {
  return (
    <div className="pointer-events-auto relative w-48 h-36 lg:w-72 lg:h-48">
      <Image
        src="/Comparation Page images/Sigma Vs Deel/hero2.avif"
        alt="Financial budget overview"
        fill
        className="object-contain"
        sizes="(max-width: 1024px) 192px, 288px"
        quality={95}
        loading="lazy"
      />
    </div>
  );
}

function LastestRecordsCard() {
  return (
    <div className="pointer-events-auto relative w-56 h-36 lg:w-80 lg:h-48">
      <Image
        src="/Comparation Page images/Sigma Vs Deel/hero3.avif"
        alt="Latest financial records"
        fill
        className="object-contain"
        sizes="(max-width: 1024px) 224px, 320px"
        quality={95}
        loading="lazy"
      />
    </div>
  );
}

function IncomeCard() {
  return (
    <div className="pointer-events-auto relative w-28 h-20 lg:w-40 lg:h-28">
      <Image
        src="/Comparation Page images/Sigma Vs Deel/hero4.avif"
        alt="30 Days Income showcase"
        fill
        className="object-contain"
        sizes="(max-width: 1024px) 112px, 160px"
        quality={95}
        loading="lazy"
      />
    </div>
  );
}

// Hero visual cluster component with responsive layout
function HeroVisualCluster() {
  return (
    <div className="relative w-full max-w-[320px] mx-auto pb-16 md:pb-0 md:max-w-none lg:max-w-[500px] lg:ml-8">
      {/* Background container with woman image */}
      <div className="relative aspect-[4/3] w-[90%] mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-orange-100 to-pink-100">
        <Image
          src="/Comparation Page images/Sigma Vs Deel/hero1.avif"
          alt="SigmaRemote dashboard showing payroll insights"
          fill
          priority
          className="object-contain object-bottom scale-90 translate-y-4"
          sizes="(max-width: 1024px) 90vw, 43.2vw"
          quality={95}
        />
      </div>

      {/* Remaining Budget card - same position for mobile and desktop */}
      <div className="pointer-events-none absolute -right-8 -top-8 lg:-right-16 lg:-top-12">
        <RemainingBudgetCard />
      </div>

      {/* Lastest Records card - desktop only */}
      <div className="pointer-events-none absolute hidden lg:block -left-20 -bottom-12 lg:-left-32 lg:-bottom-14">
        <LastestRecordsCard />
      </div>

      {/* 30 Days Income card - mobile position (bottom-left with overlap) */}
      <div className="pointer-events-none absolute block lg:hidden -left-8 -bottom-8 translate-y-[-60%]">
        <IncomeCard />
      </div>

      {/* 30 Days Income card - desktop position (bottom-right) */}
      <div className="pointer-events-none absolute hidden lg:block -right-8 -bottom-8 md:-right-6 md:-bottom-6 lg:-right-4 lg:-bottom-4">
        <IncomeCard />
      </div>
    </div>
  );
}

export default function CompareHero({
  competitorKey = "deel",
}: {
  competitorKey?: keyof typeof COMPARE_DATA;
}) {
  const data = COMPARE_DATA[competitorKey];
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        {/* Breadcrumb - Hidden for now */}
        {/* <nav className="mb-6 text-sm text-slate-600" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li aria-hidden="true" className="text-slate-400">›</li>
            <li><Link href="/compare" className="hover:underline">Compare</Link></li>
            <li aria-hidden="true" className="text-slate-400">›</li>
            <li aria-current="page" className="text-slate-800 font-medium">{data.competitorName}</li>
          </ol>
        </nav> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
              {data.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-600">
              {data.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="https://cal.com/globalpayroll/demo-25"
                className="inline-flex items-center justify-center rounded-xl bg-[hsl(64,83%,65%)] px-5 py-3 text-black font-semibold shadow-sm hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)] focus:outline-none focus:ring-2 focus:ring-black/10"
                aria-label="Book a demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-slate-800 font-medium hover:bg-slate-50"
                aria-label="See pricing"
              >
                See Pricing
              </Link>
            </div>

            <div className="mt-6">
              <TrustBadge
                rating={4.8}
                totalLabel="As rated by customers"
                avatars={[
                  { src: "/Trust-badge-people-faces/person1.jpg" },
                  { src: "/Trust-badge-people-faces/person2.jpg" },
                  { src: "/Trust-badge-people-faces/person3.jpg" },
                ]}
              />
            </div>
          </div>

          {/* Right column - hero visual cluster */}
          <HeroVisualCluster />
        </div>
      </div>
    </section>
  );
}

