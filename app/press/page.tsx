import { Press7 } from "@/components/ui/press7";

const pressData = {
  tagline: "Latest News",
  heading: "Press Releases",
  description:
    "Stay informed about our latest company announcements, product launches, and industry insights. Discover how Sigma is transforming global workforce management and compliance automation.",
  buttonText: "View all press releases",
  buttonUrl: "/press",
  pressReleases: [
    {
      id: "press-1",
      title: "SigmaRemote Rolls Out Stablecoin Payroll Across LATAM's $415B Crypto Market",
      summary:
        "USDC payroll now live across LATAM - enabling instant, dollar-based payouts and dramatically reducing transfer costs.",
      category: "Product Launch",
      location: "GLOBAL",
      published: "21 Jul 2025",
      url: "/press/stablecoin-payroll-415b-crypto-market",
      image: "/press-images/press2.1.png",
      dateline: "GLOBAL - July 21, 2025",
      leadParagraph: "SigmaRemote launched instant USDC stablecoin payroll across Latin America, eliminating $65+ traditional banking fees and 48-hour payment delays for businesses hiring remote contractors."
    },
    {
      id: "press-2",
      title: "SigmaRemote Rolls Out Flat-Fee USD Payroll Across El Salvador, Panama & Costa Rica - No FX Markups, Ever",
      summary:
        "Businesses save up to $2,050 annually per contractor using SigmaRemote's FX-free USD payroll corridors across LATAM.",
      category: "Product Launch",
      location: "GLOBAL",
      published: "14 Jul 2025",
      url: "/press/flat-fee-usd-payroll-latam",
      image: "/press-images/press1.1.png",
      dateline: "GLOBAL - July 14, 2025",
      leadParagraph: "SigmaRemote, a global payroll automation platform, launched USD payroll corridors in El Salvador, Panama, and Costa Rica. The service eliminates foreign exchange fees and reduces contractor onboarding from days to minutes for businesses hiring Latin American talent."
    },
  ],
};

export default function PressPage() {
  return (
    <div className="bg-white">
      <Press7 {...pressData} />
    </div>
  );
}
