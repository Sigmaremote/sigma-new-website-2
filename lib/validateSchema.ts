/**
 * Schema Validation Utility for SigmaRemote
 * 
 * Validates that all pages have proper JSON-LD schema and no em dashes
 * Used in pre-commit hooks to ensure SEO/LLMO compliance
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export function validateAllSchemas(): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  try {
    // Find all page files
    const pageFiles = [
      ...glob.sync('app/**/page.tsx'),
      ...glob.sync('app/**/layout.tsx'),
      ...glob.sync('app/**/*.tsx', { ignore: ['**/node_modules/**'] })
    ];

    for (const file of pageFiles) {
      const result = validateFile(file);
      if (!result.isValid) {
        errors.push(...result.errors);
      }
      warnings.push(...result.warnings);
    }

    // Check for em dashes in content files
    const contentFiles = [
      ...glob.sync('content/**/*.mdx'),
      ...glob.sync('content/**/*.md'),
      ...glob.sync('copy/**/*.ts'),
      ...glob.sync('modules/**/*.ts'),
      ...glob.sync('modules/**/*.tsx')
    ];

    for (const file of contentFiles) {
      const result = validateEmDashes(file);
      if (!result.isValid) {
        errors.push(...result.errors);
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  } catch (error) {
    return {
      isValid: false,
      errors: [`Validation failed: ${error}`],
      warnings: []
    };
  }
}

function validateFile(filePath: string): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Check for JSON-LD schema
    if (content.includes('export default') || content.includes('export const')) {
      if (!content.includes('generateSchema') && !content.includes('application/ld+json')) {
        warnings.push(`${filePath}: No JSON-LD schema detected`);
      }
    }

    // Check for em dashes
    if (content.includes('—') || content.includes('–')) {
      errors.push(`${filePath}: Contains em dashes (— or –) - replace with regular hyphens (-)`);
    }

    return { isValid: errors.length === 0, errors, warnings };
  } catch (error) {
    return {
      isValid: false,
      errors: [`Failed to read ${filePath}: ${error}`],
      warnings: []
    };
  }
}

function validateEmDashes(filePath: string): ValidationResult {
  const errors: string[] = [];

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    if (content.includes('—') || content.includes('–')) {
      errors.push(`${filePath}: Contains em dashes (— or –) - replace with regular hyphens (-)`);
    }

    return { isValid: errors.length === 0, errors, warnings: [] };
  } catch (error) {
    return {
      isValid: false,
      errors: [`Failed to read ${filePath}: ${error}`],
      warnings: []
    };
  }
}

// CLI usage
if (require.main === module) {
  const result = validateAllSchemas();
  
  if (result.errors.length > 0) {
    console.error('❌ Validation failed:');
    result.errors.forEach(error => console.error(`  - ${error}`));
    process.exit(1);
  }
  
  if (result.warnings.length > 0) {
    console.warn('⚠️  Warnings:');
    result.warnings.forEach(warning => console.warn(`  - ${warning}`));
  }
  
  console.log('✅ All validations passed');
}
