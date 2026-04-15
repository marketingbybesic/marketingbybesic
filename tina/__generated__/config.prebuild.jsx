// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "src/content/pages",
        format: "json",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return "/";
            }
            return `/${document._sys.filename}`;
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            isTitle: true,
            required: true
          },
          // ── Hero Section ──────────────────────────────────────────────
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow Text" },
              { type: "string", name: "heroTitle", label: "Hero Title" },
              { type: "string", name: "description", label: "Hero Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "ctaPrimary",
                label: "Primary CTA",
                fields: [
                  { type: "string", name: "label", label: "Button Label" },
                  { type: "string", name: "url", label: "Button URL" }
                ]
              },
              {
                type: "object",
                name: "ctaSecondary",
                label: "Secondary CTA",
                fields: [
                  { type: "string", name: "label", label: "Button Label" },
                  { type: "string", name: "url", label: "Button URL" }
                ]
              }
            ]
          },
          // ── Social Proof / Trust Bar ──────────────────────────────────
          {
            type: "object",
            name: "socialProof",
            label: "Social Proof / Trust Bar",
            fields: [
              { type: "string", name: "label", label: "Trust Bar Label" },
              {
                type: "object",
                name: "stats",
                label: "Statistics",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.value }),
                  defaultItem: { value: "\u20AC1M+", label: "Revenue Generated" }
                },
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          // ── Problem Section ───────────────────────────────────────────
          {
            type: "object",
            name: "problem",
            label: "Problem Section",
            fields: [
              { type: "string", name: "heading", label: "Section Heading" },
              { type: "string", name: "subheading", label: "Section Subheading", ui: { component: "textarea" } },
              {
                type: "object",
                name: "cards",
                label: "Problem Cards",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.title }),
                  defaultItem: { number: "04", title: "New Problem", description: "Description here." }
                },
                fields: [
                  { type: "string", name: "number", label: "Number (e.g. 01)" },
                  { type: "string", name: "title", label: "Card Title" },
                  { type: "string", name: "description", label: "Card Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ── NLP Section ───────────────────────────────────────────────
          {
            type: "object",
            name: "nlp",
            label: "NLP Advantage Section",
            fields: [
              { type: "string", name: "heading", label: "Section Heading" },
              { type: "string", name: "body1", label: "Body Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "body2", label: "Body Paragraph 2", ui: { component: "textarea" } }
            ]
          },
          // ── Pillars Section ───────────────────────────────────────────
          {
            type: "object",
            name: "pillars",
            label: "Pillars Section",
            fields: [
              { type: "string", name: "heading", label: "Section Heading" },
              { type: "string", name: "subheading", label: "Section Subheading", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Pillars",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.title }),
                  defaultItem: { numeral: "IV", title: "New Pillar", description: "Description here." }
                },
                fields: [
                  { type: "string", name: "numeral", label: "Roman Numeral (e.g. I, II, III)" },
                  { type: "string", name: "title", label: "Pillar Title" },
                  { type: "string", name: "description", label: "Pillar Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ── Compounding Effect Section ────────────────────────────────
          {
            type: "object",
            name: "compounding",
            label: "Compounding Effect Section",
            fields: [
              { type: "string", name: "heading", label: "Section Heading" },
              { type: "string", name: "subheading", label: "Section Subheading", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.label }),
                  defaultItem: { number: "4", label: "New Step" }
                },
                fields: [
                  { type: "string", name: "number", label: "Step Number" },
                  { type: "string", name: "label", label: "Step Label" }
                ]
              }
            ]
          },
          // ── CTA Section ───────────────────────────────────────────────
          {
            type: "object",
            name: "ctaSection",
            label: "CTA Section",
            fields: [
              { type: "string", name: "title", label: "Section Title" },
              { type: "string", name: "description", label: "Section Description", ui: { component: "textarea" } },
              { type: "string", name: "ctaLabel", label: "CTA Button Label" },
              { type: "string", name: "ctaUrl", label: "CTA Button URL" }
            ]
          }
        ]
      },
      {
        // Unified Blog + Case Studies collection
        name: "post",
        label: "Blog & Case Studies",
        path: "src/content/blog",
        format: "mdx",
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Publish Date",
            required: true
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
              "NLP & Psychology",
              "Tracking & Data",
              "Creative Strategy",
              "Industry Trends",
              "Case Study"
            ],
            required: true
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description (SEO)",
            required: true,
            ui: { component: "textarea" }
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image"
          },
          {
            type: "string",
            name: "clinicType",
            label: "Clinic / Business Type (Case Studies only)",
            description: "e.g., Regenerative MedSpa in Munich"
          },
          {
            type: "string",
            name: "netNewRevenue",
            label: "Net-New Revenue Result (Case Studies only)",
            description: "Highlight metric, e.g., \u20AC45,000 in 45 days"
          },
          {
            type: "string",
            name: "videoEmbedUrl",
            label: "Video Testimonial Embed URL (Case Studies only)",
            description: "Senja / Vouch / YouTube embed URL"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body (MDX)",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
