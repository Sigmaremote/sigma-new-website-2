export type PressRelease = {
  slug: string;              // e.g. "usd-payroll-central-america"
  title: string;             // Headline of the release
  publishedAt: string;       // ISO 8601 datetime, e.g. "2025-07-21T00:00:00Z"
  region: string;            // e.g. "GLOBAL"
  summary: string;           // 1-2 sentence summary that we show in the card and homepage pill
  badgeLabel: string;        // e.g. "Product Launch", "Compliance", etc.
};

export const pressReleases: PressRelease[] = [
  {
    slug: "stablecoin-payroll-latam-crypto-market",
    title: "SigmaRemote Rolls Out Stablecoin Payroll Across LATAM's $415B Crypto Market",
    publishedAt: "2025-07-21T00:00:00Z",
    region: "GLOBAL",
    summary: "USDC payroll now live across LATAM - enabling instant, dollar-based payouts and dramatically reducing transfer costs.",
    badgeLabel: "Product Launch",
  },
  {
    slug: "flat-fee-usd-payroll-el-salvador-panama-costa-rica",
    title: "SigmaRemote Rolls Out Flat-Fee USD Payroll Across El Salvador, Panama & Costa Rica - No FX Markups, Ever",
    publishedAt: "2025-07-14T00:00:00Z",
    region: "GLOBAL",
    summary: "Businesses save up to $2,050 annually per contractor using SigmaRemote's FX-free USD payroll corridors across LATAM.",
    badgeLabel: "Product Launch",
  },
  // Always add newest release at the TOP of this array going forward.
];
