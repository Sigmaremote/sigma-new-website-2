# SEO + LLMO Structure Documentation

## Purpose

This system ensures that SigmaRemote's content is fully visible and understandable to both Google search engines and AI language models (LLMOs) like ChatGPT, Perplexity, and Bing Chat. By implementing structured JSON-LD schema across all pages, we make our content machine-readable and semantically rich.

## Schema Overview

Every page implements a unified JSON-LD structure containing four core schema types:

### 1. WebPage Schema
- **Purpose**: Identifies the page as a web document
- **Fields**: `name`, `url`, `inLanguage`
- **Usage**: Helps search engines understand page identity

### 2. BreadcrumbList Schema
- **Purpose**: Shows page hierarchy and navigation structure
- **Fields**: `itemListElement` with position, name, and URL
- **Usage**: Improves search result snippets and site navigation

### 3. Article Schema
- **Purpose**: Defines content as an article with metadata
- **Fields**: `headline`, `description`, `image`, `datePublished`, `dateModified`, `author`, `publisher`
- **Usage**: Enables rich snippets in search results and AI understanding

### 4. FAQPage Schema
- **Purpose**: Structures frequently asked questions
- **Fields**: `mainEntity` with questions and answers
- **Usage**: Powers Google's FAQ rich snippets and AI knowledge extraction

## Implementation Rules

### Mandatory Fields
- **Image**: Always include `https://framerusercontent.com/images/7PVdnLLWFnOOVEhlu5NLszpYRY.png`
- **Dates**: Use ISO 8601 format (`2025-10-25T00:00:00+00:00`)
- **Language**: Always set to `"en"`
- **URLs**: Use absolute URLs (`https://www.sigmaremote.com/...`)

### Content Requirements
- **FAQ Questions**: Must exist visibly on the page
- **Descriptions**: 1-2 sentence plain-text summaries
- **Titles**: Match the actual page title exactly

### Typography Rules
- **Em Dashes**: NEVER use em dashes (—) - always use regular hyphens (-)
- **Consistency**: Maintain consistent formatting across all content

## Automation Workflow

### 1. Schema Generation
The `generateSchema()` utility in `/lib/generateSchema.ts` builds schemas dynamically:

```typescript
import { generateSchema } from '@/lib/generateSchema';

const schema = generateSchema({
  type: 'compare',
  title: 'SigmaRemote vs Remote',
  path: '/compare/remote',
  description: 'Compare payroll solutions...',
  faqs: [
    { question: 'What are the main differences?', answer: '...' }
  ]
});
```

### 2. Page Implementation
Add schema to page metadata:

```typescript
export const metadata = {
  title: 'Page Title',
  other: {
    'script:ld+json': JSON.stringify(schema)
  }
};
```

### 3. Pre-commit Validation
The validation system (`/lib/validateSchema.ts`) ensures:
- All pages have valid JSON-LD schema
- No em dashes exist in content
- Schema structure is correct

### 4. Auto-regeneration Rule
**MANDATORY**: Every time text or metadata changes, schema must be regenerated:
- New text or FAQ added → schema updates automatically
- Headline or description changes → schema updates automatically
- This rule applies to ALL commits

## Deployment Notes

### Environment Compatibility
- **Vercel**: Uses standard Next.js Head and metadata API
- **Digital Ocean**: Compatible with standard Next.js deployment
- **No External CMS**: All schema generation is self-contained

### Performance Impact
- **Minimal**: JSON-LD adds ~1-2KB per page
- **Cached**: Schema is generated at build time
- **SEO Benefit**: Significant improvement in search visibility

## LLMO Visibility Explanation

### How AI Models Read Our Content
Structured JSON-LD enables AI assistants to:

1. **Understand Context**: Clear semantic structure helps AI models comprehend page purpose
2. **Extract Facts**: FAQ schemas provide direct question-answer pairs
3. **Navigate Content**: Breadcrumb schemas show site hierarchy
4. **Identify Entities**: Article schemas define content relationships

### Business Impact
- **Search Visibility**: Rich snippets improve click-through rates
- **AI Integration**: Content appears in AI-generated responses
- **Knowledge Graph**: Better integration with Google's knowledge systems
- **Voice Search**: Optimized for voice assistant queries

## File Structure

```
lib/
├── generateSchema.ts     # Schema generation utility
├── validateSchema.ts     # Validation system
docs/
└── seo-llmo-structure.md # This documentation
```

## Validation Commands

```bash
# Validate all schemas
npm run validate:schema

# Check for em dashes
npm run check:typography

# Full validation (pre-commit)
npm run validate:all
```

## Troubleshooting

### Common Issues
1. **Missing Schema**: Ensure all pages use `generateSchema()`
2. **Em Dashes**: Search for `—` and `–` characters, replace with `-`
3. **Invalid JSON**: Validate JSON-LD structure with online tools
4. **Missing FAQs**: Add visible FAQ sections to pages

### Debugging Tools
- **Google Rich Results Test**: Validate schema markup
- **Schema.org Validator**: Check JSON-LD structure
- **Lighthouse**: Audit SEO performance

## Maintenance

### Regular Tasks
- **Monthly**: Review schema performance in Google Search Console
- **Quarterly**: Update FAQ content based on user feedback
- **Annually**: Audit all schema for accuracy and completeness

### Update Process
1. Modify content or metadata
2. Regenerate schema using `generateSchema()`
3. Test with validation tools
4. Deploy changes
5. Monitor search performance

---

**Last Updated**: 2025-01-27  
**Version**: 1.0  
**Maintainer**: SigmaRemote Development Team
