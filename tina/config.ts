import { defineConfig } from "tinacms";

// Automatically use the current branch (e.g., main)
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
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
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow Text" },
              { type: "string", name: "title", label: "Hero Title", isTitle: true },
              { type: "string", name: "description", label: "Hero Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "ctaPrimary",
                label: "Primary CTA",
                fields: [
                  { type: "string", name: "label", label: "Button Label" },
                  { type: "string", name: "url", label: "Button URL" },
                ],
              },
              {
                type: "object",
                name: "ctaSecondary",
                label: "Secondary CTA",
                fields: [
                  { type: "string", name: "label", label: "Button Label" },
                  { type: "string", name: "url", label: "Button URL" },
                ],
              },
            ],
          },
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
                  defaultItem: { value: "€1M+", label: "Revenue Generated" },
                },
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "ctaSection",
            label: "CTA Section",
            fields: [
              { type: "string", name: "title", label: "Section Title" },
              { type: "string", name: "description", label: "Section Description", ui: { component: "textarea" } },
              { type: "string", name: "ctaLabel", label: "CTA Button Label" },
              { type: "string", name: "ctaUrl", label: "CTA Button URL" },
            ],
          },
        ],
      },
      {
        // Unified Blog + Case Studies collection
        name: "post",
        label: "Blog & Case Studies",
        path: "src/content/blog",
        format: "mdx",
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Publish Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            // Category now includes Case Study as an option
            type: "string",
            name: "category",
            label: "Category",
            options: [
              "NLP & Psychology",
              "Tracking & Data",
              "Creative Strategy",
              "Industry Trends",
              "Case Study",
            ],
            required: true,
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description (SEO)",
            required: true,
            ui: { component: "textarea" },
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
          },
          // Case Study specific fields (optional — only used when category = "Case Study")
          {
            type: "string",
            name: "clinicType",
            label: "Clinic / Business Type (Case Studies only)",
            description: "e.g., Regenerative MedSpa in Munich",
          },
          {
            type: "string",
            name: "netNewRevenue",
            label: "Net-New Revenue Result (Case Studies only)",
            description: "Highlight metric, e.g., €45,000 in 45 days",
          },
          {
            type: "string",
            name: "videoEmbedUrl",
            label: "Video Testimonial Embed URL (Case Studies only)",
            description: "Senja / Vouch / YouTube embed URL",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body (MDX)",
            isBody: true,
          },
        ],
      },
    ],
  },
});
