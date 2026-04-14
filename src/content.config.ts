import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Pages collection (JSON — used by TinaCMS for home page fields)
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

// Blog & Case Studies collection (MDX — managed via TinaCMS)
const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    author: z.string(),
    category: z.enum([
      'NLP & Psychology',
      'Tracking & Data',
      'Creative Strategy',
      'Industry Trends',
      'Case Study',
    ]),
    metaDescription: z.string(),
    featuredImage: z.string().optional(),
    clinicType: z.string().optional(),
    netNewRevenue: z.string().optional(),
    videoEmbedUrl: z.string().optional(),
  }),
});

export const collections = { pages, blog };
