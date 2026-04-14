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
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "LayoutAuthority", $$LayoutAuthority, { "title": "About | Marketing by Be\u0161i\u0107" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section id="our-identity" class="min-h-screen py-20 md:py-32"> <div class="container-custom"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <!-- Text Column --> <div> <h1 class="heading-xl mb-8">
Engineered by Revenue Architects.
</h1> <p class="body-lg mb-6">
Marketing by Bešić is an elite collective of growth engineers, developers, and behavioral psychologists. Founded by a former CMO, our team was built to bridge the execution gap between high-level executive strategy and actual bottom-line growth.
</p> <p class="body-md mb-6">
We don't advise from the sidelines—we embed into your business and build the infrastructure alongside you.
</p> <p class="body-md">
Our expertise spans Neurolinguistic Programming, full-stack development, and performance marketing, creating a unique capability to engineer systems that produce measurable, verifiable revenue growth.
</p> </div> <!-- Image Column --> <div> ${renderComponent($$result2, "ImagePlaceholder", $$ImagePlaceholder, { "imageName": "about-team-photo.jpg", "height": "500px" })} </div> </div> </div> </section>  <section id="our-philosophy" class="py-20 md:py-32 bg-bg-secondary"> <div class="container-custom max-w-4xl"> <div class="text-center mb-16"> <h2 class="heading-lg mb-6">
Data Validates. Psychology Converts.
</h2> <p class="body-lg max-w-2xl mx-auto">
We believe that numbers on a spreadsheet mean nothing if the creative doesn't move human behavior. Our philosophy merges hard-coded technical integrations with the deep, persuasive principles of Neurolinguistic Programming.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- Philosophy Point 1 --> <div class="bg-bg-primary border border-white/5 rounded-xl p-8"> <div class="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4"> <span class="text-brand text-xl font-bold">01</span> </div> <h3 class="font-heading text-lg font-bold mb-3">
Behavioral Psychology Foundation
</h3> <p class="body-md">
Every campaign, every asset, every touchpoint is engineered using NLP language patterns and decision psychology principles that influence high-value buyer behavior.
</p> </div> <!-- Philosophy Point 2 --> <div class="bg-bg-primary border border-white/5 rounded-xl p-8"> <div class="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4"> <span class="text-brand text-xl font-bold">02</span> </div> <h3 class="font-heading text-lg font-bold mb-3">
Data-Driven Execution
</h3> <p class="body-md">
We validate every hypothesis with hard data. Server-side tracking, closed-loop attribution, and real-time revenue reconciliation ensure we only scale what produces profit.
</p> </div> </div> <div class="mt-16 text-center"> <a${addAttribute(`/${lang}/contact`, "href")} class="btn-primary">
Get in Touch
</a> </div> </div> </section> ` })}`;
}, "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/pages/[lang]/about.astro", void 0);

const $$file = "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/pages/[lang]/about.astro";
const $$url = "/[lang]/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
