import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define the pages collection to suppress the auto-generation deprecation warning
const pages = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pages' }),
  schema: z.object({
    hero: z.object({
      eyebrow: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      ctaPrimary: z.object({
        label: z.string(),
        url: z.string(),
      }).optional(),
      ctaSecondary: z.object({
        label: z.string(),
        url: z.string(),
      }).optional(),
    }).optional(),
    socialProof: z.object({
      label: z.string().optional(),
      stats: z.array(z.object({
        value: z.string(),
        label: z.string(),
      })).optional(),
    }).optional(),
    ctaSection: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      ctaLabel: z.string().optional(),
      ctaUrl: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { pages };
