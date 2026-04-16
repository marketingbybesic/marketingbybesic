import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Pages collection (JSON — used by TinaCMS for home page fields)
const pages = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pages' }),
  schema: z.object({
    title: z.string().optional(),
    hero: z.object({
      eyebrow: z.string().optional(),
      heroTitle: z.string().optional(),
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
    problem: z.object({
      heading: z.string().optional(),
      subheading: z.string().optional(),
      cards: z.array(z.object({
        number: z.string(),
        title: z.string(),
        description: z.string(),
      })).optional(),
    }).optional(),
    nlp: z.object({
      heading: z.string().optional(),
      body1: z.string().optional(),
      body2: z.string().optional(),
    }).optional(),
    pillars: z.object({
      heading: z.string().optional(),
      subheading: z.string().optional(),
      items: z.array(z.object({
        numeral: z.string(),
        title: z.string(),
        description: z.string(),
      })).optional(),
    }).optional(),
    compounding: z.object({
      heading: z.string().optional(),
      subheading: z.string().optional(),
      steps: z.array(z.object({
        number: z.string(),
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

// Articles collection (MD — shared between Blog and Proof)
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    publishDate: z.string().or(z.date()).transform((val) => new Date(val)),
    author: z.string().default('Dino Bešić'),
    category: z.enum(['blog', 'proof']), // Determines if it goes to /blog or /proof
    tag: z.string(), // The text displayed inside the UI category bubble
    metaDescription: z.string(),
    image: z.string(),
  }),
});

export const collections = { pages, articles };
