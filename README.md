# SigmaRemote Website

A complete production-ready Next.js 14 application for SigmaRemote's global payroll platform, featuring homepage, blog, press releases, competitor comparisons, country guides, resources, and comprehensive content management - built with TypeScript and Tailwind CSS.

## ⚠️ Important: Protected Components

**Do not modify files under `components/shared/*`. These are source of truth for Navbar/Footer.**

The shared components (`components/shared/Navbar.tsx` and `components/shared/Footer.tsx`) are designed to mimic the sigmaremote.com website and should not be modified without explicit permission. Always start your prompts with this reminder to prevent accidental modifications.

## Features

### Core Website Pages
- **Homepage**: Complete landing page with hero sections, business features, testimonials, and CTAs
- **Pricing**: Transparent pricing page with competitor comparisons and feature matrices
- **About**: Company information and mission
- **Contact**: Contact form and information

### Content & Resources
- **Blog**: Global hiring and compliance articles with full article pages
- **Press Releases**: Company announcements and product launches
- **Glossary**: Comprehensive definitions of global payroll and remote work terms
- **Resources Hub**: Centralized access to all content types

### Competitor Comparisons
- **Deel vs SigmaRemote**: Detailed comparison with pain points and advantages
- **Remote vs SigmaRemote**: Feature-by-feature analysis
- **Rippling vs SigmaRemote**: Enterprise payroll comparison
- **Gusto vs SigmaRemote**: HR platform comparison
- **Payoneer vs SigmaRemote**: Payment platform alternatives
- **Wise vs SigmaRemote**: International money transfer comparison
- **PayPal vs SigmaRemote**: Digital payment solutions
- **Veem vs SigmaRemote**: B2B payment platform comparison
- **Ontop vs SigmaRemote**: Global payroll platform comparison
- **Hyperwallet vs SigmaRemote**: Payment distribution comparison

### Country Guides
- **Mexico**: Comprehensive hiring guide with costs, compliance, and options
- **Colombia**: Complete employment and contractor information
- **Argentina**: Detailed guide with tax implications and regulations
- **Country Comparison**: Side-by-side comparison of multiple countries

### Technical Features
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **SEO Optimized**: JSON-LD structured data, Open Graph, and Twitter Cards
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: Keyboard and screen-reader friendly components
- **Performance**: Optimized images, lazy loading, and fast page loads
- **Animations**: Smooth transitions and micro-interactions with Framer Motion

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Next.js Image component with Unsplash

## Project Structure

```
/app
  /_components              # App-specific components
    /sections              # Homepage sections (Hero, Features, etc.)
    /cards                 # Reusable card components
    /footer                # Footer components
    /header                # Header components
    /tables                # Table components
  /(blog)                  # Route group for blog
    /articles              # Blog article pages
  /(country-guides)        # Route group for country guides
    /country-guides/       # Country guide pages
  /(resources)             # Route group for resources
    /resources/            # Resource pages
  /about                   # About page
  /blog                    # Blog listing and articles
  /compare                 # Competitor comparison pages
    /deel                  # Deel comparison
    /remote                # Remote comparison
    /rippling              # Rippling comparison
    /gusto                 # Gusto comparison
    /payoneer              # Payoneer comparison
    /wise                  # Wise comparison
    /paypal                # PayPal comparison
    /veem                  # Veem comparison
    /ontop                 # Ontop comparison
    /hyperwallet           # Hyperwallet comparison
  /contact                 # Contact page
  /country-guides          # Country guide pages
  /glossary                # Glossary pages
  /press                   # Press release pages
  /pricing                 # Pricing page
  /resources               # Resources hub
  /layout.tsx              # Root layout
  /page.tsx                # Homepage
/components
  /shared                  # Protected Sigma branding components
    Navbar.tsx             # Sigma navbar (DO NOT MODIFY)
    Footer.tsx             # Sigma footer (DO NOT MODIFY)
  /blog                    # Blog-specific components
  /blog-v2                 # Updated blog components
  /ui                      # Reusable UI components
  /nav                     # Navigation components
  /flags                   # Flag components
  /sections                # Section components
/modules
  /country-guides          # Country guide module
  /network-coverage        # Network coverage module
  /press                   # Press module
/copy
  /compare                 # Competitor comparison copy
/lib                       # Utilities and helpers
  seo.ts                   # SEO utilities
  schema.ts                # Schema generation
  utils.ts                 # General utilities
/data                      # Static data files
/content                   # MDX content files
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Brand Colors

The application uses Sigma's official brand colors:

- **Lime**: `#D6FF57` - Primary accent color
- **Off-white pill**: `#F2F3F1` - Secondary background
- **Dark green text**: `#0C2E1C` - Primary text color
- **Footer bg tint**: `#EAFDB3` - Footer background

These colors are defined in `tailwind.config.ts` and used throughout the application to maintain brand consistency.

## Content Available

### Blog Articles
- **"Best Payoneer Alternatives for Global Payroll in 2025"** - Comprehensive comparison of payment solutions
- **"How to Hire International Contractors in 2025 (Without the Legal Headaches)"** - Step-by-step guide to compliant global hiring

### Press Releases
- **"SigmaRemote Rolls Out Stablecoin Payroll Across LATAM's $415B Crypto Market"** - USDC payroll launch announcement
- **"SigmaRemote Rolls Out Flat-Fee USD Payroll Across El Salvador, Panama & Costa Rica"** - FX-free payroll corridor expansion

### Glossary Terms
Comprehensive definitions for 20+ key terms including:
- Managed Payroll, Payroll Taxes, Payroll Deductions
- Permanent Establishment, Contractor Classification
- W-8BEN Form, Contractor of Record (CoR), Agent of Record (AOR)
- Remote-First Company, Crypto Payroll, 13th-Month Salary
- Stablecoins, USDC, USDT, Cross-Border Compliance
- Global Payroll, FX Fees, USD Wallet, AOR/CoR/EOR differences
- Payroll Cycle

## Country Guides

The application includes detailed guides for:

- **Mexico**: North American market with competitive costs
- **Colombia**: Growing tech sector with modern labor laws  
- **Argentina**: Highly educated workforce with complex regulations
- **Country Comparison**: Side-by-side analysis of multiple countries

Each guide includes:
- At-a-glance statistics
- Hiring options (Contractors, EOR, Own Entity)
- Employer cost breakdowns
- Compliance requirements
- FAQ sections
- UX comparison tables

## SEO Features

- JSON-LD structured data (WebPage, BreadcrumbList, Article, FAQPage)
- Open Graph and Twitter Card metadata
- Canonical URLs
- Semantic HTML structure

## Current Status

This is a complete, production-ready SigmaRemote website with:
- ✅ Full homepage with all sections and CTAs
- ✅ Comprehensive competitor comparison pages (10 competitors)
- ✅ Blog with articles and press releases
- ✅ Country guides for key markets
- ✅ Resources hub with glossary and content
- ✅ Pricing page with feature comparisons
- ✅ About and contact pages
- ✅ SEO optimization and structured data
- ✅ Responsive design and animations
- ✅ TypeScript and accessibility compliance

## Future Enhancements

The website is designed to be easily extensible for:
- Additional country guides
- More blog articles and press releases
- User authentication and dashboards
- API integrations
- Advanced search functionality
- Multi-language support