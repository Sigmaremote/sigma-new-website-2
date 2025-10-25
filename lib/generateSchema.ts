/**
 * SEO + LLMO Schema Generator for SigmaRemote
 * 
 * This utility generates structured JSON-LD schema for all pages to ensure
 * Google and AI assistants understand page content, structure, and answers.
 * 
 * Schema Structure: [WebPage, BreadcrumbList, Article, FAQPage]
 * 
 * This is an enhanced version of the existing buildJsonLd function that ensures
 * consistent schema structure across all pages and enforces the mandatory
 * update rule for content changes.
 */

export interface SchemaConfig {
  type: 'page' | 'article' | 'press' | 'compare' | 'country-guide' | 'blog' | 'glossary';
  title: string;
  path: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    name: string;
    url: string;
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

export function generateSchema(config: SchemaConfig) {
  const baseUrl = 'https://www.sigmaremote.com';
  const currentUrl = `${baseUrl}${config.path}`;
  const currentDate = new Date().toISOString();
  
  // Default values - following the existing SEO system standards
  const image = config.image || 'https://framerusercontent.com/images/7PVdnLLWFnOOVEhlu5NLszpYRY.png';
  const datePublished = config.datePublished || currentDate;
  const dateModified = config.dateModified || currentDate;
  const author = config.author || {
    name: 'Sigma Team',
    url: `${baseUrl}/about`
  };

  // Generate breadcrumbs if not provided
  const breadcrumbs = config.breadcrumbs || generateDefaultBreadcrumbs(config.path);

  const schema = [
    // 1. WebPage - Enhanced with organization info
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": currentUrl,
      "url": currentUrl,
      "name": config.title,
      "description": config.description,
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "name": "SigmaRemote",
        "url": baseUrl,
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${baseUrl}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      "datePublished": datePublished,
      "dateModified": dateModified,
      "inLanguage": "en"
    },

    // 2. BreadcrumbList
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    },

    // 3. Article - Enhanced with proper organization structure
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": config.title,
      "description": config.description,
      "image": {
        "@type": "ImageObject",
        "url": image
      },
      "datePublished": datePublished,
      "dateModified": dateModified,
      "author": {
        "@type": "Organization",
        "name": author.name,
        "url": author.url
      },
      "publisher": {
        "@type": "Organization",
        "name": "SigmaRemote",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo/sigma-logo-1.avif`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": currentUrl
      },
      "inLanguage": "en"
    }
  ];

  // 4. FAQPage (only if FAQs are provided)
  if (config.faqs && config.faqs.length > 0) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": config.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  return schema;
}

function generateDefaultBreadcrumbs(path: string): Array<{name: string, url: string}> {
  const baseUrl = 'https://www.sigmaremote.com';
  const segments = path.split('/').filter(Boolean);
  
  const breadcrumbs = [
    { name: 'Home', url: baseUrl }
  ];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbs.push({
      name: name,
      url: `${baseUrl}${currentPath}`
    });
  });

  return breadcrumbs;
}

/**
 * Helper function to extract FAQs from page content
 * This can be used to automatically generate FAQ schema from visible FAQ content
 */
export function extractFAQsFromContent(content: string): Array<{question: string, answer: string}> {
  // This is a placeholder - in a real implementation, you'd parse the content
  // to find FAQ sections and extract questions/answers
  // For now, return empty array - implement based on your content structure
  return [];
}

/**
 * Helper function to generate schema for comparison pages
 */
export function generateComparisonSchema(
  title: string,
  path: string,
  description: string,
  comparisonData: any
) {
  return generateSchema({
    type: 'compare',
    title,
    path,
    description,
    faqs: [
      {
        question: `What are the main differences between ${comparisonData?.competitor || 'competitors'} and SigmaRemote?`,
        answer: `SigmaRemote offers flat pricing, faster USD payouts, and mobile-first onboarding compared to traditional payroll providers.`
      },
      {
        question: 'How much can I save with SigmaRemote?',
        answer: 'SigmaRemote eliminates FX markups and reduces costs by up to 99% compared to traditional banking fees.'
      }
    ]
  });
}

/**
 * Helper function to generate schema for country guide pages
 */
export function generateCountryGuideSchema(
  countryName: string,
  path: string,
  description: string,
  countryData: any
) {
  return generateSchema({
    type: 'country-guide',
    title: `Hire in ${countryName} - Employment Guide & Payroll`,
    path,
    description,
    faqs: [
      {
        question: `What are the employment requirements in ${countryName}?`,
        answer: `Employment in ${countryName} requires compliance with local labor laws, including mandatory benefits and tax obligations.`
      },
      {
        question: `How long does it take to onboard employees in ${countryName}?`,
        answer: `Onboarding typically takes ${countryData?.onboardingTime || '3-5 days'} in ${countryName}.`
      }
    ]
  });
}
