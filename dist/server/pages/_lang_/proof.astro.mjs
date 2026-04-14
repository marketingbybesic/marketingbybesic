import { e as createComponent, l as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_CIWKdfaW.mjs';
import 'piccolore';
import { $ as $$LayoutAuthority } from '../../chunks/LayoutAuthority_BLfXERCe.mjs';
import { $ as $$ImagePlaceholder } from '../../chunks/ImagePlaceholder_DIF1DoN6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  return [
    { params: { lang: "en" } },
    { params: { lang: "de" } },
    { params: { lang: "fr" } },
    { params: { lang: "es" } },
    { params: { lang: "it" } },
    { params: { lang: "hr" } }
  ];
}
const $$Proof = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proof;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "LayoutAuthority", $$LayoutAuthority, { "title": "Proof | Verifiable Track Record | Marketing by Be\u0161i\u0107" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section id="company-pedigree" class="min-h-screen py-20 md:py-32"> <div class="container-custom max-w-4xl"> <div class="text-center mb-16"> <h1 class="heading-xl mb-6">
Verifiable Growth. Zero Guesswork.
</h1> <p class="body-lg max-w-2xl mx-auto">
Our infrastructure is trusted by industry leaders, premium brands, and high-ticket service providers.
</p> </div> <div class="prose prose-lg prose-invert max-w-none"> <p class="body-lg mb-8">
Led by executive-level experience driving multi-million euro campaigns, our team replaces guesswork with hard data. We operate on performance, which means our architecture must produce real bottom-line results.
</p> <p class="body-md mb-8">
From luxury medical aesthetics to premium service providers, our portfolio spans industries united by one common denominator: a demand for measurable, scalable growth.
</p> <p class="body-md mb-8">
Every case study below represents a real business, real revenue, and real transformation achieved through the NRA framework.
</p> </div> </div> </section>  <section id="portfolio-grid" class="py-20 md:py-32 bg-bg-secondary"> <div class="container-custom max-w-5xl"> <div class="text-center mb-16"> <h2 class="heading-lg mb-6">
Case Studies
</h2> <p class="body-lg max-w-2xl mx-auto">
Real results from real partnerships. Every metric below represents verified net-new revenue.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- Case Study Placeholder 1 --> <div class="bg-bg-primary border border-white/5 rounded-xl overflow-hidden hover:border-brand/30 transition-colors"> ${renderComponent($$result2, "ImagePlaceholder", $$ImagePlaceholder, { "imageName": "case-study-1.jpg", "height": "200px" })} <div class="p-6"> <div class="text-brand text-3xl font-heading font-bold mb-2">
€XXXK
</div> <h3 class="font-heading text-lg font-semibold mb-2">
Net-New Revenue in XX Days
</h3> <p class="body-md">
Placeholder description.
</p> </div> </div> <!-- Case Study Placeholder 2 --> <div class="bg-bg-primary border border-white/5 rounded-xl overflow-hidden hover:border-brand/30 transition-colors"> ${renderComponent($$result2, "ImagePlaceholder", $$ImagePlaceholder, { "imageName": "case-study-2.jpg", "height": "200px" })} <div class="p-6"> <div class="text-brand text-3xl font-heading font-bold mb-2">
€XXXK
</div> <h3 class="font-heading text-lg font-semibold mb-2">
Net-New Revenue in XX Days
</h3> <p class="body-md">
Placeholder description.
</p> </div> </div> <!-- Case Study Placeholder 3 --> <div class="bg-bg-primary border border-white/5 rounded-xl overflow-hidden hover:border-brand/30 transition-colors"> ${renderComponent($$result2, "ImagePlaceholder", $$ImagePlaceholder, { "imageName": "case-study-3.jpg", "height": "200px" })} <div class="p-6"> <div class="text-brand text-3xl font-heading font-bold mb-2">
€XXXK
</div> <h3 class="font-heading text-lg font-semibold mb-2">
Net-New Revenue in XX Days
</h3> <p class="body-md">
Placeholder description.
</p> </div> </div> <!-- Case Study Placeholder 4 --> <div class="bg-bg-primary border border-white/5 rounded-xl overflow-hidden hover:border-brand/30 transition-colors"> ${renderComponent($$result2, "ImagePlaceholder", $$ImagePlaceholder, { "imageName": "case-study-4.jpg", "height": "200px" })} <div class="p-6"> <div class="text-brand text-3xl font-heading font-bold mb-2">
€XXXK
</div> <h3 class="font-heading text-lg font-semibold mb-2">
Net-New Revenue in XX Days
</h3> <p class="body-md">
Placeholder description.
</p> </div> </div> </div> <div class="mt-16 text-center"> <a${addAttribute(`/${lang}/contact`, "href")} class="btn-primary">
Get in Touch
</a> </div> </div> </section> ` })}`;
}, "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/pages/[lang]/proof.astro", void 0);

const $$file = "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/pages/[lang]/proof.astro";
const $$url = "/[lang]/proof";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proof,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
