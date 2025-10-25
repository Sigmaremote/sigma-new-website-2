import type { Metadata } from "next";
import CompareHero from "../_components/CompareHero";
import CompareSection from "../_components/CompareSection";
import PainPointsBlock from "../_components/PainPointsBlock";
import WhyWinsBlock from "../_components/WhyWinsBlock";
import CompareFAQ from "../_components/CompareFAQ";
import GlobalReach from "@/app/_components/sections/GlobalReach";
import { COMPARE_DATA } from "../_data/compare-data";
import Script from "next/script";
import FadeIn from "../_components/FadeIn";
import AnimatedSection from "../_components/AnimatedSection";
import { generateComparisonSchema } from "@/lib/generateSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "SigmaRemote vs Remote - Lower Costs, Faster Global Payroll",
  description:
    "See why scaling teams choose SigmaRemote over Remote for predictable costs, faster onboarding, and flexible USD wallet payouts.",
  metadataBase: new URL("https://sigmaremote.com"),
  alternates: { canonical: "/compare/remote" },
  openGraph: {
    title: "SigmaRemote vs Remote - Lower Costs, Faster Global Payroll",
    url: "https://sigmaremote.com/compare/remote",
    images: ["/og-compare-remote.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  const d = COMPARE_DATA["remote"];
  
  // Generate schema using the new utility
  const schema = generateComparisonSchema(
    "SigmaRemote vs Remote - Lower Costs, Faster Global Payroll",
    "/compare/remote",
    "See why scaling teams choose SigmaRemote over Remote for predictable costs, faster onboarding, and flexible USD wallet payouts.",
    { competitor: "Remote" }
  );

  return (
    <main className="w-full">
      <Script id="ld-compare-remote" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <FadeIn>
        <AnimatedSection animation="fadeUp" delay={0}>
          <CompareHero competitorKey="remote" />
        </AnimatedSection>
        
        <AnimatedSection animation="fadeUp" delay={100}>
          <CompareSection competitorKey="remote" />
        </AnimatedSection>
        
        <AnimatedSection animation="slideInLeft" delay={200}>
          <PainPointsBlock
            competitorName={d.competitorName}
            bullets={d.painPoints}
            size="wide"
          />
        </AnimatedSection>
        
        <AnimatedSection animation="slideInRight" delay={300}>
          <WhyWinsBlock bullets={d.whySigmaWins} size="wide" className="-mt-4" />
        </AnimatedSection>
        
        <AnimatedSection animation="fadeUp" delay={400}>
          <CompareFAQ />
        </AnimatedSection>
        
        <AnimatedSection animation="fadeUp" delay={500}>
          <div className="py-16 lg:py-24">
            <GlobalReach />
          </div>
        </AnimatedSection>
        {/* Next sections will be added below (CTA). */}
      </FadeIn>
    </main>
  );
}

